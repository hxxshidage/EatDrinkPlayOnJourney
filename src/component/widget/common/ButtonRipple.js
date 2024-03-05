import React from 'react';
import RippleFeedback from './RippleFeedback';
import TextView from './TextView';
import PropTypes from 'prop-types';

export default class ButtonRipple extends React.Component {

    static propTypes = {
        ...TextView.propTypes,
        ...RippleFeedback.propTypes,
        textStyle: PropTypes.object,
        disabledTextColor: PropTypes.string,
    };

    render(): React.ReactNode {

        const {disabled, disabledTextColor, textColor, textSize, textStyle, text} = this.props;
        return (
            <RippleFeedback
                {...this.props}>
                <TextView
                    style={textStyle}
                    text={text}
                    textSize={textSize}
                    textColor={disabled ? disabledTextColor : (textColor || 'white')}
                />
            </RippleFeedback>);
    }
}


