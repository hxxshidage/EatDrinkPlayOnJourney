/**
 * @Description: 搜索入口页
 * @author HQ
 * @date 2019/7/3 17:40
 */
import React from 'react';
import StatusWrapper from "../../widget/common/wrapper/StatusWrapper";
import SearchWordsDisplay from "../../widget/SearchWordsDisplay";
import SearchEnterTop from "../../widget/SearchEnterTop";
import {NavLeader} from "../../../tools/tools";
import {Keyboard} from 'react-native';
import PropTypes from 'prop-types';

export default class SearchEnterPage extends React.PureComponent {

    static propTypes = {
        categoryType: PropTypes.string
    };


    static defaultProps = {
        categoryType: 'global'
    };


    state = {
        hotSearchResults: ['一', '一二', '一二三', '哈撒剋', '三路十八万', '100要不要', '一', '一二', '一二三', '哈撒剋', '三路十八万', '100要不要'],
        historySearchResults: ['一', '一二', '一二三', '哈撒剋', '三路十八万', '100要不要', '一', '一二', '一二三', '哈撒剋', '三路十八万', '100要不要'],
        searchWords: '',
        defaultValue: '小怪兽',
    };

    render(): React.ReactNode {
        return (
            <StatusWrapper style={{backgroundColor: 'white'}}>
                <SearchEnterTop
                    onValueChanged={text => {
                        this.setState({searchWords: text});
                    }}

                    onSearch={() => {
                        this._goResults(this.state.searchWords);
                    }}
                    onCancel={() => {
                        NavLeader.goBack(this);
                    }}
                    ref={'topSearch'}
                    autoFocus={true}
                    value={this.state.defaultValue}
                />

                <SearchWordsDisplay
                    onClearHistory={this._handleClearHistory}
                    onWordsClick={this._handleWordsClick}
                    hotSearchResults={this.state.hotSearchResults}
                    historySearchResults={this.state.historySearchResults}
                />

            </StatusWrapper>
        );
    }


    _handleClearHistory = () => {
        this.setState({historySearchResults: []})
        //more: clear local
    };

    _handleWordsClick = word => {
        this.refs.topSearch.setEditValue(word);
        //软键盘消失
        Keyboard.dismiss();

        this._goResults(word);

        //more : request search result
    };

    _goResults = word => {
        // this.setState({editable: false});

        const {categoryType} = this.props;
        //根据categoryType的类型  跳转到对应界面
        let routeName;
        switch (categoryType) {

            case 'all':
                routeName = 'GlobalSearchResult';
                break;
            default:
                routeName = 'CategorySearchResults';
                break
        }

        NavLeader.navReturn(this, routeName, {words: word}, returnValue => {
            this.refs.topSearch.setEditValue(returnValue);
        })
        /*const {navigation} = this.props;

        navigation && navigation.navigate('CategorySearchResults', {
            words: word,
            callback: backData => {
                this.refs.topSearch.input.edit.focus();
                // this.setState({}, this.state);
                this.refs.topSearch.setEditValue(backData);

            }
        })*/
    };
}
