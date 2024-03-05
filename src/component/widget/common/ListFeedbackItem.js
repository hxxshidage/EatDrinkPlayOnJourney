import React from 'react';

import {
    TouchableNativeFeedback
    , View
} from 'react-native';

import PropTypes from 'prop-types';
import {Sizer} from "../../../tools/tools";

export default class ListFeedbackItem extends React.PureComponent {

    state = {isDisabled: false};

    _obtainPorM = Sizer.obtainPaddingOrMarginFromArray;

    constructor(props) {
        super(props);
        this.state = {isDisabled: this.props.disabled || false};
    }


    static propTypes = {
        itemClick: PropTypes.func,
        itemIndex: PropTypes.number,
        item: PropTypes.any,
        cornerRadius: PropTypes.number,
        margin: PropTypes.array,
        rippleColor: PropTypes.string,
        rippleOpacity: PropTypes.number,
    };

    render(): React.ReactNode {
        const {cornerRadius} = this.props;
        const hasCorner = cornerRadius && cornerRadius > 0;

        return hasCorner === true ? this._buildContentWithCorner() : this._buildContentWithoutCorner();
    }


    _buildContentWithCorner = () => {
        const {margin, cornerRadius, itemIndex, item, rippleColor, rippleOpacity} = this.props;
        return (
            <View style={{
                borderRadius: cornerRadius,
                overflow: 'hidden',
                marginLeft: this._obtainPorM(margin, 'l'),
                marginRight: this._obtainPorM(margin, 'r'),
                marginTop: this._obtainPorM(margin, 't'),
                marginBottom: this._obtainPorM(margin, 'b'),
            }}>
                <TouchableNativeFeedback
                    disabled={this.state.isDisabled}
                    activeOpacity={rippleOpacity}
                    pressRetentionOffset={{top: 2, left: 2, bottom: 2, right: 2}}
                    background={TouchableNativeFeedback.Ripple(rippleColor || '#ccc', false)}
                    onPress={ev => {
                        this._avoidMultiClick(itemIndex, item, ev)
                    }}
                >
                    {this.props.children}
                </TouchableNativeFeedback>
            </View>);
    };

    _buildContentWithoutCorner = () => {
        const {itemIndex, item, rippleColor, rippleOpacity} = this.props;
        return (
            <TouchableNativeFeedback
                disabled={this.state.isDisabled}
                activeOpacity={rippleOpacity}
                pressRetentionOffset={{top: 2, left: 2, bottom: 2, right: 2}}
                background={TouchableNativeFeedback.Ripple(rippleColor, false)}
                onPress={ev => {
                    this._avoidMultiClick(itemIndex, item, ev)
                }}
            >
                {this.props.children}
            </TouchableNativeFeedback>
        );
    };

    _avoidMultiClick = (index, item, ev) => {
        const {itemClick} = this.props;
        this.setState({isDisabled: true}, () => {
            itemClick && itemClick(index, item, ev);
            this.setState({isDisabled: false});
        });
    };


}