/**
 * @Description: login相关的reducer
 * @author HQ
 * @date 2019/7/9 15:16
 */

'use strict';

import * as types from '../action_types';

const initState = {
    isUpdating: false,
    isSigning: false,
    logged: false,
    failedReason: '',
    user: {
        nickName: '',
        sex: ''
    }
};

const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case types.SIGNING:
            return {
                ...state,
                isSigning: true
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isSigning: false, logged: true, user: action.user
            };
        case types.LOGIN_FAILED:
            return {
                ...state, isSigning: false, failedReason: action.failedReason
            };
        case types.UPDATING:
            return {
                ...state,
                isUpdating: true
            };
        case types.UPDATE_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                user: action.user
            };
        case types.UPDATE_FAILED:
            return {
                ...state,
                isUpdating: false
            };
        default:
            return state;
    }
};

export default loginReducer;