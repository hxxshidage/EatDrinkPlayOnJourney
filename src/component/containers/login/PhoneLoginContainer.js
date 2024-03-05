/**
 * @Description: 手机号登录 容器组件
 * @author HQ
 * @date 2019/7/9 16:18
 */

import {connect} from 'react-redux';

import PhoneLoginPage from '../../pages/login/PhoneLoginPage';
import {doLogin} from '../../../redux/actions/LoginActionCreator';

const mapStateToProps = state => {
    return {isLoading: state.loginInfo.isSigning, loginInfo: state.loginInfo};
};

// (dispatch,ownProps)
const mapDispatchToProps = dispatch => {
    // console.warn(getState());
    return {
        doLogin: (phone, psd) => {
            dispatch(doLogin({phone: phone, psd: psd}));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneLoginPage);
