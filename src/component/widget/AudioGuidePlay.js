import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';
import TextView from "./common/TextView";
import TouchFeedback from "./common/TouchFeedback";
import ImageView from "./common/ImageView";
import AudioPlayer from "./audio/AudioPlayer";
import PropTypes from 'prop-types';

export default class AudioGuidePlay extends React.PureComponent {

    static propTypes = {
        onCompletedCb: PropTypes.func,
        scenicAudioInfo: PropTypes.object,
        onClose: PropTypes.func,
        autoPlay: PropTypes.bool
    };

    render(): React.ReactNode {
        const {
            onCompletedCb,
            onClose,
            scenicAudioInfo,
            autoPlay
        } = this.props;

        return (
            <View
                style={[{backgroundColor: 'white'}, this.props.style]}>

                <View
                    style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingHorizontal: 10,
                        paddingVertical: 12
                    }}>
                    <TextView
                        style={{flex: 1}}
                        text={scenicAudioInfo.title}
                        textColor={'#000'}
                        textSize={16}
                        textWeight={'bold'}
                    />

                    <TouchFeedback
                        clickCallback={() => {
                            this.audioPlayer.pause();
                            onClose && onClose();
                        }}
                        opacityRadio={0.65}
                        touchStyle={{padding: 2}}
                    >
                        <ImageView
                            imgSrc={require('../../assets/images/audio_guide/audio_close.png')}
                        />
                    </TouchFeedback>

                </View>

                <TextView
                    margin={[0, 10, 5]}
                    numberOfLines={2}
                    text={scenicAudioInfo.description}
                    textColor={'#666'}
                />

                <AudioPlayer
                    ref={ref => this.audioPlayer = ref}
                    onCompletedCallback={() => {
                        onCompletedCb && onCompletedCb(scenicAudioInfo);
                    }}
                    autoPlay={autoPlay}
                    srcPath={scenicAudioInfo.audioPath}
                />
            </View>);
    }
}