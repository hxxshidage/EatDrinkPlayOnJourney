import React from 'react';

import {
    Text,
} from 'react-native';
import TouchFeedback from '../../widget/common/TouchFeedback';
import PropTypes from 'prop-types';
import TextView from "./TextView";
import {Sizer} from "../../../tools/tools";


export default class TextColorChanger extends React.PureComponent {

    static propTypes = {
        ...TextView.propTypes,
        colors: PropTypes.array,
        clickCallback: PropTypes.func,
        padding: PropTypes.array
    };

    constructor(props) {
        super(props);
        const oppositeAttr = Sizer.obtainOppositeAttributesFromArray;
        const {colors} = this.props;

        this.norColor = oppositeAttr(colors);
        this.focColor = oppositeAttr(colors, false);
    }


    render(): React.ReactNode {
        const pOrM = Sizer.obtainPaddingOrMarginFromArray;
        const {clickCallback, text, textSize, padding, margin, textWeight} = this.props;
        return (
            <TouchFeedback
                activeColor={'transparent'}
                effect={'highlight'}
                clickCallback={clickCallback}
                onFocusChanged={this._changeTextColor}
            >
                <Text
                    style={{
                        color: this.norColor,
                        fontSize: textSize,
                        fontWeight: textWeight,
                        paddingTop: pOrM(padding, 't'),
                        paddingBottom: pOrM(padding, 'b'),
                        paddingLeft: pOrM(padding, 'l'),
                        paddingRight: pOrM(padding, 'r'),
                        marginTop: pOrM(margin, 't'),
                        marginBottom: pOrM(margin, 'b'),
                        marginLeft: pOrM(margin, 'l'),
                        marginRight: pOrM(margin, 'r'),
                    }}
                    ref={'textContent'}
                >{text}</Text>
            </TouchFeedback>);
    }

    _changeTextColor = focused => {
        this.refs.textContent.setNativeProps({
            style: {
                color: focused ?
                    this.focColor :
                    this.norColor
            }
        });
    };
}