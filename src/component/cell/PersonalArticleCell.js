import React from 'react';

import CardView from "react-native-cardview";

import ListFeedbackItem from '../widget/common/ListFeedbackItem';
import TextWithIcon from '../widget/common/TextWithIcon';
import {View} from 'react-native';
import HorDivider from "../widget/common/HorDivider";
import {ArticleCellStyles as st} from '../../assets/styles/personal/PersonalPageStyle';
import PropTypes from 'prop-types';

const ArticleIcons = [
    require('../../assets/images/personal/coupon.png'),
    require('../../assets/images/personal/my_collect.png'),
    require('../../assets/images/personal/my_conplain.png'),
    require('../../assets/images/personal/opinion_feedback.png'),
];
const ArticleLabels = ['优惠券', '我的收藏', '我的投诉', '意见反馈'];

export default class PersonalArticleCell extends React.PureComponent {

    static propTypes = {
        itemClick: PropTypes.func
    };

    render(): React.ReactNode {
        return (
            <CardView
                style={st.card}
                cardElevation={5}
                cardMaxElevation={8}
                cornerRadius={8}
                cornerOverlap={true}
            >

                {ArticleIcons.map((item, idx) => {
                    return (
                        <ListFeedbackItem
                            item={ArticleLabels[idx]}
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
                                    imgSrc={ArticleIcons[idx]}
                                    text={ArticleLabels[idx]}
                                />

                                <HorDivider
                                    color={idx < ArticleIcons.length - 1 ? '#eee' : 'transparent'}
                                    margin={[5, 0, 0]}
                                    height={0.8}/>
                            </View>
                        </ListFeedbackItem>
                    );
                })}

            </CardView>
        );
    }
}