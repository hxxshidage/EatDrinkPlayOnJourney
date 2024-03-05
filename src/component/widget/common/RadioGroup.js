import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';

export default class RadioGroup extends React.Component {

    constructor(props) {
        super(props);
        this.childrenArr = React.Children.toArray(this.props.children);
        console.dir(this.childrenArr);
        // console.warn(React.Children.count(props.children));
        // React.Children.map(props.children, (child, idx) => {
        //     this.childrenArr.push({child: child, index: idx, isSelected: idx <= 0});
        // });
        // this.childrenArr[0].setNativeProps({style: {backgroundColor: 'green'}})
    }

    render(): React.ReactNode {
        return (
            <View
                style={{flex: 1, backgroundColor: 'orange'}}>
                {this.props.children}
            </View>);
    }
}