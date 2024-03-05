import Checker from "./Checker";
import {debug} from "../config/Global";

export default class Netter {

    static _baseUrl = '';

    static checker = new Checker();


    static get = async (hostUrl = Netter._baseUrl, qryName, paramsOrPath) => {
        return await Netter._doGet(Netter._spliceGetParams(hostUrl, qryName, paramsOrPath));
    };


    static post() {

    }

    static form() {
    }

    static json() {
    }

    static _doGet = async (url) => {
        if (debug) {
            console.log('=======================>get request start:<=======================');
            console.log(url);
        }

        //请求
        const response = await fetch(url, {method: 'GET'});
        if (debug) {
            console.log(response);
            console.log('=======================>get request end:<=======================');
        }

        //检测返回的status code
        Netter.checker.checkStatusCode(response.status);

        //解析
        const result = await response.json();
        if (debug) {
            console.log(result);
        }
        //检测业务code
        Netter.checker.checkBusinessCode(result);

        return result;
    };

    static _spliceGetParams = (hostUrl, qryName, paramsOrPath) => {
        if (typeof paramsOrPath === 'string') {
            return `${hostUrl}${qryName}/${paramsOrPath}`;
        } else if (typeof paramsOrPath === 'object') {
            let url = `${hostUrl}${qryName}?`;
            if (paramsOrPath) {
                Object.keys(paramsOrPath).forEach(key => {
                    url += `${key}=${paramsOrPath[key]}&`;
                });

                url = url.substring(0, url.length - 1);
            }

            return url;
        }
    };
}