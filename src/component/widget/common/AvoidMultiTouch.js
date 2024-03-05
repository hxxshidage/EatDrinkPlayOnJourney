import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from "react-native";


export default class AvoidMultiTouch extends React.Component {
    state = {isDisabled: false};
    static propTypes = {
        clickListener: PropTypes.func.isRequired,
        ownerId: PropTypes.number,
        extraCarry: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {isDisabled: this.props.disabled || false};
    }

    //need to test
    // shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
    //     return this.state.isDisabled === nextState.isDisabled;
    // }

    //this.props.children 神技
    render(): React.ReactNode {
        return (
            <TouchableOpacity
                ref={'touchTarget'}
                {...this.props}
                disabled={this.state.isDisabled}
                onPress={this._avoidMultiClick}>
                {this.props.children}
            </TouchableOpacity>);
    }

    _avoidMultiClick = ev => {
        const {clickListener, ownerId, extraCarry} = this.props;
        this.setState({isDisabled: true}, () => {
            clickListener && clickListener(ev, ownerId, extraCarry);
            this.setState({isDisabled: false});
        });
    };


}