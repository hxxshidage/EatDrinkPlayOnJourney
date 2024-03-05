/**
 * @Description: 性别选择 组件
 * @author HQ
 * @date 2019/7/2 13:23
 */
import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import TextView from "./common/TextView";
import ImageView from "./common/ImageView";
import TouchFeedback from "./common/TouchFeedback";

export default class SexChecker extends React.PureComponent {

    static propTypes = {
        ...TextView.propTypes,
        isChecked: PropTypes.bool,
        onCheckedChange: PropTypes.func
    };

    render(): React.ReactNode {
        const {isChecked, onCheckedChange} = this.props;
        return (
            <TouchFeedback clickCallback={onCheckedChange} opacityRadio={0.65}>
                <View style={{
                    flexDirection: 'row', alignItems: "center", padding: 12,
                    backgroundColor: "white"
                }}>
                    <TextView
                        style={{flex: 1}}
                        {...this.props}
                    />

                    {isChecked ? (
                            <ImageView
                                imgSrc={require('../../assets/images/personal/sex_checker.png')}
                            />
                        ) :
                        null
                    }
                </View>
            </TouchFeedback>
        );
    }
}