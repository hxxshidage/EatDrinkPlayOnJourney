import React from 'react';

import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    ImageBackground
} from 'react-native';
import {screenW} from "../../../tools/tools";
import ImageView from "../../widget/common/ImageView";
import DetailHead from "../../widget/common/DetailHead";
import TextView from "../../widget/common/TextView";
import HorDivider from "../../widget/common/HorDivider";
import TouchFeedback from "../../widget/common/TouchFeedback";
import ScenicTicket from "../../widget/ScenicTicket";
import Banner from "../../widget/common/Banner";
import TicketCategoryCell from "../../cell/TicketCategoryCell";
import BuyTicketNoticeDialog from "../../dialog/BuyTicketNoticeDialog";
import PayWayDialog from "../mall/ConfirmOrderPage";

export default class TicketDetailPage extends React.Component {
    state = {
        tickets: [{expanded: false}, {expanded: false}, {expanded: false}, {expanded: false}]
    };

    render(): React.ReactNode {
        return (
            <View
                style={{flex: 1}}>
                <ScrollView>

                    {this._buildBanner()}

                    <DetailHead
                        onBack={this._goBack}
                    />

                    <View style={{
                        position: 'relative',
                        top: -20,
                        paddingTop: 16,
                        backgroundColor: "white",
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    }}>
                        {this._buildTitle()}

                        {this._buildWeather()}

                        {this._buildTourismTime()}

                        {this._buildTourismPerson()}

                        {this._buildTourismExpected()}


                        <HorDivider
                            height={8}
                            margin={[0, 16]}
                        />

                        {/*{this._buildScenicTicket()}*/}

                        {/*{this._buildTicketContent()}*/}
                        {this._buildTicketTitle()}
                        <HorDivider/>

                        {
                            this.state.tickets.map((item, idx) => {
                                //加上index成员
                                item.index = idx;
                                return (
                                    <TicketCategoryCell
                                        onShowBookingNotice={this._showNoticeDialog}
                                        onExpand={this._handleTicketExpand}
                                        extraData={item}
                                        key={idx.toString()}
                                        isTicketExpanded={item.expanded}
                                    />
                                );
                            })
                        }

                        <HorDivider
                            height={8}
                            margin={[8, 0, 10]}
                        />

                        <TextView
                            textColor={'#000'}
                            textSize={16}
                            textWeight={'bold'}
                            margin={[10, 10]}
                            text={'简介'}
                        />

                        <TextView
                            numberOfLines={null}
                            textColor={'#707070'}
                            style={{paddingLeft: 10, paddingRight: 10, paddingBottom: 10}}
                            text={'崀山在五岭最长者四百里越城岭山脉腹地区域的西北侧余脉（以崀山为代表的广义崀山即大崀山），大崀山跨越新宁县和资源县，崀山镇在湖南新宁县（南方是资源县）。四百里越城岭山脉（包括主干和余脉），精华主要在广义型崀山风景名胜区，它延伸到附近的广西桂林资源县八角寨景区并带动八角寨周围的开发，广义型崀山景区是湘桂间的复合型景区。'}
                        />
                    </View>
                </ScrollView>

                <BuyTicketNoticeDialog
                    ref={'noticeDialog'}
                />
            </View>
        );
    }


    _buildBanner = () => {
        return (
            <View style={{width: screenW, height: screenW * 0.58}}>
                <Banner
                    loop={true}
                    autoPlayInterval={3.5}
                    showsPagination={true}
                    pageIndicatorStyle={{
                        bottom: 25,
                        right: null,
                        left: 16

                    }}
                    dotColor={'rgba(255,255,255,.5)'}
                    dotStyle={{width: 6, height: 6}}
                    activeDotStyle={{width: 16, height: 6, borderRadius: 3}}
                    data={[{}, {}, {}, {}]}
                    renderPageItem={this._banner_buildBannerItem}/>

            </View>
        );
    };

    _banner_buildBannerItem = () => {
        return (
            <ImageView
                size={[screenW, screenW * 0.58]}
                imgSrc={require('../../../assets/images/delete/ls.jpg')}
            />
        );
    };
    _buildTitle = () => {
        return (
            <View style={{flexDirection: 'row', alignItems: "baseline", marginTop: 12, marginLeft: 10}}>

                <TextView
                    text={'崀山国家森林公园'}
                    textSize={16}
                    textColor={'#000'}
                    textWeight={'bold'}
                />
                <ImageBackground
                    style={{justifyContent: 'center', alignItems: 'center', marginLeft: 5, width: 29, height: 15}}
                    source={require('../../../assets/images/ticket/scenic_level.png')}
                >
                    <TextView
                        text={'5A'}
                        textColor={'#fff'}
                        textSize={12}
                        textWeight={'bold'}
                    />
                </ImageBackground>
            </View>);
    };

    _buildWeather = () => {
        return (
            <View style={styles.rowRoot}>
                <ImageView imgSrc={require('../../../assets/images/ticket/sunlight.png')}/>
                <TextView
                    margin={[0, 10, 0, 5]}
                    text={'32℃'}
                    textColor={'#888'}
                    textSize={12}
                />
                <TextView
                    text={'空气质量:优'}
                    textColor={'#888'}
                    textSize={12}
                />
            </View>

        );
    };

    _buildTourismTime = () => {
        return (
            <View style={styles.rowRoot}>
                <TextView
                    style={{marginRight: 8}}
                    text={'开放时间:'}
                    textColor={'#000'}
                />
                <TextView
                    textWeight={'bold'}
                    text={'09:00-23:00'}
                    textColor={'#000'}
                />
            </View>
        );
    };

    _buildTourismPerson = () => {
        return (
            <View style={styles.rowRoot}>
                <TextView
                    style={{marginRight: 8}}
                    text={'实时人数:'}
                    textColor={'#000'}
                />
                <TextView
                    text={'5887'}
                    textColor={'#888'}
                />
            </View>
        );
    };

    _buildTourismExpected = () => {
        return (
            <View style={styles.rowRoot}>
                <TextView
                    text={'最佳容量:'}
                    textColor={'#000'}
                />
                <TextView
                    style={{marginLeft: 8, marginRight: 24}}
                    text={'3000'}
                    textColor={'#888'}
                />
                <TextView
                    style={{marginRight: 8}}
                    text={'最大容量:'}
                    textColor={'#000'}
                />
                <TextView
                    text={'6000'}
                    textColor={'#888'}
                />
            </View>
        );
    };


    _buildTicketTitle = () => {
        return (
            <View style={{alignSelf: "flex-start", marginLeft: 10}}>

                <TextView
                    text={'景区门票'}
                    textSize={18}
                    textWeight={'bold'}
                    textColor={'#333'}
                />

                <HorDivider
                    style={{
                        backgroundColor: '#3E98FF',
                        height: 3,
                        borderRadius: 3,
                        marginTop: 4
                    }}
                />

            </View>
        );
    };

    _handleTicketExpand = extra => {
        const arr = this.state.tickets;
        arr[extra.index].expanded = !arr[extra.index].expanded;

        this.setState(Object.assign({}, this.state, {tickets: arr}));
    };

    _showNoticeDialog = () => {
        this.refs.noticeDialog.dialog.show();
    };


    _buildScenicTicket = () => {
        return (
            <View style={[styles.rowRoot, {marginRight: 10, marginTop: 0, marginBottom: 8}]}>
                <TextView
                    style={{flex: 1}}
                    text={'景区门票'}
                    textSize={16}
                    textColor={'#000'}
                    textWeight={'bold'}
                />

                <TouchFeedback
                    opacityRadio={0.5}
                    touchStyle={{marginRight: 5, padding: 2}}
                >
                    <TextView
                        text={'预订须知'}
                        textColor={'#888'}
                        textSize={12}
                    />
                </TouchFeedback>

                <ImageView
                    imgSrc={require('../../../assets/images/common/route_plan_right.png')}
                />
            </View>
        );
    };

    _buildTicketContent = () => {
        return <ScenicTicket/>
    };


    _goBack = () => {
        this.props.navigation.goBack();
    };
}

const styles = StyleSheet.create({
    rowRoot: {flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginTop: 5}
});