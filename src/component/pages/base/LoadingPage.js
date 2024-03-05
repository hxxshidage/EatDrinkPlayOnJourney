/**
 * @Description: 有Loading业务的Page基类
 * @author HQ
 * @date 2019/7/8 14:39
 */
import React from 'react';
import TokenPage from "./TokenPage";

export default class LoadingPage extends TokenPage {

    dismissLoading = () => {
        if (!this.loadingWrapper) {
            throw 'no property loadingWrapper: ' + this.loadingWrapper;
        }

        this.loadingWrapper.dismissLoading();

    };
}