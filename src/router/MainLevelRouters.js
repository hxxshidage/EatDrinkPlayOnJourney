/**
 * @Description: 和MainBottomNav平级的所有路由
 * @author HQ
 * @date 2019/7/1 18:29
 */

import {createSwitchNavigator} from 'react-navigation';
import PersonalRouters from './model_routers/PersonalRouters';
import MallRouters from './model_routers/MallRouters';
import MainRouters from './model_routers/MainRouters';

export default createSwitchNavigator(
    {
        PersonalMerge: PersonalRouters,
        MallMerge: MallRouters,
        MainMerge: MainRouters,
    },
    {
        defaultNavigationOptions: {
            header: null
        }
    }
);