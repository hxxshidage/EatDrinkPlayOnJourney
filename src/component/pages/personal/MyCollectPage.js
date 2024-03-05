import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';
import HeaderBar from "../../widget/common/HeaderBar";

import MyCollectTopNav from '../../../router/navs/MyCollectTopNav';

export default class MyCollectPage extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <View
                style={{flex: 1}}>

                <HeaderBar
                    title={'我的收藏'}
                    onGoBack={this._goBack}
                />

                <MyCollectTopNav navigation={this.props.navigation}/>
            </View>
        );
    }

    _goBack = () => {
        this.props.navigation && this.props.navigation.goBack(null);
    };
}
//这个千万别漏
MyCollectPage.router = MyCollectTopNav.router;