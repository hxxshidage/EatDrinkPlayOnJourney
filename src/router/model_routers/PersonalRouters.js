/**
 * @Description: 整个个人模块的路由
 * @author HQ
 * @date 2019/7/1 18:23
 */

import {createSwitchNavigator, createStackNavigator} from 'react-navigation';
import SettingStack from '../branch/SettingRouter';
import CouponsListPage from "../../component/pages/personal/CouponsListPage";
import ComplainFeedbackPage from "../../component/pages/personal/ComplainFeedbackPage";
import MyComplainPage from "../../component/pages/personal/MyComplainPage";
import MyCollectPage from "../../component/pages/personal/MyCollectPage";
import PersonalInfoPage from "../../component/pages/personal/PersonalInfoPage";
import LoginBranch from '../../router/branch/LoginRouter';
import PersonalInfoRouter from "../branch/PersonalInfoRouter";
import MyOrderListPage from "../../component/pages/personal/MyOrderListPage";


const PersonalSwitch = createSwitchNavigator({
        Login: LoginBranch,
        PersonalBranch: PersonalInfoRouter,
        MyOrder: MyOrderListPage,
        Coupons: CouponsListPage,
        Setting: SettingStack,
        MyCollect: MyCollectPage,
        ComplainFeedback: ComplainFeedbackPage,
        MyComplain: MyComplainPage,
    },
    {
        defaultNavigationOptions: {
            header: null
        }
    }
);

export default createSwitchNavigator(
    {
        PersonalLogin: LoginBranch,
        PersonalInner: PersonalSwitch
    },
    {
        initialRouteName: "PersonalLogin",
        defaultNavigationOptions: {
            header: null
        }
    }
);