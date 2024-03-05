import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import {Sizer} from "../../../tools/tools";

export default class TextView extends React.PureComponent {

    static propTypes = {
        textSize: PropTypes.number,
        textColor: PropTypes.string,
        text: PropTypes.string,
        textWeight: PropTypes.string,
        margin: PropTypes.array
    };


    render(): React.ReactNode {
        const {text, textSize, textColor, style, textWeight, margin} = this.props;
        const obMargin = Sizer.obtainPaddingOrMarginFromArray;
        return (
            <Text
                ref={ref => this.innerContent = ref}
                numberOfLines={1}
                ellipsizeMode={'tail'}
                {...this.props}
                style={Object.assign(
                    {
                        marginTop: obMargin(margin, 't'),
                        marginBottom: obMargin(margin, 'b'),
                        marginLeft: obMargin(margin, 'l'),
                        marginRight: obMargin(margin, 'r'),
                        color: textColor || '#ccc',
                        fontSize: textSize || 14,
                        fontWeight: textWeight || 'normal',
                        fontFamily: 'System'
                    }, style)}>{text}</Text>);
    }


}