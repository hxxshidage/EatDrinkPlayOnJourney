import React from 'react';

import {
    View,
    StatusBar,
    ToastAndroid
} from 'react-native';
import HeaderBar from "../../widget/common/HeaderBar";
import {NavLeader, screenW} from "../../../tools/tools";
import CartingItemCell from "../../cell/CartingItemCell";
import RefreshList from "../../widget/list/RefreshList";
import MallItemCell from "../../cell/MallItemCell";
import CartCashier from "../../widget/CartCashier";
import HotIntroduceTitle from "../../widget/HotIntroduceTitle";
import CartShopItemCell from "../../cell/CartShopItemCell";

const cartData = () => {
    return [
        {type: 'shop-title', content: '店铺: 三只松鼠', shopId: 0, preChecked: false, hadChecked: true},
        {type: 'cart-item', content: {shopId: 0}, buyCount: 1, preChecked: false, hadChecked: true},
        {type: 'cart-item', content: {shopId: 0}, buyCount: 1, preChecked: false, hadChecked: true},
        {
            type: 'cart-item',
            content: {shopId: 0},
            buyCount: 1,
            preChecked: true,
            hadChecked: true,
            isLastInGroup: true
        },

        {type: 'shop-title', content: '店铺: 三只老鼠', shopId: 1, preChecked: false, hadChecked: true},
        {type: 'cart-item', content: {shopId: 1}, buyCount: 1, preChecked: false, hadChecked: true},
        {
            type: 'cart-item',
            content: {shopId: 1},
            buyCount: 1,
            preChecked: false,
            hadChecked: true,
            isLastInGroup: true
        },

        {type: 'shop-title', content: '店铺: 三只土拨鼠', shopId: 2, preChecked: false, hadChecked: true},
        {
            type: 'cart-item',
            content: {shopId: 2},
            buyCount: 1,
            preChecked: false,
            hadChecked: true,
            isLastInGroup: true
        },

        {type: 'introduce-title', content: undefined},

        {type: 'goods-item', content: {}},
        {type: 'goods-item', content: {}},
        {type: 'goods-item', content: {}},
        {type: 'goods-item', content: {}},
        {type: 'goods-item', content: {}},
        {type: 'goods-item', content: {}},
        {type: 'goods-item', content: {}},
    ];
};


export default class CartingPage extends React.Component {

    state = {
        data: cartData(),

        //编辑状态下  展示的数据不包括 商品推荐
        cartItemData: [],
        //所有商品是否选中
        isAllSelected: true,

        isEditing: false,
        totalPrice: 0.0,
    };


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
                    goBackVisible={!this.state.isEditing}
                    rightText={this.state.isEditing ? '完成' : '编辑'}
                    onRightTextClick={this._onEnterEditing}
                    title={'购物车'}
                    onGoBack={() => {
                        NavLeader.goBack(this);
                    }}
                />


                {/*
                用RefreshList  死活不刷新  wtk
                自己给自己挖了坑  RefreshList 重写了:
                shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
                    return this.state.isRefreshing !== nextState.isRefreshing ||
                    this.state.isLoading !== nextState.isLoading ||
                    this.state.loadState !== nextState.loadState;
    }
                */}
                <RefreshList
                    // keyExtractor={(item, idx) => idx.toString()}
                    enableLoadMore={false}
                    enablePullRefresh={false}

                    data={this.state.isEditing ? this.state.cartItemData : this.state.data}

                    renderItem={this._buildRenderItem}

                    contentContainerStyle={{
                        //将就 grid 边距
                        paddingHorizontal: 8,
                        paddingBottom: 8,
                        //实现单例和网格混排效果
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: "space-between",
                    }}

                    style={{
                        backgroundColor: '#eee',
                    }}
                />

                {this._buildCartCashier()}

            </View>
        );
    }


    _buildRenderItem = item => {

        // console.warn('renderItem was called: item:' + item.item.hadChecked);
        const bean = item.item;

        switch (bean.type) {
            case 'shop-title':
                return this._buildShopNameItem(item);
            case 'cart-item':
                return this._buildGoodsItem(item);
            case 'introduce-title':
                return this._buildHotIntroduceTitle();
            case 'goods-item':
                return (<MallItemCell
                    item={item}
                />);

        }

    };

    _buildShopNameItem = item => {
        return (
            <CartShopItemCell
                item={item}
                onShopSelected={checked => {
                    this._onShopSelected(item.item, item.index, checked);
                }}
            />

        );
    };


    _buildGoodsItem = item => {
        return (
            <CartingItemCell
                clickCallback={
                    ()=>{
                        NavLeader.nav(this,'GoodsDetail')
                    }
                }
                extraData={item}
                isLastInGroup={item.item.isLastInGroup}
                onGoodsSelected={checked => {
                    this._onSingleGoodsSelected(item.item, checked)
                }}
                item={item}

                onCountLess={() => {
                    this._onGoodsLess(item.item)
                }}

                onCountAdd={() => {
                    this._onGoodsAdd(item.item)
                }}
            />
        )
    };

    _buildHotIntroduceTitle = () => {
        return (
            <HotIntroduceTitle/>
        );
    };

    _buildCartCashier = () => {
        return (
            <CartCashier
                onSettlement={() => {
                    NavLeader.nav(this, 'ConfirmOrder')
                }}
                isAllSelected={this.state.isAllSelected}
                onAllSelected={this._allSelected}
                onDelete={this._onDeleteGoods}
                isEditing={this.state.isEditing}
            />
        );
    };


    _allSelected = checked => {
        const newData = this.state.data.map(item => {

            if (item.type === 'cart-item' || item.type === 'shop-title') {
                item.hadChecked = checked;
            }
            return item;
        });

        this.setState({data: newData, isAllSelected: checked});
    };


    //进入编辑状态
    _onEnterEditing = () => {
        //进入编辑状态  保存状态
        if (!this.state.isEditing) {
            this._saveSelectedStatusBeforeEditing();
        }
        //从编辑状态退出  恢复状态
        else {
            this._recoverSelectedStatusAfterEdit();
        }

        this.setState({
            isEditing: !this.state.isEditing,
        })

    };


    _onDeleteGoods = () => {

        let hadAnyChecked = false;

        for (const item of this.state.data) {
            if (item.hadChecked === true) {
                hadAnyChecked = true;
                break;
            }
        }

        ToastAndroid.showWithGravity(hadAnyChecked ? '删除' : '尚未选中任何商品~', ToastAndroid.SHORT, ToastAndroid.CENTER);

        if (hadAnyChecked) {
            this._deleteGoodsWhileEditing();
        }
    };

    _onGoodsAdd = bean => {
        bean.buyCount++;
        this.setState(Object.assign({}, this.state))
    };

    _onGoodsLess = bean => {
        if (--bean.buyCount <= 1) bean.buyCount = 1;
        this.setState(Object.assign({}, this.state))
    };


    //单个商品选择逻辑
    _onSingleGoodsSelected = (bean, checked) => {
        //设置单个山滚是否被选中
        bean.hadChecked = checked;

        const arr = this.state.data;
        // console.warn(bean.content.shopId);

        //找到该商品所在的店铺
        const shop = (() => {
            for (const item of arr) {
                if (item.type === 'shop-title' && item.shopId === bean.content.shopId) {
                    return item;
                }
            }
        })();

        //该店铺所在索引  减少筛选范围
        const start = arr.indexOf(shop);

        // console.warn('开始索引:' + start);

        if (start < 0) return;

        //店铺下的商品是否全部被选中
        const allSelectedInShop = (() => {

            let item;
            let allSelected = false;

            for (let i = start + 1; i < arr.length; i++) {
                item = arr[i];

                // 超出店铺外跳出  只筛选该店铺内的商品
                if (item.type === 'cart-item') {
                    allSelected = item.hadChecked;

                    //一组内有一个未选中  就不是全部选中状态
                    if (!allSelected) break;
                } else break;
            }

            return allSelected;
        })();

        //设置店铺是否被全选中
        shop.hadChecked = allSelectedInShop;

        this.setState(Object.assign({}, this.state, {
            data: arr,
            isAllSelected: this._checkAllSelectedAfterHandled()
        }));
    };

    //处理店铺选择逻辑
    _onShopSelected = (bean, index, checked) => {
        const arr = this.state.data;

        //设置店铺是否被选中
        bean.hadChecked = checked;

        let item;
        //店铺处理选中状态  将店铺下的所有商品置为选中
        if (checked) {
            for (let i = index + 1; i < arr.length; i++) {
                item = arr[i];
                if (item.type === 'cart-item') {
                    item.hadChecked = true;
                } else break;
            }
        }
        //店铺处于未选中状态  将店铺下的所有商品置为未选中
        else {
            for (let i = index + 1; i < arr.length; i++) {
                item = arr[i];
                if (item.type === 'cart-item') {
                    item.hadChecked = false;
                } else break;
            }
        }

        this.setState(Object.assign({}, this.state, {
            data: arr,
            isAllSelected: this._checkAllSelectedAfterHandled()
        }));
    };


    _checkAllSelectedAfterHandled = () => {
        //编辑状态
        if (this.state.isEditing) {
            const cartItems = this.state.cartItemData;

            let allChecked;
            for (const item of cartItems) {
                allChecked = item.hadChecked;
                if (!allChecked) break;
            }
            return allChecked;
        }
        //正常状态
        else {
            const arr = this.state.data;
            let i = 0;
            let allChecked = false;
            while (arr[i] && (arr[i].type === 'shop-title' || arr[i].type === 'cart-item')) {
                allChecked = arr[i].hadChecked;
                if (!allChecked) break;
                i++;
            }

            return allChecked;
        }

    };


    //记录编辑之前购车所有商品及店铺选择状态
    _saveSelectedStatusBeforeEditing = () => {

        //编辑状态下只渲染购物车商品  不渲染推荐商品
        const cartItems = this.state.cartItemData;
        //清空数组
        cartItems.length = 0;

        const arr = this.state.data;
        let i = 0;
        while (arr[i] && (arr[i].type === 'cart-item' || arr[i].type === 'shop-title')) {
            //保存当前商品的是否选中状态
            arr[i].preChecked = arr[i].hadChecked;
            //即将进入编辑状态设为false  进入编辑状态默认不选中
            arr[i].hadChecked = false;

            cartItems[i] = arr[i];
            i++;
        }

        this.setState({isAllSelected: false})
        // console.warn(map.size);
    };

    //恢复编辑之后购物车商品及店铺选中状态(恢复到编辑之前)
    _recoverSelectedStatusAfterEdit = () => {
        const arr = this.state.data;
        const cartItems = this.state.cartItemData;

        //遍历cartItems比arr方便
        cartItems.forEach((item, idx) => {
            //恢复编辑之前的选中状态
            arr[idx].hadChecked = arr[idx].preChecked;
        });

        this.setState(Object.assign({}, this.state, {
            data: arr, isAllSelected: this._checkAllSelectedAfterHandled()
        }))
    };

    //删除选中商品
    _deleteGoodsWhileEditing = () => {
        const arr = this.state.data;
        const cartItems = this.state.cartItemData;

        let i = cartItems.length;
        while (i--) {
            if (cartItems[i].hadChecked === true) {

                //删除cartItems中已经选中的商品
                cartItems.splice(i, 1);

                //删除原数组中的商品  保持同步
                arr.splice(i, 1);
            }
        }

        //删除后  如果一个店铺内的所有商品都被选中 那么该店铺的山滚也需要被选中
        this._makeSureShopSelectStatusAfterDelete();

        // console.warn(map.size);
        this.setState(Object.assign({}, this.state, {data: arr}));
    };

    //确定一组内的选中关系
    _makeSureShopSelectStatusAfterDelete = () => {
        const cartItems = this.state.cartItemData;

        let shop;

        cartItems.forEach((item, idx) => {

            if (item.type === 'shop-title') {
                //找到对应的店铺
                shop = item;

                //遍历店铺下所有的商品
                let i = idx + 1;
                let allSelectedInGroup = false;

                //防止i++ 数组越界后 undefined异常
                while (cartItems[i] && cartItems[i].type === 'cart-item') {

                    //判断进入编辑之前状态
                    allSelectedInGroup = cartItems[i].preChecked;
                    //一组内 有一个未选中 则改组未全选中 跳出循环
                    if (!allSelectedInGroup) break;

                    i++;
                }

                //保存状态
                shop.preChecked = allSelectedInGroup;
            }

        });
    };


    //计算商品的总价格
    _calcPrice = () => {

    };

    //
}