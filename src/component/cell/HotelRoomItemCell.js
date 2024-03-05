import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';
import ImageView from "../widget/common/ImageView";
import TextView from "../widget/common/TextView";
import ListFeedbackItem from "../widget/common/ListFeedbackItem";

export default class HotelRoomItemCell extends React.Component {

    static propTypes = {
        ...ListFeedbackItem.propTypes
    };

    render(): React.ReactNode {
        return (
            <View
                style={{flexDirection: 'row', padding: 10}}
            >
                <ImageView
                    size={[60]}
                    imgSrc={require('../../assets/images/delete/hotel_room.jpg')}
                />
                <View
                    style={{
                        flex: 1,
                        marginLeft: 10,
                        paddingTop: 2,
                        paddingBottom: 2,
                        justifyContent: "space-between"
                    }}
                >
                    <View style={{flexDirection: "row"}}>
                        <TextView
                            style={{flex: 1}}
                            textWeight={'bold'}
                            text={'总统套房'}
                            textColor={'#000'}
                        />

                        <TextView
                            textWeight={'bold'}
                            text={'$888'}
                            textColor={'#FF3D3D'}
                        />
                    </View>

                    {/*充分利用justifyContent:"space-between"  不一定要新加控件来挤剩余空间*/}
                    {/*<View style={{flex: 1}}/>*/}

                    <View style={{flexDirection: "row"}}>
                        <TextView
                            style={{flex: 1}}
                            text={'20㎡  大床1.5m  有wifi'}
                            textColor={'#000'}
                            textSize={12}
                        />

                        <TextView
                            text={'仅剩一间'}
                            textSize={12}
                            textColor={'#FF3D3D'}
                        />
                    </View>
                </View>

            </View>);


    }
}