/**
 * @Description:
 * @author HQ
 * @date 2019/7/2 16:25
 */
import React from 'react';
import StatusWrapper from "../../widget/common/wrapper/StatusWrapper";
import HeaderBar from "../../widget/common/HeaderBar";
import HorDivider from "../../widget/common/HorDivider";
import {NavLeader} from "../../../tools/tools";
import TicketScenicItemCell from "../../cell/TicketScenicItemCell";
import RefreshList from "../../widget/list/RefreshList";

export default class TicketListPage extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <StatusWrapper>
                <HeaderBar
                    onGoBack={() => {
                        NavLeader.goBack(this);
                    }}
                    title={'门票'}
                />

                <HorDivider/>


                <RefreshList
                    ItemSeparatorComponent={() => {
                        return (
                            <HorDivider
                                margin={[0, 0, 0, 132]}
                            />
                        );
                    }}
                    data={[{}, {}, {}, {}, {}, {}]}
                    renderItem={this._buildRenderItem}
                    enableLoadMore={false}
                    enablePullRefresh={false}
                />

            </StatusWrapper>
        );
    }

    _buildRenderItem = () => {
        return (
            <TicketScenicItemCell
                clickCallback={() => {
                    NavLeader.nav(this, 'TicketDetail')
                }}
            />
        );
    };
}