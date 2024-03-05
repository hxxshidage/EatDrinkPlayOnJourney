/**
 * @Description: 个人信息相关路由
 * @author HQ
 * @date 2019/7/2 10:42
 */

import {createSwitchNavigator, createStackNavigator} from 'react-navigation';
// import UpdateNickNamePage from "../../component/pages/personal/UpdateNickNamePage";
import UpdateNickNamePage from "../../component/containers/personal/UpdateNickNameContainer";

// import PersonalInfoPage from "../../component/pages/personal/PersonalInfoPage";
import PersonalInfoPage from "../../component/containers/personal/PersonalInfoContainer";

import UpdateSexPage from "../../component/pages/personal/UpdateSexPage";


const UpdateSwitch = createSwitchNavigator(
    {
        UpdateNick: UpdateNickNamePage,
        UpdateSex: UpdateSexPage,
    },
    {
        initialRouteName: 'UpdateNick',
        defaultNavigationOptions: {
            header: null
        }
    }
);

export default createStackNavigator({
        PersonalInfo: PersonalInfoPage,
        UpdateBranch: UpdateSwitch
    },
    {
        initialRouteName: 'PersonalInfo',
        defaultNavigationOptions: {
            header: null
        }
    }
);
