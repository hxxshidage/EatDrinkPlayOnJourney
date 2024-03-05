import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';

import Dialog from './Dialog';
import TextView from "../widget/common/TextView";
import HorDivider from "../widget/common/HorDivider";
import PropTypes from 'prop-types';
import TouchFeedback from "../widget/common/TouchFeedback";


export default class DetailMoreDialog extends React.Component {

    static propTypes = {
        onComplain: PropTypes.func,
        onCollect: PropTypes.func
    };

    render(): React.ReactNode {
        const {onComplain, onCollect} = this.props;
        return (
            <Dialog
                fillScreenOnWidth={true}
                // swipeDirection={['up', 'down']}
                ref={ref => this.dialog = ref}

                style={{justifyContent: 'flex-end'}}
            >
                <View style={{
                    backgroundColor: "#fff"
                }}>
                    <TouchFeedback
                        opacityRadio={0.5}
                        clickCallback={() => {
                            this.dialog.hide();
                            onCollect && onCollect();
                        }}
                    >
                        <TextView
                            text={'收藏'}
                            textColor={'#000'}
                            style={textStyle.text}
                        />
                    </TouchFeedback>

                    <HorDivider/>

                    <TouchFeedback
                        opacityRadio={0.5}
                        clickCallback={() => {
                            this.dialog.hide();
                            onComplain && onComplain();
                        }}>
                        <TextView
                            text={'投诉'}
                            textColor={'#000'}
                            style={textStyle.text}
                        />
                    </TouchFeedback>
                </View>
            </Dialog>);
    }
}

const textStyle = StyleSheet.create({
    text: {
        paddingTop: 8,
        paddingBottom: 8,
        textAlign: 'center',
    }
});