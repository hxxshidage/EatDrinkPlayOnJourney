import React from 'react';

import PropTypes from 'prop-types';

import {
    View,
} from 'react-native';
import ImageView from "./ImageView";
import TouchFeedback from "./TouchFeedback";
import LimitedGridList from "./LimitedGridList";
import {Random, screenW, Sizer} from "../../../tools/tools";
import ImagePicker from "react-native-image-crop-picker";

export default class ImageGridSelector extends React.Component {

    state = {
        selectedImgArr: ['add']
    };

    static propTypes = {
        maxSelectCount: PropTypes.number,
        columns: PropTypes.number
    };

    constructor(props) {
        super(props);
        this._obtainPadding();
        this.maxCount = this.props.maxSelectCount || 9;
        this.columns = this.props.columns || 3;
        this.imgSize = this._calcImgSize();
    }

    getSelectedImages = () => this._makeArrayStandardBeforeChanged();


    render(): React.ReactNode {
        return (
            <LimitedGridList
                {...this.props}
                columnCount={this.columns}
                renderGridItem={this._buildGridItem}
                data={this.state.selectedImgArr}/>);
    }

    _calcImgSize = () => {
        const {verticalSpace} = this.props;
        return (screenW - this.paddingLeft - this.paddingRight - (this.columns - 1) * verticalSpace) / this.columns - 7.5;
    };


    _obtainPadding = () => {
        const {padding} = this.props;
        this.paddingLeft = Sizer.obtainPaddingOrMarginFromArray(padding, 'l') || 0;
        this.paddingRight = Sizer.obtainPaddingOrMarginFromArray(padding, 'r') || 0;
        this.paddingTop = Sizer.obtainPaddingOrMarginFromArray(padding, 't') || 0;
        this.paddingBottom = Sizer.obtainPaddingOrMarginFromArray(padding, 'b') || 0;
    };


    _buildGridItem = (item, idx) => {
        return (typeof item === 'string' && item === 'add') ? (this._buildImageWithAdd()) : (this._buildImageWithDelete(item, idx));
    };


    _buildImageWithDelete = (item, idx) => {
        return (
            <View>
                <ImageView
                    style={{marginTop: 7.5, marginRight: 7.5}}
                    imgSrc={item.path}
                    size={[this.imgSize]}
                />

                <TouchFeedback
                    extraData={idx}
                    touchStyle={{position: 'absolute', right: 0, top: 0}}
                    clickCallback={this._deleteImg}
                >
                    <ImageView
                        size={[15]}
                        imgSrc={require('../../../assets/images/complain/img_delete.png')}
                    />
                </TouchFeedback>
            </View>
        );
    };

    _buildImageWithAdd = () => {
        return (
            <TouchFeedback
                opacityRadio={0.7}
                clickCallback={this._goImagePicker}
            >
                <ImageView
                    style={{marginTop: 7.5, marginRight: 7.5}}
                    size={[this.imgSize]}
                    imgSrc={require('../../../assets/images/complain/image_add.png')}
                />
            </TouchFeedback>
        );
    };

    //填LimitedGridList及添加照片按钮的坑
    _makeArrayStandardBeforeChanged = () => {
        const arr = this.state.selectedImgArr;
        const end = arr.indexOf('add');

        //数组截取
        if (end > 0) return arr.slice(0, end);
        else {
            if (end === 0) arr.pop();
            return arr;
        }
    };

    _goImagePicker = () => {
        ImagePicker.openPicker({
            cropping: true,
            multiple: true,
            // compressImageMaxWidth: 640,
            // compressImageMaxHeight: 480,
            compressImageQuality: 0.8,
        }).then(images => {
            this._addImages(images);
        });
    };


    _addImages = newImages => {
        const tmp = this._makeArrayStandardBeforeChanged();

        //数据拼接
        let newArr = tmp.concat(newImages);

        if (newArr.length > this.maxCount) {
            newArr = newArr.slice(0, this.maxCount);
        } else if (newArr.length < this.maxCount) {
            newArr.push('add');
        }

        this.setState({selectedImgArr: newArr});
    };


    _deleteImg = idx => {
        const arr = this._makeArrayStandardBeforeChanged();

        arr.splice(idx, 1);

        if (arr.length < this.maxCount && arr[arr.length - 1] !== 'add') arr.push('add');

        // console.warn(arr);
        this.setState({selectedImgArr: arr});
    };

}