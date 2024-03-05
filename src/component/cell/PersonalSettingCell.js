/**
 * @Description: 个人模块  设置 条目
 * @author HQ
 * @date 2019/7/1 13:38
 */
import React from 'react';
import {View} from 'react-native';
import {SettingCellStyles as st} from "../../assets/styles/personal/PersonalPageStyle";
import CardView from "react-native-cardview";
import TextWithIcon from "../widget/common/TextWithIcon";
import ListFeedbackItem from "../widget/common/ListFeedbackItem";
import HorDivider from "../widget/common/HorDivider";

const SettingIcons = [
    require('../../assets/images/personal/personal_address_manager.png'),
    require('../../assets/images/personal/setting.png')
];
const SettingLabels = ['地址管理', '设置'];

export default class PersonalSettingCell extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <CardView
                style={st.card}
                cardElevation={5}
                cardMaxElevation={8}
                cornerRadius={8}
                cornerOverlap={true}
            >
                {
                    SettingIcons.map((item, idx) => {
                            return (
                                <ListFeedbackItem
                                    item={SettingLabels[idx]}
                                    key={idx.toString()}
                                    itemClick={this.props.itemClick}
                                >
                                    <View style={st.touchView}>
                                        <TextWithIcon
                                            textSize={12}
                                            textColor={'#000'}
                                            align={'start'}
                                            direct={'l'}
                                            iconPadding={8}
                                            imgSrc={SettingIcons[idx]}
                                            text={SettingLabels[idx]}
                                        />

                                        <HorDivider
                                            color={idx < SettingIcons.length - 1 ? '#eee' : 'transparent'}
                                            margin={[5, 0, 0]}
                                            height={0.8}/>
                                    </View>
                                </ListFeedbackItem>
                            );
                        }
                    )
                }

            </CardView>
        );
    }
}