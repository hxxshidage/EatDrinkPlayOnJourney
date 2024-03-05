import React from 'react';

import {
    View,
    Text
} from 'react-native';
import Dialog from "./Dialog";
import TextView from "../widget/common/TextView";
import {screenW} from "../../tools/tools";
import TouchFeedback from "../widget/common/TouchFeedback";

export default class ComplainNoticeDialog extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <Dialog
                fillScreenOnWidth={false}
                ref={ref => this.dialog = ref}
                animationIn="slideInDown"
                animationOut="slideOutDown"
                animationInTiming={300}
                animationOutTiming={300}
                cancelByBackPress={false}
                touchOutside2Cancel={false}
                style={{alignItems: 'center'}}
            >
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    width: screenW * 0.85,
                    borderRadius: 5,
                    paddingTop: 32,
                    paddingBottom: 24,
                    paddingLeft: 10,
                    paddingRight: 10
                }}>

                    <TextView
                        text={'投诉须知'}
                        textSize={16}
                        textColor={'#000'}
                        textWeight={'bold'}
                    />
                    <TextView
                        numberOfLines={null}
                        textColor={'#707070'}
                        margin={[32, 0, 10]}
                        text={'1.投诉人相关信息如果不属实或无法与投诉人取得联系，投诉很可能按无效投诉不予受理。'}
                    />

                    <TextView
                        margin={[0, 0, 10]}
                        numberOfLines={null}
                        textColor={'#707070'}
                        text={'2.投诉人应当对控诉内容的真实性负责，因虚假投诉引起的法律责任，由投诉人承担。'}
                    />


                    <Text style={{color: '#707070', fontSize: 14}}>
                        3.
                        <Text style={{color: '#000', fontSize: 14, fontWeight: 'bold'}}>
                            请不要重复投诉。
                        </Text>
                        重复投诉并不会加快处理速度控诉处置人员收到投诉后会第一时间与您取得联系。
                    </Text>

                    <TouchFeedback
                        touchStyle={{alignSelf: 'stretch'}}
                        clickCallback={() => {
                            this.dialog.hide();
                        }}
                    >
                        <TextView
                            textColor={'white'}
                            style={{
                                borderRadius: 3,
                                backgroundColor: '#3E98FF',
                                paddingTop: 8,
                                paddingBottom: 8,
                                marginTop: 40,
                                textAlign: 'center'
                            }}
                            text={'知道了'}
                        />
                    </TouchFeedback>
                </View>
            </Dialog>);
    }
}