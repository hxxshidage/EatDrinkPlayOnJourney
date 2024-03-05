/**
 * @Description: 确认密码界面
 * @author HQ
 * @date 2019/6/24 9:58
 */
import React from 'react';

import {
    View,
    StatusBar,
    BackHandler
} from 'react-native';
import TextView from "../../widget/common/TextView";
import {NavLeader, Sizer} from "../../../tools/tools";
import HorDivider from "../../widget/common/HorDivider";
import EditText from "../../widget/common/EditText";
import TouchFeedback from "../../widget/common/TouchFeedback";

export default class ConfirmPsdPage extends React.PureComponent {

    componentDidMount(): void {
        BackHandler.addEventListener('hardwareBackPress', this._onInterceptBackPressInThisPage);
    }

    componentWillUnmount(): void {
        BackHandler.removeEventListener('hardwareBackPress', this._onInterceptBackPressInThisPage);
    }

    _onInterceptBackPressInThisPage = () => {
        return true;
    };

    render(): React.ReactNode {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'white',
                    alignItems: 'center',
                }}>

                <StatusBar
                    backgroundColor="transparent"
                    translucent={true}
                    hidden={false}
                    animated={false}
                    barStyle={'dark-content'}
                />


                <TextView
                    style={{
                        height: 40 + Sizer.statusBarHeight(),
                        paddingTop: Sizer.statusBarHeight(),
                        // textAlignVertical: 'bottom'
                        lineHeight: 40
                    }}
                    text={'设置密码'}
                    textWeight={'bold'}
                    textColor={'#000'}
                    textSize={16}
                />
                <View
                    style={{
                        backgroundColor: '#eee',
                        height: 0.5,
                        alignSelf: "stretch",
                    }}
                />


                <EditText
                    ref={ref => this.psd = ref}
                    secureTextEntry={true}
                    style={{
                        alignSelf: "stretch",
                        paddingVertical: 8,
                        paddingHorizontal: 16
                    }}
                    hintColor={'#888'}
                    hint={'设置密码'}
                    textSize={14}
                    textColor={'#000'}
                />

                <HorDivider
                    stretchActive={true}
                />

                <EditText
                    ref={ref => this.confirmPsd = ref}
                    secureTextEntry={true}
                    style={{
                        alignSelf: "stretch",
                        paddingVertical: 8,
                        paddingHorizontal: 16
                    }}
                    hintColor={'#888'}
                    hint={'确认密码'}
                    textSize={14}
                    textColor={'#000'}
                />

                <HorDivider
                    stretchActive={true}
                />

                {this._buildNextStep()}
            </View>);
    }

    _buildNextStep = () => {
        return (
            <TouchFeedback
                clickCallback={this._goNextStep}
                touchStyle={{
                    overflow: 'hidden',
                    alignSelf: 'stretch',
                    marginHorizontal: 48,
                }}
            >

                <TextView
                    style={{
                        backgroundColor: "#3E98FF",
                        borderRadius: 5,
                        textAlign: "center",
                        marginTop: 48,
                        textAlignVertical: 'center',
                        height: 45
                    }}
                    text={'下一步'}
                    textSize={16}
                    textColor={'#fff'}
                />
            </TouchFeedback>
        );
    };

    _goNextStep = () => {
        const psdText = this.psd.getText();
        const confirmPsdText = this.confirmPsd.getText();

        if (psdText && confirmPsdText && psdText === confirmPsdText) {
            NavLeader.nav(this, 'AppMainNav');
        }
    };


}