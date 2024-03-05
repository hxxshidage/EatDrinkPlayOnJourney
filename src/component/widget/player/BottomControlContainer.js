import React from 'react';
import LinearGradient from "react-native-linear-gradient";
import TextView from "../common/TextView";
import Slider from '@react-native-community/slider';
import TouchFeedback from "../common/TouchFeedback";
import ImageView from "../common/ImageView";
import PropTypes from 'prop-types';

export default class BottomControlContainer extends React.PureComponent {

    static propTypes = {
        onSeekStart: PropTypes.func,
        onSeeking: PropTypes.func,
        onSeekCompleted: PropTypes.func,
        currentText: PropTypes.string,
        totalText: PropTypes.string,
        seekPosition: PropTypes.number,
        maxDuration: PropTypes.number,
        isFull: PropTypes.bool,
        onFullCallback: PropTypes.func,
        isPlay: PropTypes.bool,
        onPlayCallback: PropTypes.func
    };


    render(): React.ReactNode {

        const {
            onSeekCompleted, onSeeking, seekPosition, currentText, totalText
            , onFullCallback, isFull, maxDuration, onSeekStart, isPlay,onPlayCallback
        } = this.props;


        return (
            <LinearGradient
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 48,
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    paddingLeft: 10,
                    paddingRight: 10
                }}
                start={{x: 0.0, y: 0.0}}
                end={{x: 0.0, y: 1.0}}
                locations={[0, 0.80]}
                colors={['rgba(255,255,255,.3)', 'rgba(0,0,0,0.65)']}>


                <TouchFeedback
                    clickCallback={onPlayCallback}
                    touchStyle={{padding: 2}}>

                    <ImageView
                        placeHolderColor={'transparent'}
                        imgSrc={isPlay ?
                            require('../../../assets/images/common/video_pause.png') :
                            require('../../../assets/images/common/video_play.png')}
                    />
                </TouchFeedback>

                <TextView
                    text={currentText ? currentText : '00:00'}
                    textColor={'white'}
                />

                <Slider
                    style={{
                        height: 40,
                        flex: 1,
                        marginHorizontal: 10
                    }}
                    thumbTintColor={'white'}
                    value={seekPosition || 0}
                    maximumValue={maxDuration}
                    minimumTrackTintColor={'red'}
                    maximumTrackTintColor={'gray'}
                    step={1}
                    onValueChange={onSeeking}
                    onSlidingStart={onSeekStart}
                    onSlidingComplete={onSeekCompleted}
                />

                <TextView
                    text={totalText ? totalText : '00:00'}
                    textColor={'white'}
                />

                <TouchFeedback
                    clickCallback={onFullCallback}
                    touchStyle={{padding: 2, marginLeft: 12}}>

                    <ImageView
                        placeHolderColor={'transparent'}
                        imgSrc={isFull ?
                            require('../../../assets/images/common/exit_fullscreen.png') :
                            require('../../../assets/images/common/enter_fullscreen.png')}
                    />
                </TouchFeedback>

            </LinearGradient>);
    }
}