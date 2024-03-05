/**
 * @Description: 密码登录界面
 * @author HQ
 * @date 2019/6/24 9:59
 */
import React from 'react';

import {
    View,
    StyleSheet, StatusBar
} from 'react-native';
import {NavLeader, Sizer} from "../../../tools/tools";
import TouchFeedback from "../../widget/common/TouchFeedback";
import ImageView from "../../widget/common/ImageView";
import TextView from "../../widget/common/TextView";
import EditText from "../../widget/common/EditText";

export default class PsdLoginPage extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <View
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
                    clickCallback={this._goPhoneLogin}
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

            </View>);
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

            </View>
        );
    };

    _buildVerifyCode = () => {
        return (
            <View
                style={[styles.rowRoot, {marginTop: 16,}
                ]}>

                <ImageView
                    imgSrc={require('../../../assets/images/login/login_password.png')}
                />

                <EditText
                    style={{
                        marginHorizontal: 16,
                        flex: 1,
                    }}
                    textSize={16}
                    textColor={'white'}
                    hint={'密码'}
                    cursorColor={'white'}
                    hintColor={'white'}
                />
            </View>
        );
    };

    _buildLoginBtn = () => {
        return (
            <TouchFeedback
                clickCallback={this._goMainApp}
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
                    text={'密码登录'}
                    textSize={16}
                    textColor={'#4DA1FF'}
                />
            </TouchFeedback>
        );
    };

    _buildLoginAgreement = () => {
        return (
            <TouchFeedback
                clickCallback={this._goPhoneLogin}
                opacityRadio={0.65}
                touchStyle={{
                    paddingVertical: 3,
                    marginTop: 10,
                    alignSelf: 'flex-start',
                    marginLeft: 48
                }}
            >
                <TextView
                    text={'账号密码登录'}
                    textSize={12}
                    textColor={'white'}
                />
            </TouchFeedback>
        );
    };

    _goMainApp = () => {
        NavLeader.nav(this, 'AppMainNav');
    };

    _goPhoneLogin = () => {
        NavLeader.nav(this, 'PhoneStack');
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