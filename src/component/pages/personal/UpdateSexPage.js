/**
 * @Description: 修改性别界面
 * @author HQ
 * @date 2019/7/2 13:12
 */
import React from 'react';
import StatusWrapper from '../../widget/common/wrapper/StatusWrapper';
import UpdateInfoHeader from "../../widget/UpdateInfoHeader";
import {NavLeader} from "../../../tools/tools";
import SexChecker from "../../widget/SexChecker";
import HorDivider from "../../widget/common/HorDivider";

export default class UpdateSexPage extends React.PureComponent {
    state = {isMan: true};

    render(): React.ReactNode {
        return (
            <StatusWrapper lightStatus={false} style={{backgroundColor: "#eeeeed"}}>

                <UpdateInfoHeader
                    onCancel={() => {
                        NavLeader.goBack(this);
                    }}
                    title={'设置性别'}
                />

                <SexChecker
                    onCheckedChange={() => {
                        this.setState({isMan: true})
                    }}
                    textWeight={'bold'}
                    text={'男'}
                    textColor={'#000'}
                    isChecked={this.state.isMan}
                />

                <HorDivider
                    style={{marginLeft: 12}}
                />

                <SexChecker
                    onCheckedChange={() => {
                        this.setState({isMan: false})
                    }}
                    textWeight={'bold'}
                    text={'女'}
                    textColor={'#000'}
                    isChecked={!this.state.isMan}
                />
            </StatusWrapper>
        );
    }
}