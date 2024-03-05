import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';
import PropTypes from "prop-types";
import {AppColors} from "../../../assets/colors/Color";
import TextView from "../common/TextView";
import TouchFeedback from "../common/TouchFeedback";

export default class VideoCompletedView extends React.PureComponent {
    static propTypes = {
        onRepeatPlay: PropTypes.func,
    };

    render(): React.ReactNode {

        const {onRepeatPlay} = this.props;

        return (
            <View style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                backgroundColor: 'rgba(0,0,0,.65)',
                top: 0,
                left: 0,
                zIndex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <TextView
                    textSize={12}
                    text={'播放完成'}
                    textColor={'white'}
                />

                <TouchFeedback
                    touchStyle={{overflow: 'hidden', marginTop: 16}}
                    clickCallback={onRepeatPlay}
                >
                    <TextView
                        style={{
                            width: 60,
                            height: 24,
                            backgroundColor: AppColors.themeColor,
                            textAlignVertical: 'center',
                            textAlign: 'center',
                            borderRadius: 15
                        }}
                        text={'重播'}
                        textSize={12}
                        textColor={'white'}
                    />
                </TouchFeedback>

            </View>);
    }
}