import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import TouchFeedback from "../common/TouchFeedback";
import ImageView from "../common/ImageView";
import TextView from "../common/TextView";
import PropTypes from 'prop-types';

export default class TopControlContainer extends React.PureComponent {

    static propTypes = {
        videoTitle: PropTypes.string,
        onBackCallback: PropTypes.func
    };


    render(): React.ReactNode {
        const {videoTitle, onBackCallback} = this.props;

        return (
            <LinearGradient
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 40,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: '100%',
                    paddingLeft: 13,
                    paddingRight: 16
                }}
                start={{x: 0.0, y: 0.0}}
                end={{x: 0.0, y: 1.0}}
                locations={[0, 0.75]}
                colors={['rgba(0,0,0,.8)', 'rgba(255,255,255,.2)']}>

                <TouchFeedback
                    clickCallback={onBackCallback}
                    touchStyle={{padding: 3, marginRight: 16}}>

                    <ImageView
                        placeHolderColor={'transparent'}
                        imgSrc={require('../../../assets/images/common/go_back_white.png')}
                    />

                </TouchFeedback>

                <TextView
                    style={{flex: 1}}
                    text={videoTitle}
                    textColor={'white'}
                />

            </LinearGradient>);
    }
}