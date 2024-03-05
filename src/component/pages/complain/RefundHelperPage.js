import React from 'react';

import {
    View,
    StyleSheet,
    ScrollView,
    CheckBox
} from 'react-native';
import LabelInput from "../../widget/LabelInput";
import HeaderBar from "../../widget/common/HeaderBar";
import {NavLeader} from "../../../tools/tools";
import HorDivider from "../../widget/common/HorDivider";
import ImageView from "../../widget/common/ImageView";
import TouchFeedback from "../../widget/common/TouchFeedback";
import MainSideTitle from "../../widget/MainSideTitle";
import InputWithCounter from "../../widget/common/InputWithCounter";
import ImageHorListSelector from "../../widget/common/ImageHorListSelector";
import {AppColors} from "../../../assets/colors/Color";
import TextView from "../../widget/common/TextView";
import Radio from "../../widget/common/Radio";

export default class RefundHelperPage extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                overScrollMode={'never'}
                keyboardDismissMode={'on-drag'}
            >
                <HeaderBar
                    onGoBack={() => {
                        NavLeader.goBack(this);
                    }}
                    title={'我要退货'}
                />

                <HorDivider/>

                {this._buildBuyAddressInput()}

                <HorDivider/>

                {this._buildSellerName()}

                <HorDivider/>

                {this._buildGoodsName()}

                <HorDivider/>

                {this._buildDetailAddress()}

                <HorDivider/>

                {this._buildPurchaseAmount()}

                <HorDivider/>

                <MainSideTitle
                    style={{padding: 10}}
                    mainTitle={'原因说明'}/>

                <InputWithCounter
                    placeHolder={'请输入您退货原因'}
                    maxLength={200}/>


                <MainSideTitle
                    style={{paddingHorizontal: 10, paddingTop: 16, paddingBottom: 5}}
                    sideTitle={'(最多9张)'}
                    mainTitle={'购买凭证'}/>

                {this._buildImageSelect()}

                {this._buildContacts()}
                <HorDivider/>

                {this._buildContactInfo()}
                <HorDivider/>
                {this._buildIdCardNum()}

                <HorDivider/>

                {this._buildReadingProtocol()}
                {this._buildSubmitBtn()}
            </ScrollView>

        );
    }

    _buildBuyAddressInput = () => {
        return (
            <LabelInput
                mainTitle={'购买地点'}
                placeHolder={'请输入姓名'}
            >
                <TouchFeedback
                    touchStyle={styles.moreRight}
                    clickCallback={() => {
                        console.warn('选择地点');
                    }}
                >
                    <ImageView
                        imgSrc={require('../../../assets/images/common/route_plan_right.png')}
                    />
                </TouchFeedback>

            </LabelInput>);
    };
    _buildSellerName = () => {
        return (
            <LabelInput
                mainTitle={'商家名称'}
                placeHolder={'请填写卖家姓名'}
            />
        );
    };

    _buildGoodsName = () => {
        return (
            <LabelInput
                mainTitle={'商品名称'}
                placeHolder={'请输入您购买的商品名称'}
            />
        );
    };

    _buildDetailAddress = () => {
        return (
            <LabelInput
                mainTitle={'详细地址'}
                placeHolder={'请输入您购买的详细地址'}
            />
        );
    };

    _buildPurchaseAmount = () => {
        return (
            <LabelInput
                mainTitle={'购物金额'}
                placeHolder={'请输入您的购物金额'}
            />
        );
    };

    _buildImageSelect = () => {
        return (
            <View>
                <ImageHorListSelector
                    padding={[0, 10, 16]}
                    ref={'imgSelector'}
                    maxSelectCount={9}
                    visibleCountInRow={4}
                    verticalSpace={5}
                />
            </View>
        );
    };

    _buildContacts = () => {
        return (
            <LabelInput
                mainTitle={'联系人'}
                sideTitle={' '}
                placeHolder={'请填写联系人'}
            />
        );
    };

    _buildContactInfo = () => {
        return (
            <LabelInput
                mainTitle={'联系方式'}
                sideTitle={' '}
                placeHolder={'请填写正确的联系方式'}
            />
        );
    };
    _buildIdCardNum = () => {
        return (
            <LabelInput
                mainTitle={'身份证号码'}
                sideTitle={' '}
                placeHolder={'请填写正确的身份证号码'}
            />);
    };

    _buildReadingProtocol = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 32,
                    alignItems: 'center'
                }}>

                <Radio
                    checked={false}/>

                <TextView
                    margin={[0, 8, 0, 0]}
                    text={'我已阅读并同意'}
                    textSize={12}
                    textColor={'#888'}
                />

                <TouchFeedback
                    opacityRadio={0.65}
                    clickCallback={() => {
                        console.warn("阅读协议")
                    }}
                >
                    <TextView
                        text={'<<退货功能使用须知>>'}
                        textColor={'#3E98FF'}
                        textSize={12}
                    />
                </TouchFeedback>
            </View>
        );
    };

    _buildSubmitBtn = () => {
        return (
            <TouchFeedback
                // touchStyle={{position: 'absolute', marginHorizontal: 10, bottom: 16,width:'100%'}}
                touchStyle={{
                    marginHorizontal: 10,
                    marginTop: 16,
                    marginBottom: 16
                }}
            >
                <TextView
                    style={{
                        backgroundColor: AppColors.themeColor,
                        paddingVertical: 12,
                        textAlign: 'center',
                        borderRadius: 5
                    }}

                    textColor={'white'}
                    text={'提 交'}
                />

            </TouchFeedback>
        );
    };
}


const styles = StyleSheet.create({
    moreRight: {
        flexDirection: 'row',
        width: 30,
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: "absolute",
        right: 10
    }

});