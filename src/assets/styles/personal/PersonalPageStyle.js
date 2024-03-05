import {StyleSheet} from 'react-native';
import {Sizer} from '../../../tools/tools';


export const OrderCellStyles = StyleSheet.create({
    card: {
        position: 'relative',
        top: -24,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'stretch',
        marginLeft: 16,
        marginRight: 16,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 16,
        paddingRight: 16
    }
});

export const ArticleCellStyles = StyleSheet.create({
    card: {
        position: 'relative',
        top: -8,
        alignSelf: 'stretch',
        marginLeft: 16,
        marginRight: 16,
        alignItems: 'flex-start',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 12,
        paddingRight: 12,
    },
    touchView: {
        alignSelf: 'stretch',
        paddingLeft: 4,
        paddingRight: 4,
        justifyContent: 'center',
        paddingTop: 5
    }
});

export const SettingCellStyles = {
    card: {
        alignSelf: 'stretch',
        marginLeft: 16,
        marginRight: 16,
        alignItems: 'flex-start',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 12,
        paddingRight: 12,
        marginTop: 16
    },
    touchView: {
        alignSelf: 'stretch',
        paddingLeft: 4,
        paddingRight: 4,
        justifyContent: 'center',
        paddingTop: 5,
    }
};