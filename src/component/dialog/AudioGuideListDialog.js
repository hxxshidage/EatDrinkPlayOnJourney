import React from 'react';

import {
    View,
} from 'react-native';

import PropTypes from 'prop-types';
import Dialog from "./Dialog";
import {screenW, Sizer} from "../../tools/tools";
import AudioGuideItemCell from "../cell/AudioGuideItemCell";
import RefreshList from "../widget/list/RefreshList";
import TextView from "../widget/common/TextView";

export default class AudioGuideListDialog extends React.PureComponent {

    static propTypes = {
        onScenicItemClick: PropTypes.func,
        audioData: PropTypes.array
    };


    render(): React.ReactNode {
        const {audioData} = this.props;

        return (
            <Dialog
                useNativeDriver={true}/*dialog弹出的流畅度高点  原生动画的方式*/
                swipeThreshold={30}
                backdropTransitionOutTiming={0}
                animationIn={'slideInRight'}
                animationOut={'slideOutRight'}
                backdropOpacity={0}
                fillScreenOnWidth={true}
                swipeDirection={['right']}
                onSwipeComplete={() => {
                    this.dialog.hide();
                }}
                // swipeDirection={['up', 'down']}
                ref={ref => this.dialog = ref}
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginTop: 48
                }}
            >

                <View
                    style={{
                        backgroundColor: "rgba(0,0,0,.7)",
                        width: screenW * 0.8
                    }}
                >

                    <RefreshList
                        ListHeaderComponent={this._buildRenderHeader}
                        enablePullRefresh={false}
                        enableLoadMore={false}
                        data={audioData}
                        renderItem={this._buildRenderItem}/>

                </View>

            </Dialog>
        );
    }

    _buildRenderHeader = () => {
        return (
            <TextView
                style={{
                    height: 60,
                    textAlign: 'center',
                    textAlignVertical: 'center'
                }}
                textColor={'white'}
                textSize={16}
                textWeight={'bold'}
                text={'语音导览列表'}
            />
        );
    };


    _buildRenderItem = item => {
        const {onScenicItemClick} = this.props;
        return (
            <AudioGuideItemCell
                extraData={item}
                clickCallback={onScenicItemClick}
            />
        )
    };
}