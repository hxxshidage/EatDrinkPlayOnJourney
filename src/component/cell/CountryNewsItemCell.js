/**
 * @Description: 县域资讯 条目
 * @author HQ
 * @date 2019/7/2 14:59
 */
import React from 'react';
import {View} from 'react-native';
import TextView from "../widget/common/TextView";
import ImageView from "../widget/common/ImageView";
import {screenW} from "../../tools/tools";

export default class CountryNewsItemCell extends React.PureComponent {

    constructor(props) {
        super(props);
        this.imgWidth = (screenW - 10 * 2 - 5 * 2) / 3;
        this.imgHeight = this.imgWidth * 0.7;
    }


    render(): React.ReactNode {
        return (
            <View style={{paddingHorizontal: 10, paddingVertical: 12,backgroundColor:"white"}}>

                <TextView
                    textColor={'#000'}
                    text={'7小时的等候，在崀山八角寨看到最美云海'}
                />

                <View style={{
                    flexDirection: 'row', alignItems: 'center', justifyContent: "space-between",
                    marginTop: 10
                }}>

                    <ImageView
                        size={[this.imgWidth, this.imgHeight]}
                        corner={3}
                        imgSrc={require('../../assets/images/delete/ls.jpg')}
                    />
                    <ImageView
                        size={[this.imgWidth, this.imgHeight]}
                        corner={3}
                        imgSrc={require('../../assets/images/delete/ls.jpg')}
                    />
                    <ImageView
                        size={[this.imgWidth, this.imgHeight]}
                        corner={3}
                        imgSrc={require('../../assets/images/delete/ls.jpg')}
                    />
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 12}}>

                    <ImageView
                        imgSrc={require('../../assets/images/common/browse_count.png')}
                    />

                    <TextView
                        margin={[0, 16, 0, 3]}
                        text={'5124'}
                        textSize={12}
                        textColor={'#888'}
                    />

                    <ImageView
                        imgSrc={require('../../assets/images/common/comment_count.png')}
                    />

                    <TextView
                        style={{flex: 1}}
                        margin={[0, 16, 0, 3]}
                        text={'5124'}
                        textSize={12}
                        textColor={'#888'}
                    />
                    <TextView
                        text={'1分钟前'}
                        textSize={12}
                        textColor={'#999'}
                    />

                </View>
            </View>
        );
    }
}