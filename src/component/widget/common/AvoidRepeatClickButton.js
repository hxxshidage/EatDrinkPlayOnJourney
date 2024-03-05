import React from 'react';
import PropTypes from 'prop-types';

export default class AvoidRepeatClickButton extends React.Component {
    state = {isDisabled: false};

    constructor(props) {
        super(props);
        this.state = {isDisabled: this.props.disabled || false};
    }

    static propTypes = {
        extraCarry: PropTypes.object,
        clickListener: PropTypes.func.isRequired,
        disabled: PropTypes.bool,
        highOpacity: PropTypes.number,
        disabledColor: PropTypes.string,
        backgroundColor: PropTypes.string,
        /*textColor: PropTypes.string,
        textSize: PropTypes.number,
        disabledTextColor: PropTypes.string,
        textStyle: PropTypes.object,
        text: PropTypes.string,*/
        cornerRadius: PropTypes.number,
        btnStyle: PropTypes.object,
        padding: PropTypes.array,
        margin: PropTypes.array,
        width: PropTypes.number,
        height: PropTypes.number,
        expanded: PropTypes.bool,
        align: PropTypes.string
    };

    //need to test
    shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
        return this.state.isDisabled === nextState.isDisabled;
    }

    avoidMultiClick = ev => {
        this.setState({isDisabled: true}, () => {
            this.props.clickListener && this.props.clickListener(ev, this.props.extraCarry);
            this.setState({isDisabled: false});
        });
    };

    obtainAlignWay = align => {
        switch (align) {
            case 'start':
                return 'flex-start';
            case 'end':
                return 'flex-end';
            default:
                return 'center';
        }
    };

}