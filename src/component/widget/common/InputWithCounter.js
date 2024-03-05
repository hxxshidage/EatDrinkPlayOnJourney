import React from 'react';

import {
    View,
} from 'react-native';

import PropTypes from 'prop-types';
import EditText from "../../../component/widget/common/EditText";
import TextView from "./TextView";

export default class InputWithCounter extends React.PureComponent {

    state = {currentLen: 0};

    static propTypes = {
        maxLength: PropTypes.number,
        inputHeight: PropTypes.number,
        placeHolder: PropTypes.string,
    };

    getContent = () => {
        return this.refs.innerInput.getText();
    };


    render(): React.ReactNode {
        const {style, maxLength, inputHeight, placeHolder}
            = this.props;
        return (
            <View style={[{
                paddingHorizontal: 10,
                paddingTop: 10,
                paddingBottom: 2,
                borderRadius: 2,
                overflow: 'hidden',
                borderWidth: 1,
                borderColor: '#eee',
                marginHorizontal: 10,
            }, style]}>
                <EditText
                    ref={'innerInput'}
                    onChanged={text => {
                        this.setState({currentLen: text.length})
                    }}
                    placeholder={placeHolder || ''}
                    multiline={true}
                    maxLength={maxLength}
                    style={{
                        height: inputHeight || 48,
                        textAlign: 'left',
                        textAlignVertical: 'top',
                    }}
                />

                <TextView
                    style={{textAlign: "right"}}
                    textColor={'#333'}
                    textSize={12}
                    text={`${this.state.currentLen}/${maxLength}`}
                />
            </View>);
    }
}