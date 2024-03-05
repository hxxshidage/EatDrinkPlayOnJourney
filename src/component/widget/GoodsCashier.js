/**
 * @Description: 商品详情页 底部结算台
 * @author HQ
 * @date 2019/6/19 17:56
 */

import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';
import HorDivider from "./common/HorDivider";
import TextView from "./common/TextView";
import TouchFeedback from "./common/TouchFeedback";
import TextWithIcon from "./common/TextWithIcon";
import ImageView from "./common/ImageView";


export default class GoodsCashier extends React.PureComponent {
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
                        alignItems: 'center'
                    }}>

                    <TouchFeedback
                        opacityRadio={0.65}
                        touchStyle={{flex: 1.35}}
                    >
                        <TextWithIcon
                            imgSrc={require('../../assets/images/mall/goods_customer_service.png')}
                            text={'客服'}
                            textColor={'#999'}
                            iconPadding={2}
                            textSize={12}
                        />
                    </TouchFeedback>

                    <TouchFeedback
                        opacityRadio={0.65}
                        touchStyle={{flex: 1.35}}
                    >
                        <TextWithIcon
                            imgSrc={require('../../assets/images/mall/goods_collection.png')}
                            text={'收藏'}
                            textColor={'#999'}
                            iconPadding={2}
                            textSize={12}
                        />
                    </TouchFeedback>


                    <TouchFeedback
                        touchStyle={{flex: 2}}
                    >
                        <TextView
                            style={{
                                height: 49,
                                backgroundColor: "#3E98FF",
                                textAlignVertical: 'center',
                                textAlign: 'center'
                            }}
                            text={'加入购物车'}
                            textColor={'white'}
                        />
                    </TouchFeedback>

                    <TouchFeedback
                        touchStyle={{flex: 2}}
                    >
                        <TextView
                            style={{
                                height: 49,
                                backgroundColor: "#FF3D3D",
                                textAlignVertical: 'center',
                                textAlign: 'center'
                            }}
                            text={'立即购买'}
                            textColor={'white'}
                        />
                    </TouchFeedback>
                </View>
            </View>);
    }
}