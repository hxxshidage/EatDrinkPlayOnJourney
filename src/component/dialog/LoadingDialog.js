/**
 * @Description: Loading状态的miniDialog
 * @author HQ
 * @date 2019/7/10 14:20
 */
import React from 'react';
import {ProgressBarAndroid} from "react-native";
import {screenW} from "../../tools/tools";
import Dialog from "./Dialog";
import TextView from "../widget/common/TextView";
import PropTypes from 'prop-types';
import CardView from "react-native-cardview";

export default class LoadingDialog extends React.PureComponent {

    static propTypes = {
        cancelable: PropTypes.bool,
        description: PropTypes.string,
        showing: PropTypes.bool,
    };

    render(): React.ReactNode {

        const {cancelable, description, showing} = this.props;

        return (
            <Dialog
                show={showing}
                animationIn="fadeIn"
                animationOut="fadeOut"
                fillScreenOnWidth={false}
                ref={ref => this.dialog = ref}
                animationInTiming={300}
                animationOutTiming={300}
                cancelByBackPress={cancelable}
                touchOutside2Cancel={cancelable}
                style={{alignItems: 'center'}}
            >

                <CardView
                    style={{
                        flexDirection:"row",
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        // width: screenW * 0.8,
                        paddingVertical: 8,
                        paddingHorizontal:16
                    }}
                    cardElevation={8}
                    cardMaxElevation={12}
                    cornerRadius={3}
                    cornerOverlap={true}
                >

                    <ProgressBarAndroid
                        style={{marginRight:16,width:24,height:24}}
                    />

                    <TextView
                        text={description}
                        textSize={12}
                        textColor={'#666'}
                    />

                </CardView>
            </Dialog>
        );
    }
}