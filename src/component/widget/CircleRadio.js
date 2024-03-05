import React from 'react';

import {
    View,
} from 'react-native';

import PropTypes from 'prop-types';
import TextView from "./common/TextView";
import TouchFeedback from "./common/TouchFeedback";

export default class CircleRadio extends React.PureComponent {

    // state = {isChecked: false};
    static propTypes = {
        ...TextView.propTypes,
        checked: PropTypes.bool,
        textStyle: PropTypes.object,
        onCheckedChanged: PropTypes.func,
        size: PropTypes.number,
        unCheckedColor: PropTypes.string,
        checkedColor: PropTypes.string,
        padding2Text: PropTypes.number
    };

    componentDidMount(): void {
        // this.setState({isChecked: this.props.checked});
    }


    render(): React.ReactNode {
        const {
            checked,
            textStyle, padding2Text,
            size, text, textColor, textSize
        } = this.props;

        let wh = size || 16;

        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: "center"
                }}>
                <TouchFeedback
                    opacityRadio={0.65}
                    touchStyle={{padding: 10}}
                    clickCallback={
                        () => {
                            this._checkChanged();
                            // this.setState({isChecked: !this.state.isChecked}, this._checkChanged)
                        }
                    }
                >
                    <View
                        style={[{
                            //增大点击范围
                            width: wh,
                            height: wh,
                        },
                            // this.state.isChecked ? this._obtainCheckedStyle(wh) : this._obtainUncheckedStyle(wh)
                            checked ? this._obtainCheckedStyle(wh) : this._obtainUncheckedStyle(wh)

                        ]}
                    />
                </TouchFeedback>

                {text ? <TextView
                    margin={[0, 0, 0, padding2Text]}
                    text={text}
                    textColor={textColor || '#888'}
                    textSize={textSize || 12}
                    style={textStyle}
                /> : null}
            </View>
        );
    }

    _obtainUncheckedStyle = wh => {
        return {
            borderRadius: wh,
            borderWidth: 2,
            borderColor: this.props.unCheckedColor || '#D1D1D1',
            backgroundColor: 'transparent'
        };
    };

    _obtainCheckedStyle = wh => {

        return {
            borderRadius: wh,
            borderWidth: 0,
            borderColor: 'transparent',
            backgroundColor: this.props.checkedColor || '#FF3D3D',
        };
    };

    _checkChanged = () => {
        this.props.onCheckedChanged && this.props.onCheckedChanged(!this.props.checked);
    };
}