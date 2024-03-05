import React from 'react';

import {
    View,
    StyleSheet, ScrollView
} from 'react-native';
import InputWithCounter from "../../widget/common/InputWithCounter";
import HeaderBar from "../../widget/common/HeaderBar";
import HorDivider from "../../widget/common/HorDivider";
import TextView from "../../widget/common/TextView";
import {AppColors} from "../../../assets/colors/Color";
import TouchFeedback from "../../../component/widget/common/TouchFeedback";
import {NavLeader} from "../../../tools/tools";
import ImageHorListSelector from "../../widget/common/ImageHorListSelector";

export default class ComplainFeedbackPage extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <View
                style={{flex: 1}}>
                <HeaderBar
                    onGoBack={() => {
                        NavLeader.goBack(this);
                    }}
                    title={'意见反馈'}
                />

                <HorDivider/>

                <TextView
                    margin={[36, 10, 0]}
                    textColor={'#000'}
                    text={'意见反馈'}/>

                <InputWithCounter
                    ref={'inputCounter'}
                    inputHeight={60}
                    style={{marginTop: 8, marginBottom: 36}}
                    maxLength={500}
                    placeHolder={'写下您宝贵的意见'}
                />

                <View
                    style={{
                        flexDirection: 'row', alignItems: "center",
                        paddingHorizontal: 10, paddingBottom: 10
                    }}>


                    <TextView
                        textColor={'#000'}
                        text={'上传证据'}
                    />

                    <TextView
                        margin={[5, 0]}
                        textColor={'#888'}
                        textSize={12}
                        text={'(最多9张)'}
                    />
                </View>

                <View>
                    <ImageHorListSelector
                        padding={[0, 10, 10]}
                        ref={'imgSelector'}
                        maxSelectCount={9}
                        visibleCountInRow={4}
                        verticalSpace={5}
                    />
                </View>

                {this._buildSubmitBtn()}
            </View>);
    }

    _buildSubmitBtn = () => {
        return (
            <TouchFeedback
                clickCallback={this._submit}
                touchStyle={{
                    marginHorizontal: 10,
                    marginTop: 36,
                }}
            >
                <TextView
                    style={{
                        backgroundColor: AppColors.themeColor,
                        paddingVertical: 12,
                        textAlign: 'center',
                        borderRadius: 5
                    }}

                    textColor={'white'}
                    text={'提 交'}
                />

            </TouchFeedback>
        );
    };

    _submit = () => {
        console.warn(this.refs.inputCounter.getContent());
    };
}