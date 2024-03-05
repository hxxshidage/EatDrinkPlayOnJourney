/**
 * @Description: 全局搜索展示结果的组件
 * @author HQ
 * @date 2019/7/4 15:08
 */
import React from 'react';
import {View} from 'react-native';
import SearchResultsTabNav from "../../router/navs/SearchResultsTabNav";

export default class SearchResultsCmp extends React.PureComponent {

    // static router = SearchResultsTabNav.router;

    constructor(props) {
        super(props);
    }


    componentWillUnmount(): void {
        console.warn("组件被卸载");
    }

    render(): React.ReactNode {
        return (
            <View
                style={{
                    backgroundColor: 'red',
                    position: 'relative',
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    height: '100%'
                }}>
                <SearchResultsTabNav
                    navigation={this.props}/>
            </View>
        );
    }
}

SearchResultsCmp.router = SearchResultsTabNav.router;


