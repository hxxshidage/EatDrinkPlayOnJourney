/**
 * @Description: 更改昵称的容器组件
 * @author HQ
 * @date 2019/7/10 11:32
 */


import {connect} from 'react-redux';
import {updateUserInfo} from '../../../redux/actions/LoginActionCreator';

import UpdateNickNamePage from "../../pages/personal/UpdateNickNamePage";


const mapStateToProps = state => {
    return {nickName: state.loginInfo.user.nickName};
};

const mapDispatchToProps = dispatch => {
    return {
        updateNickName: nickName => {
            dispatch(updateUserInfo({nickName: nickName}))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateNickNamePage);
