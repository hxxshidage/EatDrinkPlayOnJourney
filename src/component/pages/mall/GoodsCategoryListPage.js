/**
 * @Description: 商城商品所有分类列表
 * @author HQ
 * @date 2019/6/28 11:09
 */
import React from 'react';
import StatusWrapper from '../../widget/common/wrapper/StatusWrapper';
import HeaderBar from "../../widget/common/HeaderBar";
import RefreshList from "../../widget/list/RefreshList";
import GoodsCategoryItemCell from "../../cell/GoodsCategoryItemCell";
import {NavLeader} from "../../../tools/tools";

export default class GoodsCategoryListPage extends React.PureComponent {
    render(): React.ReactNode {
        //#F3F3F3
        return (
            <StatusWrapper lightStatus={false}>

                <HeaderBar
                    title={'商品分类'}
                    onGoBack={() => {
                        NavLeader.goBack(this);
                    }}
                />

                <RefreshList
                    contentContainerStyle={{
                        //会有bug 底部Footer会少10dp  加上paddingBottom可解决  但没有paddingBottom的效果
                        marginTop: 10,
                        paddingBottom: 10,
                        overflow: "hidden",
                        marginHorizontal: 8,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        backgroundColor: "white"
                    }}
                    style={{backgroundColor: '#f3f3f3',}}
                    columnWrapperStyle={{
                        paddingLeft: 16,
                        paddingRight: 16,
                    }}
                    numColumns={3}
                    enablePullRefresh={false}
                    enableLoadMore={false}
                    data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
                    renderItem={this._buildRenderItem}/>

            </StatusWrapper>
        );
    }

    _buildRenderItem = () => {
        return (
            <GoodsCategoryItemCell
                clickCallback={this._goAppointCategory}

            />
        );
    };

    _goAppointCategory = () => {
        NavLeader.nav(this, 'GoodsList')
    };

}