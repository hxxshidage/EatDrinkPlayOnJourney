import React from 'react';
import OpacityFeedback from './OpacityFeedback';
import TextView from './TextView';
import PropTypes from 'prop-types';


export default class ButtonOpacity extends React.Component {

    static propTypes = {
        ...TextView.propTypes,
        ...OpacityFeedback.propTypes,
        textStyle: PropTypes.object,
        disabledTextColor: PropTypes.string,
    };

    render(): React.ReactNode {

        const {disabled, disabledTextColor, textColor, textSize, textStyle, text} = this.props;
        return (
            <OpacityFeedback
                {...this.props}>
                <TextView
                    style={textStyle}
                    text={text}
                    textSize={textSize}
                    textColor={disabled ? disabledTextColor : (textColor || 'white')}
                />
            </OpacityFeedback>);
    }
}