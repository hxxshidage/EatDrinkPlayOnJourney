import React from 'react';

import CollectGoodsItemCell from "../../cell/CollectGoodsItemCell";
import RefreshList from "../../widget/list/RefreshList";
import HorDivider from "../../widget/common/HorDivider";

export default class CollectGoodsListPage extends React.Component {
    render(): React.ReactNode {
        return (
            <RefreshList
                enableLoadMore={false}
                ItemSeparatorComponent={() => {
                    return <HorDivider
                        margin={[10, 0]}
                    />
                }}
                data={[{}, {}, {}]}
                renderItem={this._buildRenderItem}/>

        );

    }

    _buildRenderItem = () => {
        return (
            <CollectGoodsItemCell/>
        );
    };
}