/**
 * @Description: 交通出行页
 * @author HQ
 * @date 2019/6/18 17:47
 */
import React from 'react';

import {MapView} from 'react-native-amap3d';
import HeaderBar from "../../widget/common/HeaderBar";
import StatusWrapper from "../../widget/common/wrapper/StatusWrapper";
import HorDivider from "../../widget/common/HorDivider";
import Permission from "../../../tools/Permission";
import {NavLeader} from "../../../tools/tools";

export default class TrafficTravelPage extends React.Component {

    state = {showLocation: false};

    componentDidMount(): void {
        Permission.requestLocationPermission().then(res => {
            this.setState({showLocation: res})
        });
    }

    render(): React.ReactNode {
        return (
            <StatusWrapper>

                <HeaderBar
                    onGoBack={() => {
                        NavLeader.goBack(this);
                    }}
                    title={'交通出行'}
                />
                <HorDivider/>

                <MapView
                    locationEnabled
                    locationInterval={1000 * 60}
                    style={{flex: 1}}
                    coordinate={{
                        latitude: 39.979590,
                        longitude: 116.352792
                    }}
                    showsLocationButton={this.state.showLocation}
                    showsZoomControls={true}
                    showsScale={true}
                />
            </StatusWrapper>
        );
    }
}