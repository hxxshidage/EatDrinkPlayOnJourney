/**
 * @Description: 地址管理界面
 * @author HQ
 * @date 2019/6/21 10:47
 */

import React from 'react';

import {ImageBackground, StatusBar, SwipeableFlatList, View} from 'react-native';
import HeaderBar from "../../widget/common/HeaderBar";
import {NavLeader, screenW} from "../../../tools/tools";
import HorDivider from "../../widget/common/HorDivider";
import AddressItemCell from "../../cell/AddressItemCell";
import TextView from "../../widget/common/TextView";
import TouchFeedback from "../../widget/common/TouchFeedback";
import AddressSwipeItemCell from "../../cell/AddressSwipeItemCell";

const createData = () => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push({isDefaultAddress: i === 0, name: '风清扬' + i})
    }
    return arr;
};


export default class AddressManagerPage extends React.PureComponent {

    state = {addressArr: createData()};


    render(): React.ReactNode {
        return (

            <View
                style={{flex: 1}}>
                <StatusBar
                    backgroundColor="transparent"
                    translucent={true}
                    hidden={false}
                    animated={false}
                    barStyle={'dark-content'}
                />

                <HeaderBar
                    title={'收货地址'}
                    onGoBack={() => {
                        NavLeader.goBack(this);
                    }}
                />

                <HorDivider/>

                <SwipeableFlatList
                    ref={ref => this.addressList = ref}
                    ItemSeparatorComponent={() => <HorDivider/>}
                    bounceFirstRowOnMount={false}
                    maxSwipeDistance={160}
                    renderQuickActions={this._buildSwipeItem}
                    renderItem={this._buildRenderItem}
                    data={this.state.addressArr}
                    keyExtractor={(item, idx) => idx.toString()}
                />


                {this._buildAddAddressBtn()}
            </View>
        );
    }

    _buildRenderItem = item => {
        return (
            <AddressItemCell
                name={item.item.name}/*just for test*/
                onAddressEdit={this._goAddressAddOrEdit}
                isDefaultAddress={item.item.isDefaultAddress}
            />
        );
    };

    _buildSwipeItem = item => {
        return (
            <AddressSwipeItemCell
                index={item.index}
                isDefaultAddress={item.item.isDefaultAddress}
                onDelete={this._onAddressDelete}
                onSettingDefault={this._onSettingDefault}
            />

        );
    };


    _buildAddAddressBtn = () => {
        return (
            <View
                style={{
                    backgroundColor: "white",
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    bottom: 0,
                    left: 0
                }}>

                <View
                    style={{
                        alignSelf: "stretch",
                        height: 1,
                        backgroundColor: '#eee'
                    }}
                />

                <TouchFeedback
                    opacityRadio={0.85}
                    clickCallback={this._goAddressAddOrEdit}
                >
                    <ImageBackground
                        style={{
                            width: screenW - 64,
                            height: (screenW - 64) * 0.193,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        source={require('../../../assets/images/personal/add_address_btn_bg.png')}
                    >

                        <TextView
                            text={'+  添加收货地址'}
                        />

                    </ImageBackground>

                </TouchFeedback>
            </View>
        );
    };

    _goAddressAddOrEdit = () => {
        NavLeader.nav(this, 'AddOrEditAddress');
    };

    _onAddressDelete = idx => {
        // console.warn('delete:' + idx);
        this.addressList._onClose();
        const originArr = this.state.addressArr;
        let arr = originArr.slice(0, originArr.length);
        arr.splice(idx, 1);
        this.setState({addressArr: arr})
    };

    _onSettingDefault = idx => {
        this.addressList._onClose();

        //只有一个地址
        if (idx < 1) return;

        const originArr = this.state.addressArr;
        const first = originArr[0];
        originArr[0] = originArr[idx];
        originArr[idx] = first;

        originArr[0].isDefaultAddress = true;
        originArr[idx].isDefaultAddress = false;

        this.setState(Object.assign({}, originArr));
    };

}

// _renderItem = () => {
//     return (
//         <View style={styles.row}>
//             <View style={styles.rowData}>
//                 <Text style={styles.rowDataText}>11111</Text>
//             </View>
//         </View>
//     );
// };
// _renderQuickActions = () => {
//     return (
//         <View style={styles.actionsContainer}>
//             <TouchableHighlight
//                 style={styles.actionButton}
//                 onPress={() => {
//                 }}>
//                 <Text style={styles.actionButtonText}>Edit</Text>
//             </TouchableHighlight>
//             <TouchableHighlight
//                 style={[styles.actionButton, styles.actionButtonDestructive]}
//                 onPress={() => {
//                 }}>
//                 <Text style={styles.actionButtonText}>Remove</Text>
//             </TouchableHighlight>
//         </View>
//     );
// };
// const styles = StyleSheet.create({
//     row: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 10,
//         backgroundColor: '#F6F6F6',
//     },
//     rowIcon: {
//         width: 64,
//         height: 64,
//         marginRight: 20,
//     },
//     rowData: {
//         flex: 1,
//     },
//     rowDataText: {
//         fontSize: 24,
//     },
//     actionsContainer: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//     },
//     actionButton: {
//         padding: 10,
//         width: 80,
//         backgroundColor: '#999999',
//     },
//     actionButtonDestructive: {
//         backgroundColor: '#FF0000',
//     },
//     actionButtonText: {
//         textAlign: 'center',
//     },
// });