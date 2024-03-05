import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';
import TextView from "../../widget/common/TextView";
import RefreshList from "../../widget/list/RefreshList";
import TourismItemCell from "../../cell/TourismItemCell";
import HorDivider from "../../widget/common/HorDivider";

export default class CollectTravelsListPage extends React.Component {
    render(): React.ReactNode {
        return (
            <View
                style={{flex: 1}}>

                <RefreshList
                    ItemSeparatorComponent={() => {
                        return <HorDivider
                            margin={[10,0]}
                        />
                    }}
                    enablePullRefresh={false}
                    enableLoadMore={false}
                    data={[{}, {}, {}, {}, {}, {}, {}, {}, {}]}
                    renderItem={this._buildRenderItem}/>
            </View>);
    }

    _buildRenderItem = item => {
        return (<TourismItemCell/>);
    };
}