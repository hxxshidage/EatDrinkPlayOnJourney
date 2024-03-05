/**
 * @Description: 景区介绍列表
 * @author HQ
 * @date 2019/7/2 17:26
 */
import React from 'react';
import StatusWrapper from "../../widget/common/wrapper/StatusWrapper";
import HeaderBar from "../../widget/common/HeaderBar";
import {NavLeader} from "../../../tools/tools";
import ScenicIntroduceItemCell from "../../cell/ScenicIntroduceItemCell";
import RefreshList from "../../widget/list/RefreshList";
import HorDivider from "../../widget/common/HorDivider";

export default class ScenicIntroduceListPage extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <StatusWrapper>
                <HeaderBar
                    onGoBack={() => {
                        NavLeader.goBack(this);
                    }}
                    title={'景区'}
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
                    enablePullRefresh={false}
                    enableLoadMore={false}
                    renderItem={this._buildRenderItem}/>


            </StatusWrapper>
        );
    }

    _buildRenderItem = item => {
        return (
            <ScenicIntroduceItemCell
                extraData={item}
                clickCallback={()=>{
                    NavLeader.nav(this,'ScenicIntroduceDetail')
                }}
            />
        );
    };
}