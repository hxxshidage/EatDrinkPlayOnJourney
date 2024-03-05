import React from 'react';

import AvoidMultiTouch from './AvoidMultiTouch';

import PropTypes from 'prop-types';

export default class Optional extends React.PureComponent {
    state = {isSelected: false};

    static propTypes = {
        onSelectedChange: PropTypes.func
    };

    // componentDidMount(): void {
    //     this.setSelected(this.state.isSelected);
    // }

    render(): React.ReactNode {
        const {onSelectedChange} = this.props;
        return (
            <AvoidMultiTouch
                {...this.props}
                clickListener={() => {
                    this.setState({isSelected: !this.state.isSelected}, () => {
                        onSelectedChange && onSelectedChange(this.state.isSelected);
                    });
                }}>
                {this.props.children}
            </AvoidMultiTouch>);
    }

    setSelected = selected => {
        const {onSelectedChange} = this.props;


        this.setState({isSelected: selected}, () => {
            onSelectedChange && onSelectedChange(this.state.isSelected);
        });
    };
}