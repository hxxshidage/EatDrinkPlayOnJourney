/**
 * @Description: 个人信息页面
 * @author HQ
 * @date 2019/7/1 17:57
 */
import React from 'react';
import StatusWrapper from "../../widget/common/wrapper/StatusWrapper";
import HeaderBar from "../../widget/common/HeaderBar";
import {NavLeader} from "../../../tools/tools";
import {View, StyleSheet} from 'react-native';
import TextView from "../../widget/common/TextView";
import ImageView from "../../widget/common/ImageView";
import HorDivider from "../../widget/common/HorDivider";
import TouchFeedback from "../../widget/common/TouchFeedback";
import PropTypes from 'prop-types';

export default class PersonalInfoPage extends React.PureComponent {


    render(): React.ReactNode {
        return (
            <StatusWrapper
                lightStatus={false}
                style={{backgroundColor: "#eeeeed"}}>

                <HeaderBar
                    onGoBack={() => {
                        NavLeader.goBack(this);
                    }}
                    title={'个人信息'}
                    bgColor={'transparent'}
                />

                {this._buildAvatar()}

                <HorDivider
                    stretchActive={false}
                    margin={[0, 0, 0, 12]}
                />

                {this._buildNickName()}

                <HorDivider
                    margin={[0, 0, 0, 12]}
                />

                {this._buildSex()}
            </StatusWrapper>
        );
    }

    _buildAvatar = () => {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                paddingLeft: 10,
                paddingRight: 16,
                backgroundColor: 'white'
            }}>

                <TextView
                    style={{flex: 1}}
                    text={'头像'}
                    textWeight={'bold'}
                    textSize={16}
                    textColor={'#000'}
                />

                <TouchFeedback clickCallback={() => {
                    console.warn("更改头像");
                }}>
                    <ImageView
                        size={[64]}
                        style={{marginRight: 12}}
                        imgSrc={require('../../../assets/images/delete/header.jpg')}
                    />
                </TouchFeedback>

                <ImageView
                    imgSrc={require('../../../assets/images/common/route_plan_right.png')}
                />
            </View>
        );
    };

    _buildNickName = () => {
        const {nickName} = this.props.user;

        return (
            <TouchFeedback opacityRadio={0.7} clickCallback={this._goUpdateNickName}>
                <View style={styles.rowRoot}>
                    <TextView
                        style={{flex: 1}}
                        textSize={16}
                        textColor={'#000'}
                        textWeight={'bold'}
                        text={'昵称'}
                    />


                    <TextView
                        textColor={'#7F7F7F'}
                        margin={[0, 12, 0, 0]}
                        text={nickName}
                    />


                    <ImageView
                        imgSrc={require('../../../assets/images/common/route_plan_right.png')}
                    />
                </View>
            </TouchFeedback>
        );
    };

    _buildSex = () => {
        const {sex} = this.props.user;

        return (
            <TouchFeedback opacityRadio={0.7} clickCallback={this._goUpdateSex}>
                <View style={styles.rowRoot}>
                    <TextView
                        style={{flex: 1}}
                        textSize={16}
                        textColor={'#000'}
                        textWeight={'bold'}
                        text={'性别'}
                    />

                    <TextView
                        textColor={'#7F7F7F'}
                        margin={[0, 12, 0, 0]}
                        text={sex}
                    />

                    <ImageView
                        imgSrc={require('../../../assets/images/common/route_plan_right.png')}
                    />
                </View>
            </TouchFeedback>
        );
    };

    _goUpdateNickName = () => {
        NavLeader.nav(this, 'UpdateNick')
    };

    _goUpdateSex = () => {
        NavLeader.nav(this, 'UpdateSex');
    };
}

const styles = StyleSheet.create({
    rowRoot: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingLeft: 12,
        paddingRight: 16,
        backgroundColor: 'white'
    }
});