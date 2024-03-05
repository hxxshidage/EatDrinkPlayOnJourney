import React from 'react';

import {
    View,
} from 'react-native';
import ImageView from "../widget/common/ImageView";

import PropTypes from 'prop-types';
import TextView from "../widget/common/TextView";


export default class ComplainAcceptCell extends React.PureComponent {

    static propTypes = {
        item: PropTypes.object
    };

    render(): React.ReactNode {

        const {img, nickName, content, date} = this.props.item;
        return (
            <View
                style={{
                    flexDirection :'row',
                    alignItems: "center",
                    // backgroundColor: 'orange',
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingLeft: 10,
                    paddingRight: 10
                }}>

                <ImageView
                    size={[28]}
                    corner={14}
                    imgSrc={img}
                />

                <TextView
                    margin={[0, 16, 0, 5]}
                    text={nickName}
                    textSize={12}
                    textColor={'#888'}
                />

                <TextView
                    style={{flex: 1, marginRight: 16}}
                    text={content}
                    textColor={'#000'}
                />

                <TextView
                    text={date}
                    textColor={'#888'}
                    textSize={12}
                />
            </View>);

    }
}