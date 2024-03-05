import React from 'react';
import {
    View,
    Image,
} from 'react-native';
import FoodListItemCell from '../../cell/FoodListItemCell';
import TextView from "../../widget/common/TextView";

import AvoidMultiTouch from '../../widget/common/AvoidMultiTouch';
import SearchButton from '../../widget/SearchButton';
import RefreshList from '../../widget/list/RefreshList';
import {Sizer} from "../../../tools/tools";

import FoodFilterWin from '../../dialog/FoodFilterWin';
import StatusWrapper from "../../widget/common/wrapper/StatusWrapper";
import MultiWrapper from "../../widget/common/wrapper/MultiWrapper";
import HeaderBar from "../../widget/common/HeaderBar";

export default class FoodListPage extends React.Component {

    componentDidMount(): void {
        // setTimeout(() => {
        //     this.multi.showContent();
        // }, 3000);
    }

    render(): React.ReactNode {
        return (
            <StatusWrapper>

                <HeaderBar
                    title={'Food'}
                />

                <MultiWrapper
                    onRetryAfterErrored={() => {
                        setTimeout(() => {
                            this.multi.showContent();
                        }, 3000);
                    }}
                    ref={ref => this.multi = ref}
                    renderContent={() => {
                        return (
                            <RefreshList
                                stickyHeaderIndices={[0]}
                                enableLoadMore={true}
                                enablePullRefresh={true}
                                data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
                                ListHeaderComponent={this._buildSearchHead}
                                renderItem={item =>
                                    (<FoodListItemCell
                                        item={item.item}
                                        itemIndex={item.index}
                                        itemClick={this._goFoodDetail}
                                    />)}
                            />
                        );
                    }}
                />

                {this._buildFilterWin()}

            </StatusWrapper>
        );
    }

    _goFoodDetail = (index, item) => {
        const {navigation} = this.props;
        navigation && navigation.navigate('FoodDetail');
    };

    _buildFilterWin = () => {
        return (<FoodFilterWin
            ref={'filterWin'}
        />);

    };

    _buildSearchHead = () => {
        return (
            <View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: "white",
                    paddingTop: Sizer.statusBarHeight(),
                    paddingRight: 12,
                    paddingBottom: 3
                }}>

                    <AvoidMultiTouch
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 12,

                        }}
                        clickListener={this._goMain}
                    >
                        <Image source={require('../../../assets/images/common/go_back.png')}/>
                    </AvoidMultiTouch>


                    <SearchButton
                        backgroundColor={'#eee'}
                        searchKeywords={'搜索食物'}
                        clickCallback={() => {
                            console.log('click');
                        }}
                    />

                    <AvoidMultiTouch
                        activeOpacity={0.7}
                        clickListener={() => {
                            this.refs.filterWin.show();
                            // this.setState({filterVisible: true});
                        }}>
                        <TextView
                            text={'智能排序'}
                            textSize={14}
                            textColor={'#888'}
                        />
                    </AvoidMultiTouch>

                    <Image
                        style={{marginLeft: 5}}
                        source={require('../../../assets/images/common/pull_arrow_black.png')}/>
                </View>
                <View style={{
                    height: 4,
                    backgroundColor: '#EEEEEE',
                    marginBottom: 10
                }}/>
            </View>
        );
    };


    _goMain = () => {
        const {navigation} = this.props;
        navigation && navigation.goBack(null);
    };

}