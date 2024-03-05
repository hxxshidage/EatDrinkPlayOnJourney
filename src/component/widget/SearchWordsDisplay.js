/**
 * @Description: 搜索词展示组件 (热门搜索 历史搜索)
 * @author HQ
 * @date 2019/7/4 10:00
 */
import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import TouchFeedback from "./common/TouchFeedback";
import ImageView from "./common/ImageView";
import TextView from "./common/TextView";

export default class SearchWordsDisplay extends React.PureComponent {

    static propTypes = {
        hotSearchResults: PropTypes.array,
        historySearchResults: PropTypes.array,
        onClearHistory: PropTypes.func,
        onWordsClick: PropTypes.func
    };

    render(): React.ReactNode {
        const {hotSearchResults, historySearchResults} = this.props;
        return (
            <View>

                {hotSearchResults.length > 0 ? (
                    <View>
                        <TextView
                            margin={[8, 0, 0, 12]}
                            text={'热门搜索'}
                            textColor={'#B2B2B2'}
                        />

                        {this._buildHotSearchResults()}
                    </View>
                ) : null}

                {historySearchResults.length > 0 ?
                    (<View>
                        {this._buildHistorySearchTitle()}

                        {this._buildHistorySearchResults()}
                    </View>) :
                    null
                }

            </View>
        );
    }

    _buildHotSearchResults = () => {

        const {hotSearchResults, onWordsClick} = this.props;

        return (
            <View style={{
                flexDirection: 'row',
                alignItems: "center",
                alignContent: "flex-start",
                flexWrap: "wrap",
                paddingHorizontal: 12,
                paddingVertical: 16,
            }}>

                {
                    hotSearchResults.map((item, idx) => {
                            return (
                                <TouchFeedback
                                    extraData={item}
                                    clickCallback={onWordsClick}
                                    opacityRadio={0.7} key={idx.toString()}>
                                    <TextView
                                        style={{
                                            backgroundColor: "#f5f5f5",
                                            paddingVertical: 5,
                                            paddingHorizontal: 10,
                                            borderRadius: 3,
                                            marginRight: 10,
                                            marginBottom: 10,
                                        }}
                                        text={item}
                                        textColor={'#333'}
                                    />
                                </TouchFeedback>
                            );

                        }
                    )
                }

            </View>
        );
    };

    _buildHistorySearchTitle = () => {
        const {onClearHistory} = this.props;

        return (
            <View style={{
                flexDirection: 'row', alignItems: 'center', marginRight: 4, marginLeft: 12, marginTop: 8,
                marginBottom: 12
            }}>
                <TextView
                    style={{flex: 1}}
                    text={'搜索历史'}
                    textColor={'#B2B2B2'}
                />

                <TouchFeedback
                    clickCallback={onClearHistory}
                    opacityRadio={0.65}
                    touchStyle={{paddingHorizontal: 8, paddingVertical: 3}}>
                    <ImageView
                        imgSrc={require('../../assets/images/search/clear_search.png')}
                    />
                </TouchFeedback>
            </View>
        );
    };

    _buildHistorySearchResults = () => {

        const {historySearchResults, onWordsClick} = this.props;


        return (
            <View style={{
                flexDirection: 'row',
                alignItems: "center",
                alignContent: "flex-start",
                flexWrap: "wrap",
                paddingHorizontal: 12,
            }}>

                {
                    historySearchResults.map((item, idx) => {
                            return (
                                <TouchFeedback
                                    extraData={item}
                                    clickCallback={onWordsClick}
                                    opacityRadio={0.7} key={idx.toString()}>
                                    <TextView
                                        style={{
                                            backgroundColor: "#f5f5f5",
                                            paddingVertical: 5,
                                            paddingHorizontal: 10,
                                            borderRadius: 3,
                                            marginRight: 10,
                                            marginBottom: 10,
                                        }}
                                        text={item}
                                        textColor={'#333'}
                                    />
                                </TouchFeedback>
                            );

                        }
                    )
                }


            </View>
        );
    };
}