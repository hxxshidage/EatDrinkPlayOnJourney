import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';
import FillWrapper from "../../widget/common/wrapper/FillWrapper";
import CountryNewsItemCell from "../../cell/CountryNewsItemCell";
import RefreshList from "../../widget/list/RefreshList";
import HorDivider from "../../widget/common/HorDivider";

export default class CountryNewsPage extends React.Component {
    render(): React.ReactNode {
        return (
            <FillWrapper>

                <RefreshList
                    ItemSeparatorComponent={() => {
                        return (
                            <HorDivider/>
                        );
                    }}
                    enablePullRefresh={false}
                    enableLoadMore={false}
                    data={[{}, {}, {}, {}, {}, {}]}
                    renderItem={this._buildRenderItem}/>
            </FillWrapper>);
    }

    _buildRenderItem = () => {
        return (
            <CountryNewsItemCell/>
        );
    };
}