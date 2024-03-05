import {createStackNavigator, createSwitchNavigator} from 'react-navigation';
import ScenicIntroduceDetailPage from "../../component/pages/scenic/ScenicIntroduceDetailPage";
import AudioGuidePage from "../../component/pages/audio_guide/AudioGuidePage";
import TicketDetailPage from "../../component/pages/ticket/TicketDetailPage";
import ScenicIntroduceListPage from "../../component/pages/scenic/ScenicIntroduceListPage";
import RoutePlanningListPage from "../../component/pages/route_plan/RoutePlanningListPage";
import RoutePlanningDetailPage from "../../component/pages/route_plan/RoutePlanningDetailPage";
import TicketListPage from "../../component/pages/ticket/TicketListPage";


const ScenicIntroduceSwitch = createSwitchNavigator({
        AudioGuide: AudioGuidePage,
        TicketDetail: TicketDetailPage,
    }, {
        initialRouteName: 'AudioGuide',
        defaultNavigationOptions: {
            header: null
        }
    }
);

const ScenicIntroduceDetailStack = createStackNavigator({
        ScenicIntroduceDetail: ScenicIntroduceDetailPage,
        ScenicIntroduceInner: ScenicIntroduceSwitch
    }, {
        initialRouteName: 'ScenicIntroduceDetail',
        defaultNavigationOptions: {
            header: null
        }
    }
);

const ScenicIntroduceStack = createStackNavigator({
        ScenicIntroduceList: ScenicIntroduceListPage,
        ScenicIntroduceInnerStack: ScenicIntroduceDetailStack
    }, {
        initialRouteName: 'ScenicIntroduceList',
        defaultNavigationOptions: {
            header: null
        }
    }
);

const RoutePlanStack = createStackNavigator({
        RoutePlanList: RoutePlanningListPage,
        RoutePlanDetail: RoutePlanningDetailPage,
        ScenicIntroduceInRoute: ScenicIntroduceDetailStack
    },
    {
        initialRouteName: 'RoutePlanList',
        defaultNavigationOptions: {
            header: null
        }
    }
);

const TicketStack = createStackNavigator({
        TicketList: TicketListPage,
        TicketDetail: TicketDetailPage,
    }, {
        initialRouteName: 'TicketList',
        defaultNavigationOptions: {
            header: null
        }
    }
);


export default createSwitchNavigator({
        AudioGuide: AudioGuidePage,
        ScenicIntroduce: ScenicIntroduceStack,
        RoutePlan: RoutePlanStack,
        Ticket: TicketStack,
    },
    {
        initialRouteName: 'AudioGuide',
        defaultNavigationOptions: {
            header: null
        }
    }
);