import React from 'react';

import {
    Image
} from 'react-native';

import PropTypes from 'prop-types';
import {Sizer} from "../../../tools/tools";


export default class ImageView extends React.PureComponent {
    state = {loadSuccess: false};

    static propTypes = {
        size: PropTypes.array,
        scaleType: PropTypes.string,
        //string means from net ,number means from local require
        imgSrc: PropTypes.any,
        corner: PropTypes.number,
        placeHolderColor: PropTypes.string
    };

    render(): React.ReactNode {
        const {size, scaleType, imgSrc, style, corner} = this.props;

        const w = Sizer.obtainSize(size, 'w');
        const h = Sizer.obtainSize(size, 'h');

        const src = this._obtainSrc(imgSrc);
        return (
            <Image
                {...this.props}
                source={src}
                style={[(w && h ?
                    {
                        width: w,
                        height: h,
                        borderRadius: corner,
                        //本地图片加载 不要占位背景色
                        backgroundColor: typeof src === 'number' ? "transparent" : this._obtainBackgroundColor()
                    } :
                    {
                        borderRadius: corner,
                        backgroundColor: typeof src === 'number' ? "transparent" : this._obtainBackgroundColor()

                    }), style]}
                onLoad={() => {
                    this.setState({loadSuccess: true})
                }}
                resizeMode={scaleType || 'cover'}
                //本地图片取消动画
                fadeDuration={typeof src === 'number' ? 0 : 300}
            />
        );
    }

    _obtainBackgroundColor = () => {
        const {placeHolderColor} = this.props;

        return this.state.loadSuccess ?
            "transparent" :
            (placeHolderColor || "#eee")
    };

    _obtainSrc = src => {
        if ((typeof src) === 'string') {
            return {uri: src};
        } else if ((typeof src) === "number") {
            return src;
        }
        return null;
    };


}