/**
 * @Description: 商城商品相关的路由栈
 * @author HQ
 * @date 2019/6/29 10:50
 */

import {createStackNavigator, createSwitchNavigator} from 'react-navigation';
import ShopDetailPage from "../../component/pages/mall/ShopDetailPage";
import GoodsDetailPage from "../../component/pages/mall/GoodsDetailPage";
import GoodsEvaPage from "../../component/pages/mall/GoodsEvaPage";
import GoodsListInCategoryPage from "../../component/pages/mall/GoodsListInCategoryPage";
import GoodsCategoryListPage from "../../component/pages/mall/GoodsCategoryListPage";


//祖传路由配置
//FBI warning  !!!
//不到万不得已千万别动    轻则界面堆叠 重则一顿乱跳  且排错困难
//切记  切记 !!!

const ShopDetailStack = createStackNavigator(
    {
        ShopDetail: ShopDetailPage,
        GoodsDetail: GoodsDetailPage,
        GoodsEva: GoodsEvaPage,
    },
    {
        initialRouteName: "ShopDetail",
        defaultNavigationOptions: {
            header: null
        }
    }
);

const GoodsDetailSwitch = createSwitchNavigator(
    {
        GoodsEva: GoodsEvaPage,
        ShopDetailInner: ShopDetailStack
    }
    , {
        //必须是这个
        initialRouteName: "GoodsEva",
        defaultNavigationOptions: {
            header: null
        }
    }
);

export const GoodsDetailStack = createStackNavigator(
    {
        GoodsDetail: GoodsDetailPage,
        GoodsDetailSwitchInner: GoodsDetailSwitch,
    }
    , {
        //必须是这个
        initialRouteName: "GoodsDetail",
        defaultNavigationOptions: {
            header: null
        }
    }
);

const GoodsListStack = createStackNavigator(
    {
        GoodsList: GoodsListInCategoryPage,
        GoodsDetailInner: GoodsDetailStack
    }
    , {
        initialRouteName: "GoodsList",
        defaultNavigationOptions: {
            header: null
        }
    }
);

const GoodsCategoryStack = createStackNavigator(
    {
        GoodsCategory: GoodsCategoryListPage,
        GoodsListInner: GoodsListStack
    }
    , {
        initialRouteName: "GoodsCategory",
        defaultNavigationOptions: {
            header: null
        }
    }
);

export default createSwitchNavigator(
    {
        //这三个摆放的位置都不能错  要么就指定order
        GoodsDetailOuter: GoodsDetailStack,
        GoodsListOuter: GoodsListStack,
        GoodsCategoryOuter: GoodsCategoryStack
    }
    , {
        //默认的路由也不能错
        initialRouteName: "GoodsDetailOuter",
        defaultNavigationOptions: {
            header: null
        }
    }
);