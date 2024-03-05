import React from 'react';
import {
    View,
    findNodeHandle,
    StyleSheet
} from 'react-native';

import {BlurView} from "@react-native-community/blur";
import ImageView from "../../widget/common/ImageView";
import PropTypes from 'prop-types';
import {Sizer} from "../../../tools/tools";

export default class BlurImageGroup extends React.Component {

    static propTypes = {
        ...ImageView.propTypes,
        imgStyle: PropTypes.object,
        blurAmount: PropTypes.number,
        blurType: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {targetRef: null};
    }

    _imageLoaded = () => {
        this.setState({targetRef: findNodeHandle(this.targetImg)});
    };

    render(): React.ReactNode {

        const {imgSrc, scaleType, size, imgStyle, blurAmount, blurType} = this.props;
        return (
            <View
                style={[styles.container, {height: Sizer.obtainSize(size, 'h')}]}>
                <ImageView
                    ref={img => {
                        this.targetImg = img;
                    }}
                    scaleType={scaleType}
                    size={size}
                    imgSrc={imgSrc}
                    style={[styles.absolute, imgStyle]}
                    onLoadEnd={this._imageLoaded}
                />

                {(this.state.targetRef == null ? null :
                    <BlurView
                        viewRef={this.state.targetRef}
                        style={styles.absolute}
                        blurType={blurType || 'light'}
                        blurAmount={blurAmount || 8}
                    />)
                }

                {this.props.children}
            </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
});