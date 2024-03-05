import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';
import PropTypes from "prop-types";
import {Sizer} from "../../../tools/tools";

export default class VerDivider extends React.Component {
    static propTypes = {
        width: PropTypes.number,
        color: PropTypes.string,
        margin: PropTypes.array,
        fillParent: PropTypes.bool
    };

    render(): React.ReactNode {
        const {width, color, margin, fillParent} = this.props;
        let fill = fillParent || true;
        const obtainMargin = Sizer.obtainPaddingOrMarginFromArray;

        return (
            <View
                style={[{
                    width: width || 1,
                    alignSelf: fill === true ? 'stretch' : null,
                    backgroundColor: color || '#eee',
                    marginLeft: obtainMargin(margin, 'l'),
                    marginRight: obtainMargin(margin, 'r'),
                    marginTop: obtainMargin(margin, 't'),
                    marginBottom: obtainMargin(margin, 'b'),
                }, this.props.style]}
            />)
    }
}