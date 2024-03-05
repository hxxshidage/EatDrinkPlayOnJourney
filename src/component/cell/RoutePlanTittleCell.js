import React from 'react';

import {
    View,
} from 'react-native';
import ImageView from "../widget/common/ImageView";
import TextView from "../widget/common/TextView";
import TouchFeedback from "../widget/common/TouchFeedback";
import PropTypes from 'prop-types';

export default class RoutePlanTittleCell extends React.PureComponent {
    static propTypes = {
        isFooter: PropTypes.bool,
    };

    render(): React.ReactNode {

        const {extraData, isFooter} = this.props;
        return (
            <TouchFeedback
                opacityRadio={0.65}
                {...this.props}
            >
                <View style={{flexDirection: 'row', alignItems: "center"}}>
                    <View style={{marginRight: 5, height: 30}}>
                        <View style={{flex: 1, width: 1, backgroundColor: '#8FC3FF', marginLeft: 15.5}}/>

                        <ImageView
                            style={{marginLeft: 9.5}}
                            size={[13]}
                            imgSrc={require('../../assets/images/route_plan/scenic_location.png')}
                        />

                        <View style={{
                            width: 1,
                            flex: 1,
                            backgroundColor: isFooter === true ? 'transparent' : '#8FC3FF',
                            marginLeft: 15.5
                        }}/>

                    </View>

                    <TextView
                        textSize={12}
                        textColor={'#000'}
                        text={extraData.address}/>

                    <TextView
                        style={{flex: 1, paddingTop: 3, paddingBottom: 3, marginLeft: 10}}
                        textSize={12}
                        text={extraData.tourismTime}
                    />

                    <ImageView
                        style={{marginLeft: 10, marginRight: 10}}
                        imgSrc={require('../../assets/images/common/route_plan_right.png')}
                    />
                </View>
            </TouchFeedback>

        );
    }
}
//<View style={{flexDirection: 'row', alignItems: "center"}}>
//                 <View
//                     style={{backgroundColor: 'green', alignItems: 'center',marginRight:8}}
//                 >
//                     <View style={{height: 16, width: 5, backgroundColor: 'red'}}/>
//
//                     <ImageView
//                         imgSrc={require('../../assets/images/personal/all_orders.png')}
//                     />
//
//                     <View style={{width: 5, height: 16, backgroundColor: 'red'}}/>
//
//                 </View>
//
//                 <TextView
//                     textColor={'#000'}
//                     text={'呵呵'}/>
//             </View>);