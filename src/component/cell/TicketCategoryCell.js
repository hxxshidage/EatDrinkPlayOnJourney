/**
 * @Description: 门票详情 门票种类布局
 * @author HQ
 * @date 2019/7/3 13:31
 */
import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import TextView from "../widget/common/TextView";
import ImageView from "../widget/common/ImageView";
import TouchFeedback from "../widget/common/TouchFeedback";
import VerDivider from "../widget/common/VerDivider";


export default class TicketCategoryCell extends React.PureComponent {

    static propTypes = {
        ...TouchFeedback.propTypes,
        isTicketExpanded: PropTypes.bool,
        onBookingNow: PropTypes.func,
        onShowBookingNotice: PropTypes.func,
        onExpand: PropTypes.func
    };


    static defaultProps = {
        isTicketExpanded: false
    };


    render(): React.ReactNode {
        const {isTicketExpanded} = this.props;
        return (
            <View>
                {this._buildTopPart(isTicketExpanded)}

                {isTicketExpanded ? this._buildBottomPartWhenExpanded() : null}
            </View>
        );
    }

    _buildTopPart = isTicketExpanded => {
        const {onExpand, extraData} = this.props;

        return (
            <View style={{
                flexDirection: 'row',
                alignItems: "center",
                paddingLeft: 10,
                paddingVertical: 12
            }}>

                <TextView
                    style={{flex: 1}}
                    text={'成人套票'}
                    textColor={'#000'}
                    textWeight={'bold'}
                />


                <View style={{justifyContent: 'center', alignItems: "center"}}>
                    <Text style={{flex: 1, fontSize: 10, fontWeight: 'bold', color: '#FF3D3D'}}>
                        $
                        <Text style={{fontSize: 16}}>
                            150
                        </Text>

                        <Text style={{color: '#979797', fontSize: 12, fontWeight: 'normal'}}>
                            {'起'}
                        </Text>

                    </Text>


                    <TextView
                        margin={[3, 0, 0, 0]}
                        textSize={12}
                        textColor={'#979797'}
                        text={'月销62笔'}
                    />
                </View>


                <TouchFeedback
                    extraData={extraData}
                    clickCallback={onExpand}
                    opacityRadio={0.65}
                    touchStyle={{paddingHorizontal: 10, paddingVertical: 5, marginLeft: 5}}>
                    <ImageView
                        imgSrc={isTicketExpanded ?
                            require('../../assets/images/ticket/ticket_detail_expanded.png') :
                            require('../../assets/images/ticket/ticket_detail_no_expanded.png')}
                    />
                </TouchFeedback>
            </View>
        );

    };

    _buildBottomPartWhenExpanded = () => {
        const {onBookingNow, onShowBookingNotice, extraData} = this.props;

        return (
            <View style={{
                borderRadius: 5,
                flexDirection: 'row',
                alignItems: "center",
                marginHorizontal: 10,
                backgroundColor: "#f5f5f5",
                padding: 10
            }}>

                <View style={{paddingBottom: 24, flex: 1}}>
                    <TextView
                        text={'水上乐园票+海洋馆门票'}
                        textColor={'#333'}
                    />

                    <TextView
                        margin={[8, 0, 16, 0]}
                        text={'最早可定明日票 平均1分钟出票'}
                        textColor={'#0CBF60'}
                        textSize={12}
                    />
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TextView
                            textSize={12}
                            text={'月售1320'}
                            textColor={'#979797'}
                        />

                        <VerDivider
                            color={'#979797'}
                            margin={[8, 3]}
                        />

                        <TouchFeedback
                            extraData={extraData}
                            clickCallback={onShowBookingNotice}
                            opacityRadio={0.5}
                            touchStyle={{flexDirection: 'row', alignItems: 'center'}}>
                            <TextView
                                margin={[0, 5, 0, 0]}
                                textSize={12}
                                text={'预订须知'}
                                textColor={'#979797'}
                            />

                            <ImageView
                                imgSrc={require('../../assets/images/common/route_plan_right.png')}
                            />

                        </TouchFeedback>
                    </View>
                </View>

                <View style={{
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Text style={{fontSize: 10, fontWeight: 'bold', color: '#FF3D3D'}}>
                        $
                        <Text style={{fontSize: 16}}>
                            150
                        </Text>

                        <Text style={{color: '#979797', fontSize: 12, fontWeight: 'normal'}}>
                            {'起'}
                        </Text>

                    </Text>

                    <TouchFeedback
                        extraData={extraData}
                        clickCallback={onBookingNow}
                        opacityRadio={0.75}
                        touchStyle={{marginTop: 8}}>
                        <TextView
                            style={{
                                paddingHorizontal: 12, paddingVertical: 5,
                                backgroundColor: "#FF3D3D",
                                borderRadius: 3
                            }}

                            text={'立即预订'}
                            textColor={'white'}
                        />
                    </TouchFeedback>
                </View>

            </View>
        );
    };
}