import React from 'react';

import {
    View, StatusBar

} from 'react-native';
import HeaderBar from "../../widget/common/HeaderBar";
import {NavLeader} from "../../../tools/tools";
import RefreshList from "../../widget/list/RefreshList";
import ComplainAcceptCell from "../../cell/ComplainAcceptCell";
import TextView from "../../widget/common/TextView";

const dataCreate = () => {
    const data = [];
    for (let i = 0; i < 15; i++) {
        data.push({
            img: require('../../../assets/images/delete/header.jpg'),
            nickName: '小魔仙',
            content: '投诉餐饮-沙县小吃投诉受理',
            date: '05-12 16:00',
            state: i % 2 === 0 ? 'accepting' : i % 3 === 0 ? 'wait' : "accepted"
        });
    }
    return data;
};


export default class MyComplainPage extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <View
                style={{flex: 1}}>

                <StatusBar
                    backgroundColor="transparent"
                    translucent={true}
                    hidden={false}
                    animated={false}
                    barStyle={'dark-content'}
                />

                <HeaderBar
                    onGoBack={() => {
                        NavLeader.goBack(this);
                    }}
                    title={'我的投诉'}
                />

                <RefreshList
                    contentContainerStyle={{paddingTop: 16}}
                    data={dataCreate()}
                    renderItem={this._buildComplainItem}/>

            </View>);
    }

    _buildComplainItem = item => {

        const arr = this._getTextArrFromState(item.item.state);

        return (
            <View style={{paddingBottom: 16}}>
                <ComplainAcceptCell
                    item={item.item}
                />

                <TextView
                    text={arr.text}
                    textSize={10}
                    textColor={arr.color}
                    style={{
                        width: 48,
                        borderWidth: 1,
                        borderRadius: 2,
                        borderColor: arr.color,
                        paddingVertical: 2,
                        marginRight: 10,
                        alignSelf: "flex-end",
                        textAlign: 'center'
                    }}
                />
            </View>
        );
    };

    _getTextArrFromState = state => {
        const res = {};
        switch (state) {
            case 'accepting':
                res.text = '受理中';
                res.color = '#FF3D3D';
                break;
            case 'wait':
                res.text = '等待受理';
                res.color = '#000';
                break;
            case 'accepted':
                res.text = '已处理';
                res.color = '#2BD299';
                break;
        }

        return res;
    };
}