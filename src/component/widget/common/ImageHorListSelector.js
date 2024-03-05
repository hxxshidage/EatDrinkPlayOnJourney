import React from 'react';

import {
    FlatList,
    View
} from 'react-native';

import PropTypes from 'prop-types';
import ImageView from "../../../component/widget/common/ImageView";
import TouchFeedback from "../../../component/widget/common/TouchFeedback";
import {screenW, Sizer} from "../../../tools/tools";
import ImagePicker from "react-native-image-crop-picker";

export default class ImageHorListSelector extends React.Component {

    state = {
        selectedImages: ['add',
            // {path: require('../../../assets/images/delete/header.jpg')},
            // {path: require('../../../assets/images/delete/header.jpg')},
            // {path: require('../../../assets/images/delete/header.jpg')},
            // {path: require('../../../assets/images/delete/header.jpg')},
            // {path: require('../../../assets/images/delete/header.jpg')},
        ]
    };

    static propTypes = {
        visibleCountInRow: PropTypes.number,
        maxSelectCount: PropTypes.number,
        padding: PropTypes.array
    };

    constructor(props) {
        super(props);
        this._obtainPadding();
        this.maxCount = this.props.maxSelectCount || 9;
        this.columns = this.props.visibleCountInRow || 3;
        this.imgSize = this._calcImgSize();
        // console.warn(this.imgSize);
    }


    render(): React.ReactNode {
        return (
            <FlatList
                showsHorizontalScrollIndicator={false}
                removeClippedSubviews={true}
                contentContainerStyle={{
                    paddingLeft: this.paddingLeft,
                    paddingRight: this.paddingRight,
                    paddingBottom: this.paddingBottom,
                    paddingTop: this.paddingTop
                }}
                extraData={this.state}
                keyExtractor={(item, idx) => (item.id && item.id.toString()) || idx.toString()}
                horizontal={true}
                data={this.state.selectedImages}
                renderItem={this._buildRenderItem}
            />);
    }


    _buildRenderItem = cellItem => {
        const {item, index} = cellItem;
        return (typeof item === 'string' && item === 'add') ? (this._buildImageWithAdd()) : (this._buildImageWithDelete(item, index));
    };

    _buildImageWithDelete = (item, idx) => {
        const {verticalSpace} = this.props;

        return (
            <View
                style={{marginLeft: verticalSpace}}
            >
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
        // console.warn('_buildImageWithAdd');

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

    _obtainPadding = () => {
        const {padding} = this.props;
        this.paddingLeft = Sizer.obtainPaddingOrMarginFromArray(padding, 'l') || 0;
        this.paddingRight = Sizer.obtainPaddingOrMarginFromArray(padding, 'r') || 0;
        this.paddingTop = Sizer.obtainPaddingOrMarginFromArray(padding, 't') || 0;
        this.paddingBottom = Sizer.obtainPaddingOrMarginFromArray(padding, 'b') || 0;
    };

    _calcImgSize = () => {
        const {verticalSpace} = this.props;
        return (screenW - this.paddingLeft - this.paddingRight - (this.columns - 1) * (verticalSpace || 5)) / this.columns - 7.5;
    };

    _goImagePicker = () => {
        ImagePicker.openPicker({
            cropping: true,
            multiple: true,
            // compressImageMaxWidth: 640,
            // compressImageMaxHeight: 480,
            compressImageQuality: 0.8,
        }).then(images => {
            // console.warn(images);
            this._addImages(images);
        }).catch(err => {
            console.warn(err);
        })
    };

    _addImages = newImages => {

        //数据拼接
        let arr = this.state.selectedImages.concat(newImages);

        if (arr.length > this.maxCount) {
            //删除首个
            arr.shift();
        }
        // console.warn(arr);

        this.setState({selectedImages: arr});
    };


    _deleteImg = idx => {
        // const arr = this._makeArrayStandardBeforeChanged();
        const arr = this.state.selectedImages;

        arr.splice(idx, 1);

        if (arr.length <= this.maxCount + 1 && arr.indexOf('add') === -1) {
            arr.unshift('add');
        }

        // if (arr.length < this.maxCount && arr[arr.length - 1] !== 'add') arr.push('add');

        // console.warn(arr);
        this.setState({selectedImages: arr});
    };
}