/**
 * @Description: 定位工具列
 * @author HQ
 * @date 2019/6/19 14:31
 */

import {Geolocation} from 'react-native-amap-geolocation';

export default class Locator {
    static getLocationOnce(suc, err) {
        Geolocation.getCurrentPosition(suc, err);
    }
}