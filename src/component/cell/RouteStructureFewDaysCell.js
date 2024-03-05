import React from 'react';

import {
    View,
} from 'react-native';
import TextView from "../widget/common/TextView";
import TouchFeedback from "../widget/common/TouchFeedback";

export default class RouteStructureFewDaysCell extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <TouchFeedback
                {...this.props}
                opacityRadio={0.5}
            >
                <View
                    style={{flexDirection: 'row', alignItems: 'center', height: 60}}>

                    <View>
                        <View style={{
                            flex: 1,
                            width: 1,
                            backgroundColor: '#fff',
                            marginLeft: 24
                        }}/>
                        <View
                            style={{marginLeft: 19.5, width: 10, height: 10, backgroundColor: 'white', borderRadius: 5}}
                        />
                        <View style={{flex: 1, width: 1, backgroundColor: '#fff', marginLeft: 24}}/>
                    </View>

                    <TextView
                        textSize={16}
                        textWeight={'bold'}
                        text={this.props.extraData.section.head.title}
                        textColor={'#fff'}
                        style={{paddingTop: 8, paddingBottom: 8, marginLeft: 12}}
                    />
                </View>
            </TouchFeedback>
        );
    }
}