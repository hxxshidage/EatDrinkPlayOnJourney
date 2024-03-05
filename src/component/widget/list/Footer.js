import React from 'react';
import PropTypes from 'prop-types';
import LoadState from './LoadState';
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';


const FooterHeight = 40;
const FooterBackGround = '#f5f5f5';

class Footer extends React.PureComponent {

    render(): React.ReactNode {
        let footer = null;
        switch (this.props.loadState) {
            case LoadState.Idle:
                footer = <View style={{flex: 1, height: 40, backgroundColor: 'red'}}/>;
                break;
            case LoadState.Loading:
                footer = (
                    <View style={footerStyles.loadingView}>
                        <ActivityIndicator size={'small'} color={'skyblue'}/>
                        <Text style={footerStyles.loading_failed_Text}>正在加载中...</Text>
                    </View>
                );
                break;
            case LoadState.LoadOver:
                footer = (
                    <Text style={footerStyles.overText}>加载完毕</Text>
                );
                break;
            case LoadState.Failed:
                footer = (
                    <TouchableOpacity
                        activeOpacity={0.95}
                        style={footerStyles.failedView}
                        onPress={() => {
                            this.props.onRetry && this.props.onRetry();
                        }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Image source={require('../../../assets/images/common/failed.png')}/>
                            <Text style={footerStyles.loading_failed_Text}>加载失败,点击重试</Text>
                        </View>
                    </TouchableOpacity>
                );
                break;
        }
        return footer;
    }

    static propTypes = {
        onRetry: PropTypes.func.isRequired,
        loadState: PropTypes.string.isRequired,
    }
}

const footerStyles = StyleSheet.create({
    loadingView: {
        height: FooterHeight,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: FooterBackGround,
        alignSelf: 'stretch'
    },
    loading_failed_Text: {
        marginLeft: 16,
        fontSize: 12,
        color: '#ccc'
    },
    overText: {
        height: FooterHeight,
        color: '#666',
        fontSize: 14,
        backgroundColor: FooterBackGround,
        lineHeight: FooterHeight,
        alignSelf: 'stretch',
        textAlign: 'center'
    },
    failedView: {
        height: FooterHeight,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: FooterBackGround
    },
});

export default Footer;
