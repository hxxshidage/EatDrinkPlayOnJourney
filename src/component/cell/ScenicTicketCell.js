import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';
import ScenicTicket from "../widget/ScenicTicket";
import TextView from "../widget/common/TextView";
import HorDivider from "../widget/common/HorDivider";

export default class ScenicTicketCell extends React.PureComponent {

    render(): React.ReactNode {
        return (
            <View
                style={{backgroundColor: '#fff', paddingTop: 12}}>

                <TextView
                    margin={[0, 10, 10]}
                    text={'景区门票'}
                    textSize={16}
                    textColor={'#000'}
                    textWeight={'bold'}
                />
                <ScenicTicket/>

                <HorDivider
                    margin={[16, 0, 0]}
                    height={8}
                />

            </View>);
    }
}