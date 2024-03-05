/**
 * @Description: 指定类别中的商品列表  水果
 * @author HQ
 * @date 2019/6/28 13:33
 */
import React from 'react';
import StatusWrapper from '../../widget/common/wrapper/StatusWrapper';
import HeaderBar from "../../widget/common/HeaderBar";
import {NavLeader, screenW} from "../../../tools/tools";
import SearchBar from "../../widget/SearchBar";

import {View} from 'react-native';
import TextView from "../../widget/common/TextView";
import GoodsItemCell from "../../cell/GoodsItemCell";
import RefreshList from "../../widget/list/RefreshList";

export default class GoodsListInCategoryPage extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <StatusWrapper lightStatus={false}>
                <HeaderBar
                    onGoBack={() => {
                        NavLeader.goBack(this);
                    }}
                    title={'精选水果'}/>

                <SearchBar
                    touchStyle={{paddingVertical: 10, backgroundColor: "white"}}
                    text={'搜索水果'}
                />

                <RefreshList
                    contentContainerStyle={{
                        paddingTop: 10,
                        paddingHorizontal: 10,
                        backgroundColor: '#EEE'
                    }}
                    enableLoadMore={false}
                    enablePullRefresh={false}
                    numColumns={2}
                    columnWrapperStyle={{
                        justifyContent: "space-between"
                    }}
                    data={[{isSelfSupport: true}, {}, {}, {}, {}, {}, {isSelfSupport: true}, {}, {}, {}, {}, {}, {}, {}, {isSelfSupport: true}]}
                    renderItem={this._buildRenderItem}/>


            </StatusWrapper>
        );
    }

    _buildRenderItem = item => {
        return (
            <GoodsItemCell
                onGoodsClick={() => {
                    NavLeader.nav(this,'GoodsDetail')
                }}
                extraData={item.item}
                onDirectBuyCallback={() => {
                    console.warn("给老子买");
                }}
            />
        );

    };
}