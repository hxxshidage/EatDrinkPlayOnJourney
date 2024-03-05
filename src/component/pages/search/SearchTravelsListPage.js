/**
 * @Description: 搜索游记结果展示
 * @author HQ
 * @date 2019/7/4 12:08
*/
import React from 'react';
import FillWrapper from '../../widget/common/wrapper/FillWrapper';
import TourismItemCell from "../../cell/TourismItemCell";
import RefreshList from "../../widget/list/RefreshList";

export default class SearchTravelsListPage extends React.PureComponent {
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