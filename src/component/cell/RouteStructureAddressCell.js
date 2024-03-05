import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';
import TextView from "../widget/common/TextView";
import TouchFeedback from "../widget/common/TouchFeedback";

export default class RouteStructureAddressCell extends React.Component {
    render(): React.ReactNode {
        return (
            <TouchFeedback
                {...this.props}
                opacityRadio={0.5}
            >
                <View
                    style={{flexDirection: 'row', alignItems: 'center', height: 40}}>

                    <View>
                        <View style={{
                            flex: 1,
                            width: 1,
                            backgroundColor: '#fff',
                            marginLeft: 24
                        }}/>
                        <View
                            style={{marginLeft: 20.5, width: 8, height: 8, backgroundColor: 'white', borderRadius: 4}}
                        />
                        <View style={{flex: 1, width: 1, backgroundColor: '#fff', marginLeft: 24}}/>
                    </View>

                    <TextView
                        textSize={14}
                        text={this.props.extraData.item.address}
                        textColor={'#fff'}
                        style={{paddingTop: 3, paddingBottom: 3, marginLeft: 24}}
                    />
                </View>
            </TouchFeedback>
        );
    }
}