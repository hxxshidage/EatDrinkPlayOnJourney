/**
 * @Description: 美食搜索结果展示
 * @author HQ
 * @date 2019/7/4 12:04
 */
import React from 'react';
import FillWrapper from '../../widget/common/wrapper/FillWrapper';
import RefreshList from "../../widget/list/RefreshList";
import FoodListItemCell from "../../cell/FoodListItemCell";

export default class SearchFoodListPage extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <FillWrapper>
                <RefreshList
                    contentContainerStyle={{paddingTop: 10}}
                    enableLoadMore={false}
                    enablePullRefresh={false}
                    data={[{}, {}, {}, {}]}
                    renderItem={this._buildRenderItem}/>

            </FillWrapper>
        );
    }

    _buildRenderItem = () => {
        return (
            <FoodListItemCell/>
        );
    };
}