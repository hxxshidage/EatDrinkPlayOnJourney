import {Linking} from 'react-native';

export default class LocalCaller {

    //跳转到原生拨打电话界面
    //supported: ios & android
    static async callPhone(phoneNum) {
        //tel:xxx
        const tel = `tel:${phoneNum}`;
        const supported = await Linking.canOpenURL(tel);
        if (supported) {
            return await Linking.openURL(tel);
        } else throw 'call phone failed: ' + phoneNum;
    }
}