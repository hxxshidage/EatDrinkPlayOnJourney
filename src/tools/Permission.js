/**
 * @Description: 封装android权限申请
 * @author HQ
 * @date 2019/6/19 10:34
 */

import {
    PermissionsAndroid, ToastAndroid
} from 'react-native';

export default class Permission {

    //请求定位权限
    static async requestLocationPermission() {
        const location = PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION;
        let had = false;
        let granted;
        let res = false;

        try {
            had = await PermissionsAndroid.check(location);
            if (had) return true;

            granted = await PermissionsAndroid.request(location);
        } catch (e) {
            console.warn('获取定位权限失败: ' + e);
            res = false;
        }

        if (granted === PermissionsAndroid.RESULTS.GRANTED) res = true;

        else if (granted === PermissionsAndroid.RESULTS.DENIED) {
            res = false;
            ToastAndroid.show('获取定位权限失败,无法为您提供服务', ToastAndroid.SHORT);
            return false;
        } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
            ToastAndroid.showWithGravity(
                '您已拒绝授权定位服务,无法为您提供服务.请前往手机设置中开启',
                ToastAndroid.LONG,
                ToastAndroid.CENTER);
            res = false;
        } else res = false;

        return res;
    }
}


