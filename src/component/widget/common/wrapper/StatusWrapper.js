/**
 * @Description: 带状态栏变化的view
 * @author HQ
 * @date 2019/6/28 9:35
 */

import React from 'react';

import {
    StatusBar
} from 'react-native';
import FillWrapper from "./FillWrapper";
import PropTypes from 'prop-types';

export default class StatusWrapper extends React.Component {

    static propTypes = {
        lightStatus: PropTypes.bool,
    };

    static defaultProps = {
        lightStatus: false,
    };

    render(): React.ReactNode {
        const {lightStatus, style} = this.props;
        return (
            <FillWrapper style={style}>
                <StatusBar
                    backgroundColor="transparent"
                    translucent={true}
                    hidden={false}
                    animated={false}
                    barStyle={lightStatus ? 'light-content' : "dark-content"}
                />

                {this.props.children}
            </FillWrapper>
        );
    }
}