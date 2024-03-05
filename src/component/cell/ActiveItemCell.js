/**
 * @Description: 活动列表  条目
 * @author HQ
 * @date 2019/7/2 15:56
 */
import React from 'react';
import {View} from 'react-native';
import ImageView from "../widget/common/ImageView";
import TextView from "../widget/common/TextView";

export default class ActiveItemCell extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <View style={{flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 12}}>

                <ImageView
                    corner={5}
                    size={[150, 75]}
                    imgSrc={require('../../assets/images/delete/food_detail.png')}
                />

                <View style={{flex: 1, paddingVertical: 3, justifyContent: "space-between", paddingLeft: 10}}>
                    <TextView
                        numberOfLines={2}
                        textColor={'#000'}
                        textWeight={'bold'}
                        text={'2019（第三届）思路零售数字化服务大会'}
                    />

                    <View style={{flexDirection: "row", alignItems: "center"}}>

                        <TextView
                            style={{flex: 1}}
                            textColor={'#979797'}
                            text={'07.02-08.03'}
                            textSize={12}
                        />

                        <TextView
                            text={'新宁县'}
                            textColor={'#979797'}
                            textSize={12}
                        />
                    </View>
                </View>

            </View>
        );
    }
}