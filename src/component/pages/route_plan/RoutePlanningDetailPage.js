import React from 'react';

import {
    View,
    StyleSheet,
    SectionList
} from 'react-native';
import ImageView from "../../widget/common/ImageView";
import {NavLeader, screenW, Sizer} from "../../../tools/tools";
import TouchFeedback from "../../widget/common/TouchFeedback";

import RoutePlanTittleCell from '../../cell/RoutePlanTittleCell';
import RoutePlanGalleryCell from '../../cell/RoutePlanGalleryCell';
import RoutePlanFewDaysCell from '../../cell/RoutePlanFewDaysCell';
import DetailHead from "../../widget/common/DetailHead";
import TextView from "../../widget/common/TextView";
import HorDivider from "../../widget/common/HorDivider";
import RoutePlanStructureDialog from "../../dialog/RoutePlanStructureDialog";

const routePlanData = [
    {
        head: {title: '第一天', index: 0},
        data: [
            {address: '天门山', tourismTime: '09:00-11:00'},
            {address: '武陵源', tourismTime: '09:00-11:00'},
            {address: '宝峰湖', tourismTime: '09:00-11:00'},
            {imgArr: ['', '']},
        ],
    },
    {
        head: {title: '第二天', index: 1},
        data: [
            {address: '武陵源', tourismTime: '09:00-11:00'},
            {imgArr: ['', '']},
        ],
    },
    {
        head: {title: '第三天', index: 2},
        data: [
            {address: '武陵源', tourismTime: '09:00-11:00'},
            {imgArr: ['', '']},
            {address: '黄龙洞', tourismTime: '09:00-11:00'},
            {imgArr: ['', '']},
        ],
    },
    {
        head: {title: '第四天', index: 3},
        data: [
            {address: '武陵源', tourismTime: '09:00-11:00'},
            {imgArr: ['', '']},
            {address: '黄龙洞', tourismTime: '09:00-11:00'},
            {imgArr: ['', '']},
        ],
    }, {
        head: {title: '第五天', index: 4},
        data: [
            {address: '武陵源', tourismTime: '09:00-11:00'},
            {imgArr: ['', '']},
            {address: '黄龙洞', tourismTime: '09:00-11:00'},
            {imgArr: ['', '']},
            {address: '黄龙洞', tourismTime: '09:00-11:00'},
            {imgArr: ['', '']},
        ],
    }
];

export default class RoutePlanningDetailPage extends React.Component {
    state = {menuVisible: true};

    render(): React.ReactNode {
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <SectionList
                    ref={ref => this.routeList = ref}
                    onViewableItemsChanged={info => {
                        // console.warn(info.viewableItems[0]);
                    }}
                    stickySectionHeadersEnabled={true}
                    sections={routePlanData}
                    ListHeaderComponent={this._buildHeader}
                    renderSectionHeader={this._buildSection}
                    renderItem={this._buildItem}
                    keyExtractor={(item, idx) => item + idx}/>

                {this.state.menuVisible === true ? (<TouchFeedback
                    touchStyle={{position: 'absolute', right: 16, bottom: 45}}
                    clickCallback={() => {
                        this.refs.structureDialog.dialog.show();
                    }}
                >
                    <ImageView
                        imgSrc={require('../../../assets/images/route_plan/route_plan_menu.png')}
                    />
                </TouchFeedback>) : null}

                <RoutePlanStructureDialog
                    onItemClick={params => {
                        this.routeList.scrollToLocation(params);
                    }}
                    onDialogShow={() => {
                        this.setState({menuVisible: false})
                    }}
                    onDialogHide={
                        () => {
                            this.setState({menuVisible: true})
                        }
                    }
                    ref={'structureDialog'}
                />
            </View>
        );
    }


    _buildHeader = () => {

        const imgId = this.props.navigation.state.params.img;

        return (
            <View>
                <ImageView
                    size={[screenW, screenW * 0.54]}
                    imgSrc={imgId}
                />

                <DetailHead
                    onBack={() => {
                        NavLeader.goBack(this)
                    }}
                />

                <View style={{flexDirection: 'row', alignItems: "center", padding: 10}}>
                    <TextView
                        style={{flex: 1, marginRight: 16}}
                        text={'紧凑程度：紧凑（3天、15个地点'}
                        textSize={12}
                        textColor={'#FF3D3D'}
                    />

                    <TextView
                        text={'人均花费：￥800/人'}
                        textSize={12}
                        textColor={'#FF3D3D'}
                    />
                </View>

                <TextView
                    numberOfLines={null}
                    style={{paddingLeft: 10, paddingRight: 10, marginBottom: 8}}
                    text={'小程序是一种新的开放能力，开发者可以快速地开发一个小程序。'}
                    textColor={'#000'}
                />

                <HorDivider
                    height={8}
                />
            </View>);
    };

    //    _buildSection = ({section: {section}}) => {

    _buildSection = section => {
        const bean = section.section.head;
        return (
            <RoutePlanFewDaysCell
                dayText={bean.title}
                isHeader={bean.index === 0}
                isFooter={
                    (bean.index >= routePlanData.length - 1)
                }
            />);

    };
    _buildItem = item => {
        // console.warn(item);

        const bean = item.item;
        const isFootPrevious =
            /*是指array中对象的长度*/
            (item.section.head.index >= routePlanData.length - 1);
        /*是指一个section组中的index*/
        // && (item.index >= item.section.data.length - 1);

        return bean.imgArr && bean.imgArr.length > 0 ?
            <RoutePlanGalleryCell
                imgArr={bean.imgArr}
                isFoot={isFootPrevious && item.index >= item.section.data.length - 1}
            /> :
            <RoutePlanTittleCell
                clickCallback={this._goScenicIntroduceDetail}
                extraData={bean}
                isFooter={isFootPrevious && item.index >= item.section.data.length - 2}/>;/*最后一个section中倒数第二个*/
    };

    _goScenicIntroduceDetail = extra => {
        NavLeader.nav(this,"ScenicIntroduceDetail")
    };
}