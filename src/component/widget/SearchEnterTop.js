/**
 * @Description: 搜索入口页 顶部搜索框
 * @author HQ
 * @date 2019/7/4 10:27
 */
import React from 'react';
import {View} from 'react-native';
import {NavLeader, Sizer} from "../../tools/tools";
import ImageView from "./common/ImageView";
import EditText from "./common/EditText";
import TouchFeedback from "./common/TouchFeedback";
import TextView from "./common/TextView";
import PropTypes from 'prop-types';

export default class SearchEnterTop extends React.PureComponent {

    static propTypes = {
        value: PropTypes.string,
        hint: PropTypes.string,
        onCancel: PropTypes.func,
        onSearch: PropTypes.func,
        onValueChanged: PropTypes.func,
        autoFocus: PropTypes.bool,
        editable: PropTypes.bool
    };

    static defaultProps = {
        hint: '请键入搜索关键字'
    };


    constructor(props) {
        super(props);
        this.state = {contentWrapper: this.props.value || ""}
    }

    setEditValue = word => {
        this.input.setText(word);
    };

    getEditValue = () => this.input.getText();

    render(): React.ReactNode {

        const {value, hint, onCancel, onSearch, onValueChanged, autoFocus, editable} = this.props;

        return (
            <View style={{paddingTop: Sizer.statusBarHeight() + 8, marginBottom: 16}}>


                <View style={{flexDirection: "row", alignItems: "center", paddingLeft: 12}}>

                    <View style={{
                        flexDirection: 'row', alignItems: "center", flex: 1,
                        backgroundColor: "#ededed", borderRadius: 999,
                        paddingHorizontal: 8,
                        marginRight: 2,
                    }}>

                        <ImageView
                            imgSrc={require('../../assets/images/common/search_bar_icon.png')}
                        />

                        <EditText
                            onChanged={text => {
                                this.setState({contentWrapper: text});
                                onValueChanged && onValueChanged(text);
                            }}
                            autoFocus={autoFocus}
                            editable={editable || true}
                            onSubmitEditing={onSearch}
                            returnKeyType={'search'}
                            ref={ref => this.input = ref}
                            style={{paddingHorizontal: 8, flex: 1}}
                            textSize={14}
                            hint={hint}
                            hintColor={'#999'}
                            text={value}
                        />

                        {this.state.contentWrapper.length > 0 ? (
                            <TouchFeedback
                                clickCallback={this._clearText}
                                opacityRadio={0.7}
                                touchStyle={{paddingVertical: 3, paddingLeft: 8}}>
                                <ImageView
                                    imgSrc={require('../../assets/images/common/edit_clear.png')}
                                />
                            </TouchFeedback>
                        ) : null}

                    </View>

                    <TouchFeedback
                        clickCallback={onCancel}
                        opacityRadio={0.65}
                        touchStyle={{paddingHorizontal: 10, paddingVertical: 5, marginRight: 2}}>

                        <TextView
                            textColor={'#333'}
                            text={'取消'}
                        />

                    </TouchFeedback>

                </View>
            </View>
        );
    }

    _clearText = () => {
        this.setEditValue('');
    };
}