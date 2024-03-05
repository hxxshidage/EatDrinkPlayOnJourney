import React from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import CardView from 'react-native-cardview';
import RefreshList from '../../widget/list/RefreshList';
import TextView from "../../widget/common/TextView";
import TourismItemCell from '../../cell/TourismItemCell';
import {screenW} from "../../../tools/tools";
import ImageView from "../../widget/common/ImageView";
import HorDivider from "../../widget/common/HorDivider";
import FoodListItem from "../food/FoodListPage";
import StatusWrapper from "../../widget/common/wrapper/StatusWrapper";


export default class TourismPage extends React.Component {

    render(): React.ReactNode {
        return (
                <RefreshList
                    ItemSeparatorComponent={() => {
                        return <HorDivider
                            margin={[10, 0]}
                            height={1}/>
                    }}
                    renderItem={(item) => {
                        return <TourismItemCell
                            item={item.item}
                            itemIndex={item.index}
                            itemClick={(index) => {
                                console.warn(index);
                            }}/>
                    }}
                    enablePullRefresh={false}
                    enableLoadMore={false}
                    data={[{}, {}, {}, {}, {}, {}]}
                    ListHeaderComponent={this._buildHead}
                />
        );
    }

    _buildHead = () => {
        return (
            <View style={{paddingTop: 10, paddingBottom: 5}}>
                <CardView
                    style={{marginLeft: 10, marginRight: 10}}
                    cardElevation={8}
                    cardMaxElevation={12}
                    cornerRadius={5}
                    cornerOverlap={true}
                >

                    <ImageView
                        imgSrc={'http://img4q.duitang.com/uploads/item/201208/09/20120809135151_z8SAd.thumb.700_0.jpeg'}
                        size={[screenW - 20, screenW * 0.48]}
                    />
                </CardView>

                <TextView
                    text={'崀山最美拍摄打卡地点'}
                    textSize={16}
                    textColor={'#000'}
                    margin={[10, 10, 0]}
                />

                <HorDivider
                    margin={[10, 0, 0]}
                    height={8}
                />
            </View>
        );
    };

}