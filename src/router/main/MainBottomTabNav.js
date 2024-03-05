import React from 'react';
import {createBottomTabNavigator} from "react-navigation";

import MainPage from '../../component/pages/model/MainPage';
import MallPage from '../../component/pages/model/MallPage';
import ComplaintPage from '../../component/pages/model/ComplaintPage';
// import PersonalPage from '../../component/pages/model/PersonalPage';
import PersonalPage from '../../component/containers/model/PersonalContainer';
import TabIcon from '../../component/widget/common/TabIcon';
import {Colors} from '../../assets/colors/Color';
import DiscoveryTopTabNav from '../navs/DiscoveryTopTabNav';

const Labels = ['首页', '商城', '发现', '投诉', '我的'];
const Order = ['MainNav', 'MallNav', 'DiscoveryNav', 'ComplainNav', 'PersonalNav'];

const FocusedImages = [
    require('../../assets/images/main/main_foc.png'),
    require('../../assets/images/main/mall_foc.png'),
    require('../../assets/images/main/discovery_foc.png'),
    require('../../assets/images/main/complaint_foc.png'),
    require('../../assets/images/main/personal_foc.png'),
];

const NormalImages = [
    require('../../assets/images/main/main_nor.png'),
    require('../../assets/images/main/mall_nor.png'),
    require('../../assets/images/main/discovery_nor.png'),
    require('../../assets/images/main/complaint_nor.png'),
    require('../../assets/images/main/personal_nor.png'),
];

const createTabIcon = (focused, index) => (
    <TabIcon
        focused={focused}
        focusedImg={FocusedImages[index]}
        normalImg={NormalImages[index]}
    />);

export default createBottomTabNavigator({
    MainNav: {
        screen: MainPage,
        navigationOptions: {
            tabBarLabel: Labels[0],
            tabBarIcon: ({focused}) => createTabIcon(focused, 0)
        }
    },
    MallNav: {
        screen: MallPage,
        navigationOptions: {
            tabBarLabel: Labels[1],
            tabBarIcon: ({focused}) => createTabIcon(focused, 1)
        }
    },
    DiscoveryNav: {
        screen: DiscoveryTopTabNav,
        navigationOptions: {
            tabBarLabel: Labels[2],
            tabBarIcon: ({focused}) => createTabIcon(focused, 2),
        }
    },
    ComplainNav: {
        screen: ComplaintPage,
        navigationOptions: {
            tabBarLabel: Labels[3],
            tabBarIcon: ({focused}) => createTabIcon(focused, 3)
        }
    },
    PersonalNav: {
        // screen: PersonalPage,
        screen: PersonalPage,

        navigationOptions: {
            tabBarLabel: Labels[4],
            tabBarIcon: ({focused}) => createTabIcon(focused, 4)
        }
    },
}, {
    initialRouteName: 'MainNav',
    // initialRouteName: 'MainNav',

    order: Order,
    lazy: true,
    tabBarOptions: {
        activeTintColor: Colors.main.bottomNavActiveColor,
        inactiveTintColor: Colors.main.bottomNavInactiveColor,
        //label样式
        labelStyle: {
            fontSize: 10,
        },
        //整个tabBar样式
        style: {
            paddingBottom: 1,
            paddingTop: 1,
            height: 48,
            backgroundColor: Colors.main.bottomNavBg
        },
        //单个tab样式
        tabStyle: {
            padding: 0,
        },
        //icon样式
        iconStyle: {
            top: 0,
            marginTop: 0,
            paddingTop: 0
        }

    }
});