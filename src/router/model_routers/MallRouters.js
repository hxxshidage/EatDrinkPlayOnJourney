/**
 * @Description: 整个商城的路由
 * @author HQ
 * @date 2019/7/1 18:24
 */

import {createSwitchNavigator} from "react-navigation";
import GoodsNav from '../branch/GoodsRouter';
import CartingNav from '../branch/CartingRouter';

export default createSwitchNavigator(
    {
        GoodsBranch: GoodsNav,
        CartingBranch: CartingNav
    },
    {
        defaultNavigationOptions: {
            header: null
        }
    }
);