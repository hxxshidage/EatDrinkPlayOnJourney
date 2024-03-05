import React from 'react';

import {
    View,
    Text
} from 'react-native';
import TextView from "../widget/common/TextView";
import TextWithIcon from "../widget/common/TextWithIcon";
import TouchFeedback from "../widget/common/TouchFeedback";

export default class ConfirmShopBillInfoCell extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <View
                style={{
                    paddingHorizontal: 8,
                    paddingTop: 24,
                    paddingBottom: 32,
                    backgroundColor: 'white',
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    marginHorizontal: 10
                }}>


                <View style={{flexDirection: 'row', alignItems: 'center'}}>


                    <TextView
                        style={{flex: 1}}
                        textColor={'#000'}
                        textSize={12}
                        text={'配送方式'}
                    />

                   <TouchFeedback
                       opacityRadio={0.65}
                   >
                       <TextWithIcon
                           text={'普通配送方式'}
                           textSize={12}
                           textColor={'#888'}
                           imgSrc={require('../../assets/images/common/route_plan_right.png')}
                           direct={'r'}
                           iconPadding={8}
                       />
                   </TouchFeedback>

                </View>
                <Text style={{color: '#000', alignSelf: 'flex-end', marginTop: 16}}>
                    共计2件:
                    <Text style={{color: '#FF3D3D', marginLeft: 5}}>
                        $90.00
                    </Text>
                </Text>
            </View>);
    }
}