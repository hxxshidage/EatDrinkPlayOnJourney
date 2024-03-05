import React from 'react';
import {View} from 'react-native';
import {
    createMaterialTopTabNavigator,
    createStackNavigator
} from "react-navigation";

import TourismPage from '../../component/pages/discovery/TourismPage';
import HotIntroducePage from '../../component/pages/discovery/HotIntroducePage';
import CountryNewsPage from '../../component/pages/discovery/CountryNewsPage';
import {AppColors} from "../../assets/colors/Color";
import TextView from "../../component/widget/common/TextView";
import {Sizer} from "../../tools/tools";
import TouchFeedback from "../../component/widget/common/TouchFeedback";

const Labels = ['旅游攻略', '热门推荐', '县域资讯'];
const Order = ['TourismStack', 'HotIntroduceStack', 'CountryNewsStack'];


const TourismStackNav = createStackNavigator({
    Tourism: TourismPage
}, {
    defaultNavigationOptions: {
        header: null
    }
});

const HotIntroduceStackNav = createStackNavigator({
    HotIntroduce: HotIntroducePage
}, {
    defaultNavigationOptions: {
        header: null
    }
});

const CountryNewsStackNav = createStackNavigator({
    CountryNews: CountryNewsPage
}, {
    defaultNavigationOptions: {
        header: null
    }
});


export default createMaterialTopTabNavigator({
    TourismStack: {
        screen: TourismStackNav,
        navigationOptions: {
            tabBarLabel: Labels[0],
        }
    },
    HotIntroduceStack: {
        screen: HotIntroduceStackNav,
        navigationOptions: {
            tabBarLabel: Labels[1],
        }
    },
    CountryNewsStack: {
        screen: CountryNewsStackNav,
        navigationOptions: {
            tabBarLabel: Labels[2],
        }
    },
}, {
    // tabBarComponent: createTabBar,
    initialRouteName: Order[0],
    lazy: true,
    order: Order,
    backBehavior: false,
    tabBarOptions: {
        showIcon: false,
        scrollEnabled: true,
        activeTintColor: AppColors.themeColor,
        inactiveTintColor: '#666',
        tabStyle: {
            paddingLeft: 0,
            paddingRight: 0,
            margin: 0,
            width: 90,
            minWidth: 88,
            paddingBottom: 4
        },
        labelStyle: {
            fontSize: 16
        },
        style:
            {
                backgroundColor: 'white',
                paddingTop: Sizer.statusBarHeight()
            },
        indicatorStyle: {
            width: 20,
            marginLeft: 35,
            height: 3,
            borderRadius: 1.5,
            backgroundColor: AppColors.themeColor
        }
    },


});

// let currentIndex = 0;
//自定义可以参考
//const createTabBar = props => {
//     const {
//         renderIcon,
//         getLabelText,
//         activeTintColor,
//         inactiveTintColor,
//         onTabPress,
//         onTabLongPress,
//         getAccessibilityLabel,
//         navigation
//     } = props;
//
//     const {routes, index: activeRouteIndex} = navigation.state;
//     console.dir(navigation.state);
//     return (<View style={{
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: "#f5f5f5",
//         marginTop: Sizer.statusBarHeight()
//     }}>
//         {routes.map((route, routeIndex) => {
//             const isRouteActive = (routeIndex === activeRouteIndex);
//
//             return (
//                 <TouchFeedback
//                     key={routeIndex.toString()}
//
//                     clickCallback={() => {
//                         currentIndex = routeIndex;
//                         console.warn('fff');
//                         onTabPress({route});
//                         // navigation.state.index = routeIndex;
//                     }}
//                 >
//                     <View
//                         style={{marginLeft: 16, marginRight: 16}}>
//                         <TextView
//                             style={{marginTop: 5, marginBottom: 8}}
//                             text={getLabelText({route})}
//                         />
//                         <View
//                             style={{
//                                 height: 3,
//                                 backgroundColor: isRouteActive ? 'red' : 'transparent',
//                             }}
//                         />
//
//                     </View>
//                 </TouchFeedback>
//
//             );
//         })}
//     </View>);
//
// };
