import React from 'react';

import {
    View,
    StyleSheet, Modal, ScrollView
} from 'react-native';
import {screenW} from "../../tools/tools";
import FoodFilterCell from "../cell/FoodFilterCell";
import ExpandArrow from "../widget/ExpandArrow";
import SelectText from "../widget/common/SelectText";
import TextView from "../widget/common/TextView";

import RadioGroup from '../widget/common/RadioGroup';
import RadioTextGroup from '../widget/RadioTextGroup';
import ButtonRipple from "../widget/common/ButtonRipple";

export default class FoodFilterWin extends React.Component {
    state = {filterVisible: false, subtitleExpanded: false};

    show = () => {
        this.setState({filterVisible: true});
    };

    dismiss = () => {
        this.setState({filterVisible: false});
    };

    render(): React.ReactNode {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.filterVisible}
                onRequestClose={() => {
                    this.setState({filterVisible: false});
                }}
            >
                <View
                    style={{
                        alignItems: 'flex-end',
                        flex: 1,
                        backgroundColor: 'rgba(0,0,0,.6)',
                    }}
                >
                    <ScrollView
                        contentContainerStyle={{
                            flex: 1,/*这属性可能有问题*/
                            paddingTop: 48,
                            paddingBottom: 24,
                            paddingLeft: 16,
                            paddingRight: 16,
                            width: screenW * 0.76,
                            alignItems: 'flex-start',
                            backgroundColor: 'white',
                        }}
                    >

                        {this._buildAreaCell()}

                        {this._buildPriceCell()}

                        {this._buildClassifyCell()}

                        {this._buildScoreCell()}

                        {this._buildSubmitResultCell()}

                    </ScrollView>
                </View>

            </Modal>);
    }

    _buildAreaCell = () => {
        return (
            <FoodFilterCell
                style={{alignSelf: 'stretch'}}
                title={'按区域'}
            >
                <ExpandArrow
                    onExpanded={expanded => {
                        this.setState({subtitleExpanded: expanded});
                        // console.warn("展开: " + expanded);
                    }}
                    rootStyle={{
                        alignSelf: 'flex-start',
                        backgroundColor: '#3E98FF',
                        paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10,
                        borderRadius: 3, marginTop: 10,
                    }}
                    text={'新宁县'}
                    textColor={'white'}
                    iconPadding={5}
                    imagesSrc={[
                        require('../../assets/images/common/triangle_up.png'),
                        require('../../assets/images/common/triangle_down.png'),
                    ]}
                />

                {this.state.subtitleExpanded === true ? this._area_buildSubMenu() : null}

            </FoodFilterCell>);
    };

    _buildPriceCell = () => {
        return (
            <FoodFilterCell
                style={{marginTop: 36, alignSelf: 'stretch'}}
                title={'按价格'}
            >
                <RadioTextGroup
                    groupStyle={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                    }}
                    content={['10-50元', '50-100元', '100-300元', '300-500元', '500及以上',]}
                    textStyle={{
                        paddingTop: 5,
                        paddingBottom: 5,
                        paddingLeft: 10,
                        paddingRight: 10,
                        borderRadius: 3,
                        marginRight: 10,
                        marginTop: 10,
                    }}
                    textSize={12}
                    textColors={['#000', '#fff']}
                    bgColors={['#eee', '#3E98FF']}
                    borderRadius={3}
                    borderWidth={0}
                    borderColors={['transparent']}
                />
            </FoodFilterCell>);
    };


    _buildClassifyCell = () => {
        return (
            <FoodFilterCell

                style={{marginTop: 36, alignSelf: 'stretch'}}
                title={'按分类'}
            >
                <RadioTextGroup
                    groupStyle={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                    }}
                    content={['饮料', '零食', '衣服']}
                    textStyle={{
                        paddingTop: 5,
                        paddingBottom: 5,
                        paddingLeft: 10,
                        paddingRight: 10,
                        borderRadius: 3,
                        marginRight: 10,
                        marginTop: 10,
                    }}
                    textSize={12}
                    textColors={['#000', '#fff']}
                    bgColors={['#eee', '#3E98FF']}
                    borderRadius={3}
                    borderWidth={0}
                    borderColors={['transparent']}
                />
            </FoodFilterCell>);
    };


    _buildScoreCell = () => {
        return (
            <FoodFilterCell

                style={{marginTop: 36, alignSelf: 'stretch'}}
                title={'按评分排序'}
            >
                <RadioTextGroup
                    groupStyle={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                    }}
                    content={['降序', '升序',]}
                    textStyle={{
                        paddingTop: 5,
                        paddingBottom: 5,
                        paddingLeft: 10,
                        paddingRight: 10,
                        borderRadius: 3,
                        marginRight: 10,
                        marginTop: 10,
                    }}
                    textSize={12}
                    textColors={['#000', '#fff']}
                    bgColors={['#eee', '#3E98FF']}
                    borderRadius={3}
                    borderWidth={0}
                    borderColors={['transparent']}
                />
            </FoodFilterCell>);
    };


    _buildSubmitResultCell = () => {
        return (<View style={{flex: 1, justifyContent: 'flex-end'}}>
            <View style={{flexDirection: 'row'}}>
                <ButtonRipple
                    padding={[24, 8]}
                    clickListener={() => {
                    }}
                    textColor={'#000'}
                    textSize={12}
                    backgroundColor={'#eee'}
                    rippleColor={'gray'}
                    text={'重置'}
                    cornerRadius={5}
                />

                <ButtonRipple
                    padding={[24, 8]}

                    clickListener={() => {
                        this.dismiss();
                    }}
                    textSize={12}
                    margin={[0, 0, 0, 32]}
                    backgroundColor={'#3E98FF'}
                    rippleColor={'#3Ee8FF'}
                    textColor={'white'}
                    text={'确定'}
                    cornerRadius={5}
                />
            </View>
        </View>);
    };
    _area_buildSubMenu = () => {
        return (
            <RadioTextGroup
                groupStyle={{
                    marginTop: 5,
                    flexDirection: 'row',
                    paddingLeft: 8,
                    paddingBottom: 8,
                    paddingRight: 8,
                    backgroundColor: '#eee',
                    borderRadius: 5,
                    alignItems: 'center',
                    flexWrap: 'wrap'
                }}
                content={['沙田区', '红灯区', '坝上', '阿达一路', '阿达一路', '坝上',]}
                textStyle={{
                    paddingTop: 2,
                    paddingBottom: 2,
                    paddingLeft: 8,
                    marginRight: 10,
                    marginTop: 8,
                    paddingRight: 8,
                }}
                textSize={12}
                textColors={['#ccc', '#3E98FF']}
                bgColors={['transparent']}
                borderRadius={999}
                borderWidth={1}
                borderColors={['#ccc', '#3E98FF']}
            />
        );
    };
}


// <SelectText
//                     style={{
//                         padding: 15,
//                         margin: 12
//                     }}
//                     text={'好想笑啊'}
//                     textSize={16}
//                     textColors={['black', 'white']}
//                     bgColors={['white', 'orange']}
//                     borderRadius={999}
//                     borderWidth={1}
//                     borderColors={['black', 'orange']}
//                 />
//
//                 <SelectText
//                     style={{
//                         padding: 15,
//                         margin: 12
//                     }}
//                     text={'好想笑啊'}
//                     textSize={16}
//                     textColors={['black', 'white']}
//                     bgColors={['white', 'orange']}
//                     borderRadius={999}
//                     borderWidth={1}
//                     borderColors={['black', 'orange']}
//                 />

// <RadioGroup>
//                     <SelectText
//                         style={{
//                             padding: 15,
//                             margin: 12
//                         }}
//                         text={'好想笑啊'}
//                         textSize={16}
//                         textColors={['black', 'white']}
//                         bgColors={['white', 'red']}
//                         borderRadius={999}
//                         borderWidth={1}
//                         borderColors={['black', 'orange']}
//                     />
//                     <SelectText
//                         style={{
//                             padding: 15,
//                             margin: 12
//                         }}
//                         text={'好想笑啊'}
//                         textSize={16}
//                         textColors={['black', 'white']}
//                         bgColors={['white', 'red']}
//                         borderRadius={999}
//                         borderWidth={1}
//                         borderColors={['black', 'orange']}
//                     />
//
//                 </RadioGroup>