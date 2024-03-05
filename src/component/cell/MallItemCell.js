import React from 'react';

import {
    View,
    StyleSheet, Text
} from 'react-native';
import {screenW} from "../../tools/tools";
import ImageView from "../widget/common/ImageView";
import TextView from "../widget/common/TextView";
import ListFeedbackItem from "../widget/common/ListFeedbackItem";

export default class MallItemCell extends React.PureComponent {

    render(): React.ReactNode {
        const item = this.props.item;

        return (
            <ListFeedbackItem
                {...this.props}
            >

                <View
                    style={{
                        width: (screenW - 24) / 2,
                        borderRadius: 5,
                        overflow: 'hidden',
                        backgroundColor: 'white',
                        // margin: 5
                        marginTop: 8,
                    }}>

                    <ImageView
                        size={[(screenW - 20) / 2, (screenW - 20) / 2]}
                        imgSrc={item.index % 3 === 0 ? require('../../assets/images/delete/mall_item.jpg') :
                            require('../../assets/images/delete/mall_item_milk.jpg')}
                    />

                    <TextView
                        margin={[5, 8, 3]}
                        textColor={'#000'}
                        textWeight={'bold'}
                        numberOfLines={2}
                        text={'云南白药牙膏好口腔去黄去口臭美白口气清新云南白药牙膏好口腔去黄去口臭美白口气清新'}
                    />
                    <Text
                        style={{
                            fontSize: 10,
                            marginBottom: 8,
                            marginLeft: 8,
                            color: '#FF3D3D'
                        }}>
                        $<Text
                        style={{
                            fontSize: 16, fontWeight: 'bold',
                            color: '#FF3D3D',
                        }}>32</Text>
                    </Text>
                </View>
            </ListFeedbackItem>
        );
    }
}