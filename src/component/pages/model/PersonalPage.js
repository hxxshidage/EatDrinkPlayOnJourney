import React from 'react';

import BlurImageGroup from '../../widget/common/BlurImageGroup';
import {NavLeader, screenW} from "../../../tools/tools";

import {
    View,
} from 'react-native';
import ImageView from "../../widget/common/ImageView";
import TextView from "../../widget/common/TextView";

import PersonalOrderCell from '../../cell/PersonalOrderCell';
import PersonalArticleCell from '../../cell/PersonalArticleCell';
import PersonalSettingCell from "../../cell/PersonalSettingCell";
import TouchFeedback from "../../widget/common/TouchFeedback";
import StatusWrapper from "../../widget/common/wrapper/StatusWrapper";

export default class PersonalPage extends React.PureComponent {

    constructor(props) {
        super(props);
        // console.warn(props.loginInfo.user.nickName);
    }


    render(): React.ReactNode {
        return (

            <StatusWrapper>
                <BlurImageGroup
                    blurAmount={6}
                    size={[screenW, screenW * 0.5]}
                    imgSrc={require('../../../assets/images/delete/header.jpg')}
                >
                    {this._buildPersonalInfo()}

                </BlurImageGroup>


                {this._buildOrder()}

                {this._buildUserArticle()}

                {this._buildSetting()}

            </StatusWrapper>
        );
    }

    _buildPersonalInfo = () => {
        const {logged} = this.props.loginInfo;
        return (
            <View style={{alignItems: 'center'}}>
                <ImageView
                    style={{borderWidth: 2, borderColor: 'white'}}
                    size={[70]}
                    corner={35}
                    imgSrc={require('../../../assets/images/delete/header.jpg')}
                />

                {logged ? this._buildLogged() : this._buildNoLogged()}
                {/*{this._buildLogged()}*/}
                {/*{this._buildNoLogged()}*/}
            </View>
        );
    };


    _buildNoLogged = () => {
        return (
            <TouchFeedback opacityRadio={0.65} clickCallback={this._goLoginOrRegister}>
                <View
                    style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>

                    <TextView
                        text={'登录'}
                        textSize={16}
                        textColor={'white'}
                    />

                    <TextView
                        textSize={16}
                        textColor={'white'}
                        text={' / '}
                    />


                    <TextView
                        text={'注册'}
                        textSize={16}
                        textColor={'white'}
                    />

                </View>
            </TouchFeedback>
        );
    };
    _buildLogged = () => {
        const {nickName} = this.props.loginInfo.user;
        return (
            <TouchFeedback
                //有点意思  这种2b错误  直接导致进界面就到了PersonalInfoPage
                // clickCallback={this._goPersonalInfo()}

                clickCallback={this._goPersonalInfo}

                opacityRadio={0.80}>
                <View
                    style={{flexDirection: 'row', justifyContent: 'center', alignItems: "center", marginTop: 10}}>

                    <TextView
                        margin={[0, 8, 0, 0,]}
                        text={nickName}
                        textSize={16}
                        textWeight={'bold'}
                        textColor={'white'}
                    />

                    <ImageView
                        imgSrc={require('../../../assets/images/personal/personal_logged_right.png')}
                    />


                </View>
            </TouchFeedback>
        );
    };

    _buildOrder = () => {
        return (
            <PersonalOrderCell
                itemClick={this._goOrder}
            />
        );
    };

    _buildUserArticle = () => {
        return (
            <PersonalArticleCell
                itemClick={this._goModelFromArticle}
            />
        );

    };

    _buildSetting = () => {
        return (
            <PersonalSettingCell
                itemClick={this._goModelFromSetting}
            />

        );
    };

    _goOrder = extra => {
        NavLeader.nav(this, 'MyOrder');
    };

    _goModelFromArticle = (index, extra) => {
        switch (extra) {
            case '优惠券':
                NavLeader.nav(this, 'Coupons', {info: 'coupon'});
                break;
            case '我的收藏':
                NavLeader.nav(this, 'MyCollect');
                break;
            case '意见反馈':
                NavLeader.nav(this, 'ComplainFeedback');
                break;
            case '我的投诉':
                NavLeader.nav(this, 'MyComplain');
                break;
        }
    };

    _goModelFromSetting = (index, extra) => {
        switch (extra) {
            case '地址管理':
                NavLeader.nav(this, 'AddressManager');
                break;
            case '设置':
                NavLeader.nav(this, 'Setting');
                break;
        }
    };

    _goLoginOrRegister = () => {
        NavLeader.nav(this, 'PhoneLogin');
    };


    _goPersonalInfo = () => {
        NavLeader.nav(this, 'PersonalInfo');
    };
}

