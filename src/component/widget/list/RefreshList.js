import React from 'react';

import {
    FlatList,
    View,
    Text,
    RefreshControl
} from 'react-native';

import Footer from './Footer';

import LoadState from './LoadState';
import PropTypes from 'prop-types';
import {screenH} from '../../../tools/tools';

export default class RefreshList extends React.Component {
    //是否下拉
    isPullDown = false;
    //是否跳过_couldLoad拦截
    failedInterrupt = true;

    state = {
        isRefreshing: false,
        isLoading: false,
        loadState: LoadState.Idle,
    };

    static propTypes = {
        data: PropTypes.array.isRequired,
        renderItem: PropTypes.func.isRequired,
        onHeadRefresh: PropTypes.func,
        onFootLoad: PropTypes.func,
        keyExtractor: PropTypes.func,
        ListEmptyComponent: PropTypes.func,
        enablePullRefresh: PropTypes.bool,
        enableLoadMore: PropTypes.bool,
    };


    render(): React.ReactNode {
        return (
            <FlatList
                ref={ref => this.coreList = ref}
                {...this.props}
                refreshControl={
                    <RefreshControl
                        onRefresh={() => {
                            if (this.props.enablePullRefresh === false) return;

                            this._startRefresh();
                        }}
                        refreshing={this.state.isRefreshing}
                        colors={['orange', 'skyblue']}
                        enabled={this.props.enablePullRefresh !== false && !this.state.isLoading}/*上拉和下拉互斥*/
                    />
                }
                keyExtractor={this._keyExtractor}
                ListEmptyComponent={this.props.ListEmptyComponent || null}
                onEndReached={(dis) => {
                    if (this.props.enableLoadMore === false) return;
                    // console.warn("dis: " + dis.distanceFromEnd);

                    //防止不足一屏时 触发加载中
                    if (dis.distanceFromEnd < 0) return;
                    this._startLoad();
                }}
                onEndReachedThreshold={0.1}/*到达底部的系数 越小越优*/
                ListFooterComponent={this.props.enableLoadMore === false ? null : this._buildFooter}
            />);
    }

    resetWhenDone = (loadState = LoadState.Idle) => {
        console.warn("resetWhenDone ==> " + loadState);
        this.setState({
            isRefreshing: false,
            isLoading: false,
            loadState: loadState,
            failedInterrupt: true
        });
    };

    //这样做  数据不会刷新   wtf  自己挖坑
    //防止this.setState({failedInterrupt: false}) 带来不必要的render
    /*shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
        return this.state.isRefreshing !== nextState.isRefreshing ||
            this.state.isLoading !== nextState.isLoading ||
            this.state.loadState !== nextState.loadState;
    }*/

    componentWillUnmount(): void {
        this.timerId && clearTimeout(this.timerId);
        this.timerId = undefined;
    }

    footerLoadState = () => this.state.loadState;

    _buildFooter = () => (
        <Footer
            loadState={this.state.loadState}
            onRetry={() => {
                this.isPullDown = true;

                //跳过_couldLoad的拦截
                this.failedInterrupt = false;
                this._startLoad();
                this.failedInterrupt = true;
            }}
        />);

    _startRefresh = () => {
        if (this._couldRefresh()) {
            this.isPullDown = true;
            this.setState({isRefreshing: true}, () => {
                this.props.onHeadRefresh && this.props.onHeadRefresh();
            });
        }
    };

    _startLoad = () => {
        console.warn("onEndReached:  _startLoad was called");

        if (this._couldLoad()) {
            this.isPullDown = false;
            this.setState({isLoading: true, loadState: LoadState.Loading}, () => {
                //延迟300ms 后加载
                this.timerId = setTimeout(() => {
                    console.warn("开始上拉加载");

                    this.props.onFootLoad && this.props.onFootLoad();
                }, 300);
            });
        } else {
            console.warn("无法上拉加载");
        }
    };

    _couldRefresh = () => !this.state.isRefreshing &&
        !this.state.isLoading &&
        this.state.loadState !== LoadState.Loading;

    _couldLoad = () => this._couldRefresh() &&
        this.state.loadState !== LoadState.LoadOver &&
        //加载失败时点击回调 要跳过判断
        // (!this.state.failedInterrupt || this.state.loadState !== LoadState.Failed) &&
        (!this.failedInterrupt || this.state.loadState !== LoadState.Failed) &&

        this.props.data.length > 0;

    _keyExtractor = (item, idx) => (item.id && item.id.toString()) || idx.toString();

    _buildDefaultEmptyContent = () => (
        <View style={{
            height: screenH,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{
                color: 'orange',
                fontSize: 14
            }}>no data display,and is orange text beautiful?</Text>
        </View>
    );


}
