import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';
import TextView from "../../widget/common/TextView";
import PropTypes from 'prop-types';

export default class CheckInTimeMidCpn extends React.Component {
    static propTypes = {
        text: PropTypes.string,
    };

    render(): React.ReactNode {
        return (
            <View style={{
                justifyContent: 'center', alignItems: "center"
            }}>
                <TextView
                    style={{
                        paddingTop: 3,
                        paddingBottom: 3,
                        paddingLeft: 8, paddingRight: 8,
                        borderWidth: 1,
                        borderColor: '#eee',
                        borderRadius: 3,
                    }}
                    textColor={'#666'}
                    textSize={12}
                    text={this.props.text}
                />

                <View
                    style={{width: 1, height: 16, position: 'absolute', top: 8, backgroundColor: "#eee"}}
                />

                <View
                    style={{width: 1, height: 16, position: 'absolute', bottom: 8, backgroundColor: "#eee"}}
                />
            </View>);
    }
}