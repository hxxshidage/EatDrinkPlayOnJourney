import React from 'react';

import PropTypes from 'prop-types';

export default class Selector extends React.Component {
    static propTypes = {
        isSelected: PropTypes.bool
    };

    static defaultProps = {
        isSelected: false
    };

    render(): React.ReactNode {
        return (this.props.children);
        // return React.Children.map(child => {
        //     return React.cloneElement(child, {isSelected: this.props.isSelected})
        // });
    }
}