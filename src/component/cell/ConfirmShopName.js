import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';
import TextView from "../widget/common/TextView";

export default class ConfirmShopName extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    paddingHorizontal: 8,
                    paddingVertical: 16,
                    marginHorizontal: 10,
                    marginTop: 10,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    backgroundColor: 'white'
                }}>

                <TextView
                    text={'店铺: 三棵松树'}
                    textColor={'#000'}
                />
            </View>);
    }
}