/**
 * @Description: 我的订单  商品描述条目
 * @author HQ
 * @date 2019/7/2 14:09
 */
import React from 'react';
import {View, Text} from 'react-native';
import TextView from "../widget/common/TextView";

export default class OrderGoodsDesCell extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <View style={{
                flexDirection: 'row', alignItems: "baseline", justifyContent: 'flex-end',
                marginHorizontal: 10,
                paddingHorizontal: 8,
                backgroundColor: 'white',
                paddingVertical: 5
            }}>

                <TextView
                    margin={[0, 16, 0, 0]}
                    text={'共5件商品'}
                    textColor={'#000'}
                    textSize={12}
                />

                <Text style={{fontSize: 12, color: '#000'}}>
                    合计:
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                        90.00
                    </Text>
                </Text>


            </View>
        );
    }
}