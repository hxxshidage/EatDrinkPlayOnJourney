import React from 'react';
import {TouchableHighlight} from "react-native";
import PropTypes from 'prop-types';
import AvoidRepeatClickButton from './AvoidRepeatClickButton';

export default class TouchFocusChange extends AvoidRepeatClickButton {

    render(): React.ReactNode {
        const {onFocusChanged, pressedColor} = this.props;
        return (
            <TouchableHighlight
                {...this.props}
                underlayColor={pressedColor}
                onPress={this.avoidMultiClick}
                onHideUnderlay={() => {
                    onFocusChanged && onFocusChanged(false);
                    // this.refs.innerText.setNativeProps({style: {color: this.props.normalTextColor || '#ccc'}});
                }}
                onShowUnderlay={() => {
                    onFocusChanged && onFocusChanged(true);
                }}>
                {this.props.children}
            </TouchableHighlight>);
    }

    static propTypes = {
        pressedColor: PropTypes.string,
        onFocusChanged: PropTypes.func.isRequired,
        clickListener: PropTypes.func
    };
}