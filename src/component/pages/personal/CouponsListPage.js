/**
 * @Description: 优惠券列表页
 * @author HQ
 * @date 2019/6/24 15:55
 */
import React from 'react';

import {
    View,
    StatusBar
} from 'react-native';

import VideoView from '../../widget/player/VideoView';
import Video from 'react-native-video';
import StatusWrapper from "../../widget/common/wrapper/StatusWrapper";
import HorDivider from "./CollectHotelListPage";
import RefreshList from "../../widget/list/RefreshList";
import CouponsItemCell from "../../cell/CouponsItemCell";
import HeaderBar from "../../widget/common/HeaderBar";
import {NavLeader} from "../../../tools/tools";


export default class CouponsListPage extends React.PureComponent {


    render(): React.ReactNode {
        return (
            <StatusWrapper lightStatus={false}>

                <HeaderBar
                    title={'优惠券'}
                    onGoBack={() => {
                        NavLeader.goBack(this);
                    }}
                />

                <RefreshList
                    contentContainerStyle={{
                        backgroundColor: "#f5f5f5",
                        paddingBottom: 12
                    }}
                    enableLoadMore={false}
                    data={[{}, {}, {}, {}]}
                    renderItem={this._buildRenderItem}/>
            </StatusWrapper>
        );
    }

    _buildRenderItem = () => {
        return (
            <CouponsItemCell/>
        );
    };
}