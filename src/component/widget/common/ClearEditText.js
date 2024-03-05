/**
 * @Description: 带清除功能的EditText
 * @author HQ
 * @date 2019/7/2 11:10
 */
import React from 'react';
import {View} from 'react-native';
import EditText from "./EditText";
import TouchFeedback from "./TouchFeedback";
import ImageView from "./ImageView";
import PropTypes from 'prop-types';

export default class ClearEditText extends React.PureComponent {


    static propTypes = {
        ...EditText.propTypes,
        clearImg: PropTypes.number,
        rootStyle: PropTypes.object,
        editStyle: PropTypes.object
    };

    constructor(props) {
        super(props);

        this.state = {inputContent: props.text || ""};
    }


    render(): React.ReactNode {
        const {rootStyle, editStyle} = this.props;
        return (
            <View
                style={[{
                    flexDirection: 'row',
                    alignItems: 'center'
                }, rootStyle]}>

                <EditText
                    {...this.props}
                    ref={ref => this.input = ref}
                    onChanged={text => {
                        this.setState({inputContent: text});
                    }}
                    style={Object.assign({flex: 1}, editStyle)}
                />

                {this.state.inputContent.length > 0 ? (
                        <TouchFeedback
                            clickCallback={this._clearText}
                            touchStyle={{padding: 5}}
                            opacityRadio={0.65}>
                            <ImageView
                                imgSrc={this.props.clearImg || require('../../../assets/images/common/edit_clear.png')}/>
                        </TouchFeedback>
                    ) :
                    null
                }

            </View>
        );
    }

    _clearText = () => {
        this.input.setText('');
    };

    getInputConent = () => this.state.inputContent;
}

//this.getInputContent().length > 0