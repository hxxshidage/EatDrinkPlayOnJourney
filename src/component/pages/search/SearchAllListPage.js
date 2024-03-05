/**
 * @Description: 全局搜索 所有结果展示
 * @author HQ
 * @date 2019/7/4 12:01
 */
import React from 'react';
import FillWrapper from '../../widget/common/wrapper/FillWrapper';
import {SectionList, View} from 'react-native';
import TextView from "../../widget/common/TextView";
import ImageView from '../../widget/common/ImageView';
import GoodsItemCell from "../../cell/GoodsItemCell";
import FoodListItemCell from "../../cell/FoodListItemCell";
import HotelListItemCell from "../../cell/HotelListItemCell";
import ScenicTravelsCell from "../../cell/ScenicTravelsCell";
import TourismItemCell from "../../cell/TourismItemCell";
import ScenicIntroduceItemCell from "../../cell/ScenicIntroduceItemCell";

const allSearchResults = [
    {
        head: {type: 'scenic', title: '相关景区', index: 0},
        data: [
            {address: '天门山', tourismTime: '09:00-11:00'},
            {address: '武陵源', tourismTime: '09:00-11:00'},
            {address: '宝峰湖', tourismTime: '09:00-11:00'},
            {imgArr: ['', '']},
        ],
    },
    {
        head: {type: 'goods', title: '相关商品', index: 1},
        data: [
            {address: '武陵源', tourismTime: '09:00-11:00'},
            {imgArr: ['', '']},
        ],
    },
    {
        head: {type: 'hotel', title: '相关酒店', index: 2},
        data: [
            {address: '武陵源', tourismTime: '09:00-11:00'},
            {imgArr: ['', '']},
            {address: '黄龙洞', tourismTime: '09:00-11:00'},
            {imgArr: ['', '']},
        ],
    },
    {
        head: {type: 'foods', title: '相关餐厅', index: 3},
        data: [
            {address: '武陵源', tourismTime: '09:00-11:00'},
            {imgArr: ['', '']},
            {address: '黄龙洞', tourismTime: '09:00-11:00'},
            {imgArr: ['', '']},
        ],
    }, {
        head: {type: 'strategy', title: '相关攻略', index: 4},
        data: [
            {address: '武陵源', tourismTime: '09:00-11:00'},
            {imgArr: ['', '']},
            {address: '黄龙洞', tourismTime: '09:00-11:00'},
            {imgArr: ['', '']},
            {address: '黄龙洞', tourismTime: '09:00-11:00'},
            {imgArr: ['', '']},
        ],
    },
    {
        head: {type: 'travel', title: '相关游记', index: 4},
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

export default class SearchAllListPage extends React.PureComponent {


    render(): React.ReactNode {
        return (
            <FillWrapper>
                <SectionList
                    numColumns={2}
                    ref={ref => this.routeList = ref}
                    stickySectionHeadersEnabled={true}
                    sections={allSearchResults}
                    renderSectionHeader={this._buildRenderSection}
                    renderItem={this._buildRenderItem}
                    keyExtractor={(item, idx) => item + idx}/>

            </FillWrapper>
        );
    }

    _buildRenderSection = section => {
        const {title} = section.section.head;
        return (
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 16,
                paddingBottom: 12,
                paddingLeft: 12,
                backgroundColor: "white"
            }}>

                <TextView
                    text={title}
                    textSize={16}
                    textColor={'#000'}
                    textWeight={'bold'}
                    margin={[0, 10, 0, 0]}
                />

                <ImageView
                    imgSrc={require('../../../assets/images/common/route_plan_right.png')}
                />
            </View>
        );
    };
    _buildRenderItem = item => {
        const type = item.section.head.type;

        switch (type) {
            case 'scenic':
                return (
                    <ScenicIntroduceItemCell/>
                );
            case 'foods':
                return (
                    <FoodListItemCell/>
                );
            case 'hotel':
                return (
                    <HotelListItemCell/>
                );
            case 'goods':
                return (
                    <GoodsItemCell/>
                );
            case  'strategy':
                return (
                    <TourismItemCell/>
                );

            case 'travel':
                return (
                    <TourismItemCell/>
                );


        }

        return <TextView text={'哈哈哈'}/>
    };

}