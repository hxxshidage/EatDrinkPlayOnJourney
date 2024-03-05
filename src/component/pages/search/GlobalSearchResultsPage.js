/**
 * @Description: 全局搜索结果展示
 * @author HQ
 * @date 2019/7/4 16:57
 */
import React from 'react';
import StatusWrapper from "../../widget/common/wrapper/StatusWrapper";
import {NavLeader} from "../../../tools/tools";
import SearchEnterTop from "../../widget/SearchEnterTop";
import SearchResultsTabNav from "../../../router/navs/SearchResultsTabNav";

export default class GlobalSearchResultsPage extends React.PureComponent {
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
                    // onValueChanged={text => {
                    //     const {navigation} = this.props;
                    //     //将变动的值回传
                    //     navigation && navigation.state.params.callback(text);
                    //     navigation.navigate('SearchEnter');
                    //
                    // }}
                    onCancel={() => {
                        NavLeader.goBack(this);
                    }}
                    ref={'topSearch'}
                    value={this.state.words}
                />

                <SearchResultsTabNav
                    navigation={this.props.navigation}/>
            </StatusWrapper>
        );
    }
}

GlobalSearchResultsPage.router = SearchResultsTabNav.router;