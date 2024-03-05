import React from 'react';
import {
    View,
    Image
} from 'react-native';
import Banner from "../../widget/common/Banner";
import {NavLeader, screenW, Sizer} from "../../../tools/tools";
import SearchBar from "../../widget/SearchBar";

import ImageView from "../../widget/common/ImageView";
import LimitedGridList from "../../widget/common/LimitedGridList";
import TextIconChanger from "../../widget/common/TextIconChanger";
import {AppColors} from "../../../assets/colors/Color";
import RefreshList from "../../widget/list/RefreshList";
import TouchFeedback from "../../widget/common/TouchFeedback";
import MallItemCell from "../../cell/MallItemCell";

const mallClassifyIcons = [
    require('../../../assets/images/mall/fruit.png'),
    require('../../../assets/images/mall/mountain_food.png'),
    require('../../../assets/images/mall/native_product.png'),
    require('../../../assets/images/mall/souvenir.png'),
    require('../../../assets/images/mall/more_classify.png'),
];

const mallClassifyLabels = ['水果', '山珍', '土特产', '纪念品', '更多'];

export default class MallPage extends React.Component {

    render(): React.ReactNode {

        return (
            <View style={{flex: 1}}>

                <RefreshList
                    columnWrapperStyle={{
                        paddingHorizontal: 8,
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                    style={{backgroundColor: '#eee'}}
                    ListHeaderComponent={this._buildHeader}
                    numColumns={2}
                    enableLoadMore={false}
                    enablePullRefresh={false}
                    data={[{classify: true}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},]}
                    renderItem={this._buildGridItem}/>

                <TouchFeedback
                    clickCallback={() => {
                        NavLeader.nav(this, 'CartingInner');
                    }}
                    touchStyle={{
                        position: 'absolute',
                        right: 16, bottom: 24
                    }}
                >
                    <ImageView
                        imgSrc={require('../../../assets/images/mall/carting.png')}/>
                </TouchFeedback>
            </View>
        );
    }


    _classify_buildItem = item => {
        const {icon, label} = item;
        return (
            <TextIconChanger
                extraData={label}
                key={icon.toString()}
                padding={[10, 5]}
                activeColor={'rgba(204,204,204,.1)'}
                opacityRadio={0.35}
                text={label}
                textSize={12}
                iconPadding={5}
                colors={['#000', AppColors.themeColor]}
                imgSrc={icon}
                clickCallback={this._onHandleGoodsCategoryCallback}
            />
        );
    };

    _buildHeader = () => {
        return (
            <View>
                <SearchBar
                    touchStyle={{paddingTop: Sizer.statusBarHeight() + 8, paddingBottom: 10, backgroundColor: '#fff'}}
                    text={'搜索美食'}

                    clickCallback={() => {
                        console.warn('search now');
                    }}
                />

                <View style={{height: 150}}>
                    <Banner
                        data={[{}, {}, {}, {}, {}]}
                        // pageIndicatorStyle={{position: 'absolute', left: null, bottom: 100, right: 100}}
                        // renderPageIndicator={buildIndicator}
                        renderPageItem={(item, idx) => {
                            return <Image
                                resizeMode={'cover'}
                                style={{width: screenW, height: 150}}
                                source={require('../../../assets/images/delete/hw_p30.jpg')}/>
                        }}/>
                </View>
                <LimitedGridList
                    backgroundColor={'white'}
                    padding={[10, 0, 12]}
                    verticalSpace={8}
                    horizontalSpace={10}
                    columnCount={5}
                    data={mallClassifyIcons.map((item, idx) => {
                        return {icon: item, label: mallClassifyLabels[idx]};
                    })}

                    renderGridItem={this._classify_buildItem}/>
            </View>);
    };

    _buildGridItem = item => {
        return (
            <MallItemCell
                itemIndex={item.index}
                itemClick={() => {
                    NavLeader.nav(this, 'GoodsDetail', item.item)
                }}
                item={item}
            />
        );
    };

    //处理顶部商品分类跳转
    _onHandleGoodsCategoryCallback = extra => {
        switch (extra) {
            case '更多':
                NavLeader.nav(this, 'GoodsCategory');
                break;
            default:
                //需要传参 带id
                NavLeader.nav(this, 'GoodsList');
                break;


        }

    };
}