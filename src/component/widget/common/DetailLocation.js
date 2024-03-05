import React from 'react';

import {
    View,
} from 'react-native';
import ImageView from "./ImageView";
import TextView from "./TextView";
import VerDivider from "./VerDivider";
import TouchFeedback from "./TouchFeedback";
import PropTypes from 'prop-types';

export default class DetailLocation extends React.PureComponent {

    static propTypes = {
        onCallPhone: PropTypes.func,
        textAddress: PropTypes.string,
        textDistance: PropTypes.string,
        phoneNum: PropTypes.string
    };

    render(): React.ReactNode {

        const {phoneNum, onCallPhone, textAddress, textDistance} = this.props;

        return (
            (
                <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
                    <ImageView imgSrc={require('../../../assets/images/common/location.png')}/>
                    <TextView
                        margin={[0,16,0,5]}
                        style={{ flex: 1, paddingTop: 5, paddingBottom: 5}}
                        textSize={14}
                        textColor={'#333'}
                        text={textAddress}
                        // text={'岳麓区工业园A区101号雷驰科技505室雷驰科技505室'}
                    />

                    <TextView
                        text={textDistance}
                        // text={'500m'}
                        textSize={14}
                        textColor={'#888'}
                    />

                    <VerDivider
                        fillParent={true}
                        margin={[16, 0]}
                    />

                    <TouchFeedback
                        opacityRadio={0.65}
                        extraData={phoneNum}
                        clickCallback={onCallPhone}
                    >
                        <ImageView
                            style={{marginRight: 16}}
                            imgSrc={require('../../../assets/images/common/call_phone.png')}/>
                    </TouchFeedback>
                </View>));
    }
}