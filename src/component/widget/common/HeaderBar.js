import React from 'react';

import {
    View,
} from 'react-native';

import TextView from '../../widget/common/TextView';
import ImageView from '../../widget/common/ImageView';
import PropTypes from 'prop-types';
import {Sizer} from "../../../tools/tools";
import TouchFeedback from "./TouchFeedback";

export default class HeaderBar extends React.Component {
    static propTypes = {
        height: PropTypes.number,
        backImg: PropTypes.number,
        title: PropTypes.string,
        onGoBack: PropTypes.func,
        bgColor: PropTypes.string,
        textColor: PropTypes.string,
        //with-padding with-margin none
        theWayForMergeStatusBar: PropTypes.string,
        rightText: PropTypes.string,
        rightTextColor: PropTypes.string,
        onRightTextClick: PropTypes.func,
        goBackVisible: PropTypes.bool,
        rightIcon: PropTypes.number,
        onRightIconClick: PropTypes.func,
        onRightIconVisible: PropTypes.bool
    };

    static defaultProps = {
        goBackVisible: true
    };


    render(): React.ReactNode {
        const {
            height, backImg, title, onGoBack, theWayForMergeStatusBar, textColor, style,
            rightText, rightTextColor, onRightTextClick, goBackVisible,
            rightIcon, onRightIconClick, onRightIconVisible
        } = this.props;
        let hg = height || 48;
        let way = theWayForMergeStatusBar || 'with-padding';


        return (
            <View
                style={[this._makeSureRootStyleWithWay(hg, way), style]}>
                <TextView
                    style={this._makeSureTextStyleWithWay(hg, way)}
                    text={title}
                    textSize={16}
                    textColor={textColor || '#000'}
                    textWeight={'bold'}
                />

                {goBackVisible ? (<TouchFeedback
                    opacityRadio={0.5}
                    clickCallback={onGoBack}>
                    <View style={{
                        padding: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 10,
                    }}>
                        <ImageView imgSrc={backImg || require('../../../assets/images/common/head_go_back.png')}/>
                    </View>
                </TouchFeedback>) : null}


                {rightText ? (<TouchFeedback
                        touchStyle={{
                            position: 'absolute',
                            right: 10,
                            transform: [{translateY: Sizer.statusBarHeight() / 2}]
                        }}
                        opacityRadio={0.65}
                        clickCallback={onRightTextClick}
                    >
                        <TextView
                            style={{
                                paddingVertical: 3,
                                paddingHorizontal: 5,
                            }}
                            text={rightText}
                            textColor={rightTextColor || '#666'}
                            textSize={12}
                        />
                    </TouchFeedback>) :
                    null
                }

                {(rightIcon && onRightIconVisible) ? (
                        <TouchFeedback
                            clickCallback={onRightIconClick}
                            opacityRadio={0.65}
                            touchStyle={{
                                padding: 2,
                                position: 'absolute',
                                right: 10,
                                transform: [{translateY: Sizer.statusBarHeight() / 2}]
                            }}
                        >

                            <ImageView
                                imgSrc={rightIcon}
                            />
                        </TouchFeedback>
                    ) :
                    null
                }
            </View>
        );
    }

    _makeSureTextStyleWithWay = (hg, way) => {
        const style = {
            backgroundColor: 'transparent',
            position: "absolute",
            width: '100%',
            height: '100%',
            textAlign: 'center',
            lineHeight: hg
        };

        switch (way) {
            case 'with-padding':
                style.top = Sizer.statusBarHeight();
                break;
        }
        return style;
    };


    _makeSureRootStyleWithWay = (hg, way) => {
        const statusHg = Sizer.statusBarHeight();
        const style = {
            flexDirection: 'row',
            height: hg,
            backgroundColor: this.props.bgColor || 'white',
            justifyContent: 'flex-start',
            alignItems: 'center',
        };
        switch (way) {
            case 'with-padding':
                style.height += statusHg;
                style.paddingTop = statusHg;
                break;
            case 'with-margin':
                style.marginTop = statusHg;
                break;
        }
        return style;
    };
}