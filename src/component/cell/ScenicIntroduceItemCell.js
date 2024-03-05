/**
 * @Description: 景区介绍列表 条目
 * @author HQ
 * @date 2019/7/2 17:46
 */
import React from 'react';
import {View, Text} from 'react-native';
import ImageView from "../widget/common/ImageView";
import VerDivider from "../widget/common/VerDivider";
import TextView from "../widget/common/TextView";
import TouchFeedback from "../widget/common/TouchFeedback";
import PropTypes from 'prop-types';

export default class ScenicIntroduceItemCell extends React.PureComponent {

    static propTypes = {
        ...TouchFeedback.propTypes
    };

    render(): React.ReactNode {
        return (
            <TouchFeedback
                {...this.props}
                opacityRadio={0.65}>
                <View style={{padding: 12, flexDirection: 'row'}}>

                    <ImageView
                        corner={5}
                        size={[110]}
                        imgSrc={require('../../assets/images/delete/ls.jpg')}
                    />

                    <View style={{flex: 1, marginLeft: 10, justifyContent: "space-between"}}>

                        <TextView
                            text={'长沙橘子洲头'}
                            textWeight={'bold'}
                            textColor={"#000"}
                        />

                        <View style={{flexDirection: "row", alignItems: "center"}}>

                            <View>
                                <TextView
                                    text={'4A'}
                                    textColor={'#000'}
                                    textWeight={'bold'}
                                />
                                <TextView
                                    margin={[5, 0, 0, 0]}
                                    text={'景区等级'}
                                    textColor={'#979797'}
                                    textSize={12}
                                />
                            </View>

                            <VerDivider
                                margin={[8, 0]}
                            />

                            <View>
                                <TextView
                                    text={'17.5KM'}
                                    textColor={'#000'}
                                    textWeight={'bold'}
                                />
                                <TextView
                                    margin={[5, 0, 0, 0]}
                                    text={'距您'}
                                    textColor={'#979797'}
                                    textSize={12}
                                />
                            </View>

                        </View>

                        <View style={{flexDirection: "row", alignItems: 'center', marginTop: 8}}>
                            <Text style={{flex: 1, fontSize: 10, fontWeight: 'bold', color: '#FF3D3D'}}>
                                $
                                <Text style={{fontSize: 16}}>
                                    150
                                </Text>

                                <Text style={{color: '#979797', fontSize: 12, fontWeight: 'normal'}}>
                                    {' 起'}
                                </Text>

                            </Text>

                            <TextView
                                margin={[0, 8, 0, 0]}
                                text={'4.4 分'}
                                textSize={12}
                                textColor={'#FFA734'}
                            />

                            <TextView
                                text={'月售1405笔'}
                                textSize={12}
                                textColor={'#979797'}
                            />

                        </View>

                    </View>
                </View>
            </TouchFeedback>
        );
    }
}