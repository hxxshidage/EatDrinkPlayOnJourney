import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';

import PropTypes from 'prop-types';
import {AppColors} from "../../../assets/colors/Color";


export default class ProgressIndicator extends React.PureComponent {

    static propTypes = {
        lightColor: PropTypes.string,
        darkColor: PropTypes.string,
        indicatorHeight: PropTypes.number,
        lightFlex: PropTypes.number,
        darkFlex: PropTypes.number
    };

    static defaultProps = {
        lightColor: AppColors.themeColor,
        darkColor: '#f3f3f3',
        indicatorHeight: 2,
        lightFlex: 0,
        darkFlex: 1
    };


    render(): React.ReactNode {
        const {lightColor, darkColor, indicatorHeight, lightFlex, darkFlex, style} = this.props;
        return (
            <View
                style={[{
                    flexDirection: 'row',
                    alignItems: 'center',
                    overflow: 'hidden',
                }, style]}>

                <View
                    style={{
                        height: indicatorHeight,
                        flex: lightFlex || 0,
                        backgroundColor: lightColor
                    }}
                />
                <View
                    style={{
                        height: indicatorHeight,
                        flex: darkFlex || 1,
                        backgroundColor: darkColor
                    }}
                />

            </View>
        )
    }
}