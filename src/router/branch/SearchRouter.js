/**
 * @Description: 搜索相关路由
 * @author HQ
 * @date 2019/7/4 17:00
 */

import {createSwitchNavigator, createStackNavigator} from 'react-navigation';
import SearchEnterPage from "../../component/pages/search/SearchEnterPage";
import GlobalSearchResultsPage from "../../component/pages/search/GlobalSearchResultsPage";
import SpecifyCategoryResultsPage from "../../component/pages/search/SpecifyCategoryResultsPage";


const SearchResultsSwitch = createSwitchNavigator(
    {
        GlobalSearchResult: GlobalSearchResultsPage,
        CategorySearchResults: SpecifyCategoryResultsPage
    },
    {
        initialRouteName: 'GlobalSearchResult',
        defaultNavigationOptions: {
            header: null
        }
    }
);

export default createStackNavigator({
    SearchEnter: SearchEnterPage,
    SearchResultsInner: SearchResultsSwitch
}, {
    //去掉转场动画
    transitionConfig: () => ({
        transitionSpec: {
            duration: 0,
        },
    }),
    initialRouteName: "SearchEnter",
    defaultNavigationOptions: {
        header: null
    }
});
