import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';
import TextView from "../widget/common/TextView";
import PropTypes from 'prop-types';
import TouchFeedback from "../widget/common/TouchFeedback";
import ImageView from "../widget/common/ImageView";


export default class AddressItemCell extends React.PureComponent {
    static propTypes = {
        isDefaultAddress: PropTypes.bool,
        onAddressEdit: PropTypes.func
    };

    render(): React.ReactNode {
        const {isDefaultAddress, onAddressEdit} = this.props;
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    paddingVertical: 12,
                    paddingHorizontal: 10,
                    backgroundColor: 'white',
                }}>

                <View
                    style={{flex: 1}}>
                    <View style={{flexDirection: 'row', alignItems: "center", marginBottom: 5}}>
                        <TextView
                            textWeight={'bold'}
                            textColor={'#000'}
                            text={this.props.name}
                        />

                        <TextView
                            margin={[0, 10, 0, 24]}
                            textSize={16}
                            textWeight={'bold'}
                            textColor={'#000'}
                            text={'181****0161'}
                        />

                        {isDefaultAddress ? (
                            <TextView
                                text={'默认'}
                                textSize={10}
                                textColor={'white'}
                                style={{
                                    backgroundColor: '#3E98FF',
                                    borderRadius: 999,
                                    paddingVertical: 2,
                                    paddingHorizontal: 5
                                }}
                            />
                        ) : null}
                    </View>

                    <TextView
                        style={{lineHeight: 18}}/* 通过行高调整行间距*/
                        numberOfLines={2}
                        textSize={12}
                        text={'北京市朝阳区建国路27号紫檀大厦13楼  大拇指文化传媒有限公司'}
                        textColor={'#000'}
                    />
                </View>

                <TouchFeedback
                    opacityRadio={0.65}
                    clickCallback={onAddressEdit}
                    touchStyle={{padding: 3}}
                >
                    <ImageView
                        imgSrc={require('../../assets/images/personal/address_edit.png')}
                    />
                </TouchFeedback>
            </View>);
    }
}