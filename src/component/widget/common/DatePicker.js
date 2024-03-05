import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';


import PropTypes from 'prop-types';

export default class DatePicker extends React.Component {

    static propTypes = {
        minYear: PropTypes.number,
        maxYear: PropTypes.number,
        selectedValue: PropTypes.array
    };

    render(): React.ReactNode {
        return (
            <View
                style={{flex: 1, backgroundColor: 'orange'}}>
            </View>);
    }
}