import React from 'react';

import TouchFeedback from "../../widget/common/TouchFeedback";
import TextWithIcon from "../../widget/common/TextWithIcon";
import PropTypes from 'prop-types';
import {Sizer} from "../../../tools/tools";

export default class TextIconChanger extends React.Component {

    static propTypes = {
        ...TextWithIcon.propTypes,
        ...TouchFeedback.propTypes,
        colors: PropTypes.array,
        clickCallback: PropTypes.func,
    };

    constructor(props) {
        super(props);
        const oppositeAttr = Sizer.obtainOppositeAttributesFromArray;
        const {colors} = this.props;

        this.norColor = oppositeAttr(colors);
        this.focColor = oppositeAttr(colors, false);
    }

    render(): React.ReactNode {
        return (
            <TouchFeedback
                effect={'highlight'}
                // clickCallback={this.props.clickCallback}
                onFocusChanged={this._changeTextColor}
                {...this.props}
            >
                <TextWithIcon
                    ref={'core'}
                    {...this.props}
                    textColor={this.norColor}
                />
            </TouchFeedback>
        );
    }

    _changeTextColor = focused => {
        this.refs.core.content.innerContent.setNativeProps({
            style: {
                color: focused ?
                    this.focColor :
                    this.norColor
            }
        });
    };

}