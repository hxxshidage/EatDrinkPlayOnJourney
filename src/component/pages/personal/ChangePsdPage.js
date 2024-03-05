/**
 * @Description: 修改密码界面
 * @author HQ
 * @date 2019/7/1 15:52
 */
import React from 'react';
import StatusWrapper from "../../widget/common/wrapper/StatusWrapper";
import HeaderBar from "../../widget/common/HeaderBar";
import {NavLeader} from "../../../tools/tools";
import {View} from 'react-native';
import TextView from "../../widget/common/TextView";
import HorDivider from "../../widget/common/HorDivider";
import EditText from "../../widget/common/EditText";
import TouchFeedback from "../../widget/common/TouchFeedback";
import {AppColors} from "../../../assets/colors/Color";

export default class ChangePsdPage extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <StatusWrapper style={{backgroundColor: "#eee"}}>

                <HeaderBar
                    onGoBack={() => {
                        NavLeader.goBack(this);
                    }}
                    title={'修改密码'}
                />


                {this._buildCurrentPsd()}

                <HorDivider
                    color={'#D2D2D2'}
                />

                {this._buildInputPsd()}

                <HorDivider
                    color={'#D2D2D2'}
                />

                {this._buildNextBtn()}

            </StatusWrapper>
        );
    }


    _buildCurrentPsd = () => {
        return (
            <View style={{
                marginTop: 3, flexDirection: "row", alignItems: 'center', backgroundColor: 'white',
                paddingHorizontal: 12
            }}>

                <TextView
                    style={{paddingVertical: 10, marginRight: 5, flex: 1}}
                    textColor={'#000'}
                    text={'当前密码'}
                />

                <EditText
                    style={{flex: 5}}
                    textSize={14}
                    textColor={'#000'}
                    hintSize={14}
                    hintColor={'#ccc'}
                    hint={'请输入当前登录密码'}
                />

            </View>
        );
    };

    _buildInputPsd = () => {
        return (
            <View style={{
                marginTop: 8, flexDirection: "row", alignItems: 'center', backgroundColor: 'white',
                paddingHorizontal: 12
            }}>

                <TextView
                    style={{paddingVertical: 10, marginRight: 5, flex: 1}}
                    textColor={'#000'}
                    text={'新密码'}
                />

                <EditText
                    style={{flex: 5}}
                    textSize={14}
                    textColor={'#000'}
                    hintSize={14}
                    hintColor={'#ccc'}
                    hint={'请输入新密码'}
                />

            </View>
        );
    };


    _buildNextBtn = () => {
        return (
            <TouchFeedback touchStyle={{marginTop: 60, marginHorizontal: 10}}>

                <TextView
                    style={{
                        textAlignVertical: 'center',
                        height: 45,
                        textAlign: 'center',
                        backgroundColor: AppColors.themeColor,
                        borderRadius:8
                    }}
                    text={'下一步'}
                    textColor={'white'}
                />

            </TouchFeedback>
        );
    };
}