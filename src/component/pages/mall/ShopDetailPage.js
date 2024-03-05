/**
 * @Description: 店铺详情界面
 * @author HQ
 * @date 2019/6/28 18:25
 */
import React from 'react';
import StatusWrapper from '../../widget/common/wrapper/StatusWrapper';
import DetailHead from "../../widget/common/DetailHead";
import SearchBar from "../../widget/SearchBar";
import {NavLeader, Random, screenH, screenW} from "../../../tools/tools";
import BlurImageGroup from "../../widget/common/BlurImageGroup";
import CardView from "react-native-cardview";
import ImageView from "../../widget/common/ImageView";
import {View} from 'react-native';
import TextView from "../../widget/common/TextView";
import RefreshList from "../../widget/list/RefreshList";
import GoodsItemCell from "../../cell/GoodsItemCell";
import TouchFeedback from "../../widget/common/TouchFeedback";

//超过1个半屏幕 显示飞机
const scrollDistance2DisplayPlane = screenH * 1.5;
const createArr = () => {
    const arr = [];

    for (let i = 0; i < Random.randInt(2, 8); i++) {
        arr.push(i);
    }

    return arr;
};

/*直接被CardView坑惨  在CardView外必须包裹一层view  直接用cardView会有层级问题  怎么改都无效*/
export default class ShopDetailPage extends React.PureComponent {

    state = {showPlane: false};

    render(): React.ReactNode {
        return (
            <StatusWrapper
                style={{backgroundColor: "#eee"}}
                lightStatus={false}>

                <DetailHead onBack={() => {
                    NavLeader.goBack(this);
                }}>
                    <SearchBar
                        text={'在本点搜搜'}
                    />
                </DetailHead>

                <BlurImageGroup
                    size={[screenW, screenW * 0.47]}
                    imgSrc={require('../../../assets/images/delete/orange_fruit.jpg')}
                />


                {this._buildShopIntroduceCard()}


                <ImageView
                    style={{
                        backgroundColor: 'green', width: 75, height: 55,
                        position: 'absolute', top: 95, right: 22, zIndex: 3,
                    }}
                    imgSrc={require('../../../assets/images/delete/orange_fruit.jpg')}
                />

                <RefreshList
                    ref={ref => this.goodsList = ref}
                    onMomentumScrollEnd={this._showPlaneWhenIde}
                    style={{marginTop: -64}}
                    contentContainerStyle={{
                        paddingTop: 10,
                        marginHorizontal: 10
                    }}
                    enableLoadMore={false}
                    enablePullRefresh={false}
                    numColumns={2}
                    columnWrapperStyle={{
                        justifyContent: "space-between"
                    }}
                    data={[{isSelfSupport: true}, {}, {}, {}, {}, {}, {isSelfSupport: true}, {}, {}, {}, {}, {}, {}, {}, {isSelfSupport: true}]}
                    renderItem={this._buildRenderItem}/>


                {this.state.showPlane ? (this._buildPlane()) : null}

                {this._buildCarting()}


            </StatusWrapper>
        );
    }


    _buildShopIntroduceCard = () => {
        return (
            <View style={{
                width: screenW - 12 * 2, left: 12,
                position: 'relative', top: -80,
                zIndex: 1,
            }}>

                <CardView
                    style={{
                        backgroundColor: "white",
                        width: screenW - 12 * 2,
                        paddingVertical: 12,
                        paddingLeft: 8,
                        paddingRight: 12

                    }}
                    cardElevation={8}
                    cardMaxElevation={12}
                    cornerOverlap={true}
                >
                    <TextView
                        textSize={16}
                        text={'橙色果园'}
                        textColor={'#333'}
                        textWeight={'bold'}
                    />

                    <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 5}}>
                        <ImageView
                            imgSrc={require('../../../assets/images/mall/no_worries.png')}
                        />

                        <TextView
                            textSize={10}
                            textColor={'#333'}
                            text={'售后无忧'}
                            margin={[0, 24, 0, 5]}
                        />

                        <ImageView
                            imgSrc={require('../../../assets/images/mall/support_reservation.png')}
                        />

                        <TextView
                            textSize={10}
                            textColor={'#333'}
                            text={'支持预定'}
                            margin={[0, 0, 0, 5]}
                        />
                    </View>


                    <TextView
                        numberOfLines={null}
                        style={{lineHeight: 18}}
                        textColor={'#888'}
                        textSize={12}
                        text={'这里是店铺公告，亲爱的小主人：减满活动与打折活动不可停联系店家虎给你第三方的地方上的地方法规的股份发发发个！'}
                    />

                    <View
                        style={{
                            flexDirection: 'row', alignContent: 'flex-start', flexWrap: 'wrap',
                            marginTop: 10
                        }}>

                        {createArr().map(() => {
                            return <TextView
                                textSize={10}
                                style={{
                                    marginRight: 10,
                                    paddingHorizontal: 3,
                                    borderWidth: 1,
                                    borderColor: '#FEDBD9'
                                }}
                                text={'100减8'}
                                textColor={'#FC7B73'}
                            />
                        })}

                    </View>


                </CardView>
            </View>
        )
    };

    _buildRenderItem = item => {
        return (
            <GoodsItemCell
                onGoodsClick={() => {
                    NavLeader.nav(this, 'GoodsDetail')
                }}
                extraData={item.item}
                onDirectBuyCallback={() => {
                    console.warn("给老子买");
                }}
            />
        );

    };

    _buildCarting = () => {
        return (
            <TouchFeedback
                opacityRadio={0.85}
                touchStyle={{position: 'absolute', right: 16, bottom: 80}}>
                <ImageView
                    imgSrc={require('../../../assets/images/mall/carting.png')}
                />
            </TouchFeedback>
        );
    };

    _buildPlane = () => {
        return (
            <TouchFeedback
                clickCallback={this._go2Top}
                opacityRadio={0.85}
                touchStyle={{position: 'absolute', right: 16, bottom: 24}}>
                <ImageView
                    imgSrc={require('../../../assets/images/mall/fly_to_top.png')}
                />
            </TouchFeedback>
        );
    };

    //滑动结束时回调
    _showPlaneWhenIde = ev => {
        const dis = ev.nativeEvent.contentOffset.y;
        this.setState({showPlane: dis >= scrollDistance2DisplayPlane})

    };

    _go2Top = () => {
        this.goodsList.coreList.scrollToIndex({
            animated: true,
            index: 0,
            viewPosition: 0,
            viewOffset: 30,
        });

        this.setState({showPlane: false})
    };
}