import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer
} from "react-navigation";

import MainBottomTabNav from './main/MainBottomTabNav';
import LoginStackNav from './branch/LoginRouter';

import MainLevelRouters from './MainLevelRouters';


const AppMainStack = createStackNavigator(
    {
        MainBottomTabNav: MainBottomTabNav,
        // MainLevelNav: MainLevelNav
        MainLevel: MainLevelRouters

    }, {
        defaultNavigationOptions: {
            header: null
        },
        //don't forget change
        // initialRouteName: 'MainLevelNav'
        initialRouteName: 'MainBottomTabNav'
    }
);


export default createAppContainer(
    createSwitchNavigator(
        {
            AppMainNav: AppMainStack,
            LoginNav: LoginStackNav
        },
        {
            // initialRouteName: "AppMainNav"
            initialRouteName:"LoginNav"
        }
    )
);

/*
export default createAppContainer(createStackNavigator({
    MainBottomTabNav: MainBottomTabNav,
    MainLevelNav: MainLevelNav
}, {
    defaultNavigationOptions: {
        header: null
    },
    //don't forget change
    initialRouteName: 'MainLevelNav'
    // initialRouteName: 'MainBottomTabNav'

}));*/
