import React from 'react';


import TextView from "./TextView";
import ImageView from './ImageView';
import PropType from "prop-types";
import {Sizer} from "../../../tools/tools";
import {View} from 'react-native';

export default class TextWithIcon extends React.PureComponent {

    static propTypes = {
        ...ImageView.propTypes,
        ...TextView.propTypes,
        direct: PropType.string,
        imgSize: PropType.array,
        iconPadding: PropType.number,
        padding: PropType.array,
        expanded: PropType.bool,
        backgroundColor: PropType.string,
        textStyle: PropType.object,
        align: PropType.string,
    };

    render(): React.ReactNode {
        return this._buildContent(this.props.direct);
    }

    _buildContent = direct => {
        const style = this._ensureAlignWayByDirect(direct);
        const dir = direct || 't';
        let content;
        {
            switch (dir) {
                case 'l':
                case 't':
                    content = <View style={style}>
                        {this._buildImage()}
                        {this._buildText()}
                    </View>;
                    break;
                case 'r':
                case 'b':
                    content = (
                        /*自适应大小*/
                        <View style={[style, {alignSelf: 'flex-start'}]}>
                            {this._buildText()}
                            {this._buildImage()}
                        </View>);
                    break;
            }
        }

        return content;
    };

    _buildImage = () => {
        const {corner, imgSize, imgSrc, scaleType} = this.props;

        return <ImageView
            corner={corner}
            scaleType={scaleType}
            imgSrc={imgSrc}
            size={imgSize}
        />;
    };

    _buildText = () => {
        const {direct, iconPadding, text, textColor, textSize, textStyle} = this.props;
        const textMarginArr = [0, 0, 0, 0];
        let dir = direct || 't';

        switch (dir) {
            case 't':
                textMarginArr[0] = iconPadding;
                break;
            case 'b':
                textMarginArr[2] = iconPadding;
                break;
            case 'l':
                textMarginArr[3] = iconPadding;
                break;
            case 'r':
                textMarginArr[1] = iconPadding;
                break;
        }
        return (
            <TextView
                ref={ref => this.content = ref}
                style={textStyle}
                margin={textMarginArr}
                text={text}
                textColor={textColor}
                textSize={textSize}
            />);
    };


    _ensureAlignWayByDirect = direct => {
        let dir = direct || 't';
        const {padding, margin, backgroundColor, expanded, align} = this.props;
        const style = {
            flexDirection: 'row',
            justifyContent: align ? this._ensureAlignWay(align) : 'center',
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

        switch (dir) {
            case 'l':
            case 'r':
                style.flexDirection = 'row';
                break;
            case 't':
            case 'b':
                style.flexDirection = 'column';
                break;
        }
        return style;
    };

    _ensureAlignWay = align => {
        switch (align) {
            case 'start':
                return 'flex-start';
            case 'center':
                return 'center';
            case 'end':
                return 'flex-end';
            default:
                return 'center';
        }
    };
}