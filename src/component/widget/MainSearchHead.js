import React from 'react';

import {
    View,
    StyleSheet, Text, Image
} from 'react-native';
import {HeadStyles as hs} from "../../assets/styles/main/MainPageStyle";
import TouchFeedback from "./common/TouchFeedback";
import SearchButton from "./SearchButton";
import PropTypes from 'prop-types';

export default class MainSearchHead extends React.PureComponent {
    static propTypes = {
        searchKeywords: PropTypes.string,
        onLocationCallback: PropTypes.func,
        onSearchCallback: PropTypes.func,
        onScanCallback: PropTypes.func,
        locationAddress: PropTypes.string,
    };

    render(): React.ReactNode {

        const {
            searchKeywords,
            onLocationCallback,
            onSearchCallback,
            onScanCallback,
            locationAddress
        } = this.props;
        return (<View
                ref={ref => this.rootBg = ref}
                style={hs.search}>
                <TouchFeedback
                    opacityRadio={0.7}
                    clickCallback={onLocationCallback}>
                    <Text style={hs.countyText}>{locationAddress || '定位中...'}</Text>
                </TouchFeedback>

                <Image
                    source={require('../../assets/images/common/pull_arrow_white.png')}/>

                <SearchButton
                    backgroundColor={'white'}
                    clickCallback={onSearchCallback}
                    searchKeywords={searchKeywords || '搜索酒店/景点/美食'}
                />
                <TouchFeedback
                    opacityRadio={0.7}
                    clickCallback={onScanCallback}>
                    <Image source={require('../../assets/images/main/scanner.png')}/>
                </TouchFeedback>
            </View>
        );
    }
}