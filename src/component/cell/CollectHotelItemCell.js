/**
 * @Description: 我的收藏--酒店条目
 * @author HQ
 * @date 2019/7/1 11:32
 */
import React from 'react';
import {Text, View} from 'react-native';
import ImageView from "../widget/common/ImageView";
import TextView from "../widget/common/TextView";

export default class CollectHotelItemCell extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <View
                style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10}}>

                <ImageView
                    size={[80]}
                    imgSrc={require('../../assets/images/delete/hotel_room.jpg')}
                />

                <View style={{flex: 1, marginLeft: 10}}>

                    <TextView
                        textWeight={'bold'}
                        textSize={16}
                        textColor={'#000'}
                        text={'德斯勤酒店'}
                    />


                    <TextView
                        margin={[0, 3]}
                        textColor={'#888'}
                        textSize={12}
                        text={'有大圆床哦'}
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