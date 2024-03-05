/**
 * @Description: 我的订单  订单状态条目
 * @author HQ
 * @date 2019/7/2 14:21
 */
import React from 'react';
import {View} from 'react-native';
import BorderText from "../widget/common/BorderText";

export default class OrderStateCell extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <View style={{
                flexDirection: "row",
                justifyContent: 'flex-end',
                alignItems: 'center',
                flexWrap: 'wrap',
                alignContent: 'flex-end',
                marginHorizontal: 10,
                paddingHorizontal: 8,
                backgroundColor: 'white',
                paddingTop: 16,
                paddingBottom: 12,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5
            }}>

                <BorderText
                    margin={[0, 0, 0, 12]}
                    textSize={12}
                    text={'退款'}
                    textColor={'#707070'}
                    textStyle={{paddingVertical: 3, paddingHorizontal: 12}}
                />

                <BorderText
                    margin={[0, 0, 0, 12]}
                    textSize={12}
                    text={'确认收获'}
                    textColor={'#FF3D3D'}
                    textStyle={{paddingVertical: 3, paddingHorizontal: 12}}
                />
                <BorderText
                    margin={[0, 0, 0, 12]}
                    textSize={12}
                    text={'退款中'}
                    textColor={'#46C146'}
                    textStyle={{paddingVertical: 3, paddingHorizontal: 12}}
                />
            </View>
        );
    }
}