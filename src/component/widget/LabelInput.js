import React from 'react';

import {
    View,
} from 'react-native';

import PropTypes from 'prop-types';

import TextView from "./common/TextView";
import EditText from "./common/EditText";
import MainSideTitle from "./MainSideTitle";

export default class LabelInput extends React.PureComponent {

    static propTypes = {
        ...MainSideTitle.propTypes,
        placeHolder: PropTypes.string,
        inputStyle: PropTypes.object,
        bgColor: PropTypes.string,
    };


    getContent = () => {
        return this.input.getText();
    };

    render(): React.ReactNode {

        const {mainTitle, sideTitle, placeHolder, inputStyle, bgColor} = this.props;

        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    backgroundColor: bgColor || 'transparent',
                    paddingVertical: 5
                }}>

                <MainSideTitle
                    style={{flex: 34}}
                    mainTitle={mainTitle}
                    sideTitle={sideTitle}
                />

                <EditText
                    ref={ref => this.input = ref}
                    style={Object.assign({flex: 66, fontSize: 12}, inputStyle)}
                    placeholder={placeHolder}
                    placeholderTextColo={'#888'}
                />
                {this.props.children}
            </View>
        );
    }
}