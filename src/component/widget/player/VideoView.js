/**
 * @Description: 基于 react-native-video的播放器封装
 * @author HQ
 * @date 2019/6/25 10:53
 */
import React from 'react';

import {
    View,
    ActivityIndicator,
    BackHandler
} from 'react-native';

import PropTypes from 'prop-types';
import {NavLeader, screenW} from "../../../tools/tools";
import Video from 'react-native-video';
import ImageView from "../common/ImageView";
import TopControlContainer from "./TopControlContainer";
import BottomControlContainer from "./BottomControlContainer";
import {Timer} from '../../../tools/tools';
import {createResponder} from 'react-native-gesture-responder';
import Orientation from 'react-native-orientation'
import ExtraDimensions from 'react-native-extra-dimensions-android'
import {Immersive} from 'react-native-immersive'
import VideoErrorView from "./VideoErrorView";
import VideoCompletedView from "./VideoCompletedView";

//获取屏幕你的真实高度  包括 状态栏和底部导航栏
const readWidth = ExtraDimensions.getRealWindowWidth();
const realHeight = ExtraDimensions.getRealWindowHeight();

export default class VideoView extends React.PureComponent {

    constructor(props) {
        super(props);

        this._createGestureHandler();

        this.heightOfPortraint = this.props.videoHeight;

        this.previousPosition = 0;

        this.state = {
            isSeeking: false,
            isPlaying: props.autoPlay,
            loading: false,
            isFullscreen: false,
            duration: 0,
            currentTime: 0,
            videoWidth: screenW,
            videoHeight: screenW * 9 / 16,
            isControllerShow: false,
            //play error  completed
            status: 'play',
            firstFrameLoaded: false,

            //是否pause 和loading有关  loading必pause
            isPausedActive: true,

            //视频已经加载过
            hadLoaded: false
        };
    }


    static propTypes = {
        videoInfo: PropTypes.object,
        videoWidth: PropTypes.number,
        videoHeight: PropTypes.number,
        autoPlay: PropTypes.bool,
        renderLoading: PropTypes.func,
        renderErrorView: PropTypes.func,
        renderCompletedView: PropTypes.func,
        renderTopControllerView: PropTypes.func,
        renderBottomControllerView: PropTypes.func,
        onEnterFullscreen: PropTypes.func,
        onExitFullscreen: PropTypes.func,
        navigator: PropTypes.object
    };

    static defaultProps = {
        videoWidth: screenW,
        videoHeight: screenW * 9 / 16,
    };

    componentWillMount(): void {
        const orientation = Orientation.getInitialOrientation();
        if (orientation === 'PORTRAIT') {
            this.setState({isFullscreen: false});
        } else {
            this.setState({isFullscreen: true});
        }
    }

    componentDidMount(): void {
        const {videoWidth, videoHeight} = this.props;
        if ((videoWidth > 0 && videoWidth !== this.state.videoWidth) && (videoHeight > 0 && videoHeight !== this.state.videoHeight)) {
            this.setState({videoWidth: videoWidth, videoHeight: videoHeight})
        }

        //锁定竖屏
        Orientation.lockToPortrait();
        Orientation.addOrientationListener(this._onOrientationChanged);

        BackHandler.addEventListener('hardwareBackPress', this._handleHardwareBack);
    }


    componentWillUnmount(): void {
        Orientation.removeOrientationListener(this._onOrientationChanged);

        BackHandler.removeEventListener('hardwareBackPress', this._handleHardwareBack);

        //强制竖屏
        Orientation.lockToPortrait();
    }


    play = () => {
        if (this.isPlaying()) return;
        this.setState({isPlaying: true})
    };

    pause = () => {
        if (!this.isPlaying()) return;
        this.setState({isPlaying: false})
    };


    seekTo = position => {
        if (this.isPlaying()) this.player.seek(position);
    };

    isPlaying = () => this.state.isPlaying;


    render(): React.ReactNode {

        const {videoInfo} = this.props;
        return (
            <View
                {...this.gestureResponder}
                style={{
                    width: this.state.videoWidth,
                    height: this.state.videoHeight,
                    backgroundColor: '#000',
                }}>

                <Video
                    style={{
                        width: this.state.videoWidth,
                        height: this.state.videoHeight
                    }}
                    ref={ref => this.player = ref}
                    paused={!this.state.isPlaying}
                    repeat={false}
                    source={this._obtainVideoPath(videoInfo.srcPath)}
                    onLoad={this._onBufferingEnd}
                    onLoadStart={this._onBufferingStart}
                    onProgress={this._onProgressChanged}
                    onBuffer={this._onBuffering}
                    onEnd={this._onCompleted}
                    onError={this._onError}
                    playInBackground={false}
                    onReadyForDisplay={this._onFirstFrameForDisplay}
                />


                {this.state.firstFrameLoaded ?
                    null :
                    (<ImageView
                        placeHolderColor={'transparent'}
                        size={[this.state.videoWidth, this.state.videoHeight]}
                        imgSrc={require('../../../assets/images/delete/ls.jpg')}
                        style={{position: 'absolute', top: 0, left: 0}}
                    />)}

                {this._buildControlsByStatus()}

            </View>);
    }

    // -----------------------  ui构建逻辑 -----------------------
    _buildControlsByStatus = () => {
        switch (this.state.displayStatus) {
            case 'play':
                return this._buildControlsWhenPlay();
            case 'error':
                return this._buildErrorView();
            case 'completed':
                return this._buildCompletedView();

        }
    };


    _buildControlsWhenPlay = () => {

        return (
            <View style={{
                width: this.state.videoWidth,
                height: this.state.videoHeight,
                position: 'absolute',
                top: 0,
                left: 0,
                justifyContent: 'center'
            }}>

                {/*loading和加载状态无关*/}
                {this.state.loading ? this._buildLoading() : null}

                {/*未加载之前显示topControl*/}
                {(this.state.isControllerShow || !this.state.hadLoaded) ? this._buildTopControl() : null}

                {/*loading状态要不要显示?*/}
                {this.state.isControllerShow && this.state.hadLoaded ?
                    this._buildBottomControl() :
                    null
                }
            </View>
        );
    };

    _buildTopControl = () => {

        const {renderTopControllerView} = this.props;

        return (
            renderTopControllerView ?
                renderTopControllerView() :
                <TopControlContainer
                    videoTitle={'大黄是条好狗'}
                    onBackCallback={this._onHandleGoBack}
                />
        );
    };

    _buildBottomControl = () => {

        const {renderBottomControllerView} = this.props;

        return (
            (renderBottomControllerView ?
                    renderBottomControllerView() :
                    this._buildDefaultBottomControlContainer()
            ):
            null
        );
    };

    _buildDefaultBottomControlContainer = () => {
        return (
            <BottomControlContainer
                onPlayCallback={this._onHandlePlay}
                isPlay={!this.state.isPausedActive}
                onSeekStart={this._onHandleSeekingStart}
                onSeeking={this._onHandleSeeking}
                onSeekCompleted={this._onHandleSeekingCompleted}
                onFullCallback={this._onHandleFullscreen}
                currentText={Timer.mediaTimeFormat(this.state.currentTime)}
                totalText={Timer.mediaTimeFormat(this.state.duration)}
                maxDuration={this.state.duration}
                seekPosition={this.state.currentTime}
                isFull={this.state.isFullscreen}
            />
        );
    };

    _buildLoading = () => {
        const {renderLoading} = this.props;

        return renderLoading ? renderLoading() : <ActivityIndicator/>;
    };

    _buildErrorView = () => {
        return (
            <VideoErrorView
                onExitCallback={this._onHandleExitWhenError}
                onRetryCallback={this._onHandleRetryWhenError}
            />
        );
    };

    _buildCompletedView = () => {
        return (
            <VideoCompletedView
                onRepeatPlay={this._onHandleRepeatWhenCompleted}
            />
        );
    };


    // -----------------------  播放器事件回调逻辑  -----------------------
    //首帧被加载  干掉缩略图
    _onFirstFrameForDisplay = () => {
        this.setState({firstFrameLoaded: true})
    };

    _onError = () => {
        this._cancelControlTimer();
        this.setState({loading: false, isPausedActive: true/*, isPlaying: false*/, displayStatus: 'error'});
        // console.warn("播放出错");
    };

    _onCompleted = () => {
        this._cancelControlTimer();
        this.setState({loading: false/*, isPlaying: false*/, isPausedActive: true, displayStatus: 'completed'});
        // console.warn("播放完成");
    };

    //这两个函数只会调用一次 再开会未缓冲状态时 回调用
    _onBufferingStart = () => {
        this.setState({loading: true, isPausedActive: true, hadLoaded: false});
    };
    _onBufferingEnd = data => {
        this.setState(
            {
                loading: false,
                //如果不是自动播放 则要处于暂停状态
                isPausedActive: !this.props.autoPlay,
                hadLoaded: true,
                duration: data.duration
            });
        // console.warn("缓冲结束");
    };

    _onBuffering = data => {
        //这种坑还是要自己来填
        this.setState({loading: data.isBuffering, isPausedActive: data.isBuffering});
    };

    _onProgressChanged = data => {
        if (!this.state.isControllerShow || this.state.isSeeking === true) {
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


    // -----------------------  ui控制逻辑  -----------------------

    _onHandleSeekingStart = () => {
        this._cancelControlTimer();
        this.setState({isSeeking: true})
    };

    _onHandleSeeking = value => {
        this.setState({currentTime: value})
    };

    _onHandleSeekingCompleted = value => {
        this.seekTo(value);
        this.setState({isSeeking: false});

        this._dismissControls();
    };

    _onHandlePlay = () => {
        this._cancelControlTimer();

        if (this.state.loading) return;

        if (this.state.isPausedActive) {
            this.play();
            this.setState({isPausedActive: false})
        } else {
            this.pause();
            this.setState({isPausedActive: true})
        }

        this._dismissControls();
    };

    _onHandleGoBack = () => {
        if (this.state.isFullscreen) {
            this._onHandleFullscreen();
        } else {
            this.props.navigator && this.props.navigator.goBack(null);
        }
    };

    _handleHardwareBack = () => {
        if (this.state.isFullscreen) {
            this._onHandleFullscreen();
            return true;
        }
        return false;
    };

    _onHandleFullscreen = () => {

        this._cancelControlTimer();

        if (this.state.isFullscreen) {
            Immersive.off();
            Orientation.lockToPortrait();
            this.setState({isFullscreen: false, videoWidth: screenW, videoHeight: this.heightOfPortraint});
        } else {
            Orientation.lockToLandscape();
            Immersive.on();

            this.setState({
                isFullscreen: true,
                videoWidth: realHeight, videoHeight: readWidth
            });
        }

        this._dismissControls();
    };

    _cancelControlTimer = () => {
        this.hideControlTimer && clearTimeout(this.hideControlTimer);
        this.hideControlTimer = undefined;
    };

    _showControls = () => {
        this.setState({isControllerShow: false});

    };

    _dismissControls = () => {
        this._cancelControlTimer();

        this.setState({isControllerShow: true}, () => {
            this.hideControlTimer = setTimeout(() => {

                this.setState({isControllerShow: false});
            }, 5000);
        });
    };


    // -----------------------  其他  -----------------------
    _onHandleRetryWhenError = () => {
        this.setState({
            currentTime: 0,
            isControllerShow: false,
            displayStatus: 'play',
            firstFrameLoaded: false,
        });
        this.seekTo(0);
    };

    _onHandleExitWhenError = () => {
        this.props.navigator && this.props.navigator.goBack(null);
    };

    _onHandleRepeatWhenCompleted = () => {
        this.setState({
            currentTime: 0,
            isControllerShow: false,
            displayStatus: 'play',
            firstFrameLoaded: false,
        }, () => {
            this.seekTo(0);
        });

    };

    _obtainVideoPath = path => {
        if (typeof path === 'string') return {uri: path};
        else if (typeof path === 'number') return path;
    };

    _onOrientationChanged = orientation => {
        if (orientation === 'PORTRAIT') {
            this.setState({isFullscreen: false});
        } else {
            this.setState({isFullscreen: true});
        }
    };

    _createGestureHandler = () => {
        //手势控制
        this.gestureResponder = createResponder({
            onStartShouldSetResponder: (evt, gestureState) => {
                const locY = evt.nativeEvent.locationY;
                return !((locY >= 0 && locY <= 40) || (locY >= this.state.videoHeight - 48 && locY <= this.state.videoHeight));

            },
            onStartShouldSetResponderCapture: (evt, gestureState) => {
                const locY = evt.nativeEvent.locationY;
                return !((locY >= 0 && locY <= 40) || (locY >= this.state.videoHeight - 48 && locY <= this.state.videoHeight));
            },
            onMoveShouldSetResponder: (evt, gestureState) => false,
            onMoveShouldSetResponderCapture: (evt, gestureState) => false,
            onResponderGrant: (evt, gestureState) => {
            },
            onResponderMove: (evt, gestureState) => {
            },
            onResponderTerminationRequest: (evt, gestureState) => true,
            onResponderRelease: (evt, gestureState) => {
                if (gestureState.doubleTapUp) {
                    this._onHandleFullscreen();
                }
            },
            onResponderTerminate: (evt, gestureState) => {
            },

            onResponderSingleTapConfirmed: (evt, gestureState) => {
                if (this.state.isControllerShow) {
                    this._showControls();
                } else {
                    this._dismissControls();
                }
            },

            moveThreshold: 2,
            debug: false
        });
    };
}