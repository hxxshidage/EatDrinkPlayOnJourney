/**
 * @Description: 商品详情  商品介绍条目
 * @author HQ
 * @date 2019/6/28 17:48
 */
import React from 'react';
import {View} from 'react-native';
import TextView from "../widget/common/TextView";
import ImageView from "../widget/common/ImageView";
import HorDivider from "../widget/common/HorDivider";

export default class GoodsDetailIntroduceCell extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <View style={{backgroundColor: 'white'}}>

                <TextView
                    margin={[10, 0]}
                    text={'商品详情'}
                    textColor={'#000'}
                />

                <ImageView
                    resizeMode={'contain'}
                    style={{marginVertical: 12, marginHorizontal: 10}}
                    imgSrc={require('../../assets/images/delete/goods_detail.png')}
                />

                <HorDivider
                    height={5}
                />

            </View>
        );
    }
}