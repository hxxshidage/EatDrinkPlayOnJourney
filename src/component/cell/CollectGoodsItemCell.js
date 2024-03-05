/**
 * @Description: 我的收藏--商品  条目
 * @author HQ
 * @date 2019/7/1 10:50
 */
import React from 'react';
import {View, Text} from 'react-native';
import ImageView from "../widget/common/ImageView";
import TextView from "../widget/common/TextView";

export default class CollectGoodsItemCell extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <View
                style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10}}>

                <ImageView
                    size={[80]}
                    imgSrc={require('../../assets/images/delete/mall_item_milk.jpg')}
                />

                <View style={{flex: 1, marginLeft: 10}}>

                    <TextView
                        textWeight={'bold'}
                        textSize={16}
                        textColor={'#000'}
                        text={'蓝月亮柔顺剂'}
                    />


                    <TextView
                        margin={[0, 3]}
                        textColor={'#888'}
                        textSize={12}
                        text={'柔顺剂好好好'}
                    />

                    <Text style={{fontSize: 10, fontWeight: 'bold', color: '#E51B1B'}}>
                        $
                        <Text style={{fontSize: 16}}>
                            100
                        </Text>
                    </Text>

                </View>
            </View>
        );
    }
}