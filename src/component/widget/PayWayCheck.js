/**
 * @Description: 支付方式选择器
 * @author HQ
 * @date 2019/6/29 16:50
 */
import React from 'react';
import {View} from 'react-native';
import ImageView from "./common/ImageView";
import TextView from "./common/TextView";
import PropTypes from 'prop-types';
import TouchFeedback from "./common/TouchFeedback";

export default class PayWayCheck extends React.PureComponent {

    static propTypes = {
        icon: PropTypes.number,
        title: PropTypes.string,
        isChecked: PropTypes.bool,
        onCheckInGroup: PropTypes.func
    };


    render(): React.ReactNode {
        const {icon, title, isChecked, onCheckInGroup} = this.props;
        return (
            <TouchFeedback
                clickCallback={onCheckInGroup}
                touchStyle={{alignSelf: "stretch"}}>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 12
                }}>

                    <ImageView
                        imgSrc={icon}
                    />

                    <TextView
                        style={{marginLeft: 16, flex: 1}}
                        text={title}
                        textColor={'#000'}
                        textSize={16}
                    />

                    <ImageView
                        imgSrc={isChecked ? require('../../assets/images/mall/pay_way_selected.png') :
                            require('../../assets/images/mall/pay_way_unselected.png')}
                    />

                </View>
            </TouchFeedback>

        );
    }
}