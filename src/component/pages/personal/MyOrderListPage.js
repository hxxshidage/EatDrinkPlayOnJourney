/**
 * @Description: 我的订单列表页
 * @author HQ
 * @date 2019/7/2 13:47
 */
import React from 'react';
import StatusWrapper from '../../widget/common/wrapper/StatusWrapper';
import OrderShopNameCell from "../../cell/OrderShopNameCell";
import HeaderBar from "../../widget/common/HeaderBar";
import {NavLeader} from "../../../tools/tools";
import ConfirmGoodsIItemCell from "../../cell/ConfirmGoodsIItemCell";
import RefreshList from "../../widget/list/RefreshList";
import OrderGoodsDesCell from "../../cell/OrderGoodsDesCell";
import OrderStateCell from "../../cell/OrderStateCell";

const createData = () => {
    return [
        {type: 'shop-name', content: {}},
        {type: 'goods-item', content: {}},
        {type: 'goods-item', content: {}},
        {type: 'goods-des', content: {}},
        {type: 'order-state', content: {}},
        {type: 'shop-name', content: {}},
        {type: 'goods-item', content: {}},
        {type: 'order-state', content: {}},
    ];
};

export default class MyOrderListPage extends React.PureComponent {
    render(): React.ReactNode {

        return (
            <StatusWrapper>

                <HeaderBar
                    onGoBack={() => {
                        NavLeader.goBack(this);
                    }}
                    title={'我的订单'}
                />

                <RefreshList
                    style={{backgroundColor: "#eee"}}
                    contentContainerStyle={{paddingBottom: 10}}
                    enablePullRefresh={false}
                    enableLoadMore={false}
                    data={createData()}
                    renderItem={this._buildRenderItem}/>

            </StatusWrapper>
        );
    }

    _buildRenderItem = item => {
        const bean = item.item;
        switch (bean.type) {
            case 'shop-name':
                return <OrderShopNameCell/>;
            case 'goods-item':
                return <ConfirmGoodsIItemCell/>;
            case 'goods-des':
                return <OrderGoodsDesCell/>;
            case 'order-state':
                return <OrderStateCell/>;

        }
    };

//     <OrderShopNameCell/>
//                 <ConfirmGoodsIItemCell/>
//                 <ConfirmGoodsIItemCell/>
//                 <OrderGoodsDesCell/>
//                 <OrderStateCell/>
}