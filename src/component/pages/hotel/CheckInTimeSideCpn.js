import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';
import TextView from "../../widget/common/TextView";
import PropTypes from 'prop-types';
import TouchFeedback from "../../widget/common/TouchFeedback";

export default class CheckInTimeSideCpn extends React.PureComponent {

    static propTypes = {
        content: PropTypes.string,
        title: PropTypes.string,
        clickCallback: PropTypes.func
    };

    render(): React.ReactNode {
        const {content, title, clickCallback} = this.props;
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                <TouchFeedback
                    opacityRadio={0.55}
                    clickCallback={clickCallback}>
                    <TextView
                        text={content || new Date().toLocaleDateString()}
                        textWeight={'bold'}
                        textSize={16}
                        textColor={'#000'}
                    />
                </TouchFeedback>

                <TextView
                    style={{position: 'absolute', top: 0, height: 32, lineHeight: 32}}
                    text={title}
                    textColor={'#000'}
                />
            </View>);
    }
}