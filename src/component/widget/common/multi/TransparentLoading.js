/**
 * @Description: 透明的Loading  适合详情页,webview的加载
 * @author HQ
 * @date 2019/7/8 10:55
 */
import React from 'react';
import FillWrapper from "../wrapper/FillWrapper";
import {PulseLoader} from 'react-native-indicator';
import {AppColors} from "../../../../assets/colors/Color";
import {TouchableOpacity} from "react-native";


export default class TransparentLoading extends React.PureComponent {
    render(): React.ReactNode {
        return (

            <TouchableOpacity
                //当loading时屏蔽掉 loading层下的事件
                onResponderTerminationRequest={() => false}
                style={[{flex: 1},this.props.style]}
                activeOpacity={1}
                onPress={() => {
                    console.warn("wtk");
                }}>

                <FillWrapper
                    style={{justifyContent: 'center', alignItems: 'center'}}>

                    <PulseLoader
                        color={AppColors.themeColor}
                    />

                </FillWrapper>

            </TouchableOpacity>

        );
    }
}