import React from 'react';

import {
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';

import PropTypes from 'prop-types';
import {AppColors} from "../../../assets/colors/Color";

export default class TouchFeedback extends React.PureComponent {
    state = {isDisabled: false};

    constructor(props) {
        super(props);
        this.state = {isDisabled: this.props.disabled || false};
    }

    static propTypes = {
        //opacity highlight
        effect: PropTypes.string,
        clickCallback: PropTypes.func,
        extraData: PropTypes.any,
        opacityRadio: PropTypes.number,
        activeColor: PropTypes.string,
        onFocusChanged: PropTypes.func,
        touchStyle: PropTypes.object,
    };

    render(): React.ReactNode {
        const {effect} = this.props;
        let eff = effect || 'opacity';
        return eff === 'opacity' ? this._buildOpacity() : this._buildHighlight();
    }

    _buildOpacity = () => {
        const {opacityRadio, extraData, touchStyle} = this.props;
        return (
            <TouchableOpacity
                style={touchStyle}
                pressRetentionOffset={{top: 2, left: 2, bottom: 2, right: 2}}
                activeOpacity={opacityRadio || 0.85}
                disabled={this.state.isDisabled}
                onPress={ev => {
                    this._avoidMultiClick(extraData, ev)
                }}
            >
                {this.props.children}
            </TouchableOpacity>
        );
    };

    _buildHighlight = () => {
        const {opacityRadio, extraData, activeColor, onFocusChanged, touchStyle} = this.props;

        return (
            <TouchableHighlight
                style={touchStyle}
                pressRetentionOffset={{top: 2, left: 2, bottom: 2, right: 2}}
                underlayColor={activeColor || AppColors.themeColor}
                activeOpacity={opacityRadio || 0.85}
                disabled={this.state.isDisabled}
                onHideUnderlay={() => {
                    onFocusChanged && onFocusChanged(false);
                }}
                onShowUnderlay={() => {
                    onFocusChanged && onFocusChanged(true);
                }}
                onPress={ev => {
                    this._avoidMultiClick(extraData, ev)
                }}
            >
                {this.props.children}

            </TouchableHighlight>);
    };

    _avoidMultiClick = (extra, ev) => {
        const {clickCallback} = this.props;
        this.setState({isDisabled: true}, () => {
            clickCallback && clickCallback(extra, ev);
            this.setState({isDisabled: false});
        });
    };
}