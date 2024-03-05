/**
 * @Description: 购物车底部收银台
 * @author HQ
 * @date 2019/6/17 16:40
 */
import React from 'react';

import {
    View,
} from 'react-native';
import {AppColors} from "../../assets/colors/Color";
import HorDivider from "./common/HorDivider";
import CircleRadio from "./CircleRadio";
import TouchFeedback from "./common/TouchFeedback";
import TextView from "./common/TextView";
import PropTypes from 'prop-types';

export default class CartCashier extends React.PureComponent {

    static propTypes = {
        isEditing: PropTypes.bool,
        totalPrice: PropTypes.string,
        onAllSelected: PropTypes.func,
        onDelete: PropTypes.func,
        onSettlement: PropTypes.func,
        isAllSelected: PropTypes.bool,
    };


    render(): React.ReactNode {

        const {
            isEditing,
            totalPrice,
            onAllSelected,
            onDelete,
            onSettlement,
            isAllSelected
        } = this.props;

        return (
            <View style={{
                height: 50,
                width: '100%',
                position: 'relative',
                right: 0,
                bottom: 0,
                backgroundColor: 'white'
            }}>

                <HorDivider
                    color={'#DEDEDE'}
                />

                <View
                    style={{
                        flexDirection: "row",
                        flex: 1,
                        alignItems: 'center'
                    }}>

                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center'

                    }}>
                        <CircleRadio
                            text={'全选'}
                            checked={isAllSelected}
                            textColor={'#333'}
                            onCheckedChanged={onAllSelected}
                        />

                        {isEditing ? (
                            <TouchFeedback
                                clickCallback={onDelete}
                            >
                                <TextView
                                    text={'删除'}
                                    textSize={12}
                                    textColor={AppColors.themeColorRgba}
                                    style={{
                                        paddingVertical: 3,
                                        paddingHorizontal: 5,
                                        marginLeft: 16,
                                    }}
                                />
                            </TouchFeedback>

                        ) : null}
                    </View>


                    <TextView
                        text={'合计:'}
                        textColor={'#333'}
                    />

                    <TextView
                        margin={[10, 0]}
                        text={`$${totalPrice || '0.00'}`}
                        textColor={'#FF3D3D'}
                    />

                    <TouchFeedback
                        clickCallback={onSettlement}
                    >
                        <TextView
                            style={{
                                width: 105,
                                height: 49,
                                backgroundColor: "#FF9C03", textAlignVertical: 'center',
                                textAlign: 'center'
                            }}
                            text={'去结算'}
                            textColor={'white'}
                        />
                    </TouchFeedback>
                </View>
            </View>
        );
    }
}