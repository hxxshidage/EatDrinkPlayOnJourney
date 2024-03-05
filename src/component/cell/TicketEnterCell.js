/**
 * @Description: 景区介绍详情  门票入口
 * @author HQ
 * @date 2019/7/3 9:18
 */
import React from 'react';
import {View} from 'react-native';
import ImageView from "../widget/common/ImageView";
import TextView from "../widget/common/TextView";
import TouchFeedback from "../widget/common/TouchFeedback";
import CardView from "react-native-cardview";

export default class TicketEnterCell extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <CardView
                style={{
                    backgroundColor: "white",
                    paddingHorizontal: 10, paddingVertical: 12,
                    marginHorizontal: 10,
                    marginVertical: 12
                }}
                cardElevation={5}
                cornerRadius={5}
                cardMaxElevation={8}
                cornerOverlap={true}
            >

                <TouchFeedback
                    opacityRadio={0.65}
                    {...this.props}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>

                        <ImageView
                            imgSrc={require('../../assets/images/scenic/scenic_ticket.png')}
                            size={[80]}
                        />

                        <View style={{marginHorizontal: 16, flex: 1}}>
                            <TextView
                                text={'景点门票专区'}
                                textColor={'#000'}
                                textWeight={'bold'}
                            />

                            <TextView
                                margin={[5, 0, 0, 0]}
                                numberOfLines={2}
                                text={'崀山国家森林公园欢迎你!'}
                                textSize={12}
                                textColor={'#979797'}
                            />
                            <View style={{flex: 1}}/>

                            <TextView
                                text={'月售2.3万'}
                                textColor={'#979797'}
                                textSize={12}
                            />
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: "center",
                            justifyContent: 'center',
                            borderRadius: 999,
                            borderColor: '#3E98FF',
                            borderWidth: 1,
                            paddingHorizontal: 5,
                            paddingVertical: 2,
                        }}>
                            <TextView
                                margin={[0, 5, 0, 0]}
                                text={'去购买'}
                                textSize={12}
                                textColor={'#3E98FF'}
                            />

                            <ImageView
                                imgSrc={require('../../assets/images/ticket/ticket_enter_right.png')}
                            />

                        </View>

                    </View>
                </TouchFeedback>

            </CardView>


        );
    }
}