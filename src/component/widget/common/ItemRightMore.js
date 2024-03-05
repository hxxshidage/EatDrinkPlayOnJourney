import React from 'react';

import {
    View,
} from 'react-native';

import PropTypes from 'prop-types';
import TextView from "./TextView";
import TouchFeedback from "./TouchFeedback";
import ImageView from "./ImageView";

export default class ItemRightMore extends React.PureComponent {

    static propTypes = {
        itemClick: PropTypes.func,
        extraData: PropTypes.any,
        textStyle: PropTypes.object,
        rightImg: PropTypes.number,
        ...TextView.propTypes,
    };

    render(): React.ReactNode {
        const {
            itemClick, extraData, textStyle, rightImg, style,
            text, textColor, textSize, textWeight
        } = this.props;
        return (
            <TouchFeedback
                opacityRadio={0.6}
                extraData={extraData}
                clickCallback={itemClick}
            >
                <View
                    style={[{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        padding: 10,
                    }, style]}>
                    <TextView
                        style={Object.assign({flex: 1}, textStyle)}
                        text={text}
                        textSize={textSize || 16}
                        textColor={textColor || '#000'}
                        textWeight={textWeight || 'bold'}
                    />
                    <ImageView
                        imgSrc={rightImg || require('../../../assets/images/common/route_plan_right.png')}
                    />
                </View>
            </TouchFeedback>
        );
    }
}