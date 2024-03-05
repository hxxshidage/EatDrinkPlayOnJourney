import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';
import TextView from "../../widget/common/TextView";
import RefreshList from "../../widget/list/RefreshList";
import FillWrapper from "../../widget/common/wrapper/FillWrapper";
import CollectHotelItemCell from "../../cell/CollectHotelItemCell";
import HorDivider from "../../widget/common/HorDivider";

export default class CollectHotelListPage extends React.Component {
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
            <CollectHotelItemCell/>
        );
    };
}