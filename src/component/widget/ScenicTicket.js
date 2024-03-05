import React from 'react';

import {
    View,
    Text,
    ImageBackground
} from 'react-native';
import {screenW} from "../../tools/tools";
import TextView from "../widget/common/TextView";
import TouchFeedback from "./common/TouchFeedback";

export default class ScenicTicket extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <ImageBackground
                style={{
                    flexDirection: 'row',
                    width: screenW,
                    height: screenW * 0.24
                }}
                source={require('../../assets/images/ticket/ticket_bg.png')}
            >
                <View
                    style={{
                        flex: 68,
                        alignSelf: 'stretch',
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}
                >

                    <Text style={{color: '#FF3D3D', fontSize: 12, marginLeft: 30}}>
                        $ <Text style={{color: '#FF3D3D', fontSize: 16, fontWeight: 'bold'}}>32</Text>
                    </Text>

                    <View style={{flex: 1, marginLeft: 16, marginRight: 10}}>
                        <TextView
                            text={'崀山国家森林公园'}
                            textWeight={'bold'}
                            textColor={'#FF3D3D'}
                            textSize={14}
                        />

                        <TextView
                            text={'成人票'}
                            textColor={'#FF3D3D'}
                            textSize={12}
                        />
                    </View>

                </View>

                <View
                    style={{
                        flex: 32,
                        justifyContent: 'center',
                        alignItems: "center",
                        alignSelf: 'stretch'
                    }}
                >
                    <TouchFeedback opacityRadio={0.75}>
                        <TextView
                            textColor={'white'}
                            textSize={12}
                            style={{
                                width: 65,
                                height: 24,
                                backgroundColor: "#FF3D3D",
                                borderRadius: 12,
                                lineHeight: 24, textAlign: 'center'
                            }}
                            text={'购买'}
                        />
                    </TouchFeedback>
                </View>
            </ImageBackground>);
    }
}