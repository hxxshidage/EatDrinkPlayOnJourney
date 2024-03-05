import React from 'react';
import {
    View,
    Image,
} from 'react-native';
import TextView from './TextView';
import PropType from 'prop-types';
import {Sizer} from "../../../tools/tools";

const left = 'left';
const right = 'right';
const top = 'top';
const bottom = 'bottom';

export default class IconText extends React.PureComponent {
    static propTypes = {
        ...TextView.propTypes,
        direct: PropType.string,
        imgWid: PropType.number,
        imgHeight: PropType.number,
        iconPadding: PropType.number,
        padding: PropType.array,
        margin: PropType.array,
        scaleType: PropType.string,
        expanded: PropType.bool,
        backgroundColor: PropType.string,
        textStyle: PropType.object,
        imgSrc: PropType.number.isRequired
    };

    render(): React.ReactNode {
        return this._buildContent(this.props.direct);
    }

    _buildContent = direct => {
        const style = this._ensureAlignWayByDirect(direct);
        const dir = direct || top;
        let content;

        {
            switch (dir) {
                case left:
                case top:
                    content = <View style={style}>
                        {this._buildImage()}
                        {this._buildText()}
                    </View>;
                    break;
                case right:
                case bottom:
                    content = (
                        <View style={style}>
                            {this._buildText()}
                            {this._buildImage()}
                        </View>);
                    break;
            }
        }

        return content;
    };

    _buildImage = () => {
        const {imgWid, imgHeight, imgSrc, scaleType} = this.props;

        const imgStyle = () => {
            return imgWid && imgHeight ? {
                width: imgWid,
                height: imgHeight,
            } : {};
        };

        return <Image
            ref={'itIcon'}
            resizeMode={scaleType || 'cover'}
            style={imgStyle()}
            source={imgSrc}
        />;
    };

    _buildText = () => {
        const {direct, iconPadding, text, textColor, textSize, textStyle} = this.props;
        const marginStyle = {};

        switch (direct) {
            case top:
                marginStyle.marginTop = iconPadding;
                break;
            case bottom:
                marginStyle.marginBottom = iconPadding;
                break;
            case left:
                marginStyle.marginLeft = iconPadding;
                break;
            case right:
                marginStyle.marginRight = iconPadding;
                break;
        }
        return (
            <TextView
                ref={'itText'}
                style={Object.assign({textAlign: 'center',}, marginStyle, textStyle)}
                text={text}
                textColor={textColor}
                textSize={textSize}
            />);
    };


    _ensureAlignWayByDirect = direct => {
        const {padding, margin, backgroundColor, expanded} = this.props;
        const style = {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flex: expanded === true ? 1 : 0,
            paddingTop: Sizer.obtainPaddingOrMarginFromArray(padding, 't'),
            paddingRight: Sizer.obtainPaddingOrMarginFromArray(padding, 'r'),
            paddingBottom: Sizer.obtainPaddingOrMarginFromArray(padding, 'b'),
            paddingLeft: Sizer.obtainPaddingOrMarginFromArray(padding, 'l'),
            marginTop: Sizer.obtainPaddingOrMarginFromArray(margin, 't'),
            marginRight: Sizer.obtainPaddingOrMarginFromArray(margin, 'r'),
            marginBottom: Sizer.obtainPaddingOrMarginFromArray(margin, 'b'),
            marginLeft: Sizer.obtainPaddingOrMarginFromArray(margin, 'l'),
            backgroundColor: backgroundColor
        };

        switch (direct) {
            case left:
            case right:
                style.flexDirection = 'row';
                break;
            case top:
            case bottom:
                style.flexDirection = 'column';
                break;
        }
        return style;
    };
}

export {left, right, top, bottom};