import React from 'react';

import {
    View,
    TextInput
} from 'react-native';
import {AppColors} from "../../../assets/colors/Color";
import TouchFeedback from "../../widget/common/TouchFeedback";
import ImageView from "../../widget/common/ImageView";

export default class CheckInTimeKeywordsCpn extends React.Component {
    state = {text: ''};

    getText = () => {
        return this.state.text;
    };

    render(): React.ReactNode {
        return (
            <View
                style={{flexDirection: 'row', alignItems: "center", marginTop: 10}}>

                <TextInput
                    ref={ref => this.edit = ref}
                    keyboardType={'default'}
                    placeholder={'请输入关键字'}
                    selectionColor={AppColors.themeColor}
                    placeholderTextColor={'#888'}
                    style={{flex: 1, padding: 0, paddingLeft: 10}}
                    onChangeText={text => {
                        this.setState({text: text})
                    }}
                    value={this.state.text}
                />

                {this.state.text.length > 0 ?
                    (<TouchFeedback
                        opacityRadio={0.65}
                        clickCallback={() => {
                            this.setState({text: ""})
                        }}
                    >
                        <View style={{
                            padding: 3, justifyContent: "center",
                            alignItems: 'center',
                        }}>
                            <ImageView
                                imgSrc={require('../../../assets/images/common/edit_clear.png')}
                            />
                        </View>
                    </TouchFeedback>) : null}

            </View>);
    }
}