/**
 * @Description: 项目默认加载Loading
 * @author HQ
 * @date 2019/7/5 16:32
 */
import React from 'react';
import {PulseLoader} from 'react-native-indicator';
import {AppColors} from "../../../../assets/colors/Color";
import TextView from "../TextView";
import FillWrapper from "../wrapper/FillWrapper";

export default class Loading extends React.PureComponent {

    render(): React.ReactNode {
        return (
            <FillWrapper
                style={{alignItems: 'center', justifyContent: 'center'}}>

                <PulseLoader
                    color={AppColors.themeColor}
                />

                <TextView
                    margin={[16, 0, 0, 0]}
                    text={'加载中...'}
                    textSize={12}
                    textColor={'#999'}
                />

            </FillWrapper>
        );
    }
}