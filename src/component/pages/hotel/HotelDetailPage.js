import React from 'react';

import {
    View
} from 'react-native';
import {screenW} from "../../../tools/tools";
import DetailHead from '../../widget/common/DetailHead';
import TextView from "../../widget/common/TextView";
import HorDivider from "../../widget/common/HorDivider";
import DetailLocation from "../../widget/common/DetailLocation";
import LimitedGridList from "../../widget/common/LimitedGridList";
import TextWithIcon from '../../widget/common/TextWithIcon';
import HotelRoomItemCell from '../../cell/HotelRoomItemCell';
import RefreshList from '../../widget/list/RefreshList';
import ImageView from "../../widget/common/ImageView";

import DetailMoreDialog from '../../dialog/DetailMoreDialog';


const HotelServerIcons = [
    require('../../../assets/images/hotel/hotel_wifi.png'),
    require('../../../assets/images/hotel/hotel_snow.png'),
    require('../../../assets/images/hotel/hotel_hot_water.png'),
    require('../../../assets/images/hotel/hotel_hair_dryer.png'),

];
const HotelServerLabels = ['wifi', '空调', '全天热水', '吹风机'];

export default class HotelDetailPage extends React.Component {

    render(): React.ReactNode {
        return (
            <View style={{flex: 1}}>
                <RefreshList
                    ItemSeparatorComponent={() => {
                        return <HorDivider
                            margin={[10, 0]}
                            height={1}/>
                    }}
                    ListHeaderComponent={this._buildHeader}
                    renderItem={this._rootItemRender}
                    data={[{}, {}, {}, {}, {}, {}, {}, {}]}
                    enablePullRefresh={false}
                    enableLoadMore={false}
                />

                <DetailMoreDialog
                    onCollect={() => {
                        console.warn("collect");
                    }}
                    onComplain={() => {
                        console.warn("complain");
                    }}
                    animationOut={"slideOutDown"}
                    ref={'moreDialog'}
                />

            </View>

        );

    }

    _rootItemRender = () => {
        return <HotelRoomItemCell/>
    };

    _buildHeader = () => {
        return (
            <View>
                <ImageView
                    size={[screenW, screenW * 0.6]}
                    imgSrc={require('../../../assets/images/delete/hotel_hotel.jpg')}
                />

                <DetailHead
                    onBack={this._goBack}
                    onMore={() => {
                        this.refs.moreDialog.dialog.show();
                    }}
                />

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 10,
                        paddingRight: 10,
                        padding: 10,
                    }}>
                    <TextView
                        text={'小天鹅戴斯'}
                        textWeight={"bold"}
                        textSize={16}
                        textColor={"#000"}
                    />

                    <TextView
                        text={"4.99分"}
                        textSize={12}
                        textColor={'#FF3D3D'}
                        style={{
                            backgroundColor: "#FFF82D",
                            padding: 1,
                            borderRadius: 2,
                            marginLeft: 5,
                        }}
                    />
                </View>
                <HorDivider
                    margin={[10, 0]}
                />

                <DetailLocation
                    textAddress={'岳麓区工业园A区101号'}
                    textDistance={'18km'}
                />
                <HorDivider
                    margin={[10, 0]}
                />

                <TextView
                    style={{padding: 10}}
                    numberOfLines={null}
                    text={'色香味俱全香味让你吃到浴霸不能，真的是很好吃的饭菜，不好吃你会后悔得。'}
                    textColor={'#000'}
                />
                <LimitedGridList
                    padding={[16]}
                    verticalSpace={8}
                    horizontalSpace={10}
                    columnCount={4}
                    data={HotelServerIcons.map((item, idx) => {
                        return {icon: item, label: HotelServerLabels[idx]};
                    })}
                    renderGridItem={this._gridItemRender}
                />
            </View>
        );
    };

    _gridItemRender = item => {
        return (
            <TextWithIcon
                iconPadding={3}
                direct={'t'}
                imgSrc={item.icon}
                textSize={12}
                textColor={'#000'}
                text={item.label}
            />);

    };

    _goBack = () => {
        const {navigation} = this.props;
        // console.warn(navigation);
        // navigation && navigation.navigate('FoodList');
        navigation && navigation.goBack();

    };
}