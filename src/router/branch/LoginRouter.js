/**
 * @Description: 登录注册模块路由
 * @author HQ
 * @date 2019/6/24 9:50
 */

import {
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation';
// import PhoneLoginPage from "../../component/pages/login/PhoneLoginPage";

import PhoneLoginPage from "../../component/containers/login/PhoneLoginContainer";

import ConfirmPsdPage from "../../component/pages/login/ConfirmPsdPage";
import PsdLoginPage from "../../component/pages/login/PsdLoginPage";

//手机登录路由栈
const PhoneStackNav = createStackNavigator(
    {
        PhoneLogin: PhoneLoginPage,
        ConfirmPsd: ConfirmPsdPage
    },
    {
        initialRouteName: 'PhoneLogin',
        defaultNavigationOptions: {
            header: null
        }
    });


//手机号登录,密码登录 二选一
export default createSwitchNavigator(
    {
        PhoneStack: PhoneStackNav,
        PsdLogin: PsdLoginPage
    },
    {
        initialRouteName: 'PhoneStack'
    })