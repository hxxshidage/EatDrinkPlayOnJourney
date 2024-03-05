/**
 * @Description: 地址管理侧滑Item
 * @author HQ
 * @date 2019/6/21 14:38
 */
import React from 'react';

import {
    View,
} from 'react-native';

import PropTypes from 'prop-types';
import TextView from "../widget/common/TextView";
import TouchFeedback from "../widget/common/TouchFeedback";

export default class AddressSwipeItemCell extends React.PureComponent {

    static propTypes = {
        onSettingDefault: PropTypes.func,
        onDelete: PropTypes.func,
        isDefaultAddress: PropTypes.bool,
        index: PropTypes.number
    };

    render(): React.ReactNode {

        const {onSettingDefault, onDelete, isDefaultAddress, index} = this.props;

        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    //高度填充整个item的关键
                    flex: 1,
                    alignItems: 'center',
                }}
            >

                <TouchFeedback
                    extraData={index}
                    clickCallback={onSettingDefault}
                >

                    <TextView
                        textSize={12}
                        textColor={'#000'}
                        text={'设为默认'}
                        style={{
                            flex: 1,
                            backgroundColor: "#eee",
                            width: 80,
                            alignSelf: 'stretch',
                            textAlignVertical: 'center',
                            textAlign: 'center',
                        }}
                    />
                </TouchFeedback>

                {isDefaultAddress ? null : (
                    <TouchFeedback
                        extraData={index}
                        clickCallback={onDelete}
                    >
                        <TextView
                            textSize={12}
                            textColor={'white'}
                            text={'删除'}
                            style={{
                                flex: 1,
                                width: 80,
                                backgroundColor: "#FF3D3D",
                                textAlignVertical: 'center',
                                textAlign: 'center',
                            }}
                        />
                    </TouchFeedback>
                )}
            </View>
        );
    }
}