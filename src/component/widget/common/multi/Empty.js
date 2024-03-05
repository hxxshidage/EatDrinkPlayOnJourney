/**
 * @Description: 默认加载空白页
 * @author HQ
 * @date 2019/7/8 10:30
 */
import React from "react";
import FillWrapper from "../wrapper/FillWrapper";
import ImageView from "../ImageView";
import TextView from "../TextView";

export default class Empty extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <FillWrapper style={{justifyContent: 'center', alignItems: 'center'}}>

                <ImageView
                    imgSrc={require('../../../../assets/images/common/empty.png')}
                />

                <TextView
                    text={'暂无数据'}
                    textColor={'#888'}
                    margin={[20, 0, 0, 0]}
                />

            </FillWrapper>
        );
    }
}