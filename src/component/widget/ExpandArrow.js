import React from 'react';

import {
    View,
    Image,
} from 'react-native';

import TextView from '../widget/common/TextView';
import {Sizer} from "../../tools/tools";

import Optional from './common/Optional';
import PropTypes from 'prop-types';

export default class ExpandArrow extends React.PureComponent {

    state = {isExpanded: false};

    _obtainAttr = Sizer.obtainOppositeAttributesFromArray;

    static propTypes = {
        ...TextView.propTypes,
        imagesSrc: PropTypes.array,
        iconPadding: PropTypes.number,
        onExpanded: PropTypes.func,
        rootStyle: PropTypes.object
    };

    render(): React.ReactNode {
        const {onExpanded, imagesSrc, iconPadding, text, textColor, textSize, rootStyle} = this.props;
        return (
            <Optional
                activeOpacity={0.95}
                onSelectedChange={selected => {
                    this._onSelectedChange(selected);
                    onExpanded && onExpanded(selected);
                }}>
                <View style={[{flexDirection: 'row', alignItems: 'center'}, rootStyle]}>

                    <TextView
                        style={{marginRight: iconPadding || 5}}
                        text={text}
                        textSize={textSize}
                        textColor={textColor}
                    />
                    <Image
                        source={this.state.isExpanded === true ?
                            this._obtainAttr(imagesSrc) :
                            this._obtainAttr(imagesSrc, false)}
                    />
                </View>
            </Optional>);
    }

    _onSelectedChange = selected => {
        this.setState({isExpanded: selected});
    };

}