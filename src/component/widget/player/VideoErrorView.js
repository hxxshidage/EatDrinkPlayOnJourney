import React from 'react';

import {
    View,
} from 'react-native';
import {AppColors} from "../../../assets/colors/Color";
import TextView from "../common/TextView";
import TouchFeedback from "../common/TouchFeedback";
import PropTypes from 'prop-types';


export default class VideoErrorView extends React.PureComponent {

    static propTypes = {
        onRetryCallback: PropTypes.func,
        onExitCallback: PropTypes.func
    };

    render(): React.ReactNode {

        const {onRetryCallback, onExitCallback} = this.props;

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
                    text={'播放出错'}
                    textColor={'white'}
                />

                <View style={{
                    marginTop: 16,
                    width: 150,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <TouchFeedback
                        touchStyle={{overflow: 'hidden'}}
                        clickCallback={onRetryCallback}
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
                            text={'重试'}
                            textSize={12}
                            textColor={'white'}
                        />
                    </TouchFeedback>

                    <TouchFeedback
                        touchStyle={{overflow: 'hidden'}}
                        clickCallback={onExitCallback}
                    >
                        <TextView
                            style={{
                                width: 60,
                                height: 24,
                                borderWidth: 1,
                                borderColor: "white",
                                textAlignVertical: 'center',
                                textAlign: 'center',
                                borderRadius: 15
                            }}
                            text={'退出'}
                            textSize={12}
                            textColor={'white'}
                        />
                    </TouchFeedback>
                </View>


            </View>);
    }
}