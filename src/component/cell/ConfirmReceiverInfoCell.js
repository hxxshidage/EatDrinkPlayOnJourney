/**
 * @Description: 确定订单页  收货人信息item
 * @author HQ
 * @date 2019/6/18 13:49
 */
import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';
import ImageView from "../widget/common/ImageView";
import TextView from "../widget/common/TextView";
import TouchFeedback from "../widget/common/TouchFeedback";
import {NavLeader} from "../../tools/tools";

export default class ConfirmReceiverInfoCell extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <TouchFeedback
                clickCallback={this.props.clickCallback}>
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: 10,
                        marginHorizontal: 10,
                        paddingHorizontal: 8,
                        backgroundColor: "white",
                        borderRadius: 5,
                        paddingTop: 8,
                        paddingBottom: 16,
                        alignItems: 'center'
                    }}>

                    <View style={{flex: 1, marginRight: 16}}>

                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <TextView
                                text={'大白兔'}
                                textWeight={'bold'}
                                textColor={'#000'}
                            />
                            <TextView
                                margin={[16, 0]}
                                text={'18175970161'}
                                textColor={'#000'}
                                textWeight={'bold'}
                            />
                        </View>

                        <TextView
                            text={'湖南省长沙市打不累地区想不到公寓12栋23楼250号湖南省长沙市打不累地区想不到公寓12栋23楼250号'}
                            textSize={12}
                            textColor={'#666'}
                        />

                    </View>

                    <ImageView
                        imgSrc={require('../../assets/images/common/route_plan_right.png')}
                    />
                </View>
            </TouchFeedback>
        );
    }
}