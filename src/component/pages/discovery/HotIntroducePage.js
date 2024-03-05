import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';
import FillWrapper from "../../widget/common/wrapper/FillWrapper";
import RefreshList from "../../widget/list/RefreshList";
import {Random} from "../../../tools/tools";
import CountryNewsItemCell from "../../cell/CountryNewsItemCell";
import TourismItemCell from "../../cell/TourismItemCell";
import HorDivider from "../../widget/common/HorDivider";

const createData = () => {
    const arr = [];
    const len = Random.randInt(5, 12);
    for (let i = 0; i < len; i++) {
        arr[i] = {type: i % 2 === 0 || i % 3 === 0 ? 'grid' : "list"};
    }
    return arr;
};


export default class HotIntroducePage extends React.Component {
    render(): React.ReactNode {
        return (
            <FillWrapper>
                <RefreshList
                    ItemSeparatorComponent={() => {
                        return (
                            <HorDivider
                                margin={[0, 0, 0, 12]}
                            />
                        );
                    }}
                    enablePullRefresh={false}
                    enableLoadMore={false}
                    data={createData()}
                    renderItem={this._buildRenderItem}
                />
            </FillWrapper>);
    }

    _buildRenderItem = item => {
        switch (item.item.type) {
            case 'grid':
                return <CountryNewsItemCell/>;
            case 'list':
                return <TourismItemCell/>

        }
    };
}