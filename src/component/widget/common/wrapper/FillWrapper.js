/**
 * @Description: 填充屏幕的view
 * @author HQ
 * @date 2019/6/28 9:33
 */
import React from 'react';
import {
    View,
} from 'react-native';
import {fill} from '../../../../assets/styles/base/BaseStyles';

//不能有纯组件  刷新存在问题
export default class FillWrapper extends React.Component {

    render(): React.ReactNode {
        return (
            <View
                style={[fill, this.props.style]}>
                {this.props.children}
            </View>);
    }
}