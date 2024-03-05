import React from 'react';
import {
    View,
    Text,
    StatusBar,
    Image,
    ToastAndroid,
} from 'react-native';

import LimitedGridList from "../../widget/common/LimitedGridList";
import VerticalIconText from '../../widget/common/VerticalIconText';
import SectionRightMore from '../../widget/SectionRightMore';
import RefreshList from '../../widget/list/RefreshList';
import TextView from '../../widget/common/TextView';
import FoodListItemCell from '../../cell/FoodListItemCell';
import Permission from '../../../tools/Permission';


import {
    RootStyles as rs,
    HeadStyles as hs,
} from '../../../assets/styles/main/MainPageStyle';
import {AppColors} from '../../../assets/colors/Color';
import {NavLeader, screenW, Sizer} from "../../../tools/tools";
import Banner from "../../widget/common/Banner";
import HorDivider from "../../widget/common/HorDivider";
import MainSearchHead from "../../widget/MainSearchHead";
import {init} from 'react-native-amap-geolocation';
import Locator from '../../../tools/Locator';
import {AMap} from '../../../config/Config';


const ClassifyIcons = [
    require('../../../assets/images/main/mall_icon.png'),
    require('../../../assets/images/main/food_icon.png'),
    require('../../../assets/images/main/hotel_icon.png'),
    require('../../../assets/images/main/ticket_icon.png'),
    require('../../../assets/images/main/entertainment_icon.png'),
    require('../../../assets/images/main/travel_icon.png'),
    require('../../../assets/images/main/scenic_introduction_icon.png'),
    require('../../../assets/images/main/route_planning.png'),
    require('../../../assets/images/main/audio_tour.png'),
    require('../../../assets/images/main/active_icon.png'),
];

const ClassifyLabels = ['商城', '美食', '住宿', '门票',
    '娱乐', '出行', '景区介绍', '路线规划', '语音导览', '活动'];

export default class MainPage extends React.Component {

    state = {loc: ''};

    componentDidMount(): void {
        this._startLocation()
            .catch(e => {
                console.warn(e);
                ToastAndroid.show('无法获取定位信息,请尝试手动刷新');
            });
    }

    _startLocation = async () => {
        const res = await Permission.requestLocationPermission();
        if (res) {
            await init({android: AMap.map_key});

            // Locator.getLocationOnce(
            //     pos => {
            //         console.warn(pos);
            //
            //         this.setState({loc: pos.location.district})
            //     }, () => {
            //         ToastAndroid.show('定位失败,请尝试手动刷新');
            //     });
        }

        return false;
    };

    render(): React.ReactNode {
        return (<View style={rs.root}>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
                hidden={false}
                animated={false}
                barStyle={'light-content'}
            />

            {this._buildSearchHead()}

            <RefreshList
                onScroll={this._onListScroll}
                enablePullRefresh={false}
                enableLoadMore={false}
                ListHeaderComponent={this._buildListHeader}
                data={[{type: 'section', section: {title: '今日推荐'}},
                    {type: 'introduce'},
                    {type: 'introduce'},
                    {type: 'introduce'},
                    {type: 'introduce'},
                    {type: 'introduce'},
                    {type: 'introduce'},
                    {type: 'divider'},
                    {type: 'section', section: {title: '精选推荐'}},
                    {type: 'featured', isVideo: true},
                    {type: 'featured', isVideo: false},
                    // {type: 'featured', section: {title: '精选推荐'}},
                    // {type: 'featured', section: {title: '精选推荐'}},
                    // {type: 'featured', section: {title: '精选推荐'}},
                ]}
                // renderItem={this._buildIntroductionItem}
                renderItem={(item) => {
                    const bean = item.item;
                    switch (bean.type) {
                        case 'section':
                            return this._buildRightSection(bean.section.title, bean.type, true);
                        case 'introduce':
                            return this._buildIntroductionItem();
                        case 'divider':
                            return this._buildDivider();
                        default:
                            return (
                                this._buildFeaturedItem(item)
                            );
                    }
                }}
            />
        </View>);
    }

    _buildListHeader = () => {
        return (<View>
            {this._buildBanner()}
            {this._buildClassifyGrid()}
            {this._buildDivider()}
            {this._buildRightSection('当季热门', 'hot', false)}
            {this._buildHotList()}
            {this._buildDivider()}

        </View>);
    };

    _buildSearchHead = () => {
        return (
            <MainSearchHead
                onSearchCallback={()=>{
                    NavLeader.nav(this, 'SearchEnter');
                }}
                onScanCallback={() => {
                    NavLeader.nav(this, 'LoginNav')
                }}
                locationAddress={this.state.loc}
                ref={'mainTopSearch'}
            />
        );
    };

    _buildBanner = () => {

        const buildIndicator = (idx, total) => {
            return (
                <View
                    style={{
                        position: 'absolute', left: null, bottom: 8, right: 8,
                        backgroundColor: 'rgba(0,0,0,.2)',
                        borderRadius: 999,
                        paddingLeft: 16,
                        paddingRight: 16
                    }}>
                    <Text style={{color: 'white', fontSize: 12}}>
                        <Text style={{fontSize: 18}}>{idx + 1}</Text>/{total}
                    </Text>
                </View>);
        };

        return (
            <View
                //获取的距离全是dp
                onLayout={e => {
                    if (this.bannerHeight === undefined) {
                        this.bannerHeight = e.nativeEvent.layout.height;
                    }
                }}
                style={{height: 220, backgroundColor: 'red'}}>
                <Banner
                    data={[{}, {}, {}, {}, {}]}
                    renderPageIndicator={buildIndicator}
                    renderPageItem={(item, idx) => {
                        return <Image
                            style={{width: screenW, height: 220, resizeMode: 'cover'}}
                            source={require('../../../assets/images/delete/banner.png')}/>
                    }}/>
            </View>);
    };

    _buildClassifyGrid = () => {
        const renderItem = item => {
            return <VerticalIconText
                textSize={12}
                item={item}
                extraCarry={item}
                textFocusedColor={AppColors.themeColor}
                iconPadding={3}
                textNormalColor={'#888'}
                clickListener={this._skip2ModelFromClassifyItemClick}/>
        };

        return <LimitedGridList
            data={ClassifyIcons.map((item, idx) => ({icon: item, label: ClassifyLabels[idx], index: idx}))}
            columnCount={5}
            verticalSpace={8}
            horizontalSpace={20}
            backgroundColor={'white'}
            padding={[0, 16]}
            renderGridItem={renderItem}/>
    };

    _skip2ModelFromClassifyItemClick = (ev, extra) => {
        const skip = (routeName, params) => {
            this.props.navigation.navigate(routeName);
        };
        switch (extra.label) {
            case '美食':
                skip('FoodList');
                break;
            case '住宿':
                skip('HotelEnter');
                break;
            case '路线规划':
                NavLeader.nav(this, 'RoutePlanList');
                break;
            case '商城':
                skip('MallNav');
                break;
            case '景区介绍':
                NavLeader.nav(this, 'ScenicIntroduce');
                break;
            case '出行':
                NavLeader.nav(this, 'Traffic');
                break;
            case '语音导览':
                NavLeader.nav(this, 'AudioGuide');
                break;
            case '活动':
                NavLeader.nav(this, 'Active');
                break;
            case '门票':
                NavLeader.nav(this, 'Ticket');
                break;
        }
    };

    _buildDivider = () => {
        return <View style={hs.divider}/>
    };

    _buildRightSection = (text, extra, enable) => {
        return (
            <SectionRightMore
                clickListener={(ev, extra) => {
                    console.warn(extra);
                }}
                textColor={'black'}
                textSize={14}
                disabled={!enable}
                goneArrow={!enable}
                extraCarry={extra}
                padding={[10, 10, 0]}
                margin={[8, 0, 5]}
                text={text}
            />);
    };

    _buildHotList = () => {
        return (<View style={{paddingBottom: 16, paddingLeft: 10}}>
            <RefreshList
                // style={{height: 78, minHeight: 78,backgroundColor:"purple",flex:0}}
                enableLoadMore={false}
                showsHorizontalScrollIndicator={false}
                enablePullRefresh={false}
                horizontal={true}
                data={[{}, {}, {}, {}, {}]}
                renderItem={() => {
                    return (
                        <Image
                            source={require('../../../assets/images/delete/main_hor1.png')}
                            style={{width: 135, height: 88, marginRight: 10}}/>);
                }}/>
        </View>);
    };


    _buildIntroductionItem = () => {
        return (<FoodListItemCell/>
        );
    };


    _buildFeaturedItem = item => {
        const imgWid = screenW - 20;
        const imgHeight = imgWid * 0.51;
        return (
            <View style={{marginTop: 8, paddingLeft: 10, paddingRight: 10, overflow: 'hidden'}}>
                <TextView
                    style={{fontWeight: 'bold'}}
                    text={'薪火相传：行走在老山界的文艺之旅'}
                    textSize={14}
                    textColor={'black'}
                />

                <View>
                    <Image
                        style={{width: imgWid, height: imgHeight, marginTop: 8}}
                        resizeMode={'cover'}
                        source={require('../../../assets/images/delete/featured_img.png')}/>

                    <TextView
                        text={item.isVideo === true ? '视频' : '游记'}
                        style={{
                            backgroundColor: 'rgba(33,144,255,.65)', paddingTop: 3, paddingBottom: 3, paddingLeft: 12,
                            paddingRight: 12,
                            borderRadius: 999,
                            textAlign: 'center',
                            // alignSelf: 'flex-end',
                            position: 'absolute',
                            right: 10,
                            bottom: 10
                        }}
                        textSize={10}
                    />
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
                    <Image style={{marginRight: 3}}
                           source={require('../../../assets/images/common/browse_count.png')}/>
                    <TextView
                        textSize={12}
                        text={'134'}
                        textColor={'#444444'}
                    />
                </View>

                <HorDivider
                    margin={[10, 0, 6]}
                />

            </View>
        );
    };

    _onListScroll = ev => {
        const calcAlpha = disY => {
            const {bannerHeight} = this;
            let res;
            if (disY >= bannerHeight) {
                res = 1;
            } else {
                res = disY / bannerHeight;
            }
            if (res <= 0.1) res = 0.1;
            return res;
        };

        const disY = ev.nativeEvent.contentOffset.y;
        this.refs.mainTopSearch.rootBg.setNativeProps({backgroundColor: `rgba(33,144,255,${calcAlpha(disY)})`});
    };
}