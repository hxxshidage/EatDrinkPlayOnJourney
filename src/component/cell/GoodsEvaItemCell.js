import React from 'react';

import {
    View,
} from 'react-native';
import TextView from "../widget/common/TextView";
import HorDivider from "../widget/common/HorDivider";
import ImageView from "../widget/common/ImageView";

export default class GoodsEvaItemCell extends React.Component {
    render(): React.ReactNode {
        return (
            <View
                style={{
                    backgroundColor: 'white',
                    paddingBottom: 10
                }}>

                <HorDivider/>

                <View
                    style={{
                        flexDirection: 'row', alignItems: "center",
                        padding: 10
                    }}>

                    <ImageView
                        size={[30]}
                        corner={15}
                        imgSrc={require('../../assets/images/delete/ls.jpg')}
                    />

                    <TextView
                        margin={[0, 0, 0, 8]}
                        text={'有故事**人'}
                        textColor={'#000'}
                        textSize={12}
                    />

                </View>

                <TextView
                    style={{lineHeight: 20}}
                    margin={[10, 0]}
                    textColor={'#000'}
                    numberOfLines={2}
                    text={'我们相信这种看起来不太舒服的给文本添加样式的方法反而会帮助我们生产更好的App'}
                />
            </View>);
    }
}