/**
 * @Description: 默认加载出错页
 * @author HQ
 * @date 2019/7/8 9:01
 */
import React from 'react';
import FillWrapper from "../wrapper/FillWrapper";
import ImageView from "../ImageView";
import TextView from "../TextView";
import {Button} from 'react-native';
import PropTypes from 'prop-types';
import TouchFeedback from "../TouchFeedback";

export default class Error extends React.PureComponent {

    static propTypes = {
        onRetry: PropTypes.func
    };

    render(): React.ReactNode {
        const {onRetry} = this.props;

        return (
            <FillWrapper style={{alignItems: 'center', justifyContent: "center"}}>

                <ImageView
                    imgSrc={require('../../../../assets/images/common/error.png')}
                />

                <TextView
                    text={'加载失败，请重新加载~'}
                    textColor={'#888'}
                    margin={[8, 0, 20]}
                />


                <TouchFeedback opacityRadio={0.7} clickCallback={onRetry}>
                    <TextView
                        style={{
                            backgroundColor: '#dfdfdf',
                            borderRadius: 999,
                            width: 150,
                            height: 40,
                            textAlign: 'center',
                            textAlignVertical: 'center'
                        }}
                        text={'点击重试'}
                        textColor={'#888'}
                    />
                </TouchFeedback>

            </FillWrapper>
        );
    }
}