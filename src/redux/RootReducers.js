/**
 * @Description: 整个项目的reducers
 * @author HQ
 * @date 2019/7/9 15:23
 */

'use strict';

import {combineReducers} from 'redux';
import loginReducer from './reducers/LoginReducer';

const allReducers = {
    loginInfo: loginReducer
};

export default combineReducers(allReducers);
