import React from 'react';
import {Image} from 'react-native';
import PropTypes from 'prop-types';

export default class TabIcon extends React.Component {
    render(): React.ReactNode {
        const {
            focused,
            normalImg,
            focusedImg,
            width,
            height,
            resizeMode
        } = this.props;

        return (
            <Image
                source={focused ? focusedImg : normalImg}
                style={{
                    width: width || 28,
                    height: height || 28,
                    resizeMode: resizeMode || 'cover'
                }}
            />);
    }

    static propTypes = {
        focused: PropTypes.bool,
        width: PropTypes.number,
        height: PropTypes.number,
        focusedImg: PropTypes.number.isRequired,
        normalImg: PropTypes.number.isRequired,
        resizeMode: PropTypes.string
    };

}