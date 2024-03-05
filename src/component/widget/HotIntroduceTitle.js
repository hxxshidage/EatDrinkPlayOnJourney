/**
 * @Description: 购物车 热门推荐
 * @author HQ
 * @date 2019/6/17 16:58
 */

import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';
import {screenW} from "../../tools/tools";
import TextView from "./common/TextView";

export default class HotIntroduceTitle extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: "center",
                alignItems: "center",
                width: screenW,
                marginTop: 16,
            }}>

                <View
                    style={{
                        width: 60,
                        height: 1,
                        backgroundColor: "#FF3D3D"
                    }}
                />
                <TextView
                    text={'热门推荐'}
                    textColor={'#FF3D3D'}
                    textSize={12}
                    margin={[16, 0]}
                />

                <View
                    style={{
                        width: 60,
                        height: 1,
                        backgroundColor: "#FF3D3D"
                    }}
                />

            </View>
        );
    }
}