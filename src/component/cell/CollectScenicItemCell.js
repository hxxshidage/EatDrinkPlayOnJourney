/**
 * @Description: 我的收藏--景区列表  条目布局
 * @author HQ
 * @date 2019/7/1 10:05
 */
import React from 'react';
import {View} from 'react-native';
import ImageView from "../widget/common/ImageView";
import TextView from "../widget/common/TextView";
import TextWithIcon from "../widget/common/TextWithIcon";

export default class CollectScenicItemCell extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <View
                style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10}}>

                <ImageView
                    size={[80]}
                    imgSrc={require('../../assets/images/delete/ls.jpg')}
                />

                <View style={{flex: 1, marginLeft: 10}}>

                    <TextView
                        textWeight={'bold'}
                        textSize={16}
                        textColor={'#000'}
                        text={'泸州月'}
                    />


                    <TextView
                        margin={[0, 3]}
                        textColor={'#888'}
                        textSize={12}
                        text={'泸州的月光的撒在心上,太多的伤难诉衷肠'}
                    />

                    <TextWithIcon
                        align={'start'}
                        imgSrc={require('../../assets/images/personal/collect_scenic_loc.png')}
                        direct={'l'}
                        textColor={'#888'}
                        textSize={12}
                        text={'江西泸州'}
                        iconPadding={5}

                    />
                </View>
            </View>
        );
    }
}