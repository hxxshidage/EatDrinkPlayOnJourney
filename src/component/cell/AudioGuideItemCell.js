import React from 'react';

import {
    View,
} from 'react-native';
import ImageView from "../widget/common/ImageView";
import TextView from "../widget/common/TextView";
import TouchFeedback from "../widget/common/TouchFeedback";
import HorDivider from "../widget/common/HorDivider";

export default class AudioGuideItemCell extends React.PureComponent {
    render(): React.ReactNode {
        const bean = this.props.extraData.item.scenicInfo;
        return (
            <TouchFeedback
                {...this.props}
            >
                <View>
                    <HorDivider color={'#707070'}/>

                    <View style={{
                        flexDirection: "row",
                        paddingVertical: 16,
                        paddingHorizontal: 10
                    }}>

                        <ImageView
                            corner={5}
                            size={[60]}
                            imgSrc={require('../../assets/images/delete/ls.jpg')}
                        />

                        <View style={{
                            justifyContent: 'space-between',
                            flex: 1,
                            marginLeft: 8,
                            paddingVertical: 5
                        }}>

                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <TextView
                                    style={{flex: 1}}
                                    text={bean.title}
                                    textSize={14}
                                    textWeight={'bold'}
                                />

                                <ImageView
                                    imgSrc={require('../../assets/images/common/route_plan_right.png')}
                                />
                            </View>

                            <TextView
                                textColor={'#D1D1D1'}
                                text={bean.description}
                                numberOfLines={2}
                                textSize={10}
                            />
                        </View>


                    </View>
                </View>

            </TouchFeedback>
        );
    }
}