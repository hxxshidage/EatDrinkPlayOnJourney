import React from 'react';

import {
    View,
    StyleSheet, StatusBar
} from 'react-native';
import DetailHead from "../../widget/common/DetailHead";
import {NavLeader, screenW} from "../../../tools/tools";
import ImageView from "../../widget/common/ImageView";
import TextView from "../../widget/common/TextView";
import HorDivider from "../../widget/common/HorDivider";
import TextWithIcon from "../../widget/common/TextWithIcon";
import TouchFeedback from "../../widget/common/TouchFeedback";
import GoodsEvaItemCell from "../../cell/GoodsEvaItemCell";
import RefreshList from "../../widget/list/RefreshList";
import GoodsCashier from "../../widget/GoodsCashier";
import GoodsDetailShopCell from "../../cell/GoodsDetailShopCell";
import GoodsDetailIntroduceCell from "../../cell/GoodsDetailIntroduceCell";
import GoodsDetailEvaTitleCell from "../../cell/GoodsDetailEvaTitleCell";

export default class GoodsDetailPage extends React.PureComponent {

    render(): React.ReactNode {
        return (
            <View
                style={{flex: 1}}>

                <StatusBar
                    backgroundColor="transparent"
                    translucent={true}
                    hidden={false}
                    animated={false}
                    barStyle={'light-content'}
                />

                <RefreshList
                    contentContainerStyle={{
                        paddingBottom: 16
                    }}
                    enablePullRefresh={false}
                    enableLoadMore={false}
                    ListHeaderComponent={this._buildDetailHeader}
                    data={[{type: 'shop-item'}, {type: 'detail-item'}, {type: 'eva-title-item'}, {type: 'eva-item'}, {type: 'eva-item'}, {type: 'eva-item'}, {type: 'eva-item'}]}
                    renderItem={this._buildRenderItem}
                />

                <GoodsCashier/>
            </View>);
    }

    _buildDetailHeader = () => {
        return (
            <View style={{backgroundColor: 'white'}}>
                <ImageView
                    size={[screenW]}
                    imgSrc={require('../../../assets/images/delete/ls.jpg')}
                />

                <DetailHead
                    onBack={() => {
                        NavLeader.goBack(this);
                    }}
                />


                <TextView
                    margin={[10]}
                    numberOfLines={2}
                    text={'I\'m trying to display a bunch of articles data from an API. The API data is paginated to 20 objects per page. I\'ve managed to obtain and store them in an array but now it\'s one array but w'}
                    textWeight={'bold'}
                    textColor={'#000'}
                />

                <TextView
                    margin={[10, 0]}
                    text={'$450.00'}
                    textColor={'#FF3D3D'}
                    textSize={16}
                    textWeight={'bold'}
                />

                <HorDivider
                    margin={[8, 0, 0]}
                    height={5}
                />

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 10,
                    }}>

                    <TextView
                        textSize={12}
                        textColor={'#333'}
                        text={'发货: 广东佛山'}
                    />

                    <TextView
                        style={{flex: 1}}
                        margin={[0, 16, 0, 24]}
                        text={'快递包邮'}
                        textSize={12}
                        textColor={'#333'}
                    />

                    <TextView
                        text={'已售: 1358'}
                        textColor={'#666'}
                        textSize={12}
                    />
                </View>

                <TextView
                    text={'选择'}
                    margin={[10, 0]}
                    textSize={12}
                    textColor={'#000'}
                />

                <View
                    style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        padding: 10,

                    }}>
                    <TextView
                        textColor={'#666'}
                        textSize={12}
                        text={'参数'}
                    />

                    <TextView
                        margin={[0, 0, 0, 24]}
                        textColor={'#000'}
                        textSize={12}
                        text={'品牌  大小'}
                    />
                </View>

                <HorDivider
                    height={5}
                    margin={[2, 0, 0, 0]}
                />

            </View>
        );
    };

    _buildRenderItem = item => {
        const bean = item.item;
        switch (bean.type) {
            case 'shop-item':
                return (
                    <GoodsDetailShopCell
                        clickCallback={this._goShop}
                    />
                );
            case 'detail-item':
                return <GoodsDetailIntroduceCell/>;
            case 'eva-title-item':
                return (
                    <GoodsDetailEvaTitleCell
                        clickCallback={this._goAllEvaluates}
                    />
                );
            case 'eva-item':
                return <GoodsEvaItemCell/>;
        }
    };

    _goAllEvaluates = () => {
        NavLeader.nav(this, 'GoodsEva')
    };

    _goShop = () => {
        NavLeader.nav(this, 'ShopDetail');
    };
}