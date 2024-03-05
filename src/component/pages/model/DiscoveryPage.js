import React from 'react';
import {
    View,
    Text, StatusBar
} from 'react-native';

export default class DiscoveryPage extends React.Component {

    render(): React.ReactNode {
        return (<View style={{flex: 1, backgroundColor: 'deeppink', justifyContent: 'center', alignItems: 'center'}}>
            <Text>this is the discovery page</Text>
        </View>);
    }
}