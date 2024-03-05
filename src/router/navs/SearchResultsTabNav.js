/**
 * @Description: 搜索结果Tab导航
 * @author HQ
 * @date 2019/7/4 13:13
 */

import {
    createMaterialTopTabNavigator,
    createStackNavigator
} from "react-navigation";
import {AppColors} from "../../assets/colors/Color";
import {screenW} from "../../tools/tools";
import SearchAllListPage from "../../component/pages/search/SearchAllListPage";
import SearchFoodListPage from "../../component/pages/search/SearchFoodListPage";
import SearchHotelListPage from "../../component/pages/search/SearchHotelListPage";
import SearchGoodsListPage from "../../component/pages/search/SearchGoodsListPage";
import SearchStrategyListPage from "../../component/pages/search/SearchStrategyListPage";
import SearchTravelsListPage from "../../component/pages/search/SearchTravelsListPage";

const NavLabels = ['全部', '餐厅', '酒店', '商品', '攻略', '游记'];

const tabWid = (() => {
    return screenW / NavLabels.length;
})();

const SearchAllStackNav = createStackNavigator(
    {
        SearchAllList: SearchAllListPage
    },
    {
        initialRouteName: 'SearchAllList',
        defaultNavigationOptions: {
            header: null
        }
    }
);

//搜索餐厅路由栈
const SearchFoodStackNav = createStackNavigator(
    {
        SearchFoodList: SearchFoodListPage
    },
    {
        initialRouteName: 'SearchFoodList',
        defaultNavigationOptions: {
            header: null
        }
    }
);

//搜索酒店路由栈
const SearchHotelStackNav = createStackNavigator(
    {
        SearchHotelList: SearchHotelListPage
    },
    {
        initialRouteName: 'SearchHotelList',
        defaultNavigationOptions: {
            header: null
        }
    }
);

//搜索商品路由栈
const SearchCommodityStackNav = createStackNavigator(
    {
        SearchGoodsList: SearchGoodsListPage
    },
    {
        initialRouteName: 'SearchGoodsList',
        defaultNavigationOptions: {
            header: null
        }
    }
);

//搜索攻略路由栈
const SearchStrategyStackNav = createStackNavigator(
    {
        SearchStrategyList: SearchStrategyListPage
    },
    {
        initialRouteName: 'SearchStrategyList',
        defaultNavigationOptions: {
            header: null
        }
    }
);

//搜索游记路由栈
const SearchTravelsStackNav = createStackNavigator(
    {
        SearchTravelsList: SearchTravelsListPage
    },
    {
        initialRouteName: 'SearchTravelsList',
        defaultNavigationOptions: {
            header: null
        }
    }
);

export default createMaterialTopTabNavigator({
    SearchAllStack: {
        screen: SearchAllStackNav,
        navigationOptions: {
            tabBarLabel: NavLabels[0],
        }
    },
    SearchFoodStack: {
        screen: SearchFoodStackNav,
        navigationOptions: {
            tabBarLabel: NavLabels[1],
        }
    },
    SearchHotelStack: {
        screen: SearchHotelStackNav,
        navigationOptions: {
            tabBarLabel: NavLabels[2],
        }
    },
    SearchCommodityStack: {
        screen: SearchCommodityStackNav,
        navigationOptions: {
            tabBarLabel: NavLabels[3],
        }
    },
    SearchStrategyStack: {
        screen: SearchStrategyStackNav,
        navigationOptions: {
            tabBarLabel: NavLabels[4],
        }
    },
    SearchTravelsStack: {
        screen: SearchTravelsStackNav,
        navigationOptions: {
            tabBarLabel: NavLabels[5],
        }
    },
}, {
    initialRouteName: 'SearchAllStack',
    initialLayout: {width: screenW, height: 40},
    optimizationsEnabled: true,
    lazy: true,
    backBehavior: 'none',
    tabBarOptions: {
        showIcon: false,
        scrollEnabled: true,
        activeTintColor: '#000',
        inactiveTintColor: '#979797',
        tabStyle: {
            paddingLeft: 0,
            paddingRight: 0,
            margin: 0,
            width: tabWid,
            minWidth: tabWid,
            height: 40
        },
        labelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
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