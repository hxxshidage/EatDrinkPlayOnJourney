/**
 * @Description: 修改姓名界面
 * @author HQ
 * @date 2019/7/2 10:38
 */
import React from 'react';
import StatusWrapper from '../../widget/common/wrapper/StatusWrapper';
import UpdateInfoHeader from "../../widget/UpdateInfoHeader";
import HeaderBar from "../../widget/common/HeaderBar";
import {NavLeader} from "../../../tools/tools";
import ClearEditText from "../../widget/common/ClearEditText";

export default class UpdateNickNamePage extends React.PureComponent {

    _getNickName = () => this.refs.clearEt.state.inputContent;

    render(): React.ReactNode {
        const {nickName, updateNickName} = this.props;

        return (
            <StatusWrapper lightStatus={false} style={{backgroundColor: '#eeeeed'}}>
                <UpdateInfoHeader
                    onCancel={() => {
                        NavLeader.goBack(this);
                    }}
                    onFinish={() => {
                        updateNickName && updateNickName(this._getNickName())
                    }}
                    title={'设置昵称'}
                />

                <ClearEditText
                    ref={'clearEt'}
                    rootStyle={{paddingVertical: 5, paddingLeft: 12, paddingRight: 7, backgroundColor: 'white'}}
                    textColor={'#000'}
                    text={nickName}
                    hint={"请设置昵称"}
                />

            </StatusWrapper>
        );
    }
}