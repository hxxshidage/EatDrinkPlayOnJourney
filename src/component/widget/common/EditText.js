import React from 'react';

import {
    TextInput
} from 'react-native';

import PropTypes from 'prop-types';
import {AppColors} from "../../../assets/colors/Color";
import TextView from "./TextView";

export default class EditText extends React.PureComponent {

    static propTypes = {
        onChanged: PropTypes.func,
        ...TextView.propTypes,
        hint: PropTypes.string,
        hintColor: PropTypes.string,
        cursorColor: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {text: this.props.text};
    }


    getText = () => this.state.text;

    setText = text => {
        this.setState({text}, () => {
            this.props.onChanged && this.props.onChanged(this.state.text);
        });
    };


    render(): React.ReactNode {
        const {
            style,
            hint, hintColor, cursorColor, textSize, textColor
        } = this.props;
        return (
            <TextInput
                {...this.props}
                style={[{
                    padding: 0,
                    fontSize: textSize,
                    color: textColor,
                }, style]}
                ref={ref => this.edit = ref}
                onChangeText={text => {
                    this.setState({text: text});
                    this.props.onChanged && this.props.onChanged(text);
                }}
                selectionColor={cursorColor || AppColors.themeColor}
                placeholder={hint}
                placeholderTextColor={hintColor || '#ccc'}
                value={this.state.text}
            />
        );
    }


}