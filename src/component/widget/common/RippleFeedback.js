import React from 'react';
import {
    TouchableNativeFeedback,
    View,
} from 'react-native';

import {Differ, Sizer} from "../../../tools/tools";
import PropTypes from "prop-types";
import AvoidRepeatClickButton from './AvoidRepeatClickButton';
import HighlightFeedback from "./HighlightFeedback";

export default class RippleFeedback extends AvoidRepeatClickButton {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        ...HighlightFeedback.propTypes,
        rippleColor: PropTypes.string,
    };

    render(): React.ReactNode {
        return Differ.isAndroid() ? this._buildAndroid() : this._buildIos();
    }

    _buildAndroid = () => {
        const {
            width,
            height,
            rippleColor,
            rippleSpread,
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
            align
        } = this.props;

        const pOrM = Sizer.obtainPaddingOrMarginFromArray;

        return (<View
                style={Object.assign(btnStyle || {}, {
                    flex: expanded === true ? 1 : 0,
                    width: width || null,
                    borderRadius: cornerRadius || 0,
                    overflow: 'hidden',
                    marginTop: pOrM(margin, 't'),
                    marginBottom: pOrM(margin, 'b'),
                    marginLeft: pOrM(margin, 'l'),
                    marginRight: pOrM(margin, 'r'),
                })}>

                <TouchableNativeFeedback
                    pressRetentionOffset={{top: 2, left: 2, bottom: 2, right: 2}}
                    ref={'touchTarget'}
                    disabled={this.state.isDisabled}
                    activeOpacity={highOpacity || 0.85}/*改变的是rippleColor的透明度*/
                    background={TouchableNativeFeedback.Ripple(pressedColor || rippleColor, rippleSpread)}
                    onPress={ev => {
                        this.avoidMultiClick(ev);
                    }}>

                    <View style={{
                        height: height || null,
                        paddingTop: pOrM(padding, 't'),
                        paddingBottom: pOrM(padding, 'b'),
                        paddingLeft: pOrM(padding, 'l'),
                        paddingRight: pOrM(padding, 'r'),
                        backgroundColor: disabled ? (disabledColor || (normalColor || backgroundColor)) : (normalColor || backgroundColor),
                        justifyContent: 'center',
                        alignItems: this.obtainAlignWay(align),
                    }}>
                        {this.props.children}
                    </View>

                </TouchableNativeFeedback>
            </View>
        );
    };

    _buildIos = () => {
        const {
            clickListener,
            width,
            height,
            rippleColor,
            normalColor,
            padding,
            margin,
            highOpacity,
            pressedColor,
            disabled,
            disabledColor,
            cornerRadius,
            expanded,
            btnStyle,
            textStyle,
            align,
            onFocusChanged
        } = this.props;

        return (
            <HighlightFeedback
                pressRetentionOffset={{top: 2, left: 2, bottom: 2, right: 2}}
                align={align}
                clickListener={clickListener}
                width={width}
                height={height}
                normalColor={normalColor}
                padding={padding}
                margin={margin}
                highOpacity={highOpacity}
                pressedColor={pressedColor || rippleColor}
                disabled={disabled}
                disabledColor={disabledColor}
                cornerRadius={cornerRadius}
                expanded={expanded}
                btnStyle={btnStyle}
                textStyle={textStyle}
                onFocusChanged={onFocusChanged}>
                {this.props.children}
            </HighlightFeedback>

        );
    };


}