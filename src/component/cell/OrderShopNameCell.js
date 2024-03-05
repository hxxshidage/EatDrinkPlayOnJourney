/**
 * @Description: 我的订单 店铺条目
 * @author HQ
 * @date 2019/7/2 13:58
 */
import React from 'react';
import {View} from "react-native";
import TextView from "../widget/common/TextView";
import ImageView from "../widget/common/ImageView";

export default class OrderShopNameCell extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    paddingHorizontal: 8,
                    paddingVertical: 16,
                    marginHorizontal: 10,
                    marginTop: 10,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    backgroundColor: 'white'
                }}>

                <TextView
                    style={{flex: 1}}
                    text={'店铺: 三棵松树'}
                    textColor={'#000'}
                />

                <ImageView
                    imgSrc={require('../../assets/images/common/route_plan_right.png')}
                />
            </View>);
    }
}