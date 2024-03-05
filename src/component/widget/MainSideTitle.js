import React from 'react';

import {
    View,
} from 'react-native';
import TextView from "./common/TextView";
import PropTypes from 'prop-types';

export default class MainSideTitle extends React.PureComponent {

    static propTypes = {
        mainTitle: PropTypes.string,
        sideTitle: PropTypes.string,
    };

    render(): React.ReactNode {
        const {mainTitle, sideTitle, style} = this.props;

        return (
            <View
                style={[{
                    flexDirection: 'row',
                    alignItems: "center"
                }, style]}>

                <TextView
                    text={mainTitle}
                    textColor={'#000'}
                />
                <TextView
                    margin={[0, 0, 0, 5]}
                    textSize={12}
                    textColor={'#888'}
                    text={sideTitle || '(必填)'}
                />
            </View>);
    }
}