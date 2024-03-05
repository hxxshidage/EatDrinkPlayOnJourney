/**
 * @Description: login模块的ActionCreator
 * @author HQ
 * @date 2019/7/9 14:46
 */

import * as types from '../action_types';

const loginStart = () => ({
    type: types.SIGNING
});

const loginSuccess = user => ({
    type: types.LOGIN_SUCCESS,
    user: user
});

const loginFailed = failedReason => ({
    type: types.LOGIN_FAILED,
    failedReason: failedReason
});


export const doLogin = accountInfo => {
    // console.warn('phone:' + info.phone + '  psd:' + info.psd);
    /*
    通过getState函数可以拿到 属于自身reducer中的数据  而不是全部store中的数据
    应该是这个绝伦
    * (dispatch,getState) => {
        console.warn(getState());
        dispatch(loginStart({}));

        fetch('https://www.baidu.com/')
            .then(res => {

                setTimeout(() => {
                    dispatch(loginSuccess({username: 'hq', nickName: '今天不吃早餐'}))
                }, 2000);
            })
            .catch(err => {
                dispatch(loginFailed('用户名或密码错误,请重试'));
            })

    };
    * */
    return (dispatch) => {
        dispatch(loginStart({}));

        fetch('https://www.baidu.com/')
            .then(res => {

                setTimeout(() => {
                    dispatch(loginSuccess({nickName: '今天不吃早餐'}))
                }, 3000);
            })
            .catch(err => {
                dispatch(loginFailed('用户名或密码错误,请重试'));
            })

    };
};


const updateStart = () => ({
        type: types.UPDATING
    }
);

const updateSuccess = user => ({
    type: types.UPDATE_SUCCESS,
    user: user
});

const updateFailed = () => ({
    type: types.UPDATE_FAILED,
});

export  const updateUserInfo = userInfo => {
    return dispatch => {
        dispatch(updateStart());

        try {
            setTimeout(() => {
                dispatch(updateSuccess({nickName: userInfo.nickName}))
            }, 3000)
        } catch (e) {
            dispatch(updateFailed(e.toString()));
        }
    }
};

