/**
 * @Description: 搜索攻略结果展示
 * @author HQ
 * @date 2019/7/4 12:07
*/
import React from 'react';
import FillWrapper from '../../widget/common/wrapper/FillWrapper';
import RefreshList from "../../widget/list/RefreshList";
import TourismItemCell from "../../cell/TourismItemCell";

export default class SearchStrategyListPage extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <FillWrapper>
                <RefreshList
                    enableLoadMore={false}
                    enablePullRefresh={false}
                    data={[{}, {}, {}, {}, {}, {}, {}]}
                    renderItem={this._buildRenderItem}/>

            </FillWrapper>
        );
    }

    _buildRenderItem = () => {
        return (
            <TourismItemCell/>
        );
    };
}