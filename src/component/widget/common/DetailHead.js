import React from 'react';

import {
    View,
    StyleSheet, Image
} from 'react-native';
import {Sizer} from "../../../tools/tools";
import TouchFeedback from "../../widget/common/TouchFeedback";

import PropTypes from 'prop-types';

export default class DetailHead extends React.Component {

    static propTypes = {
        onBack: PropTypes.func,
        onMore: PropTypes.func,
        onShare: PropTypes.func
    };

    render(): React.ReactNode {
        const {onBack, onMore, onShare} = this.props;

        return (
            <View
                style={styles.root}>
                <TouchFeedback
                    opacityRadio={0.65}
                    extraData={{data: 'go back'}}
                    clickCallback={onBack}
                >
                    <Image source={require('../../../assets/images/common/detail_back.png')}/>

                </TouchFeedback>

                <View style={{flex: 1}}>
                    {this.props.children}
                </View>

                <TouchFeedback
                    opacityRadio={0.65}
                    extraData={{data: 'share'}}
                    clickCallback={onMore}
                >
                    <Image
                        style={{marginRight: 16}}
                        source={require('../../../assets/images/common/detail_more.png')}/>

                </TouchFeedback>


                <TouchFeedback
                    opacityRadio={0.65}
                    extraData={{data: 'more'}}
                    clickCallback={onShare}
                >
                    <Image
                        source={require('../../../assets/images/common/detail_share.png')}/>
                </TouchFeedback>

            </View>);
    }
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        height: 40,
        width: '100%',
        position: 'absolute',
        alignItems: 'center',
        left: 0,
        zIndex:2,
        top: Sizer.statusBarHeight()
    }
});