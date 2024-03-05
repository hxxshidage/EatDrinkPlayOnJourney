import React from 'react';
import {Image, View,} from "react-native";
import TextView from "../widget/common/TextView";
import RatingBar from "../widget/common/RatingBar";
import {FoodListCellStyle as styles} from "../../assets/styles/food/FoodStyle";
import ListFeedbackItem from '../widget/common/ListFeedbackItem';

export default class FoodListItemCell extends React.Component {

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
                    <Image
                        style={{width: 80, height: 80}}
                        source={require('../../assets/images/delete/main_introduce.png')}/>
                    <View
                        style={styles.rightRoot}>

                        <View style={{
                            flexDirection: 'row',
                            // backgroundColor: 'orange',
                            alignItems: 'center',
                        }}>
                            <TextView
                                text={'苍之涛海鲜自助主题餐厅'}
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
                                text={'$28人'}/>
                        </View>

                        <TextView
                            text={'自助餐 西餐 海鲜'}
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