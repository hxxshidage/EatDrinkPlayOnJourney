/**
 * @Description: 图片九宫格组件
 * @author HQ
 * @date 2019/6/20 14:16
 */
import React from 'react';

import {
    View,
} from 'react-native';
import ImageView from "./ImageView";
import PropTypes from "prop-types";
import {screenW, Sizer} from "../../../tools/tools";
import TouchFeedback from "./TouchFeedback";

const COLUMN_COUNT = 3;

export default class NineGridImage extends React.PureComponent {

    static propTypes = {
        width: PropTypes.number,
        imageArray: PropTypes.array.isRequired,
        horizontalSpace: PropTypes.number,
        verticalSpace: PropTypes.number,
        padding: PropTypes.array,
        bgColor: PropTypes.string,
        itemWidRadioWhenOne: PropTypes.number,
        itemHeightRadioWhenOne: PropTypes.number,
        clickCallback: PropTypes.func,
        imageStyle: PropTypes.object
    };


    static defaultProps = {
        verticalSpace: 8,
        horizontalSpace: 8,
        width: screenW,
        padding: [8, 0],
        itemWidRadioWhenOne: 0.6,
        itemHeightRadioWhenOne: 1.2,
    };

    constructor(props) {
        super(props);
        this._initPadding();
        this._initSize();
    }

    componentDidMount(): void {
        this.four = false;
    }

    componentWillUnmount(): void {
        this.four = false;
    }


    render(): React.ReactNode {

        const {bgColor, imageStyle} = this.props;

        const newArr = this._transformImageArrayForEvenly();

        return (
            <View style={{
                width: this.gridWid,
                height: this.gridHeight,
                paddingTop: this.paddingTop,
                paddingBottom: this.paddingBottom,
                paddingLeft: this.paddingLeft,
                paddingRight: this.paddingRight,
                backgroundColor: bgColor || 'white',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'space-between',
                justifyContent: 'space-between',
            }}>

                {newArr.map((item, idx) => {
                    return item ?
                        (
                            <TouchFeedback
                                extraData={idx}
                                clickCallback={this._handleClick}
                                key={idx.toString()}
                                opacityRadio={0.85}>
                                <ImageView
                                    imgSrc={newArr[idx]}
                                    size={[this.itemWid, this.itemHeight]}
                                    style={imageStyle}
                                />
                            </TouchFeedback>)
                        : <View
                            key={idx.toString()}
                            style={{
                                width: this.itemWid,
                                height: this.itemHeight
                            }}
                        />;
                })}

            </View>
        );
    }

    _handleClick = extra => {
        const {clickCallback, imageArray} = this.props;
        let index = extra;
        //四张特殊情况
        if (this.four) {
            index = extra > 2 ? extra - 1 : extra;
        }

        clickCallback && clickCallback(index, imageArray);
    };




    _initPadding = () => {
        const pOrM = Sizer.obtainPaddingOrMarginFromArray;
        const {padding} = this.props;
        this.paddingLeft = pOrM(padding, 'l') || 0;
        this.paddingRight = pOrM(padding, 'r') || 0;
        this.paddingTop = pOrM(padding, 't') || 0;
        this.paddingBottom = pOrM(padding, 'b') || 0;
    };


    _initSize = () => {
        const {
            imageArray, verticalSpace, width,
            itemWidRadioWhenOne, itemHeightRadioWhenOne
        } = this.props;

        const count = imageArray.length;

        switch (count) {
            case 0:
                this.itemWid = 0;
                this.itemHeight = 0;
                this.gridWid = this.paddingLeft + this.itemWid + this.paddingRight;
                this.gridHeight = this.paddingTop + this.itemHeight + this.paddingBottom;
                break;
            case 1:
                this.itemWid = width * itemWidRadioWhenOne;
                this.itemHeight = this.itemWid * itemHeightRadioWhenOne;
                this.gridWid = this.paddingLeft + this.itemWid + this.paddingRight;
                this.gridHeight = this.paddingTop + this.itemHeight + this.paddingBottom;
                break;
            default:

                const rows = this._calcRows(count);

                this.gridWid = width;
                this.itemWid = this._calcItemWH(verticalSpace);

                this.itemHeight = this.itemWid;

                this.gridHeight = this._calcGridHeight(rows);
        }

    };

    _calcItemWH = verticalSpace => {
        const spaceCount = COLUMN_COUNT - 1;
        return (this.gridWid - this.paddingLeft - this.paddingRight - spaceCount * verticalSpace) / COLUMN_COUNT;
    };

    _calcGridHeight = rows => {
        const {horizontalSpace} = this.props;
        const spaceCount = rows - 1;
        return this.paddingTop + this.itemHeight * rows + spaceCount * horizontalSpace + this.paddingBottom;
    };

    _calcRows = count => Math.ceil(count / COLUMN_COUNT);

    //可能要填坑
    _transformImageArrayForEvenly = () => {
        const imgArr = this.props.imageArray;

        const len = imgArr.length;

        switch (len) {
            case 4:
                this.four = true;

                imgArr.splice(2, 0, null);
                imgArr.push(null);
                break;

            default:
                const remainCount = len % COLUMN_COUNT;

                if (remainCount > 1) {
                    for (let i = 0; i < COLUMN_COUNT - remainCount; i++) {
                        imgArr.push(null);
                    }
                }
                break;
        }

        return imgArr;
    };

};

