import React from 'react';

import {
    View,
} from 'react-native';
import ImageView from "../../widget/common/ImageView";
import NineGridImage from "../../widget/common/NineGridImage";
import {Hub} from "@babel/traverse";
import {NavLeader, Random} from "../../../tools/tools";
import HeaderBar from "../../widget/common/HeaderBar";
import HorDivider from "../../widget/common/HorDivider";
import GoodsEvaListPage from "../../cell/GoodsEvaListPage";
import RefreshList from "../../widget/list/RefreshList";

const mallClassifyIcons = [
    require('../../../assets/images/delete/ls.jpg'),
    require('../../../assets/images/delete/header.jpg'),
    require('../../../assets/images/delete/hw_p1.jpg'),
    require('../../../assets/images/delete/hw_p2.jpg'),
    require('../../../assets/images/delete/hotel_room.jpg'),
    require('../../../assets/images/delete/hotel_hotel.jpg'),
    require('../../../assets/images/delete/mall_item_milk.jpg'),
    require('../../../assets/images/delete/main_hor1.png'),
    require('../../../assets/images/delete/main_hor2.png'),
];


const createImageArr = () => {
    const len = Random.randInt(1, 9);

    const arr = [];
    for (let i = 0; i < len; i++) {
        arr[i] = mallClassifyIcons[i];
    }
    return arr;
};
export default class GoodsEvaPage extends React.PureComponent {

    render(): React.ReactNode {

        return (
            <View
                style={{flex: 1}}>

                <HeaderBar
                    title={'商品评价'}
                    onGoBack={() => {
                        NavLeader.goBack(this)
                    }}
                />

                <HorDivider/>

                <RefreshList
                    ItemSeparatorComponent={() => <HorDivider/>}
                    enablePullRefresh={false}
                    enableLoadMore={false}
                    data={[{images: createImageArr()}, {images: createImageArr()}, {images: createImageArr()},
                        {images: createImageArr()}, {images: createImageArr()}, {images: createImageArr()},
                        {images: createImageArr()}, {images: createImageArr()}, {images: createImageArr()},
                        {images: createImageArr()}, {images: createImageArr()}, {images: createImageArr()},
                        {images: createImageArr()}, {images: createImageArr()}, {images: createImageArr()},
                        {images: createImageArr()}, {images: createImageArr()}, {images: []}]}

                    renderItem={this._buildRenderItem}/>

            </View>);
    }

    _buildRenderItem = item => {
        return (
            <GoodsEvaListPage
                imgArr={item.item.images}
            />
        );
    };
}