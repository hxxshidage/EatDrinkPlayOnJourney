import React from 'react';
import PropTypes from 'prop-types';

import {
    View,
} from 'react-native';

import {Sizer, screenW} from "../../../tools/tools";

export default class LimitedGridList extends React.Component {
    constructor(props) {
        super(props);
        this._obtainPadding();
        this.itemWidth = this._calcItemWidth();
    }

    static propTypes = {
        width: PropTypes.number,
        renderGridItem: PropTypes.func.isRequired,
        columnCount: PropTypes.number.isRequired,
        data: PropTypes.array.isRequired,
        horizontalSpace: PropTypes.number,
        verticalSpace: PropTypes.number,
        padding: PropTypes.array,
        backgroundColor: PropTypes.string
    };

    render(): React.ReactNode {
        const {
            backgroundColor
        } = this.props;

        return (
            <View
                style={{
                    paddingTop: this.paddingTop,
                    paddingBottom: this.paddingBottom,
                    paddingLeft: this.paddingLeft,
                    paddingRight: this.paddingRight,
                    backgroundColor: backgroundColor,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignContent: 'center',
                    justifyContent: 'space-between'
                }}>
                {
                    this._createNewDataForEvenly()
                }
            </View>);
    }

    _createNewDataForEvenly = () => {
        const {
            renderGridItem,
            data,
            horizontalSpace,
            columnCount
        } = this.props;

        //因对齐方式为:justifyContent: 'space-between'
        //所以不足列数时会靠两侧分散对齐  中间留白
        //补齐一整列
        const remainCount = data.length % columnCount;

        if (remainCount > 1) {
            for (let i = 0; i < columnCount - remainCount; i++) {
                data.push(null);
            }
        }

        return data.map((item, idx) => {
            return (
                <View
                    key={idx.toString()}
                    style={
                        this._isFirstRow(idx) ? {width: this.itemWidth} : {
                            width: this.itemWidth,
                            marginTop: horizontalSpace
                        }}>
                    {item ? (renderGridItem && renderGridItem(item, idx)) : null}
                </View>)
        });
    };

    _obtainPadding = () => {
        const {padding} = this.props;
        this.paddingLeft = Math.round(Sizer.obtainPaddingOrMarginFromArray(padding, 'l'));
        this.paddingRight = Sizer.obtainPaddingOrMarginFromArray(padding, 'r');
        this.paddingTop = Sizer.obtainPaddingOrMarginFromArray(padding, 't');
        this.paddingBottom = Sizer.obtainPaddingOrMarginFromArray(padding, 'b');
    };

    _calcItemWidth = () => {
        const {
            width,
            columnCount,
            verticalSpace,
        } = this.props;
        let wid = width || screenW;
        let ver = verticalSpace || 5;
        return (wid - (columnCount - 1) * ver - this.paddingLeft - this.paddingRight) / columnCount;
    };

    _isFirstRow = idx => idx < this.props.columnCount;
}
