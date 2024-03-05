/**
 * @Description: 搜索商品结果展示
 * @author HQ
 * @date 2019/7/4 12:06
 */
import React from 'react';
import FillWrapper from '../../widget/common/wrapper/FillWrapper';
import GoodsItemCell from "../../cell/GoodsItemCell";
import RefreshList from "../../widget/list/RefreshList";

export default class SearchGoodsListPage extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <FillWrapper>
                <RefreshList
                    numColumns={2}
                    enableLoadMore={false}
                    enablePullRefresh={false}
                    data={[{}, {}, {}, {}, {}, {}, {}]}
                    renderItem={this._buildRenderItem}/>

            </FillWrapper>
        );
    }

    _buildRenderItem = () => {
        return (
            <GoodsItemCell/>
        );
    };
}