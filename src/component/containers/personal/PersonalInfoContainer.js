/**
 * @Description: 个人信息容器组件
 * @author HQ
 * @date 2019/7/10 11:24
 */

import {connect} from 'react-redux';
import PersonalInfoPage from "../../pages/personal/PersonalInfoPage";

const mapStateToProps = state => {
    return {user: state.loginInfo.user};
};

export default connect(mapStateToProps)(PersonalInfoPage);