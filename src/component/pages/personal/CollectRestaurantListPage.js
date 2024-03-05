import React from 'react';

import {
    View,
} from 'react-native';
import RefreshList from "../../widget/list/RefreshList";
import FoodListItemCell from "../../cell/FoodListItemCell";
import HorDivider from "../../widget/common/HorDivider";

export default class CollectRestaurantListPage extends React.Component {
    render(): React.ReactNode {
        return (
            <View
                style={{flex: 1}}>
                <RefreshList
                    contentContainerStyle={{paddingTop: 10}}
                    enableLoadMore={false}
                    enablePullRefresh={false}
                    data={[{}, {}, {}, {}, {}, {}, {}, {}, {}]}
                    renderItem={this._buildRenderItem}/>
            </View>);
    }


    _buildRenderItem = item => {
        return (<FoodListItemCell/>);
    };
}