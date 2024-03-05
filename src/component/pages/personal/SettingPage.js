import React from 'react';
import {Switch} from 'react-native';

import StatusWrapper from "../../widget/common/wrapper/StatusWrapper";
import HeaderBar from "../../widget/common/HeaderBar";
import {NavLeader, Random, screenW} from "../../../tools/tools";
import Switcher from "../../widget/common/Switcher";
import {View, StyleSheet} from 'react-native';
import HorDivider from "../../widget/common/HorDivider";
import TextView from "../../widget/common/TextView";
import {AppColors} from "../../../assets/colors/Color";
import ImageView from "../../widget/common/ImageView";
import TouchFeedback from "../../widget/common/TouchFeedback";

export default class SettingPage extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <StatusWrapper lightStatus={false}>

                <HeaderBar
                    onGoBack={() => {
                        NavLeader.goBack(this);
                    }}
                    title={'设置'}/>

                <HorDivider/>

                {this._buildPushSwitch()}

                {this._buildClearCache()}

                {/*{Random.randInt(0, 10) % 2 === 0 ? (this._buildChangePsd()) : null}*/}
                {this._buildChangePsd()}

                {this._buildAboutUs()}

                {this._buildExitLogin()}
            </StatusWrapper>);
    }

    _buildPushSwitch = () => {
        return (
            <View>
                <View style={styles.row}>

                    <TextView
                        style={{flex: 1}}
                        text={'推送通知'}
                        textColor={'#000'}
                    />

                    <Switcher
                        value={false}
                    />
                </View>
                <HorDivider/>
            </View>
        );
    };

    _buildClearCache = () => {
        return (
            <View>
                <TouchFeedback opacityRadio={0.65}>
                    <View style={styles.row}>

                        <TextView
                            style={{flex: 1}}
                            text={'清除缓存'}
                            textColor={'#000'}
                        />

                        <TextView
                            margin={[8, 0]}
                            textColor={AppColors.themeColor}
                            text={'100MB'}
                            textSize={12}
                        />

                        <ImageView
                            imgSrc={require('../../../assets/images/common/route_plan_right.png')}
                        />
                    </View>
                </TouchFeedback>
                <HorDivider/>
            </View>
        );
    };

    _buildChangePsd = () => {
        return (
            <View>
                <TouchFeedback
                    clickCallback={this._goChangePsd}
                    opacityRadio={0.65}>
                    <View style={styles.row}>

                        <TextView
                            style={{flex: 1}}
                            text={'修改密码'}
                            textColor={'#000'}
                        />

                        <ImageView
                            imgSrc={require('../../../assets/images/common/route_plan_right.png')}
                        />
                    </View>
                </TouchFeedback>
                <HorDivider/>
            </View>
        );
    };

    _buildAboutUs = () => {
        return (
            <View>
                <TouchFeedback opacityRadio={0.65}>
                    <View style={styles.row}>

                        <TextView
                            style={{flex: 1}}
                            text={'关于我们'}
                            textColor={'#000'}
                        />

                        <ImageView
                            imgSrc={require('../../../assets/images/common/route_plan_right.png')}
                        />
                    </View>
                </TouchFeedback>
                <HorDivider/>
            </View>
        );
    };

    _buildExitLogin = () => {
        return (
            <TouchFeedback
                clickCallback={this._onExitLogin}
                opacityRadio={0.65}
                touchStyle={{
                    position: 'absolute',
                    bottom: 24,
                    width: screenW - 12 * 2,
                    left: 12,
                }}>
                <TextView
                    text={'退出登录'}
                    textColor={AppColors.themeColor}
                    style={{
                        height: 40,
                        borderRadius: 45,
                        textAlign: 'center',
                        borderWidth: 1,
                        textAlignVertical: "center",
                        borderColor: AppColors.themeColor
                    }}
                />
            </TouchFeedback>
        );
    };

    _goChangePsd = () => {
        NavLeader.nav(this, 'ChangePsd')
    };


    _onExitLogin = () => {
        NavLeader.nav(this,'LoginNav')
    };
}

const styles = StyleSheet.create({
    row: {flexDirection: 'row', alignItems: "center", paddingHorizontal: 10, paddingVertical: 12},
});