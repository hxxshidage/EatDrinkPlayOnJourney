/**
 * @Description: 确认订单页
 * @author HQ
 * @date 2019/6/18 13:32
 */
import React from 'react';

import {
    View,
    StyleSheet, StatusBar
} from 'react-native';
import HeaderBar from "../../widget/common/HeaderBar";
import RefreshList from "../../widget/list/RefreshList";
import {NavLeader} from "../../../tools/tools";
import ConfirmReceiverInfoCell from "../../cell/ConfirmReceiverInfoCell";
import ConfirmShopName from "../../cell/ConfirmShopName";
import ConfirmGoodsIItemCell from "../../cell/ConfirmGoodsIItemCell";
import ConfirmShopBillInfoCell from "../../cell/ConfirmShopBillInfoCell";
import ConfirmCashier from "../../widget/ConfirmCashier";
import PayWayDialog from "../../dialog/PayWayDialog";
import RoutePlanStructureDialog from "../route_plan/RoutePlanningDetailPage";

const createData = () => {
    return [
        {type: 'shop-name', content: {}},
        {type: 'goods-item', content: {}},
        {type: 'goods-item', content: {}},
        {type: 'bill-info', content: {}},
        {type: 'shop-name', content: {}},
        {type: 'goods-item', content: {}},
        {type: 'bill-info', content: {}},
    ];
};
export default class ConfirmOrderPage extends React.Component {
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
                    onGoBack={() => {
                        NavLeader.goBack(this);
                    }}
                    title={'确认订单'}
                />


                <RefreshList
                    style={{backgroundColor: "#eee"}}
                    contentContainerStyle={{paddingBottom: 10}}
                    enableLoadMore={false}
                    enablePullRefresh={false}
                    data={createData()}
                    renderItem={this._buildRenderItem}
                    ListHeaderComponent={() => <ConfirmReceiverInfoCell
                        clickCallback={() => {
                            NavLeader.nav(this, 'AddressManager');
                        }}
                    />}/>


                <ConfirmCashier
                    clickCallback={this._onSubmitOrder}
                />


                <PayWayDialog
                    ref={'payDialog'}
                />

            </View>);
    }


    _buildRenderItem = item => {
        const bean = item.item;
        switch (bean.type) {
            case 'shop-name':
                return <ConfirmShopName/>;
            case 'goods-item':
                return <ConfirmGoodsIItemCell/>;
            case 'bill-info':
                return <ConfirmShopBillInfoCell/>

        }
    };

    _onSubmitOrder = () => {
        this.refs.payDialog.dialog.show();
    };

}