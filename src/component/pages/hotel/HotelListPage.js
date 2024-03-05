import React from 'react';
import {Image, StatusBar, View} from 'react-native';

import TextView from "../../widget/common/TextView";
import RefreshList from "../../widget/list/RefreshList";
import {Sizer} from "../../../tools/tools";
import SearchButton from "../../widget/SearchButton";
import AvoidMultiTouch from "../../widget/common/AvoidMultiTouch";
import HotelListItemCell from '../../cell/HotelListItemCell';


export default class HotelListPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <View style={{flex: 1}}>

                <RefreshList
                    stickyHeaderIndices={[0]}
                    enableLoadMore={false}
                    enablePullRefresh={false}
                    data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
                    ListHeaderComponent={this._buildSearchHead}
                    renderItem={item => {
                        return (
                            <HotelListItemCell
                                item={item.item}
                                itemIndex={item.index}
                                itemClick={this._goHotelDetail}
                            />);
                    }}/>
            </View>
        );
    }

    _goHotelDetail = (index, item) => {
        const {navigation} = this.props;
        navigation && navigation.navigate('HotelDetail');
    };


    _buildSearchHead = () => {
        return (
            <View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: "white",
                    paddingTop: Sizer.statusBarHeight(),
                    paddingRight: 12,
                    paddingBottom: 3
                }}>

                    <AvoidMultiTouch
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 12,
                        }}
                        clickListener={this._goMain}
                    >
                        <Image source={require('../../../assets/images/common/go_back.png')}/>
                    </AvoidMultiTouch>

                    <SearchButton
                        backgroundColor={'#eee'}
                        searchKeywords={'搜索酒店'}
                        clickCallback={() => {
                            console.log('click');
                        }}
                    />

                    <AvoidMultiTouch
                        activeOpacity={0.7}
                        clickListener={() => {
                            console.warn("sort now");
                            // this.refs.filterWin.show();
                            // this.setState({filterVisible: true});
                        }}>
                        <TextView
                            text={'智能排序'}
                            textSize={14}
                            textColor={'#888'}
                        />
                    </AvoidMultiTouch>

                    <Image
                        style={{marginLeft: 5}}
                        source={require('../../../assets/images/common/pull_arrow_black.png')}/>
                </View>
                <View style={{
                    height: 4,
                    backgroundColor: '#EEEEEE',
                    marginBottom: 10
                }}/>
            </View>
        );
    };


    _goMain = () => {
        const {navigation} = this.props;
        navigation && navigation.goBack(null);
    };
}