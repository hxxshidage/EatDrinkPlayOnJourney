import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';
import TextView from "../widget/common/TextView";
import ImageView from "../widget/common/ImageView";

import PropTypes from 'prop-types';

export default class RoutePlanFewDaysCell extends React.PureComponent {
    static propTypes = {
        dayText: PropTypes.string,
        isHeader: PropTypes.bool,
    };

    render(): React.ReactNode {
        const {dayText, isHeader} = this.props;
        return (
            <View
                style={{flexDirection: 'row', backgroundColor: 'white'}}>

                <View style={{}}>
                    <View style={{
                        flex: 1,
                        width: 1,
                        backgroundColor: isHeader === true? 'transparent' : '#8FC3FF',
                        marginLeft: 15.5
                    }}/>
                    <ImageView
                        style={{marginLeft: 7.5}}
                        size={[17]}
                        imgSrc={require('../../assets/images/route_plan/scenic_few_day.png')}
                    />
                    <View style={{flex: 1, width: 1, backgroundColor: '#8FC3FF', marginLeft: 15.5}}/>
                </View>

                <TextView
                    textWeight={'bold'}
                    text={dayText}
                    textColor={'#000'}
                    style={{paddingTop: 10, paddingBottom: 10, marginLeft: 10}}
                />
            </View>);
    }
}