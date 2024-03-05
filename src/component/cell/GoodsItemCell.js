/**
 * @Description: 商品列表条目
 * @author HQ
 * @date 2019/6/28 15:27
 */
import React from 'react';
import {View, Text} from 'react-native';
import ImageView from "../widget/common/ImageView";
import TextView from "../widget/common/TextView";
import {screenW} from "../../tools/tools";
import TouchFeedback from "../widget/common/TouchFeedback";
import PropTypes from 'prop-types';

//为了添加自营tag 而想出的烂招
const previousWordsForAddTag = '0000    ';

export default class GoodsItemCell extends React.PureComponent {

    static propTypes = {
        onGoodsClick: PropTypes.func,
        onDirectBuyCallback: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.itemWidth = this._calcItemWidth();
    }

    render(): React.ReactNode {
        const {onGoodsClick, onDirectBuyCallback, extraData} = this.props;

        const bean = extraData;
        const isSelfSupport = true;

        return (
            <TouchFeedback extraData={extraData} opacityRadio={0.65} clickCallback={onGoodsClick}>
                <View style={{
                    width: this.itemWidth,
                    paddingBottom: 10,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    marginBottom: 8,
                    overflow: 'hidden'
                }}>

                    <ImageView
                        style={{marginBottom: 5}}
                        size={[this.itemWidth]}
                        imgSrc={require('../../assets/images/delete/mall_item.jpg')}
                    />

                    <TextView
                        margin={[8, 0]}
                        style={{
                            lineHeight: 20,
                        }}
                        textSize={14}
                        textWeight={'bold'}
                        textColor={'#333'}
                        numberOfLines={2}
                        text={isSelfSupport ? (previousWordsForAddTag + '云南白药牙膏好口腔去黄去口臭美白口气清新云南白药牙膏好口腔去黄去口臭美白口气清新') :
                            '云南白药牙膏好口腔去黄去口臭美白口气清新云南白药牙膏好口腔去黄去口臭美白口气清新'}
                    />

                    {isSelfSupport ?
                        (
                            <TextView
                                textSize={12}
                                textColor={'red'}
                                style={{
                                    paddingHorizontal: 5,
                                    position: "absolute",
                                    top: this.itemWidth + 5,
                                    backgroundColor: 'white',
                                    left: 8,
                                    borderWidth: 1,
                                    borderColor: 'red',
                                    borderRadius: 3
                                }}
                                text={'自营'}
                            />
                        ) :
                        null
                    }

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 8,
                            marginLeft: 8,
                        }}>

                        <Text style={{fontSize: 10, fontWeight: 'bold', color: '#FF3D3D', flex: 1}}>
                            $
                            <Text style={{fontSize: 16}}>
                                45
                            </Text>
                        </Text>

                        <TouchFeedback
                            extraData={extraData}
                            opacityRadio={0.65}
                            touchStyle={{paddingVertical: 2, paddingHorizontal: 8}}
                            clickCallback={onDirectBuyCallback}
                        >
                            <ImageView
                                imgSrc={require('../../assets/images/mall/direct_buy.png')}
                            />
                        </TouchFeedback>

                    </View>

                </View>
            </TouchFeedback>
        );
    }

    _calcItemWidth = () => {
        return (screenW - 10 * 3) / 2;
    };
}