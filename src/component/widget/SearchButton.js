import React from 'react';
import PropTypes from 'prop-types';
import ButtonOpacity from '../../component/widget/common/ButtonOpacity';
import {HeadStyles as hs} from "../../assets/styles/main/MainPageStyle";
import {StyleSheet} from 'react-native';

export default class SearchButton extends React.Component {

    static propTypes = {
        searchKeywords: PropTypes.string,
        clickCallback: PropTypes.func
    };

    render(): React.ReactNode {

        const {searchKeywords, clickCallback} = this.props;
        return (
            <ButtonOpacity
                {...this.props}
                btnStyle={styles.input}
                clickListener={clickCallback}
                expanded={true}
                text={searchKeywords}
                cornerRadius={999}
                padding={[16, 6]}
                textColor={'#888888'}
                align={'start'}

            />);

    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 12,
        marginLeft: 12,
        marginRight: 12
    }
});