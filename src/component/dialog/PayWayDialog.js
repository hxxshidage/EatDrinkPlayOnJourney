/**结算方式选择弹窗
 * @Description:
 * @author HQ
 * @date 2019/6/29 16:00
 */
import React from 'react';
import {View} from "react-native";
import Dialog from "./Dialog";
import TouchFeedback from "../widget/common/TouchFeedback";
import TextView from "../widget/common/TextView";
import HorDivider from "../widget/common/HorDivider";
import ImageView from "../widget/common/ImageView";
import PayWayCheck from "../widget/PayWayCheck";

export default class PayWayDialog extends React.PureComponent {

    state = {isWeChatChecked: true};


    render(): React.ReactNode {
        return (
            <Dialog
                touchOutside2Cancel={false}
                cancelByBackPress={true}
                fillScreenOnWidth={true}
                // swipeDirection={['up', 'down']}
                ref={ref => this.dialog = ref}

                style={{justifyContent: 'flex-end'}}
            >
                <View style={{
                    paddingTop: 16,
                    paddingBottom: 24,
                    paddingHorizontal: 10,
                    backgroundColor: "#fff",
                    alignItems: "center"
                }}>

                    {this._buildCloseRow()}

                    <TextView
                        margin={[48, 0, 24]}
                        textWeight={'bold'}
                        textColor={'#000'}
                        textSize={32}
                        text={'￥39.80'}
                    />

                    <TextView
                        style={{alignSelf: 'flex-start'}}
                        text={'请选择支付方式'}
                        textColor={'#666'}
                    />

                    <HorDivider
                        margin={[8, 0, 0, 0]}
                        stretchActive={true}
                    />


                    <PayWayCheck
                        onCheckInGroup={() => {
                            this.setState({isWeChatChecked: true})
                        }}
                        isChecked={this.state.isWeChatChecked}
                        icon={require('../../assets/images/mall/we_chat_pay.png')}
                        title={'微信支付'}
                    />

                    <HorDivider
                        stretchActive={true}
                    />

                    <PayWayCheck
                        onCheckInGroup={() => {
                            this.setState({isWeChatChecked: false})
                        }}
                        isChecked={!this.state.isWeChatChecked}
                        icon={require('../../assets/images/mall/ali_pay.png')}
                        title={'支付宝支付'}
                    />
                    <HorDivider
                        stretchActive={true}
                    />

                    {this._buildEnsureButton()}
                </View>
            </Dialog>);
    }

    _buildCloseRow = () => {
        return (
            <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: "flex-start"}}>

                <TextView
                    style={{
                        position: "absolute",
                        width: '100%',
                        textAlign: 'center',
                        left: 0,
                    }}
                    textWeight={'bold'}
                    textColor={'#000'}
                    text={'确认付款'}
                />

                <TouchFeedback
                    opacityRadio={0.65}
                    clickCallback={() => {
                        this.dialog.hide();
                    }}
                    touchStyle={{paddingVertical: 3, paddingRight: 3}}>
                    <ImageView
                        imgSrc={require('../../assets/images/mall/pay_way_close.png')}
                    />
                </TouchFeedback>

            </View>
        );
    };

    _buildEnsureButton = () => {
        return (
            <TouchFeedback
                clickCallback={this._payNow}
                touchStyle={{alignSelf: 'stretch'}}>
                <TextView
                    textColor={'white'}
                    text={'立即付款'}
                    style={{
                        backgroundColor: '#3E98FF',
                        borderRadius: 24,
                        height: 45,
                        textAlignVertical: 'center',
                        marginTop: 36,
                        textAlign: 'center'
                    }}
                />
            </TouchFeedback>
        );
    };

    _payNow = () => {
        if (this.state.isWeChatChecked) {
            console.warn("微信支付");
        } else {
            console.warn("支付宝支付");
        }
    };

}