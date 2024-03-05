/**
 * @Description: 确认订单 底部结算
 * @author HQ
 * @date 2019/6/18 15:38
 */

import React from 'react';


import {
    View,
    StyleSheet
} from 'react-native';
import {AppColors} from "../../assets/colors/Color";
import TouchFeedback from "./common/TouchFeedback";
import HorDivider from "./common/HorDivider";
import TextView from "./common/TextView";

export default class ConfirmCashier extends React.Component {
    render(): React.ReactNode {
        return (
            <View style={{
                height: 50,
                width: '100%',
                position: 'relative',
                right: 0,
                bottom: 0,
                backgroundColor: 'white',
            }}>

                <HorDivider
                    color={'#DEDEDE'}
                />

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    }}>


                    <TextView
                        text={'合计:'}
                        textColor={'#333'}
                    />

                    <TextView
                        margin={[10, 0]}
                        text={"45.00" || '0.00'}
                        textColor={'#FF3D3D'}
                    />

                    <TouchFeedback clickCallback={this.props.clickCallback}>

                        <TextView
                            style={{
                                width: 105,
                                height: 49,
                                backgroundColor: "#FF9C03", textAlignVertical: 'center',
                                textAlign: 'center'
                            }}
                            text={'提交订单'}
                            textColor={'white'}
                        />
                    </TouchFeedback>
                </View>
            </View>);

    }
}