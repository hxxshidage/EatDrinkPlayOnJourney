/**
 * @Description: 个人信息修改  通用头部
 * @author HQ
 * @date 2019/7/2 10:29
 */
import React from 'react';
import {View} from 'react-native';
import {Sizer} from "../../tools/tools";
import TextView from "./common/TextView";
import TouchFeedback from "./common/TouchFeedback";
import PropTypes from 'prop-types';

export default class UpdateInfoHeader extends React.PureComponent {

    static propTypes = {
        onCancel: PropTypes.func,
        onFinish: PropTypes.func,
        title: PropTypes.string,
    };

    render(): React.ReactNode {
        const {onCancel, onFinish, title} = this.props;
        return (
            <View style={{
                paddingTop: Sizer.statusBarHeight(),
                height: 48 + Sizer.statusBarHeight(),
                alignItems: "center",
                flexDirection: 'row'
            }}>

                <TextView
                    style={{
                        flex: 1,
                        height: 48,
                        textAlignVertical: 'center',
                        textAlign: 'center'
                    }}
                    textSize={16}
                    textColor={'#000'}
                    text={title}
                />

                <TouchFeedback
                    clickCallback={onCancel}
                    opacityRadio={0.7}
                    touchStyle={{position: 'absolute', left: 10}}>
                    <TextView
                        style={{
                            paddingVertical: 3,
                            paddingHorizontal: 5, marginLeft: 7,
                            transform: [{translateY: Sizer.statusBarHeight() / 2}]

                        }}
                        text={'取消'}

                        textColor={'#171717'}
                    />
                </TouchFeedback>

                <TouchFeedback
                    clickCallback={onFinish}
                    opacityRadio={0.7}
                    touchStyle={{position: 'absolute', right: 10}}>
                    <TextView
                        style={{
                            padding: 2, marginRight: 7,
                            backgroundColor: "#06C15F",
                            paddingVertical: 3,
                            paddingHorizontal: 5,
                            borderRadius: 3,
                            transform: [{translateY: Sizer.statusBarHeight() / 2}]
                        }}
                        textSize={12}
                        text={'完成'}
                        textColor={'white'}
                    />
                </TouchFeedback>

            </View>
        );
    }
}