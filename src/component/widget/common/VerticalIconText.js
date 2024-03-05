import React from 'react';

import TouchFocusChange from './TouchFocusChange';

import {
    Image,
    View,
    Text
} from 'react-native';

import PropTypes from 'prop-types';

import {transparent} from '../../../assets/colors/Color'

export default class VerticalIconText extends React.Component {
    render(): React.ReactNode {
        const {
            item,
            iconPadding,
            textNormalColor,
            textSize
        } = this.props;
        return (<TouchFocusChange
            {...this.props}
            pressedColor={transparent}
            onFocusChanged={this._onFocusChanged}>
            <View style={{alignItems: 'center'}}>
                <Image source={item.icon}/>
                <Text
                    ref={'textContent'}
                    style={{
                        color: textNormalColor,
                        fontSize: textSize,
                        marginTop: iconPadding
                    }}>{item.label}</Text>
            </View>
        </TouchFocusChange>);
    }

    _onFocusChanged = focused => {
        this.refs.textContent.setNativeProps({
            style: {
                color: focused ?
                    this.props.textFocusedColor :
                    this.props.textNormalColor
            }
        });
    };

    static propTypes = {
        item: PropTypes.object.isRequired,
        textNormalColor: PropTypes.string.isRequired,
        textFocusedColor: PropTypes.string.isRequired,
        textSize: PropTypes.number,
        iconPadding: PropTypes.number,
    }
}