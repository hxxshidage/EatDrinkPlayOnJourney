import React from 'react';
import StateText from "./common/StateText";
import AvoidMultiTouch from "./common/AvoidMultiTouch";
import PropTypes from 'prop-types';

export default class RadioTextButton extends React.Component {

    static propTypes = {
        ...StateText.propTypes,
        textStyle: PropTypes.object,
        onSetCurrentBtn: PropTypes.func,

        // text: PropTypes.string,
        // ownerId: PropTypes.number,
        // isSelected: PropTypes.bool,
        // onSetCurrentBtn: PropTypes.func,
        // textStyle: PropTypes.object
    };

    render(): React.ReactNode {
        const {ownerId, isSelected, onSetCurrentBtn, text, textStyle} = this.props;

        return (
            <AvoidMultiTouch
                activeOpacity={1}
                ownerId={ownerId}
                {...this.props}
                clickListener={onSetCurrentBtn}>
                <StateText
                    {...this.props}
                    isSelected={isSelected}
                    ref={'st'}
                    // bgColors={['green', 'deeppink']}
                    ownerId={ownerId}
                    style={textStyle}
                    text={text}
                />
            </AvoidMultiTouch>
        );
    }
}