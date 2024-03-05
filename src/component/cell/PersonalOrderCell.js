import React from 'react';

import CardView from "react-native-cardview";

import TextIconChanger from '../widget/common/TextIconChanger';

import {OrderCellStyles as st} from "../../assets/styles/personal/PersonalPageStyle";
import PropTypes from "prop-types";

const OrderIcons = [
    require('../../assets/images/personal/all_orders.png'),
    require('../../assets/images/personal/pending_pay.png'),
    require('../../assets/images/personal/refund.png'),
];

const OrderLabels = ['我的订单', '待付款', '退款'];

export default class PersonalOrderCell extends React.Component {
    static propTypes = {
        itemClick: PropTypes.func
    };

    render(): React.ReactNode {
        return (
            <CardView
                style={st.card}
                cardElevation={5}
                cardMaxElevation={8}
                cornerRadius={8}
                cornerOverlap={true}
            >
                {OrderIcons.map((item, idx) => {
                    return (
                        <TextIconChanger
                            extraData={OrderLabels[idx]}
                            key={idx.toString()}
                            padding={[10, 5]}
                            activeColor={'rgba(204,204,204,.1)'}
                            opacityRadio={0.35}
                            text={OrderLabels[idx]}
                            textSize={12}
                            iconPadding={5}
                            colors={['#666', 'skyblue']}
                            imgSrc={item}
                            clickCallback={this.props.itemClick}
                        />
                    )
                })}

            </CardView>
        );
    }
}

//<TextIconChanger
//                     padding={[10, 5]}
//                     activeColor={'rgba(204,204,204,.1)'}
//                     opacityRadio={0.35}
//                     text={'我的订单'}
//                     textSize={12}
//                     iconPadding={5}
//                     colors={['#666', 'skyblue']}
//                     imgSrc={OrderIcons[0]}
//                     clickCallback={() => {
//                         console.warn("click me ")
//                     }}
//                 />
//                 <TextIconChanger
//                     padding={[10, 5]}
//
//                     activeColor={'rgba(204,204,204,.1)'}
//                     opacityRadio={0.35}
//                     text={'我的订单'}
//                     textSize={12}
//                     iconPadding={5}
//                     colors={['#666', 'skyblue']}
//                     imgSrc={OrderIcons[1]}
//                     clickCallback={() => {
//                         console.warn("click me ")
//                     }}
//                 />
//
//                 <TextIconChanger
//                     padding={[10, 5]}
//
//                     activeColor={'rgba(204,204,204,.1)'}
//                     opacityRadio={0.35}
//                     text={'我的订单'}
//                     textSize={12}
//                     iconPadding={5}
//                     colors={['#666', 'skyblue']}
//                     imgSrc={OrderIcons[2]}
//                     clickCallback={() => {
//                         console.warn("click me ")
//                     }}
//                 />