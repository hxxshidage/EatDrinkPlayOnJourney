import React from 'react';

import {
    View,
    StyleSheet, Image
} from 'react-native';
import TextView from "../widget/common/TextView";
import ListFeedbackItem from "../widget/common/ListFeedbackItem";
import {FoodListCellStyle as styles} from "../../assets/styles/food/FoodStyle";
import ImageView from "../widget/common/ImageView";
import RatingBar from "../widget/common/RatingBar";

export default class HotelListItemCell extends React.Component {
    /*render(): React.ReactNode {
        return (
            <View

            >
                <TextView text={"日死你"}/>
            </View>);
    }*/
    static propTypes = {
        ...ListFeedbackItem.propTypes
    };

    render(): React.ReactNode {

        return (
            <ListFeedbackItem
                {...this.props}
                rippleColor={'#ccc'}
            >
                <View style={styles.root}>
                    <ImageView
                        size={[80]}
                        imgSrc={require('../../assets/images/delete/hotel_hotel.jpg')}/>
                    <View
                        style={styles.rightRoot}>

                        <View style={{
                            flexDirection: 'row',
                            // backgroundColor: 'orange',
                            alignItems: 'center',
                        }}>
                            <TextView
                                text={'小天鹅戴斯'}
                                textSize={14}
                                style={styles.titleText}/>
                            <TextView
                                textSize={12}
                                text={'500m'}
                                textColor={'#888888'}
                            />
                        </View>

                        <View style={styles.ratingRoot}>
                            <RatingBar
                                size={12}
                                rating={3.3}
                            />

                            <TextView
                                textSize={12}
                                style={{marginLeft: 10}}
                                textColor={'#888'}
                                text={'$888/人'}/>
                        </View>

                        <TextView
                            text={'总统套房 钟点房'}
                            textColor={'black'}
                            textSize={12}
                            style={{
                                flex: 1,
                                textAlignVertical: 'bottom'
                            }}/>
                    </View>
                </View>
            </ListFeedbackItem>
        );
    }
}