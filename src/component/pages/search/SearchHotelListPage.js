/**
 * @Description: 搜索酒店结果展示
 * @author HQ
 * @date 2019/7/4 12:05
 */
import React from 'react';
import FillWrapper from '../../widget/common/wrapper/FillWrapper';
import RefreshList from "../../widget/list/RefreshList";
import HotelListItemCell from "../../cell/HotelListItemCell";

export default class SearchHotelListPage extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <FillWrapper>

                <RefreshList
                    contentContainerStyle={{paddingTop: 10}}
                    enablePullRefresh={false}
                    enableLoadMore={false}
                    data={[{}, {}, {}, {}]}
                    renderItem={this._buildRenderItem}/>
            </FillWrapper>
        );
    }

    _buildRenderItem = () => {
        return (
            <HotelListItemCell/>
        );
    };
}