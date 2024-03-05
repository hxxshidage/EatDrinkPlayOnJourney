import React from 'react';

import {
    View,
} from 'react-native';
import {screenW} from "../../tools/tools";
import TextView from "../widget/common/TextView";
import ImageView from "../widget/common/ImageView";
import PropTypes from 'prop-types';
import HorDivider from "../widget/common/HorDivider";

export default class ScenicTravelsCell extends React.PureComponent {

    static propTypes = {
        hideDivider: PropTypes.bool
    };


    render(): React.ReactNode {
        const imgWid = screenW - 20;
        const imgHeight = imgWid * 0.51;
        return (
            <View style={{marginTop: 8, paddingLeft: 10, paddingRight: 10, overflow: 'hidden'}}>
                <TextView
                    style={{fontWeight: 'bold'}}
                    text={'薪火相传：行走在老山界的文艺之旅'}
                    textSize={14}
                    textColor={'black'}
                />

                <View>
                    <ImageView
                        style={{marginTop: 8}}
                        size={[imgWid, imgHeight]}
                        imgSrc={require('../../assets/images/delete/featured_img.png')}/>

                    <TextView
                        // text={item.isVideo === true ? '视频' : '游记'}
                        text={'游记'}
                        style={{
                            backgroundColor: 'rgba(33,144,255,.65)', paddingTop: 3, paddingBottom: 3, paddingLeft: 12,
                            paddingRight: 12,
                            borderRadius: 999,
                            textAlign: 'center',
                            position: 'absolute',
                            right: 10,
                            bottom: 10
                        }}
                        textSize={10}
                    />
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
                    <ImageView
                        style={{marginRight: 3}}
                        imgSrc={require('../../assets/images/common/browse_count.png')}/>
                    <TextView
                        textSize={12}
                        text={'134'}
                        textColor={'#444444'}
                    />
                </View>
                <HorDivider
                    color={this.props.hideDivider === true ? 'transparent' : "#eee"}
                    margin={[10, 0, 6]}
                />

            </View>
        );
    }

}