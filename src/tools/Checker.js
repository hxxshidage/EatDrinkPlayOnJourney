class Checker {

    //当接收到一个代表错误的 HTTP 状态码时，从 fetch()返回的 Promise 不会被标记为 reject，
    // 即使该 HTTP 响应的状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve
    // （但是会将 resolve 的返回值的 ok 属性设置为 false ），仅当网络故障时或请求被阻止时，才会标记为 reject。

    checkStatusCode = code => {
        if (code !== 200) {
            throw 'something error with code: ' + code;
        }
        //and so on....
    };

    // "errorCode": 0,
    // "errorMsg": ""
    checkBusinessCode = result => {
        if (result.errorCode !== 0) {
            throw 'errorCode: ' + result.errorCode + ". with message:  " + result.errorMsg;
        }
        //and so on...
    };
}

export default Checker;