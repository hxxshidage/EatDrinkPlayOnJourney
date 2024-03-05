import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';
import ImageView from "../widget/common/ImageView";
import {screenW} from "../../tools/tools";
import ListFeedbackItem from "../widget/common/ListFeedbackItem";

export default class RoutePlanListCell extends React.Component {
    render(): React.ReactNode {
        const bean = this.props.item;
        return (
            <ListFeedbackItem
                {...this.props}
            >
                <ImageView
                    style={{marginBottom: 8}}
                    size={[screenW, screenW * 0.54]}
                    imgSrc={bean.img}
                />
            </ListFeedbackItem>);
    }
}