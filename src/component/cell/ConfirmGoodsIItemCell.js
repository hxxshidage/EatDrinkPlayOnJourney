import React from 'react';

import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import ImageView from "../widget/common/ImageView";
import TextView from "../widget/common/TextView";

export default class ConfirmGoodsIItemCell extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginHorizontal: 10,
                    paddingHorizontal: 8,
                    backgroundColor: 'white',
                    paddingTop: 5,
                    paddingBottom: 10,
                }}>


                <ImageView
                    size={[75]}
                    imgSrc={require('../../assets/images/delete/mall_item_milk.jpg')}
                />

                <View style={{marginLeft: 8, marginRight: 16, flex: 1, justifyContent: "space-between"}}>
                    <TextView
                        numberOfLines={2}
                        textColor={'#000'}
                        textWeight={'bold'}
                        text={'云南白药牙膏好口腔去黄去口臭美白口气清新云南白药牙膏好口腔去黄去口臭美白口气清新'}
                    />


                    <TextView
                        textSize={12}
                        textColor={'#888'}
                        text={'这个是规格大小等等'}
                    />

                </View>

                <View style={{alignItems: 'flex-end'}}>


                    <Text style={{color: '#000', fontSize: 10,fontWeight: 'bold'}}>
                        $
                        <Text style={{fontSize: 16, }}>
                            45.00
                        </Text>
                    </Text>


                    <TextView
                        textColor={'#888'}
                        textSize={10}
                        text={'x1'}
                    />
                </View>


            </View>);
    }
}