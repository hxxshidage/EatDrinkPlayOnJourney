import React from 'react';
import HighlightFeedback from './HighlightFeedback';
import TextView from './TextView';
import {View} from 'react-native';
import PropTypes from 'prop-types';

export default class ButtonHighlight extends React.Component {

    static propTypes = {
        ...TextView.propTypes,
        ...HighlightFeedback.propTypes,
        textStyle: PropTypes.object,
        disabledTextColor: PropTypes.string,
    };

    render(): React.ReactNode {

        const {disabled, disabledTextColor, textColor, textSize, textStyle, text} = this.props;
        return (
            <HighlightFeedback
                {...this.props}>

                <TextView
                    style={textStyle}
                    text={text}
                    textSize={textSize}
                    textColor={disabled ? disabledTextColor : (textColor || 'white')}
                />
            </HighlightFeedback>);
    }
}


