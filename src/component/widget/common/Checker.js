/**
 * @Description: 选中与未选中状态的组件
 * @author HQ
 * @date 2019/6/29 16:41
 */
import React from 'react';
import TouchFeedback from "./TouchFeedback";
import PropTypes from 'prop-types';

export default class Checker extends React.PureComponent {
    static propTypes = {
        isChecked: PropTypes.bool,
        disabled: PropTypes.bool,
        onCheckedChanged: PropTypes.func,
        touchStyle: PropTypes.object
    };

    static defaultProps = {
        isChecked: false,
        disabled: false,
    };

    constructor(props) {
        super(props);
        this.state = {isChecked: this.props.isChecked};
    }

    getChecked = () => this.state.isChecked;

    setChecked = checked => {
        const {onCheckedChanged} = this.props;

        this.setState({isChecked: checked},
            () => {
                onCheckedChanged && onCheckedChanged(this.state.isChecked);
            })
    };

    render(): React.ReactNode {
        return (
            <TouchFeedback
                touchStyle={this.props.touchStyle}
                disabled={this.props.disabled}
                opacityRadio={0.70}
                clickCallback={this._handleCheck}>
                {this.props.children}
            </TouchFeedback>
        );
    }

    _handleCheck = () => {
        const {onCheckedChanged} = this.props;

        this.setState({isChecked: !this.state.isChecked},
            () => {
                onCheckedChanged && onCheckedChanged(this.state.isChecked);
            });
    };
}