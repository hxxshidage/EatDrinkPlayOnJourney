import React from 'react';

import PropTypes from 'prop-types';

import {Text} from 'react-native';

import Optional from './Optional';
import StateText from '../common/StateText';
import {Sizer} from "../../../tools/tools";


export default class SelectText extends React.Component {
    _isSelected = false;

    static propTypes = {
        //normal selected
        ...StateText.propTypes
    };

    render(): React.ReactNode {
        return (
            <Optional
                activeOpacity={1}
                onSelectedChange={this._onSelectedChange}
            >
                <StateText
                    {...this.props}
                    isSelected={this._isSelected}/>
            </Optional>);
    }

    //<Text
    //                     numberOfLines={1}
    //                     ellipsizeMode={'tail'}
    //                     ref={ref => this.content = ref}
    //                     style={[{
    //                         textAlign: 'center',
    //                         color: this._obtainAttr(textColors),
    //                         fontSize: textSize,
    //                         backgroundColor: this._obtainAttr(bgColors),
    //                         borderRadius: borderRadius,
    //                         borderWidth: borderWidth,
    //                         borderColor: this._obtainAttr(borderColors),
    //                     }, style]}
    //                 >
    //                     {text}
    //                 </Text>

    _onSelectedChange = selected => {
        const {onTextSelected, ownerId} = this.props;
        this._isSelected = selected;
        this.setState({});
        onTextSelected && onTextSelected(selected, ownerId);
    };

}