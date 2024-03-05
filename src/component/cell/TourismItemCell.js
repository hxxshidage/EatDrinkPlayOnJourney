import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';
import ImageView from "../widget/common/ImageView";
import TextView from "../widget/common/TextView";
import TextWithIcon from "../widget/common/TextWithIcon";
import ListFeedbackItem from "../widget/common/ListFeedbackItem";

export default class TourismItemCell extends React.Component {
    render(): React.ReactNode {
        return (
            <ListFeedbackItem
                {...this.props}>

                <View
                    style={{
                        flexDirection: 'row',
                        // backgroundColor: 'orange',
                        padding: 10
                    }}>

                    <View style={{
                        flex: 1, marginRight: 10, paddingTop: 1, paddingBottom: 1,
                        alignItems: 'flex-start'
                    }}>

                        <TextView
                            numberOfLines={2}
                            text={'“靖康之耻”有多惨靖康之耻”有多惨靖康之耻”有多惨靖康之耻”有多惨'}
                            textColor={'#000'}
                            textSize={14}
                            textWeight={'bold'}
                        />

                        <TextWithIcon
                            margin={[3, 0, 0]}
                            corner={15}
                            direct={'l'}
                            imgSize={[18]}
                            imgSrc={require('../../assets/images/delete/header.jpg')}
                            iconPadding={3}
                            text={'小太阳包包'}
                            textSize={10}
                            textColor={'#000'}
                        />

                        <View style={{flex: 1}}/>

                        {this._buildInfo()}

                    </View>

                    <ImageView
                        size={[130, 85]}
                        imgSrc={require('../../assets/images/delete/toursim_img.png')}
                    />
                </View>
            </ListFeedbackItem>
        );
    }

    _buildInfo = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                <ImageView
                    imgSrc={require('../../assets/images/common/browse_count.png')}
                />

                <TextView
                    margin={[0, 16, 0, 3]}
                    text={'5124'}
                    textSize={12}
                    textColor={'#888'}
                />

                <ImageView
                    imgSrc={require('../../assets/images/common/comment_count.png')}
                />

                <TextView
                    margin={[0, 0, 0, 3]}
                    text={'5124'}
                    textSize={12}
                    textColor={'#888'}
                />
            </View>
        );
    };
}