import React from 'react';
import {TouchableOpacity} from 'react-native';
import AvoidRepeatClickButton from './AvoidRepeatClickButton';
import {Sizer} from "../../../tools/tools";

export default class OpacityFeedback extends AvoidRepeatClickButton {

    static propTypes = {
        ...AvoidRepeatClickButton.propTypes
    };

    render(): React.ReactNode {
        const {
            width,
            height,
            backgroundColor,
            padding,
            margin,
            highOpacity,
            disabled,
            disabledColor,
            cornerRadius,
            expanded,
            btnStyle,
            align
        } = this.props;

        const pOrM = Sizer.obtainPaddingOrMarginFromArray;

        return (<TouchableOpacity
            pressRetentionOffset={{top: 2, left: 2, bottom: 2, right: 2}}
            ref={'touchTarget'}
            disabled={this.state.isDisabled}
            activeOpacity={highOpacity || 0.85}
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
                backgroundColor: disabled ? (disabledColor || backgroundColor) : backgroundColor,
                marginTop: pOrM(margin, 't'),
                marginBottom: pOrM(margin, 'b'),
                marginLeft: pOrM(margin, 'l'),
                marginRight: pOrM(margin, 'r'),
            }, btnStyle)}>
            {this.props.children}
        </TouchableOpacity>);
    }
}

