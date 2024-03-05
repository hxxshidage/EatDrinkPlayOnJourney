import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';

import TextView from '../widget/common/TextView';
import PropTypes from 'prop-types';

export default class FoodFilterCell extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired
    };

    render(): React.ReactNode {
        return (
            <View
                style={[this.props.style]}>
                <TextView
                    style={{fontWeight: 'bold'}}
                    textSize={14}
                    textColor={'black'}
                    text={this.props.title}
                />
                {this.props.children}
            </View>);
    }
}