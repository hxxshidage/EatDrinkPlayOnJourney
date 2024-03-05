import {
    createMaterialTopTabNavigator,
    createStackNavigator
} from "react-navigation";
import CollectScenicListPage from "../../component/pages/personal/CollectScenicListPage";
import CollectRestaurantListPage from "../../component/pages/personal/CollectRestaurantListPage";
import CollectHotelListPage from "../../component/pages/personal/CollectHotelListPage";
import CollectGoodsListPage from "../../component/pages/personal/CollectGoodsListPage";
import CollectTravelsListPage from "../../component/pages/personal/CollectTravelsListPage";
import {AppColors} from "../../assets/colors/Color";
import {screenW} from "../../tools/tools";
import CollectStrategyListPage from "../../component/pages/personal/CollectStrategyListPage";

const NavLabels = ['景区', '餐厅', '酒店', '商品', '攻略', '游记'];

const tabWid = (() => {
    return screenW / NavLabels.length;
})();

//景区路由栈
const ScenicStackNav = createStackNavigator(
    {
        CollectScenicList: CollectScenicListPage
    },
    {
        initialRouteName: 'CollectScenicList',
        defaultNavigationOptions: {
            header: null
        }
    }
);

//餐厅路由栈
const RestaurantStackNav = createStackNavigator(
    {
        CollectRestaurantList: CollectRestaurantListPage
    },
    {
        initialRouteName: 'CollectRestaurantList',
        defaultNavigationOptions: {
            header: null
        }
    }
);

//酒店路由栈
const HotelStackNav = createStackNavigator(
    {
        CollectHotelList: CollectHotelListPage
    },
    {
        initialRouteName: 'CollectHotelList',
        defaultNavigationOptions: {
            header: null
        }
    }
);

//商品路由栈
const CommodityStackNav = createStackNavigator(
    {
        CollectGoodsList: CollectGoodsListPage
    },
    {
        initialRouteName: 'CollectGoodsList',
        defaultNavigationOptions: {
            header: null
        }
    }
);

//攻略路由栈
const StrategyStackNav = createStackNavigator(
    {
        CollectStrategyList: CollectStrategyListPage
    },
    {
        initialRouteName: 'CollectStrategyList',
        defaultNavigationOptions: {
            header: null
        }
    }
);

//游记路由栈
const TravelsStackNav = createStackNavigator(
    {
        CollectTravelsList: CollectTravelsListPage
    },
    {
        initialRouteName: 'CollectTravelsList',
        defaultNavigationOptions: {
            header: null
        }
    }
);

export default createMaterialTopTabNavigator({

    ScenicStack: {
        screen: ScenicStackNav,
        navigationOptions: {
            tabBarLabel: NavLabels[0],
        }
    },
    RestaurantStack: {
        screen: RestaurantStackNav,
        navigationOptions: {
            tabBarLabel: NavLabels[1],
        }
    },
    HotelStack: {
        screen: HotelStackNav,
        navigationOptions: {
            tabBarLabel: NavLabels[2],
        }
    },
    CommodityStack: {
        screen: CommodityStackNav,
        navigationOptions: {
            tabBarLabel: NavLabels[3],
        }
    },
    StrategyStack: {
        screen: StrategyStackNav,
        navigationOptions: {
            tabBarLabel: NavLabels[4],
        }
    },
    TravelsStack: {
        screen: TravelsStackNav,
        navigationOptions: {
            tabBarLabel: NavLabels[5],
        }
    },
}, {
    // tabBarComponent: createTabBar,
    initialRouteName: 'ScenicStack',
    initialLayout: {width: screenW, height: 40},
    optimizationsEnabled:true,
    lazy: true,
    backBehavior: false,
    tabBarOptions: {
        showIcon: false,
        scrollEnabled: true,
        activeTintColor: AppColors.themeColor,
        inactiveTintColor: '#666',
        tabStyle: {
            paddingLeft: 0,
            paddingRight: 0,
            margin: 0,
            width: tabWid,
            minWidth: tabWid,
            height: 40
        },
        labelStyle: {
            fontSize: 14
        },
        style:
            {backgroundColor: 'white', shadowOpacity: 0},
        indicatorStyle: {
            width: 10,
            marginLeft: (tabWid - 10) / 2,
            height: 3,
            borderRadius: 1.5,
            backgroundColor: AppColors.themeColor
        }
    },

});