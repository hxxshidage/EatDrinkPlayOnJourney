import React from 'react';

import {
    View,
    StyleSheet, StatusBar
} from 'react-native';

import HeaderBar from '../../widget/common/HeaderBar';
import RefreshList from "../../widget/list/RefreshList";
import RoutePlanListCell from "../../cell/RoutePlanListCell";
import {NavLeader} from "../../../tools/tools";

export default class RoutePlanningListPage extends React.Component {
    render(): React.ReactNode {
        return (
            <View
                style={{flex: 1}}>
                <StatusBar
                    backgroundColor="transparent"
                    translucent={true}
                    hidden={false}
                    animated={false}
                    barStyle={'dark-content'}
                />
                <HeaderBar
                    title='路线规划'
                    onGoBack={this._goMain}
                />

                <RefreshList
                    enableLoadMore={false}
                    enablePullRefresh={false}
                    data={[
                        {img: require('../../../assets/images/delete/route_one.png')},
                        {img: require('../../../assets/images/delete/route_two.png')},
                        {img: require('../../../assets/images/delete/route_three.png')},
                        {img: require('../../../assets/images/delete/route_one.png')},
                        {img: require('../../../assets/images/delete/route_two.png')},
                        {img: require('../../../assets/images/delete/route_three.png')}]}
                    renderItem={item => {
                        return <RoutePlanListCell
                            itemIndex={item.index}
                            itemClick={(idx, bean) => {
                                this._goRoutePlanDetail(bean);
                            }}
                            item={item.item}
                        />
                    }}/>
            </View>);
    }

    _goMain = () => {
        const {navigation} = this.props;
        navigation && navigation.goBack(null);
    };

    _goRoutePlanDetail = bean => {
        NavLeader.nav(this, 'RoutePlanDetail', bean);
    };
}

