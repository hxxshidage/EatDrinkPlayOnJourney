import React from 'react';
import {Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import AvoidRepeatClickButton from './AvoidRepeatClickButton';
import {Sizer} from "../../../tools/tools";
import PropTypes from "prop-types";
import TextView from "./TextView";

export default class HighlightFeedback extends AvoidRepeatClickButton {

    static propTypes = {
        ...AvoidRepeatClickButton.propTypes,
        normalColor: PropTypes.string,
        pressedColor: PropTypes.string,
        onFocusChanged: PropTypes.func,
    };

    render(): React.ReactNode {
        const {
            width,
            height,
            normalColor,
            backgroundColor,
            padding,
            margin,
            highOpacity,
            pressedColor,
            disabled,
            disabledColor,
            cornerRadius,
            expanded,
            btnStyle,
            align,
            onFocusChanged
        } = this.props;

        const pOrM = Sizer.obtainPaddingOrMarginFromArray;

        return (<TouchableHighlight
            pressRetentionOffset={{top: 2, left: 2, bottom: 2, right: 2}}
            onHideUnderlay={() => {
                onFocusChanged && onFocusChanged(false);
            }}
            onShowUnderlay={() => {
                onFocusChanged && onFocusChanged(true);
            }}
            ref={'touchTarget'}
            disabled={this.state.isDisabled}
            activeOpacity={highOpacity || 0.85}
            underlayColor={pressedColor}
            onPress={ev => {
                this.avoidMultiClick(ev);
            }}
            style={Object.assign({
                flex: expanded === true ? 1 : 0,
                width: width || null,
                height: height || null,
                borderRadius: cornerRadius || 0,
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: this.obtainAlignWay(align),
                paddingTop: pOrM(padding, 't'),
                paddingBottom: pOrM(padding, 'b'),
                paddingLeft: pOrM(padding, 'l'),
                paddingRight: pOrM(padding, 'r'),
                backgroundColor: disabled ? (disabledColor || normalColor || backgroundColor) : normalColor || backgroundColor,
                marginTop: pOrM(margin, 't'),
                marginBottom: pOrM(margin, 'b'),
                marginLeft: pOrM(margin, 'l'),
                marginRight: pOrM(margin, 'r'),
            }, btnStyle)}>
            {this.props.children}
        </TouchableHighlight>);
    }
}