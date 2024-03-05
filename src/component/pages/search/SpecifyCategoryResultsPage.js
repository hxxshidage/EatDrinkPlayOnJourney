/**
 * @Description: 指定类别  搜索结果展示
 * @author HQ
 * @date 2019/7/5 11:43
 */
import React from 'react';
import SearchNoResultsHeadCell from "../../cell/SearchNoResultsHeadCell";
import StatusWrapper from "../../widget/common/wrapper/StatusWrapper";
import RefreshList from "../../widget/list/RefreshList";
import FoodListItemCell from "../../cell/FoodListItemCell";
import SearchEnterTop from "../../widget/SearchEnterTop";
import {NavLeader} from "../../../tools/tools";

export default class SpecifyCategoryResultsPage extends React.PureComponent {

    constructor(props) {
        super(props);

        const words = this.props.navigation.getParam('words', "");

        this.state = {words};
    }


    render(): React.ReactNode {
        return (
            <StatusWrapper>

                <SearchEnterTop
                    autoFocus={false}
                    onValueChanged={text => {
                        const {navigation} = this.props;
                        //将变动的值回传
                        navigation && navigation.state.params.callback(text);
                        navigation.navigate('SearchEnter');

                    }}
                    onCancel={() => {
                        NavLeader.goBack(this);
                    }}
                    ref={'topSearch'}
                    value={this.state.words}
                />

                <RefreshList
                    enableLoadMore={false}
                    enablePullRefresh={false}
                    data={[{}, {}, {}, {}, {}, {}]}
                    ListHeaderComponent={() => {
                        return (
                            <SearchNoResultsHeadCell/>
                        );
                    }}
                    renderItem={this._buildRenderItem}/>
            </StatusWrapper>
        );
    }

    _buildRenderItem = () => {
        return (
            <FoodListItemCell/>
        );
    };
}

