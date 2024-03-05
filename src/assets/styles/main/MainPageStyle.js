import {StyleSheet} from 'react-native';
import {Sizer} from '../../../tools/tools';

import {AppColors} from '../../colors/Color';

export const RootStyles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
    }
});

export const HeadStyles = StyleSheet.create({
    search: {
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingTop: Sizer.statusBarHeight() + 3,
        // backgroundColor: '#2190FF',
        backgroundColor: 'rgba(33,144,255,.1)',
        // marginTop: Sizer.statusBarHeight()

    },
    countyText: {
        fontSize: 16,
        color: 'white',
        marginRight: 5
    },
    searchInput: {
        fontSize: 12,
        backgroundColor: 'white',
        marginLeft: 12,
        marginRight: 12
    },
    divider: {
        height: 8,
        backgroundColor: '#eee'
    },
});

