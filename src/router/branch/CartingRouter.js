import {createStackNavigator, createSwitchNavigator} from "react-navigation";
import CartingPage from "../../component/pages/mall/CartingPage";
import ConfirmOrderPage from "../../component/pages/mall/ConfirmOrderPage";
import AddressManagerPage from "../../component/pages/personal/AddressManagerPage";
import AddOrEditAddressPage from "../../component/pages/personal/AddOrEditAddressPage";
import {GoodsDetailStack} from './GoodsRouter';

export const AddressStack = createStackNavigator({
    AddressManager: AddressManagerPage,
    AddOrEditAddress: AddOrEditAddressPage,
}, {
    initialRouteName: "AddressManager",
    defaultNavigationOptions: {
        header: null
    }
});
const CartingConfirmStack = createStackNavigator(
    {
        ConfirmOrder: ConfirmOrderPage,
        AddressInner: AddressStack
    }
    , {
        initialRouteName: "ConfirmOrder",
        defaultNavigationOptions: {
            header: null
        }
    }
);

const CartingSwitch = createSwitchNavigator({
        GoodsDetailInCarting: GoodsDetailStack,
        CartingConfirm: CartingConfirmStack,
    }
    , {
        initialRouteName: "GoodsDetailInCarting",
        defaultNavigationOptions: {
            header: null
        }
    }
);

const CartingStack = createStackNavigator(
    {
        Carting: CartingPage,
        CartingGoods: CartingSwitch
    },
    {
        initialRouteName: "Carting",
        defaultNavigationOptions: {
            header: null
        }
    }
);


//这代表了最深一级 和最外层一级平级的处理方式
export default createSwitchNavigator(
    {
        AddressInCaring: AddressStack,
        //跳转的时候 直接用CartingInner作为RouteName
        CartingInner: CartingStack
    },
    {
        initialRouteName: "AddressInCaring",
        defaultNavigationOptions: {
            header: null
        }
    }
);