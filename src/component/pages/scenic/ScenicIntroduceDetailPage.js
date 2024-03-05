import React from 'react';

import {
    View,
    StyleSheet,
    ImageBackground,
} from 'react-native';
import ImageView from "../../widget/common/ImageView";
import TextView from "../../widget/common/TextView";
import {NavLeader, screenW, Sizer} from "../../../tools/tools";
import LinearGradient from "react-native-linear-gradient";
import TouchFeedback from "../../widget/common/TouchFeedback";
import VoiceGuideCell from "../../cell/VoiceGuideCell";
import ScenicTicketCell from "../../cell/ScenicTicketCell";
import RefreshList from "../../widget/list/RefreshList";
import ItemRightMore from "../../widget/common/ItemRightMore";
import HorDivider from "../../widget/common/HorDivider";
import ScenicTravelsCell from "../../cell/ScenicTravelsCell";
import TourismItemCell from "../../cell/TourismItemCell";
import RoutePlanListCell from "../../cell/RoutePlanListCell";
import TicketEnterCell from "../../cell/TicketEnterCell";

const data = [
    {type: 'voice', extra: {}},
    {type: 'ticket', extra: {}},
    {type: 'ItemRight', extra: '游玩攻略'},
    {type: 'playItem', extra: {}},
    {type: 'playItem', extra: {}},
    {type: 'divider', extra: null},
    {type: 'ItemRight', extra: '游记推荐'},
    {type: 'travelsItem', extra: {}},
    {type: 'travelsItem', extra: {hideDivider: true}},
    {type: 'divider', extra: null},
    {type: 'ItemRight', extra: '线路推荐'},
    {type: 'routeItem', extra: {}},
    {type: 'routeItem', extra: {}},
];

export default class ScenicIntroduceDetailPage extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <View
                style={{flex: 1}}>

                <RefreshList
                    // contentContainerStyle={{paddingBottom: 16}}
                    enablePullRefresh={false}
                    enableLoadMore={false}
                    ListHeaderComponent={this._buildListHeader()}
                    data={data}
                    renderItem={this._buildRenderItem}/>

            </View>);
    }

    _buildListHeader = () => {
        return (
            <ImageBackground
                source={require('../../../assets/images/delete/ls.jpg')}
                style={{width: screenW,}}
            >

                <LinearGradient
                    start={{x: 0.0, y: 0.0}} end={{x: 0.0, y: 1.0}}
                    locations={[0, 0.56, 1]}
                    colors={['rgba(0,0,0,.8)', 'rgba(0,0,0,.88)', 'rgba(84,84,84,.8)']}
                    // style={{flex: 1}}
                >
                    <TouchFeedback
                        clickCallback={() => {
                            NavLeader.goBack(this)
                        }}
                        touchStyle={{padding: 3, marginLeft: 10, marginTop: Sizer.statusBarHeight() + 10}}
                    >
                        <ImageView
                            imgSrc={require('../../../assets/images/common/go_back_white.png')}
                        />
                    </TouchFeedback>

                    <TextView
                        margin={[12, 10, 2]}
                        text={'崀山国家森林公园'}
                        textSize={20}
                        textWeight={'bold'}
                        textColor={'#fff'}
                    />
                    {this._header_buildWeather()}
                    {this._header_buildTourismTime()}
                    {this._header_buildTourismPerson()}
                    {this._header_buildTourismExpected()}

                    <ImageView
                        size={[screenW - 20, (screenW - 20) * 0.56]}
                        style={{marginHorizontal: 10, marginVertical: 16}}
                        corner={5}
                        imgSrc={require('../../../assets/images/delete/ls.jpg')}
                    />

                    <TextView
                        margin={[0, 10, 10]}
                        text={'简介'}
                        textWeight={'bold'}
                        textColor={'#FFF'}
                        textSize={18}
                    />

                    <TextView
                        margin={[0, 10, 16]}
                        numberOfLines={null}
                        text={'崀山在湖南省邵阳市新宁县崀山镇及周围，在五岭最长者四百里越城岭山脉腹地区域的西北侧余脉（以崀山为代表的广义崀山即大崀山），大崀山跨越新宁县和资源县，崀山镇在在湖南新宁县（南方是资源县）。精华主要在广义型崀山风景名胜区，它延伸到附近的广西桂林资源县八角寨景区（八角寨区域分布在两县因此名称上有新宁八角寨和资源八角寨），广义型崀山景区是湘桂间的复合型景区。'}
                        textColor={'#fff'}
                    />

                </LinearGradient>

            </ImageBackground>
        );
    };

    _header_buildWeather = () => {
        return (
            <View style={styles.rowRoot}>
                <ImageView imgSrc={require('../../../assets/images/ticket/sunlight.png')}/>
                <TextView
                    margin={[0, 10, 0, 5]}
                    text={'32℃'}
                    textColor={'#fff'}
                    textSize={12}
                />
                <TextView
                    text={'空气质量:优'}
                    textColor={'#fff'}
                    textSize={12}
                />
            </View>

        );
    };

    _header_buildTourismTime = () => {
        return (
            <View style={styles.rowRoot}>
                <TextView
                    style={{marginRight: 8}}
                    text={'开放时间:'}
                    textColor={'#fff'}
                />
                <TextView
                    textWeight={'bold'}
                    text={'09:00-23:00'}
                    textColor={'#fff'}
                />
            </View>
        );
    };

    _header_buildTourismPerson = () => {
        return (
            <View style={styles.rowRoot}>
                <TextView
                    style={{marginRight: 8}}
                    text={'实时人数:'}
                    textColor={'#fff'}
                />
                <TextView
                    text={'5887'}
                    textColor={'#fff'}
                />
            </View>
        );
    };

    _header_buildTourismExpected = () => {
        return (
            <View style={styles.rowRoot}>
                <TextView
                    text={'最佳容量:'}
                    textColor={'#fff'}
                />
                <TextView
                    style={{marginLeft: 8, marginRight: 24}}
                    text={'3000'}
                    textColor={'#fff'}
                />
                <TextView
                    style={{marginRight: 8}}
                    text={'最大容量:'}
                    textColor={'#fff'}
                />
                <TextView
                    text={'6000'}
                    textColor={'#fff'}
                />
            </View>
        );
    };

    _buildRenderItem = item => {
        const bean = item.item;
        switch (bean.type) {
            case 'voice':
                return (<VoiceGuideCell
                    clickCallback={() => {
                        NavLeader.nav(this, 'AudioGuide')
                    }}
                />);
            case 'ticket':
                return this._item_buildTicket();
            case 'ItemRight':
                return (
                    <ItemRightMore
                        style={{paddingTop: 24}}
                        extraData={bean.extra}
                        text={bean.extra}
                    />);
            case 'playItem':
                return this._item_buildPlayItem();
            case 'divider':
                return (
                    <HorDivider height={8}/>
                );
            case 'travelsItem':
                return this._item_buildTravelItem(bean);
            case 'routeItem':
                return this._item_buildRouteItem();
        }
    };

    _item_buildPlayItem = () => {
        return (
            <TourismItemCell/>
        );
    };

    //ScenicTicketCell
    _item_buildTicket = () => {
        return (
            <TicketEnterCell
                clickCallback={() => {
                    NavLeader.nav(this, 'TicketDetail');
                }}
            />
        );
    };
    _item_buildTravelItem = bean => {
        return (
            <ScenicTravelsCell
                hideDivider={bean.extra.hideDivider}
            />
        );
    };

    _item_buildRouteItem = () => {
        return (
            <TouchFeedback
                touchStyle={{marginHorizontal: 10, marginBottom: 10}}
            >
                <ImageView
                    size={[screenW - 20, (screenW - 20) * 0.54]}
                    imgSrc={require('../../../assets/images/delete/route_one.png')}
                />
            </TouchFeedback>
        );
    };
}

const styles = StyleSheet.create({
    rowRoot: {flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginTop: 5}
});