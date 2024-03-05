/**
 * @Description: 项目唯一store
 * @author HQ
 * @date 2019/7/9 15:33
 */

'use strict';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducers from '../RootReducers'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initState) {
    return createStoreWithMiddleware(rootReducers, initState);
};