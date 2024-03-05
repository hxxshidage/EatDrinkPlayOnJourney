import React from 'react';

import {
    View,
    ScrollView
} from 'react-native';
import TextView from "../../widget/common/TextView";
import HeaderBar from "../../widget/common/HeaderBar";
import ImageGridSelector from "../../widget/common/ImageGridSelector";
import HorDivider from "../../widget/common/HorDivider";
import EditText from "../../widget/common/EditText";
import ImageView from "../../widget/common/ImageView";
import TouchFeedback from "../../widget/common/TouchFeedback";
import {AppColors} from "../../../assets/colors/Color";

export default class ComplainEditPage extends React.PureComponent {
    state = {currentLen: 0};

    render(): React.ReactNode {
        return (
            <View
                style={{
                    flex: 1, overflow: 'hidden'
                }}>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    overScrollMode={'never'}
                    keyboardDismissMode={'on-drag'}
                >
                    <HeaderBar
                        height={48}
                        theWayForMergeStatusBar={'with-padding'}
                        title={'投诉'}
                        onGoBack={this._goBack2Complain}
                    />

                    <HorDivider/>

                    {this._buildLocationIncident()}

                    <HorDivider/>
                    {this._buildComplainObject()}
                    <HorDivider/>

                    {this._buildComplainReason()}

                    {this._buildComplainReasonInput()}

                    <TextView
                        margin={[16, 10, 10]}
                        text={'上传证据'}
                        textColor={'#000'}

                    />

                    <ImageGridSelector
                        ref={'imgSelector'}
                        maxSelectCount={8}
                        columns={4}
                        verticalSpace={5}
                        horizontalSpace={5}
                        padding={[0, 10, 10]}
                    />

                    {this._buildContacts()}

                    <HorDivider/>


                    {this._buildContactsInfo()}

                    <TouchFeedback
                        // touchStyle={{position: 'absolute', marginHorizontal: 10, bottom: 16,width:'100%'}}
                        touchStyle={{
                            marginHorizontal: 10,
                            marginTop: 36,
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
                </ScrollView>

            </View>);
    }

    _buildLocationIncident = () => {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 12,
                paddingLeft: 10,
                marginRight: 10,
                overflow: 'hidden'
            }}>

                <TextView
                    text={'事发地点'}
                    textColor={'#000'}
                />
                <TextView
                    textColor={'#888'}
                    textSize={12}
                    style={{marginLeft: 5}}
                    text={'(必填)'}/>

                <EditText
                    placeholder={'请输入或选择事发地点'}
                    style={{
                        width: '100%',
                        // backgroundColor: 'orange',
                        position: 'absolute',
                        left: 125,
                    }}
                />

                <TouchFeedback
                    opacityRadio={0.55}
                    touchStyle={{
                        position: 'absolute', right: 0
                    }}>
                    <View style={{justifyContent: 'center', alignItems: 'flex-end', width: 24, height: 24}}>
                        <ImageView
                            imgSrc={require('../../../assets/images/common/route_plan_right.png')}
                        />
                    </View>
                </TouchFeedback>


            </View>
        );
    };

    _buildComplainObject = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 12,
                    paddingLeft: 10,
                    marginRight: 10,
                    overflow: 'hidden'
                }}>
                <TextView
                    text={'投诉对象'}
                    textColor={'#000'}
                />
                <TextView
                    textColor={'#888'}
                    textSize={12}
                    style={{marginLeft: 5}}
                    text={'(必填)'}/>

                <EditText
                    placeholder={'您要投诉谁'}
                    style={{
                        width: '100%',
                        position: 'absolute',
                        left: 125,
                    }}
                />

            </View>
        );
    };

    _buildComplainReason = () => {

        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 12,
                    paddingLeft: 10,
                    marginRight: 10,
                    overflow: 'hidden'
                }}>

                <TextView
                    text={'投诉原因'}
                    textColor={'#000'}
                />

                <TextView
                    textColor={'#888'}
                    textSize={12}
                    style={{marginLeft: 5}}
                    text={'(必填)'}/>

            </View>
        );
    };

    _buildComplainReasonInput = () => {
        return (
            <View style={{
                paddingHorizontal: 10,
                paddingTop: 10,
                paddingBottom: 2,
                borderRadius: 2,
                overflow: 'hidden',
                borderWidth: 1,
                borderColor: '#eee',
                marginHorizontal: 10,
            }}>
                <EditText
                    onChanged={text => {
                        this.setState({currentLen: text.length})
                    }}
                    placeholder={'请输入投诉原因'}
                    multiline={true}
                    maxLength={500}
                    style={{
                        height: 48,
                        textAlign: 'left',
                        textAlignVertical: 'top',
                    }}
                />

                <TextView
                    style={{textAlign: "right"}}
                    textColor={'#333'}
                    textSize={12}
                    text={`${this.state.currentLen}/500`}
                />
            </View>
        );
    };

    _buildContacts = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 12,
                    paddingLeft: 10,
                    marginRight: 10,
                    overflow: 'hidden'
                }}>
                <TextView
                    text={'联系人'}
                    textColor={'#000'}
                />

                <EditText
                    placeholder={'请填写联系人'}
                    style={{
                        width: '100%',
                        position: 'absolute',
                        left: 125,
                    }}
                />

            </View>
        );
    };

    _buildContactsInfo = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 12,
                    paddingLeft: 10,
                    marginRight: 10,
                    overflow: 'hidden'
                }}>
                <TextView
                    text={'联系方式'}
                    textColor={'#000'}
                />
                <TextView
                    textColor={'#888'}
                    textSize={12}
                    style={{marginLeft: 5}}
                    text={'(必填)'}/>

                <EditText
                    placeholder={'请填写正确的联系方式'}
                    style={{
                        width: '100%',
                        position: 'absolute',
                        left: 125,
                    }}
                />

            </View>
        );
    };
    _goBack2Complain = () => {
        this.props.navigation && this.props.navigation.goBack(null);

    };
}