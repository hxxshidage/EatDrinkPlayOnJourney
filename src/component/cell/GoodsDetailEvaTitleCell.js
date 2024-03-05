/**
 * @Description: 商品详情 全部评价 条目
 * @author HQ
 * @date 2019/6/28 17:58
 */
import React from 'react';
import {View} from 'react-native';
import TextView from "../widget/common/TextView";
import ImageView from "../widget/common/ImageView";
import TouchFeedback from "../widget/common/TouchFeedback";

export default class GoodsDetailEvaTitleCell extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <TouchFeedback
                clickCallback={this.props.clickCallback}
                opacityRadio={0.65}>
                <View style={{
                    flexDirection: 'row', alignItems: 'center',
                    paddingHorizontal: 10, paddingTop: 16, paddingBottom: 12
                }}>

                    <TextView
                        style={{flex: 1}}
                        text={'宝贝评价(1258)'}
                        textColor={'#000'}
                    />

                    <TextView
                        textColor={'#FF3D3D'}
                        text={'查看全部'}
                        margin={[10, 0]}
                    />

                    <ImageView
                        imgSrc={require('../../assets/images/mall/goods_detail_eva_right.png')}
                    />

                </View>
            </TouchFeedback>
        );
    }
}

