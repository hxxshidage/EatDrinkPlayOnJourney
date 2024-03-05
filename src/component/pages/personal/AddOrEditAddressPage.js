/**
 * @Description: 收获地址新增或编辑
 * @author HQ
 * @date 2019/6/21 16:06
 */
import React from 'react';

import {
    ImageBackground,
    View,
} from 'react-native';
import HeaderBar from "../../widget/common/HeaderBar";
import PropTypes from 'prop-types';
import {NavLeader, screenW} from "../../../tools/tools";
import HorDivider from "../../widget/common/HorDivider";
import TextView from "../../widget/common/TextView";
import EditText from "../../widget/common/EditText";
import {AppColors} from "../../../assets/colors/Color";
import TouchFeedback from "../../widget/common/TouchFeedback";
import TextWithIcon from "../../widget/common/TextWithIcon";
import ImageView from "../../widget/common/ImageView";

export default class AddOrEditAddressPage extends React.PureComponent {

    static propTypes = {
        isEdit: PropTypes.bool
    };

    render(): React.ReactNode {
        return (
            <View
                style={{flex: 1}}>

                <HeaderBar
                    title={`${this.props.isEdit ? '修改' : '新增'}收获地址`}
                    onGoBack={() => {
                        NavLeader.goBack(this);
                    }}
                />
                <HorDivider/>

                {this._buildEditContent()}

                <TouchFeedback
                    touchStyle={{
                        position: 'absolute',
                        bottom: 16,
                        alignSelf: 'center',
                    }}
                    opacityRadio={0.85}
                >
                    <ImageBackground
                        style={{
                            width: screenW - 64,
                            height: (screenW - 64) * 0.193,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        source={require('../../../assets/images/personal/add_address_btn_bg.png')}
                    >

                        <TextView
                            text={'保存并使用'}
                        />

                    </ImageBackground>

                </TouchFeedback>

            </View>);
    }

    _buildEditContent = () => {
        return (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>

                <View>

                    <TextView
                        margin={[8, 0, 8, 12]}

                        textColor={"#666"}
                        text={'收获人:'}
                    />

                    <HorDivider/>

                    <TextView
                        margin={[8, 0, 8, 12]}

                        textColor={"#666"}
                        text={'联系方式:'}
                    />
                    <HorDivider/>

                    <TextView
                        margin={[8, 0, 8, 12]}

                        textColor={"#666"}
                        text={'所在地区:'}
                    />
                    <HorDivider/>

                    <TextView
                        margin={[8, 0, 8, 12]}

                        textColor={"#666"}
                        text={'详细地址:'}
                    />
                    <HorDivider/>

                </View>

                <View style={{flex: 1}}>

                    <EditText
                        style={{
                            fontSize: 14,
                            flex: 1,
                            marginLeft: 8,
                            color: '#000'
                        }}
                        maxLength={11}
                        keyboardType={'numeric'}
                        placeholder={'请输入收货人姓名'}
                        placeholderTextColor={'#ccc'}
                    />


                    <HorDivider/>

                    <EditText
                        style={{
                            fontSize: 14,
                            flex: 1,
                            marginLeft: 8,
                            color: '#000'
                        }}
                        maxLength={11}
                        keyboardType={'numeric'}
                        placeholder={'请输入收货人联系方式'}
                        placeholderTextColor={'#ccc'}
                    />
                    <HorDivider/>


                    <TouchFeedback
                        opacityRadio={0.70}
                        clickCallback={() => {
                            console.warn("三级联动");

                        }}
                    >
                        <View
                            style={{
                                paddingVertical: 8,
                                flexDirection: "row",
                                alignItems: "center",
                                paddingLeft: 8,
                                paddingRight: 16
                            }}>

                            <TextView
                                style={{flex: 1}}
                                text={'北京市朝阳区'}
                                textColor={'#000'}
                            />

                            <ImageView
                                imgSrc={require('../../../assets/images/common/route_plan_right.png')}
                            />
                        </View>
                    </TouchFeedback>

                    <HorDivider/>

                    <EditText
                        style={{
                            fontSize: 12,
                            flex: 1,
                            marginLeft: 8,
                            color: '#000',
                        }}
                        maxLength={11}
                        keyboardType={'numeric'}
                        placeholder={'请输入收获人详细地址'}
                        placeholderTextColor={'#ccc'}
                    />
                    <HorDivider/>

                </View>
            </View>
        );
    };
}