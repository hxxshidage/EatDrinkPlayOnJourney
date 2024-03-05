/**
 * @Description: 购物车 店铺
 * @author HQ
 * @date 2019/6/17 18:11
 */
import React from 'react';

import {
    View,
} from 'react-native';
import {screenW} from "../../tools/tools";
import CircleRadio from "../widget/CircleRadio";
import PropTypes from 'prop-types';


export default class CartShopItemCell extends React.Component {

    static propTypes = {
        onShopSelected: PropTypes.func,
    };

    render(): React.ReactNode {

        const bean = this.props.item.item;

        return (
            <View style={{
                flexDirection: 'row',
                width: screenW - 20,
                marginTop: 10,

                //8+2=10
                marginHorizontal: 2,
                backgroundColor: 'white',
                borderTopStartRadius: 5,
                borderTopRightRadius: 5,
                paddingVertical: 10,
            }}>
                <CircleRadio
                    onCheckedChanged={this.props.onShopSelected && this.props.onShopSelected}
                    text={'店铺:三只松鼠'}
                    checked={bean.hadChecked}
                />
            </View>

        );
    }
}