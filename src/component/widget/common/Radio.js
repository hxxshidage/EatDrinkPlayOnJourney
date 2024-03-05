import React from 'react';

import {
    CheckBox
} from 'react-native';

import PropTypes from 'prop-types';

export default class Radio extends React.PureComponent {


    static propTypes = {
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        onCheckedChanged: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {isChecked: this.props.checked};
    }


    setChecked = checked => {
        if (checked === this.state.isChecked) return;

        this.setState({isChecked: checked}, () => {
            this.props.onCheckedChanged && this.props.onCheckedChanged(this.state.isChecked);
        })
    };

    getChecked = () => this.state.isChecked;

    render(): React.ReactNode {
        return (
            <CheckBox
                {...this.props}
                disabled={this.props.disabled}
                value={this.state.isChecked}
                onValueChange={checked => {
                    this.setState({isChecked: checked},
                        () => {
                            this.props.onCheckedChanged && this.props.onCheckedChanged(this.state.isChecked);
                        })
                }}
            />
        );
    }
}