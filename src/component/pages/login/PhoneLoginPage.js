/**
 * @Description: 手机号登录界面
 * @author HQ
 * @date 2019/6/24 9:43
 */
import React from 'react';

import {
    StatusBar,
    View,
    StyleSheet
} from 'react-native';
import ImageView from "../../widget/common/ImageView";
import {NavigationActions} from 'react-navigation';
import TouchFeedback from "../../widget/common/TouchFeedback";
import {NavLeader, Sizer} from "../../../tools/tools";
import TextView from "../../widget/common/TextView";
import EditText from "../../widget/common/EditText";
import StatusWrapper from "../../widget/common/wrapper/StatusWrapper";
import LoadingDialog from "../../dialog/LoadingDialog";

const goConfirmOrMainAction = NavigationActions.navigate({
    routeName: 'ConfirmPsd',
    // action: NavigationActions.navigate({routeName: 'ConfirmPsd'})
});

export default class PhoneLoginPage extends React.PureComponent {


    componentDidMount(): void {
        console.warn('dispatch:' + this.props.dispatch);
        // console.warn(this.context.store);
    }

    //在这个函数中处理靠谱
    componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
        if (nextProps.loginInfo.logged) {
            this.props.navigation.dispatch(goConfirmOrMainAction);
            // NavLeader.nav(this, 'ConfirmPsd');
        }
    }

    render(): React.ReactNode {
        const {isLoading} = this.props;
        return (
            <StatusWrapper
                lightStatus={true}
                style={{
                    flex: 1,
                    backgroundColor: '#4DA1FF',
                    alignItems: "center",
                }}>

                <StatusBar
                    backgroundColor="transparent"
                    translucent={true}
                    hidden={false}
                    animated={false}
                    barStyle={'light-content'}
                />

                <TouchFeedback
                    opacityRadio={0.70}
                    touchStyle={{
                        alignSelf: 'flex-start',
                        padding: 3,
                        marginLeft: 13,
                        marginTop: 13 + Sizer.statusBarHeight()
                    }}
                >
                    <ImageView
                        imgSrc={require('../../../assets/images/common/go_back_white.png')}
                    />
                </TouchFeedback>

                <ImageView
                    style={{marginTop: 16, marginBottom: 30}}
                    imgSrc={require('../../../assets/images/login/login_logo.png')}
                />

                <TextView
                    text={'手机登录'}
                    textColor={'#fff'}
                    textSize={18}
                />

                {this._buildPhoneNumber()}

                {this._buildVerifyCode()}

                {this._buildLoginBtn()}

                {this._buildLoginAgreement()}

                <LoadingDialog
                    cancelable={false}
                    showing={isLoading}
                    description={'正在登录中...'}
                    ref={'loading'}
                />

            </StatusWrapper>);
    }


    _buildPhoneNumber = () => {
        return (
            <View style={styles.rowRoot}>

                <ImageView
                    imgSrc={require('../../../assets/images/login/login_phone.png')}
                />

                <EditText
                    style={{
                        marginHorizontal: 16,
                        flex: 1,
                    }}
                    textSize={16}
                    textColor={'white'}
                    hint={'手机号'}
                    cursorColor={'white'}
                    hintColor={'white'}
                />

                <TouchFeedback
                    opacityRadio={0.65}
                    clickCallback={() => {
                        console.warn("获取验证码");
                    }}
                >
                    <TextView
                        text={'获取验证码'}
                        textColor={'#58CF9C'}
                        textSize={12}
                    />
                </TouchFeedback>

            </View>
        );
    };

    _buildVerifyCode = () => {
        return (
            <View
                style={[styles.rowRoot, {marginTop: 16,}
                ]}>

                <ImageView
                    imgSrc={require('../../../assets/images/login/login_verify_code.png')}
                />

                <EditText
                    style={{
                        marginHorizontal: 16,
                        flex: 1,
                    }}
                    textSize={16}
                    textColor={'white'}
                    hint={'验证码'}
                    cursorColor={'white'}
                    hintColor={'white'}
                />
            </View>
        );
    };

    _buildLoginBtn = () => {
        const {doLogin} = this.props;
        return (
            <TouchFeedback
                // clickCallback={this._goMainAppOrSettingPsd}
                clickCallback={() => {
                    // console.warn("开始登录");
                    // this.refs.loading.dialog.show();
                    doLogin('111', '2222');
                }}

                touchStyle={{
                    overflow: 'hidden',
                    alignSelf: 'stretch',
                    marginHorizontal: 48,
                }}
            >

                <TextView
                    style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        textAlign: "center",
                        marginTop: 16,
                        textAlignVertical: 'center',
                        height: 45
                    }}
                    text={'手机号登录'}
                    textSize={16}
                    textColor={'#4DA1FF'}
                />
            </TouchFeedback>
        );
    };

    _buildLoginAgreement = () => {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 48,
                marginTop: 10
            }}>
                <TouchFeedback
                    clickCallback={this._goPsdLogin}
                    opacityRadio={0.65}
                    touchStyle={{
                        flex: 1,
                        paddingVertical: 3
                    }}
                >
                    <TextView
                        text={'账号密码登录'}
                        textSize={12}
                        textColor={'white'}
                    />
                </TouchFeedback>

                <TextView
                    text={'注册即代表您同意'}
                    textSize={10}
                    textColor={'#B8D9FF'}
                />

                <TouchFeedback
                    opacityRadio={0.75}
                    touchStyle={{
                        paddingVertical: 3
                    }}
                >
                    <TextView
                        textSize={10}
                        textColor={'#B8D9FF'}
                        text={'《崀山Go用户注册协议》'}
                    />
                </TouchFeedback>
            </View>
        );
    };

    // _goMainAppOrSettingPsd = () => {
    //     // NavLeader.nav(this, 'AppMainNav');
    //     NavLeader.nav(this, 'ConfirmPsd');
    //
    // };

    _goPsdLogin = () => {
        NavLeader.nav(this, 'PsdLogin');
    };

}

const styles = StyleSheet.create(
    {
        rowRoot: {
            flexDirection: "row",
            alignItems: 'center',
            paddingVertical: 8,
            marginTop: 60,
            paddingHorizontal: 8,
            backgroundColor: "rgba(36,121,217,.36)",
            alignSelf: 'stretch',
            borderRadius: 5,
            marginHorizontal: 48
        }
    }
);