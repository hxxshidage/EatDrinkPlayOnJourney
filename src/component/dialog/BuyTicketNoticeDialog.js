/**
 * @Description: 购票须知弹窗
 * @author HQ
 * @date 2019/7/3 16:55
 */

import {View} from "react-native";

import React from 'react';
import Dialog from "./Dialog";
import TextView from "../widget/common/TextView";
import TouchFeedback from "../widget/common/TouchFeedback";
import ImageView from "../widget/common/ImageView";
import HorDivider from "../widget/common/HorDivider";

export default class BuyTicketNoticeDialog extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <Dialog
                touchOutside2Cancel={true}
                cancelByBackPress={true}
                fillScreenOnWidth={true}
                // swipeDirection={['up', 'down']}
                ref={ref => this.dialog = ref}

                style={{justifyContent: 'flex-end'}}
            >
                <View style={{
                    paddingTop: 16,
                    paddingBottom: 24,
                    backgroundColor: "#fff",
                    borderRadius: 8,
                }}>

                    {this._buildCloseRow()}

                    <HorDivider
                        margin={[8, 0, 10, 0]}
                    />

                    <TextView
                        margin={[8,12, 16]}
                        text={'费用包含'}
                        textColor={'#000'}
                        textWeight={'bold'}
                    />

                    <TextView
                        margin={[12,0]}
                        numberOfLines={null}
                        text={'世界之窗门票一张'}
                        textColor={'#333'}
                    />


                    <TextView
                        margin={[30, 12,16]}
                        text={'使用说明'}
                        textColor={'#000'}
                        textWeight={'bold'}
                    />


                    {this._buildEnterWay()}

                    {this._buildEnterTime()}

                    {this._buildEnterAddress()}

                </View>

            </Dialog>
        );
    }

    _buildCloseRow = () => {
        return (
            <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10}}>

                <TextView
                    style={{flex: 1}}
                    textSize={16}
                    textColor={'#000'}
                    textWeight={'bold'}
                    text={'门票'}
                />

                <TouchFeedback
                    clickCallback={()=>{
                        this.dialog.hide();
                    }}
                    opacityRadio={0.65}
                    touchStyle={{padding: 3}}>

                    <ImageView
                        imgSrc={require('../../assets/images/mall/pay_way_close.png')}/>
                </TouchFeedback>

            </View>
        );
    };

    _buildEnterWay = () => {
        return (
            <View style={{flexDirection: 'row', alignItems: "center",paddingHorizontal: 10}}>

                <TextView
                    textColor={'#979797'}
                    text={'入园方式'}
                />

                <TextView
                    margin={[0,0,0,16]}
                    textColor={'#666'}
                    text={'凭票入园'}
                />

            </View>
        );
    };

    _buildEnterTime = () => {
        return (
            <View style={{flexDirection: 'row', alignItems: "center", marginTop: 24,paddingHorizontal: 10}}>

                <TextView
                    textColor={'#979797'}
                    text={'入园时间'}
                />

                <TextView
                    margin={[0,0,0,16]}
                    textColor={'#666'}
                    text={'09:00-17:30'}
                />

            </View>
        );
    };

    _buildEnterAddress = () => {
        return (
            <View style={{flexDirection: 'row', alignItems: "center",marginTop: 8,paddingHorizontal: 10}}>

                <TextView
                    textColor={'#979797'}
                    text={'入园地址'}
                />

                <TextView
                    margin={[0,0,0,16]}
                    textColor={'#666'}
                    text={'湖南省长沙市岳麓区兴工国际产业园'}
                />

            </View>
        );
    };

}