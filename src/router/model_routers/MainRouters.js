/**
 * @Description: 首页路由配置
 * @author HQ
 * @date 2019/7/1 18:48
 */

import {createSwitchNavigator, createStackNavigator} from 'react-navigation';
import FoodListPage from "../../component/pages/food/FoodListPage";
import FoodDetailPage from "../../component/pages/food/FoodDetailPage";
import HotelEnterFilterPage from "../../component/pages/hotel/HotelEnterFilterPage";
import HotelListPage from "../../component/pages/hotel/HotelListPage";
import HotelDetailPage from "../../component/pages/hotel/HotelDetailPage";
import TrafficTravelPage from "../../component/pages/traffic/TrafficTravelPage";
import SearchNav from '../branch/SearchRouter';
import ActiveListPage from "../../component/pages/active/ActiveListPage";
import TravelNav from '../branch/TravelRouter';
import SearchEnterPage from "../../component/pages/search/SearchEnterPage";

//美食路由栈
const FoodStack = createStackNavigator(
    {
        FoodList: FoodListPage,
        FoodDetail: FoodDetailPage
    },
    {
        defaultNavigationOptions: {header: null},
        initialRouteName: 'FoodList'
    }
);

//酒店路由栈
const HotelStack = createStackNavigator(
    {
        HotelEnter: HotelEnterFilterPage,
        HotelList: HotelListPage,
        HotelDetail: HotelDetailPage
    },
    {
        defaultNavigationOptions: {header: null},
        //don't forget change
        initialRouteName: 'HotelEnter'
    });

//路线规划路由栈
/*const RoutePlanStack = createStackNavigator(
    {
        RoutePlanList: RoutePlanningListPage,
        RoutePlanDetail: RoutePlanningDetailPage,
        TicketDetail: TicketDetailPage
    },
    {
        defaultNavigationOptions: {header: null},
        initialRouteName: "RoutePlanList"
    }
);

const TicketStack = createStackNavigator(
    {
        TicketList: TicketListPage,
        TicketDetail: TicketDetailPage,
    }, {
        initialRouteName: "ScenicIntroduce",
        defaultNavigationOptions: {
            header: null
        }
    }
);

//景区介绍路由栈
const ScenicIntroduceStack = createStackNavigator(
    {
        ScenicIntroduce: ScenicIntroduceListPage,
        ScenicIntroduceDetail: ScenicIntroduceDetailPage
    },
    {
        initialRouteName: "ScenicIntroduce",
        defaultNavigationOptions: {
            header: null
        }
    }
);*/


//交通出行路由栈
const TrafficTravelStack = createStackNavigator(
    {
        Traffic: TrafficTravelPage
    },
    {
        initialRouteName: 'Traffic',
        defaultNavigationOptions: {
            header: null
        }
    }
);

export default createSwitchNavigator(
    {
        FoodBranch: FoodStack,
        HotelBranch: HotelStack,
        TravelBranch: TravelNav,
        TrafficBranch: TrafficTravelStack,
        Active: ActiveListPage,
        SearchBranch: SearchNav,
    },
    {
        defaultNavigationOptions: {
            header: null,
        },

    }
);