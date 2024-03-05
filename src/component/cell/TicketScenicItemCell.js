/**
 * @Description: 景区(门票)列表 用于跳转到购票详情
 * @author HQ
 * @date 2019/7/2 16:58
 */
import React from 'react';
import {View} from 'react-native';
import ImageView from "../widget/common/ImageView";
import TextView from "../widget/common/TextView";
import TouchFeedback from "../widget/common/TouchFeedback";

export default class TicketScenicItemCell extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <TouchFeedback
                opacityRadio={0.65}
                {...this.props}>
                <View style={{flexDirection: 'row', padding: 12}}>

                    <ImageView
                        corner={5}
                        size={[110, 130]}
                        imgSrc={require('../../assets/images/delete/featured_img.png')}
                    />

                    <View style={{flex: 1, paddingVertical: 5, marginLeft: 10}}>

                        <TextView
                            text={'长沙海底世界'}
                            textWeight={'bold'}
                            textColor={"#000"}
                        />

                        <TextView
                            margin={[3, 0, 0, 0]}
                            text={'可满足不同游客的一切需求，也是湖南广'}
                            textColor={'#979797'}
                            textSize={12}
                        />

                        <View
                            style={{flexDirection: "row", flexWrap: 'wrap', alignContent: 'flex-start', marginTop: 5}}>

                            <TextView
                                text={'4A景区'}
                                style={{
                                    borderColor: "#3E98FF",
                                    borderWidth: 1,
                                    paddingTop: 2,
                                    borderRadius: 3,
                                    paddingHorizontal: 5,
                                    marginRight: 10
                                }}
                                textColor={'#3E98FF'}
                                textSize={10}
                            />

                            <TextView
                                text={'今日可预订'}
                                style={{
                                    borderColor: "#3E98FF",
                                    borderWidth: 1,
                                    paddingTop: 2,
                                    borderRadius: 3,
                                    paddingHorizontal: 5,
                                    marginRight: 10
                                }}
                                textColor={'#3E98FF'}
                                textSize={10}
                            />
                        </View>

                        <TextView
                            margin={[5, 0, 0, 0]}
                            textSize={12}
                            textColor={'#979797'}
                            text={'距您23.36公里'}
                        />

                        <View style={{flex: 1}}/>

                        <View style={{flexDirection: 'row', alignItems: 'center'}}>

                            <TextView
                                margin={[0, 16, 0, 0]}
                                text={'4.4分'}
                                textColor={'#000'}
                                textSize={12}
                                textWeight={'bold'}
                            />

                            <TextView
                                text={'月售1524笔'}
                                textColor={'#979797'}
                                textSize={12}
                            />
                        </View>
                    </View>

                </View>
            </TouchFeedback>
        );
    }
}