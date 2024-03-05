import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';
import TouchFeedback from "./common/TouchFeedback";
import TextView from "./common/TextView";
import PropTypes from 'prop-types';
import ImageView from "./common/ImageView";

export default class SearchBar extends React.PureComponent {

    static propTypes = {
        ...TextView.propTypes,
        ...TouchFeedback.propTypes,
    };

    render(): React.ReactNode {
        const {text} = this.props;
        return (
            <TouchFeedback
                opacityRadio={0.7}
                {...this.props}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        backgroundColor: "#eee",
                        height: 30,
                        borderRadius: 15,
                        paddingHorizontal: 15,
                        marginHorizontal: 12,
                    }}>

                    <ImageView
                        imgSrc={require('../../assets/images/common/search_bar_icon.png')}
                    />

                    <TextView
                        margin={[0, 0, 0, 8]}
                        text={text}
                        textColor={'#888'}
                        textSize={12}
                    />
                </View>
            </TouchFeedback>);
    }
}