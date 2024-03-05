import {createStackNavigator, createSwitchNavigator} from "react-navigation";

import FoodListPage from '../../component/pages/food/FoodListPage';
import FoodDetailPage from '../../component/pages/food/FoodDetailPage';
import HotelListPage from '../../component/pages/hotel/HotelListPage';
import RoutePlanningListPage from "../../component/pages/route_plan/RoutePlanningListPage";
import RoutePlanningDetailPage from "../../component/pages/route_plan/RoutePlanningDetailPage";
import HotelDetailPage from "../../component/pages/hotel/HotelDetailPage";
import TicketDetailPage from "../../component/pages/ticket/TicketDetailPage";
import HotelEnterFilterPage from "../../component/pages/hotel/HotelEnterFilterPage";
import ComplainEditPage from "../../component/pages/complain/ComplainEditPage";
import MyCollectPage from "../../component/pages/personal/MyCollectPage";
import ComplainFeedbackPage from "../../component/pages/personal/ComplainFeedbackPage";
import ScenicIntroduceDetailPage from "../../component/pages/scenic/ScenicIntroduceDetailPage";
import RefundHelperPage from "../../component/pages/complain/RefundHelperPage";
import MyComplainPage from "../../component/pages/personal/MyComplainPage";
import SettingPage from "../../component/pages/personal/SettingPage";
import CartingPage from "../../component/pages/mall/CartingPage";
import ConfirmOrderPage from "../../component/pages/mall/ConfirmOrderPage";
import TrafficTravelPage from "../../component/pages/traffic/TrafficTravelPage";
import AddressManagerPage from "../../component/pages/personal/AddressManagerPage";
import AddOrEditAddressPage from "../../component/pages/personal/AddOrEditAddressPage";
import CouponsListPage from "../../component/pages/personal/CouponsListPage";
import AudioGuidePage from "../../component/pages/audio_guide/AudioGuidePage";
import CartingSwitch from '../branch/CartingRouter'
import SettingStack from '../branch/SettingRouter';
import GoodsNav from '../branch/GoodsRouter'


//美食路由栈
/*const FoodStack = createStackNavigator(
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
const RoutePlanStack = createStackNavigator(
    {
        RoutePlanList: RoutePlanningListPage,
        RoutePlanDetail: RoutePlanningDetailPage,
        TicketDetail: TicketDetailPage
    },
    {
        defaultNavigationOptions: {header: null},
        initialRouteName: "RoutePlanList"
    }
);*/

//我的收藏路由栈
const MyCollectStack = createStackNavigator({
        MyCollect: MyCollectPage
    },
    {
        defaultNavigationOptions: {header: null},
        initialRouteName: "MyCollect"
    }
);

/*//景区介绍路由栈
const ScenicIntroduceStack = createStackNavigator(
    {
        ScenicIntroduceDetail: ScenicIntroduceDetailPage
    },
    {
        initialRouteName: "ScenicIntroduceDetail",
        defaultNavigationOptions: {
            header: null
        }
    }
);


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
);*/


export default createSwitchNavigator({
    // Goods: GoodsNav,
    // Food: FoodStack,
    // Hotel: HotelStack,
    // RoutePlan: RoutePlanStack,
    // TrafficTravel: TrafficTravelStack,
    //语音导览
    AudioGuide: AudioGuidePage,
    //意见反馈
    ComplainEdit: ComplainEditPage,
    //退货助手
    RefundHelper: RefundHelperPage,
    //优惠券
    Coupons: CouponsListPage,
    MyCollect: MyCollectStack,
    //我的投诉
    MyComplain: MyComplainPage,

    Carting: CartingSwitch,
    //个人设置
    Setting: SettingStack,
    //意见反馈
    ComplainFeedback: ComplainFeedbackPage,
    // ScenicIntroduce: ScenicIntroduceStack
}, {
    //don't forget change
    // initialRouteName: 'Hotel'
    // initialRouteName: 'Food'
    // initialRouteName: 'Goods',
    defaultNavigationOptions: {
        header: null
    }
});
