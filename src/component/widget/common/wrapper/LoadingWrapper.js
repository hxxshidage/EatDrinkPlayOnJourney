/**
 * @Description: 带loading的包裹view
 * @author HQ
 * @date 2019/7/8 11:54
 */

import React from 'react';
import FillWrapper from './FillWrapper';
import PropTypes from "prop-types";
import TransparentLoading from "../multi/TransparentLoading";
import {View, TouchableOpacity} from 'react-native';
import {fill} from "../../../../assets/styles/base/BaseStyles";
import TouchFeedback from "../TouchFeedback";

export default class LoadingWrapper extends React.PureComponent {

    state = {isLoading: true};

    static propTypes = {
        renderLoading: PropTypes.func,
    };

    static defaultProps = {
        renderLoading: () =>
            <TransparentLoading
                style={{
                    backgroundColor: "rgba(0,0,0,.15)",
                    position: 'absolute',
                    width: '100%',
                    height: '100%'
                }}/>

    };

    dismissLoading = () => {
        console.warn("dismiss in wrapper");
        this.setState({isLoading: false});
    };

    render(): React.ReactNode {

        const {renderLoading} = this.props;

        return (
            <FillWrapper>

                {this.props.children}

                {this.state.isLoading ? renderLoading() : null}

            </FillWrapper>

        );
    }


}