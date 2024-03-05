import React from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import TouchFeedback from "./TouchFeedback";
import PropTypes from 'prop-types';

export default class GoodsAdder extends React.PureComponent {

    static propTypes = {
        count: PropTypes.number,
        onCountLess: PropTypes.func,
        onCountAdd: PropTypes.func,
    };

    render(): React.ReactNode {

        const {count, onCountLess, onCountAdd} = this.props;

        return (
            <View
                style={styles.outStyle}>

                <TouchFeedback
                    opacityRadio={0.65}
                    clickCallback={onCountLess}
                >
                    <Text style={styles.symbolStyle}>-</Text>
                </TouchFeedback>

                <Text
                    style={styles.countStyle}
                >{count}</Text>


                <TouchFeedback
                    opacityRadio={0.65}
                    clickCallback={onCountAdd}
                >
                    <Text style={[styles.symbolStyle, {
                        fontSize: 20,
                    }]}>+</Text>
                </TouchFeedback>
            </View>
        );
    }

    _countLess = () => {
        let count = this.props.count;

        if (--count <= 0) count = 0;

        this._countChanged(count);
    };


    _countAdd = () => {
        let count = this.state.count;
        this.setState({count: ++count}, this._countChanged)
    };

    _countChanged = count => {
        this.props.onCountChanged && this.props.onCountChanged(count);
    };
}

const styles = StyleSheet.create({
    outStyle: {
        flexDirection: "row",
        width: 84,
        height: 26,
        borderWidth: 1,
        borderColor: '#707070',
        alignItems: 'center'
    },
    symbolStyle: {
        lineHeight: 24,
        width: 24,
        height: 24,
        textAlign: 'center',
        fontSize: 22,
        color: '#707070'
    },
    countStyle: {
        width: 34,
        height: 24,
        lineHeight: 24,
        textAlign: 'center',
        fontSize: 12,
        color: '#000',
        borderColor: '#707070',
        borderRightWidth: 1,
        borderLeftWidth: 1,
    },
});