import React from 'react';

import {
    View,
    StyleSheet,
    ImageBackground
} from 'react-native';
import TextView from "../widget/common/TextView";
import PropTypes from 'prop-types';

export default class RoutePlanGalleryCell extends React.PureComponent {

    static propTypes = {
        imgArr: PropTypes.array,
        isFoot: PropTypes.bool
    };

    render(): React.ReactNode {
        const {imgArr, isFoot} = this.props;
        return (
            <View
                style={{flexDirection: 'row', backgroundColor: 'white', paddingRight: 40}}>

                <View
                    style={{
                        height: 200,
                        width: 1,
                        backgroundColor: isFoot === true ? 'transparent' : '#8FC3FF',
                        marginLeft: 15.5
                    }}
                />

                <ImageBackground
                    resizeMode={'cover'}

                    style={{flex: 1, height: 180, marginLeft: 10, borderRadius: 5, overflow: 'hidden'}}
                    source={require('../../assets/images/delete/ls.jpg')}
                    // source={{uri:'https://cn.bing.com/th?id=OIP.z5CQboe11MbhGod4QM0EuAHaEo&pid=Api&rs=1&p=0'}}
                >
                    <TextView
                        textWeight={'bold'}
                        style={{
                            position: 'absolute',
                            bottom: 8,
                            right: 8,
                            paddingTop: 2, paddingBottom: 2, paddingLeft: 12, paddingRight: 12,
                            borderRadius: 999, backgroundColor: "rgba(0,0,0,.4)",
                        }}
                        text={`+ ${imgArr.length}`}
                        textColor={'#fff'}
                        textSize={12}

                    />
                </ImageBackground>
            </View>);
    }
}