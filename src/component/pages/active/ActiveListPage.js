/**
 * @Description: 活动列表页
 * @author HQ
 * @date 2019/7/2 15:49
 */
import React from 'react';
import StatusWrapper from "../../widget/common/wrapper/StatusWrapper";
import HeaderBar from "../../widget/common/HeaderBar";
import HorDivider from "../../widget/common/HorDivider";
import {NavLeader} from "../../../tools/tools";
import ActiveItemCell from "../../cell/ActiveItemCell";
import RefreshList from "../../widget/list/RefreshList";

export default class ActiveListPage extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <StatusWrapper>
                <HeaderBar
                    onGoBack={() => {
                        NavLeader.goBack(this);
                    }}
                    title={'活动'}
                />
                <HorDivider/>

                <RefreshList
                    ItemSeparatorComponent={() => {
                        return (
                            <HorDivider
                                margin={[0, 0, 0, 12]}
                            />
                        );
                    }}
                    enablePullRefresh={false}
                    enableLoadMore={false}
                    data={[{}, {}, {}, {}, {}, {}, {}, {}, {}]}
                    renderItem={this._buildRenderItem}
                />


            </StatusWrapper>
        );
    }

    _buildRenderItem = () => {
        return (
            <ActiveItemCell/>
        );
    };
}