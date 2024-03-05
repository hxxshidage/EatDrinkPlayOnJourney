import React from 'react';

import {SectionList, View} from 'react-native';

import Dialog from './Dialog';
import {screenW, Sizer} from "../../tools/tools";
import RouteStructureFewDaysCell from "../cell/RouteStructureFewDaysCell";
import RouteStructureAddressCell from "../cell/RouteStructureAddressCell";

import PropTypes from 'prop-types';
import VerDivider from "../widget/common/VerDivider";
import TextView from "../widget/common/TextView";

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

export default class RoutePlanStructureDialog extends React.PureComponent {

    static propTypes = {
        onDialogHide: PropTypes.func,
        onDialogShow: PropTypes.func,
        onItemClick: PropTypes.func
    };

    render(): React.ReactNode {
        const {onDialogShow, onDialogHide} = this.props;
        return (
            <Dialog
                useNativeDriver={true}/*dialog弹出的流畅度高点  原生动画的方式*/
                swipeThreshold={30}
                onShowListener={onDialogShow}
                onHideListener={onDialogHide}
                backdropTransitionOutTiming={0}
                animationIn={'slideInRight'}
                animationOut={'slideOutRight'}
                backdropOpacity={0}
                fillScreenOnWidth={true}
                swipeDirection={['right']}
                onSwipeComplete={() => {
                    this.dialog.hide();
                }}
                // swipeDirection={['up', 'down']}
                ref={ref => this.dialog = ref}
                style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}
            >

                <View
                    style={{
                        backgroundColor: "rgba(0,0,0,.7)",
                        width: screenW * 0.75
                    }}
                >
                    <SectionList
                        ListHeaderComponent={() => {
                            return <View style={{height: 48, marginLeft: 24, width: 1, backgroundColor: 'white'}}/>
                        }}
                        sections={routePlanData}
                        renderSectionHeader={this._buildSection}
                        renderItem={this._buildItem}
                        keyExtractor={(item, idx) => item + idx}
                    />
                </View>
            </Dialog>);
    }

    _buildSection = section => {
        return (
            <RouteStructureFewDaysCell
                clickCallback={
                    extra => {
                        // console.warn(extra);
                        this.props.onItemClick && this.props.onItemClick({
                            animated: true,
                            itemIndex: 0,
                            sectionIndex: extra.section.head.index,
                            //减去sticky header的高度
                            viewOffset: 30
                        });
                    }
                }
                extraData={section}
            />
        );
    };

    _buildItem = item => {
        {
            //路线规划详情中的item布局有2种  这的item布局只有一种  为了让索引对应
            return !item.item.imgArr ? (<RouteStructureAddressCell
                clickCallback={
                    extra => {
                        // console.warn(extra)
                        this.props.onItemClick && this.props.onItemClick({
                            animated: true,
                            itemIndex: extra.index,
                            sectionIndex: extra.section.head.index,
                            viewOffset: 30
                        });
                    }
                }
                extraData={item}
            />) : null
        }

    };
}