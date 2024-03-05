import React from 'react';

import {
    View,
} from 'react-native';

import {Sizer} from "../../../tools/tools";
import PropTypes from 'prop-types';

export default class HorDivider extends React.PureComponent {

    static propTypes = {
        height: PropTypes.number,
        color: PropTypes.string,
        margin: PropTypes.array,
        stretchActive: PropTypes.bool
    };

    render(): React.ReactNode {
        const {height, color, margin, stretchActive} = this.props;
        const obtainMargin = Sizer.obtainPaddingOrMarginFromArray;

        return (
            <View
                style={[{
                    height: height || 1,
                    alignSelf: stretchActive ? "stretch" : 'auto',
                    backgroundColor: color || '#eee',
                    marginLeft: obtainMargin(margin, 'l'),
                    marginRight: obtainMargin(margin, 'r'),
                    marginTop: obtainMargin(margin, 't'),
                    marginBottom: obtainMargin(margin, 'b'),
                }, this.props.style]}>
            </View>);
    }
}