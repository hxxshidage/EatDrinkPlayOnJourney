import React from 'react';

import {
    View,
    StyleSheet, Text
} from 'react-native';
import CircleRadio from "../../component/widget/CircleRadio";
import ImageView from "../widget/common/ImageView";
import TextView from "../widget/common/TextView";
import GoodsAdder from "../widget/common/GoodsAdder";
import PropTypes from 'prop-types';
import {screenW} from "../../tools/tools";
import TouchFeedback from "../widget/common/TouchFeedback";

export default class CartingItemCell extends React.PureComponent {

    static propTypes = {
        ...GoodsAdder.propTypes,
        onGoodsSelected: PropTypes.func,
        isLastInGroup: PropTypes.bool
    };

    render(): React.ReactNode {
        const bean = this.props.item.item;

        return (
            <TouchFeedback
                opacityRadio={0.65}
                extraData={this.props.extraData}
                clickCallback={this.props.clickCallback}>

                <View style={this._obtainRootStyle()}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>

                        <CircleRadio
                            onCheckedChanged={this.props.onGoodsSelected && this.props.onGoodsSelected}
                            checked={bean.hadChecked}
                        />

                        <ImageView
                            style={{marginLeft: 5}}
                            size={[70]}
                            imgSrc={require('../../assets/images/delete/mall_item_milk.jpg')}
                        />

                        <View
                            style={{
                                flex: 1,
                                padding: 5,
                                justifyContent: 'space-between',
                                alignSelf: 'stretch',
                                overflow: 'hidden'
                            }}>
                            <TextView
                                text={'云南白药牙膏好口腔去黄去口臭美白口气清新'}
                                textColor={'#000'}
                                textWeight={'bold'}
                                numberOfLines={2}
                            />

                            <TextView
                                text={'这个是规格大小等等'}
                                textSize={12}
                                textColor={'#888'}
                            />

                        </View>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row', marginLeft: 116,
                            alignItems: "center",
                            justifyContent: "space-between",
                            paddingRight: 10,
                            marginTop: 5
                        }}
                    >

                        <Text style={{fontSize: 10, color: '#FF3D3D'}}>
                            $
                            <Text style={{fontSize: 16, color: '#FF3D3D'}}>
                                45
                            </Text>
                        </Text>

                        <GoodsAdder
                            count={bean.buyCount}
                            onCountAdd={this.props.onCountAdd}
                            onCountLess={this.props.onCountLess}
                        />
                    </View>
                </View>
            </TouchFeedback>
        );
    }

    _obtainRootStyle = () => {
        const last = this.props.isLastInGroup || false;
        return {
            //8+2=10
            marginHorizontal: 2,
            backgroundColor: 'white',
            paddingBottom: 12,
            width: screenW - 20,
            borderBottomLeftRadius: last ? 5 : 0,
            borderBottomRightRadius: last ? 5 : 0
        };
    };
}