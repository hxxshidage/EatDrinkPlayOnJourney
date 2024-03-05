import React from 'react';

import PropTypes from 'prop-types';

export default class PreventMultiTouch extends React.Component {
    state = {isDisabled: false};

    constructor(props) {
        super(props);
        this.state = {isDisabled: this.props.disabled || false};
    }

    render(): React.ReactNode {

        return React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                disabled: this.state.isDisabled,
                ownerId: this.props.ownerId,
                extraData: this.props.extraData
            })
        });
    }


    static propTypes = {
        ownerId: PropTypes.number,
        extraData: PropTypes.object,
        clickListener: PropTypes.func,
    };


    avoidMultiClick = ev => {
        const {clickListener, ownerId, extraData} = this.props;
        this.setState({isDisabled: true}, () => {
            clickListener && clickListener(ev, ownerId, extraData);
            this.setState({isDisabled: false});
        });
    };
}