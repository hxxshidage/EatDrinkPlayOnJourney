import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Sizer} from "../../tools/tools";
import AvoidRepeatClickButton from './common/AvoidRepeatClickButton';
import PropTypes from 'prop-types';

export default class SectionRightMore extends AvoidRepeatClickButton {

    render(): React.ReactNode {
        const {rightArrowImg, text, textSize, textColor, padding, margin, goneArrow} = this.props;

        let rightImg = rightArrowImg || require('../../assets/images/main/right_more.png');

        return (
            <TouchableOpacity
                {...this.props}
                onPress={this.avoidMultiClick}
                activeOpacity={0.85}
                backgroundColor={'white'}
            >
                <View style={{
                    flexDirection: 'row', alignItems: 'center',
                    paddingTop: Sizer.obtainPaddingOrMarginFromArray(padding, 't'),
                    paddingBottom: Sizer.obtainPaddingOrMarginFromArray(padding, 'b'),
                    paddingLeft: Sizer.obtainPaddingOrMarginFromArray(padding, 'l'),
                    paddingRight: Sizer.obtainPaddingOrMarginFromArray(padding, 'r'),
                    marginTop: Sizer.obtainPaddingOrMarginFromArray(margin, 't'),
                    marginBottom: Sizer.obtainPaddingOrMarginFromArray(margin, 'b'),
                    marginLeft: Sizer.obtainPaddingOrMarginFromArray(margin, 'l'),
                    marginRight: Sizer.obtainPaddingOrMarginFromArray(margin, 'r'),
                }}>
                    <Text style={{flex: 1, fontSize: textSize, color: textColor}}>{text}</Text>
                    {goneArrow === true ? null : <Image source={rightImg}/>}
                </View>
            </TouchableOpacity>);
    }

    static propTypes = {
        rightArrowImg: PropTypes.number,
        text: PropTypes.string.isRequired,
        textSize: PropTypes.number,
        textColor: PropTypes.string,
        padding: PropTypes.array,
        margin: PropTypes.array,
        goneArrow: PropTypes.bool,
    };

}