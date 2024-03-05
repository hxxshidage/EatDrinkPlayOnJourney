import React from 'react';

import {
    Text
} from 'react-native';
import PropTypes from "prop-types";
import {Sizer} from "../../../tools/tools";
import Selector from '../../widget/common/Selector';

export default class StateText extends React.PureComponent {
    _obtainAttr = Sizer.obtainOppositeAttributesFromArray;

    static propTypes = {
        //normal selected
        ...Selector.props,
        textColors: PropTypes.array,
        bgColors: PropTypes.array,
        borderColors: PropTypes.array,
        borderWidth: PropTypes.number,
        borderRadius: PropTypes.number,
        text: PropTypes.string,
        textSize: PropTypes.number,
        onTextSelected: PropTypes.func,
        ownerId: PropTypes.number
    };

    render(): React.ReactNode {
        const {
            textColors, bgColors, borderColors, borderWidth, borderRadius, text, textSize, style,
            isSelected
        } = this.props;

        return (
            <Selector
                isSelected={isSelected}
            >
                <Text
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                    style={[{
                        textAlign: 'center',
                        color: this._obtainAttr(textColors, !isSelected),
                        fontSize: textSize,
                        backgroundColor: this._obtainAttr(bgColors, !isSelected),
                        borderRadius: borderRadius,
                        borderWidth: borderWidth,
                        borderColor: this._obtainAttr(borderColors, !isSelected),
                    }, style]}>

                    {text}
                </Text>
            </Selector>

        );
    }
}