import React from 'react';

import CollectScenicItemCell from "../../cell/CollectScenicItemCell";
import FillWrapper from "../../widget/common/wrapper/FillWrapper";
import RefreshList from "../../widget/list/RefreshList";
import HorDivider from "../../widget/common/HorDivider";

export default class CollectScenicListPage extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <FillWrapper>
                <RefreshList
                    ItemSeparatorComponent={() => {
                        return <HorDivider
                            margin={[10, 0]}
                        />
                    }}
                    enableLoadMore={false}
                    data={[{}, {}, {}, {}]}
                    renderItem={this._buildRenderItem}/>

            </FillWrapper>
        );
    }

    _buildRenderItem = () => {
        return (
            <CollectScenicItemCell/>
        );
    };
}