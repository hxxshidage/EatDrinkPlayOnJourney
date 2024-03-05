/**
 * @Description:
 * @author HQ
 * @date 2019/7/8 14:50
 */
import React from 'react';
import {NavLeader} from "../../../tools/tools";

export default class TokenPage extends React.PureComponent {

    unifiedProcessError = err => {

        if (!err) return false;

        let handleResult = false;
        switch (err.code) {
            case 'token验证失败':
                handleResult = true;
                this._reLoginWhileVerifyTokenFailed();
                break;

        }

        return handleResult;
    };

    //token验证失败后 重新登录
    _reLoginWhileVerifyTokenFailed = () => {
        NavLeader.nav(this, 'PhoneLogin');
    };
}