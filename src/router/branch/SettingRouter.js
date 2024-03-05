import {createStackNavigator, createSwitchNavigator} from 'react-navigation';
import SettingPage from "../../component/pages/personal/SettingPage";
import ChangePsdPage from "../../component/pages/personal/ChangePsdPage";

const SettingSwitch = createSwitchNavigator(
    {
        ChangePsd: ChangePsdPage
    },
    {
        initialRouteName: 'ChangePsd',
        defaultNavigationOptions: {
            header: null
        }
    });


//设置路由栈
export default createStackNavigator({
        Setting: SettingPage,
        SettingInner: SettingSwitch
    },
    {
        initialRouteName: 'Setting',
        defaultNavigationOptions: {
            header: null
        }
    }
);