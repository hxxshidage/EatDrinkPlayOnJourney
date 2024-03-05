import React from 'react';
import {
    StatusBar,
    View,
} from 'react-native';

import TouchFeedback from "../../widget/common/TouchFeedback";
import TextView from "../../widget/common/TextView";
import LocalCaller from "../../../tools/LocalCaller";
import HorDivider from "../../widget/common/HorDivider";
import ImageView from "../../widget/common/ImageView";
import VerDivider from "../../widget/common/VerDivider";
import RefreshList from "../../widget/list/RefreshList";
import ComplainAcceptCell from "../../cell/ComplainAcceptCell";
import ComplainSMSVerifyDialog from "../../dialog/ComplainSMSVerifyDialog";
import {NavLeader} from "../../../tools/tools";

const icons = [
    require('../../../assets/images/complain/complain_online.png'),
    undefined,/*添加两条竖线*/
    require('../../../assets/images/complain/complain_call_phone.png'),
    undefined,
    require('../../../assets/images/complain/refund_helper.png'),
];

const titles = ['在线投诉', undefined, '电话投诉', undefined, '退货助手'];
const subTitles = ['快速通道', undefined, '一键投诉', undefined, '退货助手'];
const descriptions = ['一键提交投诉单', undefined, '7×24小时为您服务', undefined, '维护您的消费权益'];


const dataCreate = () => {
    const data = [];
    for (let i = 0; i < 5; i++) {
        data.push({
            img: require('../../../assets/images/delete/header.jpg'),
            nickName: '小魔仙',
            content: '投诉餐饮-沙县小吃投诉受理',
            date: '05-12 16:00'
        });
    }
    return data;
};

export default class ComplaintPage extends React.Component {

    render(): React.ReactNode {
        return (
            <View
                style={{flex: 1, backgroundColor: '#fff'}}>

                <StatusBar
                    backgroundColor="transparent"
                    translucent={true}
                    hidden={false}
                    animated={false}
                    barStyle={'dark-content'}
                />

                {this._buildTitleBar()}

                <HorDivider/>

                {this._buildComplainClassify()}

                <HorDivider
                    height={8}
                />

                <RefreshList
                    contentContainerStyle={{paddingTop: 10, paddingBottom: 10}}
                    enableLoadMore={false}
                    enablePullRefresh={false}
                    data={dataCreate()}

                    renderItem={item => {
                        return (
                            <ComplainAcceptCell
                                item={item.item}
                            />
                        );

                    }}/>

                {/*<ComplainNoticeDialog*/}
                {/*ref={'noticeDialog'}*/}
                {/*/>*/}

                <ComplainSMSVerifyDialog
                    ref={'smsDialog'}
                />
            </View>);
    }

    _buildTitleBar() {
        return (
            <View style={{
                flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
                , marginTop: 40, marginBottom: 10
            }}>
                <TextView
                    style={{alignSelf: 'center'}}
                    text={'投诉'}
                    textColor={'#000'}
                    textSize={16}
                    textWeight={'bold'}
                />

                <TouchFeedback
                    opacityRadio={0.5}
                    clickCallback={this._showNoticeDialog}
                    touchStyle={{position: 'absolute', right: 10, padding: 2}}
                >
                    <ImageView
                        imgSrc={require('../../../assets/images/complain/complain_notice.png')}/>
                </TouchFeedback>


            </View>
        );
    }

    _buildComplainClassify = () => {
        return (
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                {icons.map((item, idx) => {
                    return item ? (
                        <TouchFeedback
                            opacityRadio={0.6}
                            extraData={titles[idx]}
                            clickCallback={this._classifyClickCb}
                            key={idx.toString()}
                        >
                            <View style={{alignItems: "center", paddingTop: 10, paddingBottom: 20}}>
                                <ImageView
                                    imgSrc={item}
                                />
                                <TextView
                                    text={titles[idx]}
                                    textSize={14}
                                    textWeight={'bold'}
                                    textColor={'#000'}
                                />

                                <TextView
                                    margin={[0, 5]}
                                    text={subTitles[idx]}
                                    textColor={'#000'}
                                    textSize={10}
                                />

                                <TextView
                                    text={descriptions[idx]}
                                    textColor={'#000'}
                                    textSize={12}
                                />
                            </View>
                        </TouchFeedback>
                    ) : (
                        <VerDivider
                            key={idx.toString()}
                        />)
                })}
            </View>
        );
    };

    _showNoticeDialog = () => {
        this.refs.smsDialog.dialog.show();
    };


    _classifyClickCb = extra => {
        switch (extra) {
            case '在线投诉':
                NavLeader.nav(this, 'ComplainEdit');
                // this._goComplainEdit();
                break;
            case '电话投诉':
                this._goNativeCallPhone();
                break;
            case '退货助手':
                NavLeader.nav(this, 'RefundHelper');
                break;

        }
    };


    _goNativeCallPhone = () => {
        LocalCaller.callPhone(18175970161)
            .catch(err => {
                console.warn(err);
            })
    };

}