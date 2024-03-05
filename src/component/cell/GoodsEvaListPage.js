/**
 * @Description: 商品评价列表
 * @author HQ
 * @date 2019/6/21 9:45
 */

import React from 'react';

import {
    View,
    StyleSheet,
    SwipeableFlatList
} from 'react-native';
import ImageView from "../widget/common/ImageView";
import TextView from "../widget/common/TextView";
import NineGridImage from "../widget/common/NineGridImage";

import PropTypes from 'prop-types';
import {screenW} from "../../tools/tools";


export default class GoodsEvaListPage extends React.Component {


    static propTypes = {
        imgArr: PropTypes.array
    };

    render(): React.ReactNode {
        return (
            <View style={{paddingHorizontal: 16, paddingVertical: 12}}>
                <View style={{flexDirection: 'row', alignItems: "center"}}>

                    <ImageView
                        size={[30]}
                        imgSrc={require('../../assets/images/delete/header.jpg')}
                        corner={15}
                    />

                    <TextView
                        style={{flex: 1}}
                        text={'SKT-Fucker'}
                        textWeight={'bold'}
                        textColor={'#000'}
                        margin={[16, 0]}
                    />

                    <TextView
                        text={'2019-06-21'}
                        textColor={'#999'}
                        textSize={12}
                    />
                </View>

                <TextView
                    numberOfLines={null}
                    margin={[12, 0, 12]}
                    textColor={'#333'}
                    text={'心中窃喜,经典无需多言'}
                />

                <NineGridImage
                    padding={[0, 48, 0, 0]}
                    imageArray={this.props.imgArr}
                    horizontalSpace={8}
                    verticalSpace={8}
                    width={screenW - 32}
                />

            </View>);
    }
}