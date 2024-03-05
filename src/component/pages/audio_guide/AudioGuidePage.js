import React from 'react';

import {
    View,
    Alert,
    StatusBar,
    BackHandler,
} from 'react-native';
import HeaderBar from "../../widget/common/HeaderBar";
import AudioGuidePlay from "../../widget/AudioGuidePlay";
import {NavLeader} from "../../../tools/tools";
import {MapView} from 'react-native-amap3d';
import Permission from "../../../tools/Permission";
import AudioGuideListDialog from "../../dialog/AudioGuideListDialog";
import StatusWrapper from '../../widget/common/wrapper/StatusWrapper';

export default class AudioGuidePage extends React.PureComponent {

    state = {
        isPlayerOpen: false,
        showLocation: false,
        center: {
            longitude: 0,
            latitude: 0
        },
        //markers
        audioMarkers: [],
        //当前播放的索引
        currentPlayIndex: undefined
    };

    componentDidMount(): void {
        Permission.requestLocationPermission().then(res => {
            this.setState({showLocation: res})
        });

        BackHandler.addEventListener('hardwareBackPress', this._handleHardwareBack);

        setTimeout(() => {
            let arr = [
                {
                    coordinate: {
                        latitude: 39.969590,
                        longitude: 116.342792
                    },

                    scenicInfo: {
                        title: '天下第一巷1',
                        description: '位于天下第一港区,全场5261米，两侧高于打是大师傅地方都是符合国家的说法都是深度对反深地方都！',
                        audioPath: require('../../../assets/video/test.mp3')
                    },
                },
                {
                    coordinate: {
                        latitude: 39.989590,
                        longitude: 116.332792
                    },
                    scenicInfo: {
                        title: '天下第一巷2',
                        description: '位于天下第一港区,全场5261米，两侧高于打是大师傅地方都是符合国家的说法都是深度对反深地方都！',
                        audioPath: require('../../../assets/video/big_yellow_test.mp4')
                    },
                },
                {
                    coordinate: {
                        latitude: 39.979590,
                        longitude: 116.352792
                    },
                    scenicInfo: {
                        title: '天下第一3',
                        description: '位于天下第一港区,全场5261米，两侧高于打是大师傅地方都是符合国家的说法都是深度对反深地方都！',
                        audioPath: require('../../../assets/video/test.mp3')
                    },

                }
            ];

            this.setState({audioMarkers: arr})

        }, 1000)
    }

    componentWillUnmount(): void {
        BackHandler.removeEventListener('hardwareBackPress', this._handleHardwareBack);
    }

    render(): React.ReactNode {
        return (
            <StatusWrapper lightStatus={false}>

                <HeaderBar
                    onGoBack={this._onGoBack}
                    title={'语音导览'}
                    rightIcon={require('../../../assets/images/audio_guide/audio_list_switch.png')}
                    onRightIconClick={this._switchAudioList}
                    onRightIconVisible={this.state.audioMarkers.length > 0}
                />
                {this._buildMapView()}

                {this.state.currentPlayIndex >= 0 && this.state.isPlayerOpen ?
                    this._buildBottomAudioPlay() :
                    null
                }

                <AudioGuideListDialog
                    audioData={this.state.audioMarkers}
                    ref={'audioListDialog'}
                    onScenicItemClick={extra => {
                        this._handleMarkerClick(extra.item.scenicInfo, extra.index);
                    }}
                />

            </StatusWrapper>);
    }

    _buildMapView = () => {
        return (
            <MapView
                style={{flex: 1}}
                coordinate={{
                    /*latitude: this.state.center.latitude,
                    longitude: this.state.center.longitude*/
                    latitude: 39.979590,
                    longitude: 116.352792
                }}
                locationEnabled={/*this.state.showLocation*/ false}
                showsLocationButton={false/*this.state.showLocation*/}
                locationInterval={1000 * 30}
                showsZoomControls={true}
                showsScale={true}
                onLocation={({nativeEvent}) => {
                    this.setState({
                        center: {
                            latitude: nativeEvent.latitude,
                            longitude: nativeEvent.longitude
                        }
                    });
                }}
            >

                {
                    this.state.audioMarkers.map((item, idx) => {
                        return (
                            <MapView.Marker
                                draggable={false}
                                infoWindowDisabled={true}
                                image={this.state.currentPlayIndex === idx ? 'audio_point_focus' : 'audio_point'}

                                onPress={() => {
                                    this._handleMarkerClick(item, idx);
                                }}
                                key={idx.toString()}
                                coordinate={item.coordinate}
                            />

                        )
                    })
                }

            </MapView>
        );
    };

    _buildBottomAudioPlay = () => {
        return (
            <AudioGuidePlay
                style={{position: "absolute", left: 0, bottom: 0, width: '100%'}}
                scenicAudioInfo={this.state.audioMarkers[this.state.currentPlayIndex].scenicInfo}
                autoPlay={true}
                onClose={this._closeAudioPlay}

                // onCompletedCb={info => {
                //     console.warn('播放完毕,请指示')
                // }}
            />
        );
    };

    _handleMarkerClick = (item, idx) => {
        if (this.state.currentPlayIndex === idx) {

            //无心插柳   当正在播放时 点x 关闭  再次播放 可以正常播放
            if (!this.state.isPlayerOpen) {
                this.setState({isPlayerOpen: true})
            }

            return;
        }

        this.setState({
            currentPlayIndex: idx, isPlayerOpen: true
        });
    };

    _switchAudioList = () => {
        this.refs.audioListDialog.dialog.show();
    };

    _handleHardwareBack = () => {
        if (this.state.isPlayerOpen) {
            this._showHintWhileAudioPlaying();
            return true;
        }

        return false;
    };

    _onGoBack = () => {
        if (this.state.isPlayerOpen) {
            this._showHintWhileAudioPlaying();
        } else NavLeader.goBack(this);
    };

    _showHintWhileAudioPlaying = () => {
        Alert.alert(
            '提示',
            '是否退出语音导览?',
            [
                {
                    text: '取消', style: 'cancel'
                },
                {text: '退出', onPress: () => NavLeader.goBack(this)},
            ],
            {cancelable: false}
        )
    };

    _closeAudioPlay = () => {
        //取消当前的焦点状态
        this.setState({isPlayerOpen: false, currentPlayIndex: undefined})
    };

}