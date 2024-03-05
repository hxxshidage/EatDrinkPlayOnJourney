/**
 * @Description: 下拉刷新和上拉加载页面统一处理
 * @author HQ
 * @date 2019/7/8 15:59
 */
import FillWrapper from '../../../component/widget/common/FillWrapper';
import TokenPage from "./TokenPage";
import MultiWrapper from "../../widget/common/wrapper/MultiWrapper";
import LoadState from "../../widget/list/LoadState";

export default class RefreshPage extends TokenPage {

    unifiedProcessError = err => {
        if (!super.unifiedProcessError(err)) {

            if (!this.multiWrapper.showError()) {
                if (this.list.isPullDown) {
                    this.list.resetWhenDone();
                    //more

                } else {
                    this.list.resetWhenDone(LoadState.Failed);

                }
            }

        }

    };
}