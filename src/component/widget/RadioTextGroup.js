import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';

import PropTypes from 'prop-types';
import StateText from "./common/StateText";
import AvoidMultiTouch from './common/AvoidMultiTouch';
// import SelectText from "./common/SelectText";
import RadioTextButton from './RadioTextButton';


export default class RadioTextGroup extends React.Component {

    _selectedIndex;

    constructor(props) {
        super(props);
        this._selectedIndex = this.props.defaultSelectedIndex;
    }


    static propTypes = {
        ...RadioTextButton.propTypes,
        groupStyle: PropTypes.object,
        content: PropTypes.array,
        defaultSelectedIndex: PropTypes.number,
    };

    static defaultProps = {
        defaultSelectedIndex: 0
    };

    resetCurrentIndex = (ev, idx) => {
        this._selectedIndex = idx;
        // console.warn('parent: resetCurrentIndex');
        this.setState({});
    };

    render(): React.ReactNode {
        const {content} = this.props;
        return (
            <View
                style={this.props.groupStyle}
            >
                {content.map((str, idx) => {
                    return (
                        <RadioTextButton
                            key={idx.toString()}
                            {...this.props}
                            text={str}
                            ownerId={idx}
                            isSelected={idx === this._selectedIndex}
                            onSetCurrentBtn={this.resetCurrentIndex}
                        />
                    );
                })}

            </View>);
    }
}

