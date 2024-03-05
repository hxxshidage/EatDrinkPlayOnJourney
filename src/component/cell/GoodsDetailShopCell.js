/**
 * @Description: 店铺详情 店铺入口条目
 * @author HQ
 * @date 2019/6/28 17:09
 */
import React from 'react';
import {View} from 'react-native';
import ImageView from "../widget/common/ImageView";
import TextView from "../widget/common/TextView";
import TouchFeedback from "../widget/common/TouchFeedback";
import HorDivider from "../widget/common/HorDivider";

export default class GoodsDetailShopCell extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <View style={{
                backgroundColor: 'white'

            }}>
                <TouchFeedback
                    clickCallback={this.props.clickCallback}
                    opacityRadio={0.65}>
                    <View style={{
                        flexDirection: "row",
                        paddingHorizontal: 10,
                        paddingTop: 12,
                    }}>
                        <ImageView
                            size={[60]}
                            imgSrc={require('../../assets/images/delete/ls.jpg')}
                        />

                        <View style={{justifyContent: 'space-between', flex: 1, marginLeft: 12, paddingVertical: 8}}>

                            <View style={{flexDirection: "row", alignItems: "center"}}>
                                <TextView
                                    style={{flex: 1}}
                                    text={'绿源水果店'}
                                    textColor={'#000'}
                                    textWeight={'bold'}
                                />

                                <TextView
                                    margin={[8, 0]}
                                    text={'进店'}
                                    textSize={12}
                                    textColor={'#3E98FF'}
                                />

                                <ImageView
                                    imgSrc={require('../../assets/images/mall/goods_detail_right.png')}
                                />
                            </View>

                            <TextView
                                text={'在售商品: 125'}
                                textColor={'#000'}
                                textSize={12}
                            />
                        </View>
                    </View>
                </TouchFeedback>

                <HorDivider
                    height={5}
                    margin={[12, 0, 0, 0]}
                />
            </View>

        );
    }
}