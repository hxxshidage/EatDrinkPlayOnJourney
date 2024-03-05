/**
 * @Description: 商品分类列表条目布局
 * @author HQ
 * @date 2019/6/28 11:26
 */
import React from 'react';
import {View} from 'react-native';
import {screenW} from "../../tools/tools";
import ImageView from "../widget/common/ImageView";
import TextView from "../widget/common/TextView";
import TouchFeedback from "../widget/common/TouchFeedback";

export default class GoodsCategoryItemCell extends React.PureComponent {
    constructor(props) {
        super(props);
        this.itemWidth = this._calcItemWidth();
    }

    render(): React.ReactNode {
        return (
            <TouchFeedback
                {...this.props}
                activeColor={'rgba(204,204,204,.1)'}
                effect={'highlight'}>

                <View style={{
                    width: this.itemWidth,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 5,
                    paddingBottom: 5,
                    paddingTop: 12,
                }}>

                    <ImageView
                        size={[this.itemWidth - 10, this.itemWidth - 10]}
                        imgSrc={require('../../assets/images/delete/header.jpg')}
                    />

                    <TextView
                        margin={[10, 0, 0, 0]}
                        text={'数码'}
                        textColor={'#000'}
                    />
                </View>
            </TouchFeedback>
        );
    }

    //{}, {}, {}, {}, {}, {}, {}, {}
    _calcItemWidth = () => {
        return (screenW - 8 * 2 - 16 * 2) / 3;
    };
}
