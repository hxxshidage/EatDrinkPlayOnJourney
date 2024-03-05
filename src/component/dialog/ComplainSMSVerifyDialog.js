import React from 'react';

import {
    View,
    StyleSheet, TextInput
} from 'react-native';
import Dialog from "./Dialog";
import ImageView from "../widget/common/ImageView";
import {screenW} from "../../tools/tools";
import TouchFeedback from "../widget/common/TouchFeedback";
import TextView from "../widget/common/TextView";
import HorDivider from "../widget/common/HorDivider";
import EditText from "../widget/common/EditText";
import {AppColors} from "../../assets/colors/Color";

export default class ComplainSMSVerifyDialog extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <Dialog
                fillScreenOnWidth={false}
                ref={ref => this.dialog = ref}
                animationIn="slideInDown"
                animationOut="slideOutDown"
                animationInTiming={300}
                animationOutTiming={300}
                cancelByBackPress={false}
                touchOutside2Cancel={false}
                style={{alignItems: 'center'}}
            >

                <View style={{
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    width: screenW * 0.85,
                    borderRadius: 5,
                    paddingBottom: 24,
                    paddingLeft: 10,
                    paddingRight: 10
                }}>

                    <TouchFeedback
                        opacityRadio={0.6}
                        clickCallback={() => {
                            this.dialog.hide();
                        }}
                        touchStyle={{padding: 2, position: "absolute", right: 10, top: 10}}>
                        <ImageView
                            imgSrc={require('../../assets/images/complain/complain_close.png')}
                        />
                    </TouchFeedback>

                    <TextView
                        style={{marginTop: 60, alignSelf: 'center'}}
                        text={'短信验证'}
                        textSize={16}
                        textWeight={'bold'}
                        textColor={'#000'}
                    />

                    {this._buildPhoneRow()}

                    <HorDivider
                        margin={[5, 10, 10]}
                    />

                    {this._buildVerifyCodeRow()}

                    <HorDivider
                        margin={[5, 10, 10]}
                    />

                    {this._buildEnsure()}

                </View>

            </Dialog>
        );
    }

    _buildPhoneRow = () => {
        return (
            <View style={{
                flexDirection: 'row',
                marginLeft: 10,
                marginRight: 10,
                alignItems: "center",
                //输入框 width:100% 后超出父容器
                overflow: 'hidden',
                marginTop: 48
            }}>
                <TextView
                    textColor={'#3E98FF'}
                    text={'+86'}
                />

                <EditText
                    style={{
                        position: 'absolute',
                        left: 52,
                        fontSize: 12,
                        // backgroundColor: 'orange',
                        flex: 1,
                        width: '100%'
                    }}
                    maxLength={11}
                    keyboardType={'numeric'}
                    placeholder={'请填写手机号码'}
                    selectionColor={AppColors.themeColor}
                    placeholderTextColor={'#888'}
                />

            </View>
        );
    };

    _buildVerifyCodeRow = () => {
        return (
            <View style={{
                flexDirection: 'row',
                marginLeft: 10,
                marginRight: 10,
                alignItems: "center",
                //输入框 width:100% 后超出父容器
                overflow: 'hidden',
                marginTop: 10
            }}>
                <TextView
                    textColor={'#000'}
                    text={'验证码'}
                />


                <EditText
                    style={{
                        position: 'absolute',
                        left: 52,
                        fontSize: 12,
                        // backgroundColor: 'orange',
                        width: '100%'
                    }}
                    maxLength={11}
                    keyboardType={'numeric'}
                    placeholder={'请填写验证码'}
                    selectionColor={AppColors.themeColor}
                    placeholderTextColor={'#888'}
                />
                <TouchFeedback
                    opacityRadio={0.6}
                    clickCallback={this._getVerifyCode}
                    touchStyle={{position: 'absolute', right: 0}}
                >

                    <TextView
                        text={'获取验证码'}
                        textColor={'#3E98FF'}
                    />

                </TouchFeedback>

            </View>
        );
    };

    _buildEnsure = () => {
        return (
            <TouchFeedback
                touchStyle={{alignSelf: 'stretch'}}
                clickCallback={() => {
                    console.warn('确定');
                }}
            >
                <TextView
                    textColor={'white'}
                    style={{
                        borderRadius: 3,
                        backgroundColor: '#3E98FF',
                        paddingTop: 8,
                        paddingBottom: 8,
                        marginTop: 40,
                        textAlign: 'center'
                    }}
                    text={'确定'}
                />
            </TouchFeedback>
        );
    };

    _getVerifyCode = () => {
        console.warn("获取验证码");
    };
}