import React from 'react';

import {
    View,
    AppState
} from 'react-native';
import TouchFeedback from "../common/TouchFeedback";
import ImageView from "../common/ImageView";
import TextView from "../common/TextView";

import ProgressIndicator from "../common/ProgressIndicator";
import Video from 'react-native-video';
import PropTypes from "prop-types";
import {screenW, Timer} from "../../../tools/tools";

export default class AudioPlayer extends React.PureComponent {

    static propTypes = {
        autoPlay: PropTypes.bool,
        srcPath: PropTypes.any,
        onCompletedCallback: PropTypes.func
    };


    constructor(props) {
        super(props);

        this.previousPosition = 0;

        this.isUiFocused = AppState.currentState === 'active';

        this.state = {
            isPlaying: props.autoPlay,

            loading: false,
            duration: 0,
            currentTime: 0,

            isError: false,
            isCompleted: false,

            //是否pause 和loading有关  loading必pause
            isPausedActive: true,
            //已经加载过
            hadLoaded: false
        };
    }

    componentDidMount(): void {
        AppState.addEventListener('change', this._handleAppStateChange);
    }

    componentWillUnmount(): void {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    _handleAppStateChange = (nextAppState) => {
        this.isUiFocused = nextAppState === 'active';
    };

    render(): React.ReactNode {
        const {srcPath} = this.props;
        return (
            <View
                style={[{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 12,
                    paddingLeft: 10,
                    paddingRight: 12,
                }, this.props.style]}>

                <TouchFeedback
                    opacityRadio={0.65}
                    clickCallback={this._onHandlePlay}
                    touchStyle={{padding: 2, marginRight: 8}}>
                    <ImageView
                        imgSrc={
                            this.state.isPausedActive ?
                                require('../../../assets/images/audio_guide/audio_play.png') :
                                require('../../../assets/images/audio_guide/audio_paused.png')
                        }
                    />
                </TouchFeedback>

                <TextView
                    text={Timer.mediaTimeFormat(this.state.currentTime)}
                    textSize={10}
                    textColor={'#000'}
                />

                <View style={{alignItems: "center", flex: 1}}>

                    <ProgressIndicator
                        style={{
                            marginHorizontal: 10,
                            borderRadius: 3,

                        }}
                        lightFlex={this.state.currentTime / this.state.duration}
                        darkFlex={1 - this.state.currentTime / this.state.duration}
                    />

                    {this.state.isError ? (
                            <TouchFeedback
                                clickCallback={this._onHandleRetryWhenError}
                                touchStyle={{position: "absolute", top: 5,}}>
                                <TextView
                                    text={'播放出错,点击重试'}
                                    textSize={10}
                                    textColor={'#999'}
                                />
                            </TouchFeedback>
                        ) :
                        null
                    }

                    {this.state.loading ? (
                            <TextView
                                style={{position: "absolute", bottom: 5,}}
                                text={'缓冲中...'}
                                textSize={10}
                                textColor={'#ccc'}
                            />
                        ) :
                        null
                    }
                </View>

                <TextView
                    text={Timer.mediaTimeFormat(this.state.duration)}
                    textSize={10}
                    textColor={'#000'}
                />

                <Video
                    ref={ref => this.audio = ref}
                    paused={!this.state.isPlaying}
                    repeat={false}
                    source={this._obtainAudioPath(srcPath)}
                    onLoad={this._onBufferingEnd}
                    onLoadStart={this._onBufferingStart}
                    onProgress={this._onProgressChanged}
                    onBuffer={this._onBuffering}
                    onEnd={this._onCompleted}
                    onError={this._onError}
                    playInBackground={true}
                />

            </View>);
    }

    // ---------------------------------- deliver ----------------------------------
    _onCompleted = () => {
        this._resetWhenCompleted();

        const {onCompletedCallback} = this.props;
        onCompletedCallback && onCompletedCallback();
    };

    _resetWhenCompleted = () => {
        this.setState({loading: false/*, isPlaying: false*/, isPausedActive: true, displayStatus: 'completed'});

        this.setState({loading: false, isCompleted: true, currentTime: 0, isPausedActive: true});
    };

    _onBuffering = data => {
        this.setState({loading: data.isBuffering, isPausedActive: data.isBuffering});
    };

    _onBufferingStart = () => {
        this.setState({loading: true, isPausedActive: true, isError: false, isCompleted: false, hadLoaded: false});
    };

    _onBufferingEnd = data => {
        this.setState({
            loading: false,
            //如果不是自动播放 则要处于暂停状态
            isPausedActive: !this.props.autoPlay,
            hadLoaded: true,
            duration: data.duration
        });
    };

    _onProgressChanged = data => {
        //失去焦点 不更新ui  将应用切换到后台的情况 音乐继续播放 停止ui更新
        if (!this.isUiFocused) {
            return;
        }

        //避免setState函数调用频繁
        const curTime = Math.round(data.currentTime);
        if (curTime !== this.previousPosition) {
            this.setState({loading: false, currentTime: data.currentTime});

            //记录上一次的播放位置
            this.previousPosition = curTime;
        }
    };

    _onError = () => {
        this.setState({loading: false, isCompleted: false, isError: true, isPausedActive: true});
    };

    // ---------------------------------- deliver ----------------------------------
    play = () => {
        if (this.isPlaying()) return;
        this.setState({isPlaying: true})
    };

    pause = () => {
        if (!this.isPlaying()) return;
        this.setState({isPlaying: false})
    };

    seekTo = position => {
        if (this.isPlaying()) this.audio.seek(position);
    };

    isPlaying = () => this.state.isPlaying;


    // ---------------------------------- deliver ----------------------------------
    _onHandlePlay = () => {

        if (this.state.loading) return;

        if (this.state.isPausedActive) {
            //当处于结束状态时 再次点击
            if (this.state.isCompleted) {
                this.seekTo(0);
                this.setState({isCompleted: false})
            }
            //处于出错状态时 再次点击
            else if (this.state.isError) {
                this._onHandleRetryWhenError();
            }
            //正常状态下点击 暂停到播放
            else {
                this.play();
                this.setState({isPausedActive: false})
            }
        } else {
            this.pause();
            this.setState({isPausedActive: true})
        }
    };

    _onHandleRetryWhenError = () => {
        this.setState({
            currentTime: 0,
            isError: false
        });
        this.seekTo(0);
    };

    _obtainAudioPath = path => {
        if (typeof path === 'string') return {uri: path};
        else if (typeof path === 'number') return path;
    };
}