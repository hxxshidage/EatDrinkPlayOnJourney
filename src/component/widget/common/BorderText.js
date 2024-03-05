/**
 * @Description: 带边框的Text组件
 * @author HQ
 * @date 2019/7/2 14:24
 */
import React from 'react';
import PropTypes from 'prop-types';
import TextView from "./TextView";
import TouchFeedback from "./TouchFeedback";

export default class BorderText extends React.PureComponent {

    static propTypes = {
        ...TextView.propTypes,
        ...TouchFeedback.propTypes,
        textStyle: PropTypes.object,
        borderColor: PropTypes.string,
        borderWidth: PropTypes.number,
        borderRadius: PropTypes.number,
    };

    render(): React.ReactNode {
        const {
            text, textColor, textSize, textStyle, touchStyle, borderColor, borderWidth,
            margin, clickCallback, borderRadius
        } = this.props;
        return (
            <TouchFeedback clickCallback={clickCallback}
                           touchStyle={touchStyle}
                           opacityRadio={0.65}>
                <TextView
                    style={Object.assign({
                        borderWidth: borderWidth || 1,
                        borderColor: borderColor || textColor,
                        borderRadius: borderRadius || 999,
                    }, textStyle)}
                    margin={margin}
                    text={text}
                    textColor={textColor}
                    textSize={textSize}
                />
            </TouchFeedback>
        );
    }
}