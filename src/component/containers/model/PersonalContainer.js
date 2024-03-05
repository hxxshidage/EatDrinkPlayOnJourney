/**
 * @Description: 个人大模块  容器组件
 * @author HQ
 * @date 2019/7/10 9:27
 */
import {connect} from 'react-redux';
import PersonalPage from "../../pages/model/PersonalPage";

const mapStateToProps = state => {
    return {loginInfo: state.loginInfo};
};

export default connect(mapStateToProps)(PersonalPage);