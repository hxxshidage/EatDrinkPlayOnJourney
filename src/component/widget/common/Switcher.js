/**
 * @Description: 封装系统Switch
 * @author HQ
 * @date 2019/7/1 14:59
 */
import React from 'react';
import {Switch} from 'react-native';
import PropTypes from 'prop-types';

export default class Switcher extends React.PureComponent {

    static propTypes = {
        value: PropTypes.bool,
        disabled: PropTypes.bool,
        onSwitchChanged: PropTypes.func
    };

    static defaultProps = {
        disabled: false,
        value: false
    };

    constructor(props) {
        super(props);
        this.state = {isOn: props.value}
    }

    setOn = on => {
        if (this.state.isOn === on) return;

        this.setState({isOn: on}, () => {
            this.props.onSwitchChanged && this.props.onSwitchChanged(this.state.isOn);
        })
    };

    getOn = () => this.state.isOn;


    render(): React.ReactNode {
        const {disabled, onSwitchChanged} = this.props;

        return (
            <Switch
                disabled={disabled}
                value={this.state.isOn}
                onValueChange={on => {
                    this.setState({isOn: on},
                        () => {
                            onSwitchChanged && onSwitchChanged(this.state.isOn);
                        });
                }}
            />
        );
    }
}