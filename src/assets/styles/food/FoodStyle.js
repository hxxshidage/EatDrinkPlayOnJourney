import {StyleSheet} from 'react-native'

export const FoodListCellStyle = StyleSheet.create({
    root: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
    },
    rightRoot: {
        flex: 1,
        paddingLeft: 8,
        paddingTop: 3,
        paddingBottom: 3
    },
    titleText: {
        flex: 1,
        color: 'black',
        fontWeight: 'bold',
        marginRight: 10,
    },
    ratingRoot: {
        flexDirection: 'row',
        marginTop: 3,
        alignItems: 'center'
    }

});
