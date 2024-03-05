/**
 * @Description: 优惠券条目
 * @author HQ
 * @date 2019/7/1 11:39
 */
import React from 'react';
import {View, Text} from 'react-native';
import CollectHotelItemCell from "../pages/personal/CollectHotelListPage";
import TextView from "../widget/common/TextView";
import VerDivider from "../widget/common/VerDivider";

export default class CouponsItemCell extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <View style={{
                flexDirection: "row", marginHorizontal: 12, marginTop: 10, backgroundColor: "white",
                borderRadius: 5, paddingLeft: 12
            }}>

                <View style={{flex: 77}}>


                    <View style={{flexDirection: 'row', alignItems: "flex-end", marginTop: 12}}>
                        <Text style={{fontSize: 10, color: "#E61F17"}}>
                            $
                            <Text style={{fontWeight: "bold", fontSize: 16}}>
                                188
                            </Text>
                        </Text>

                        <TextView
                            margin={[8, 0]}
                            text={'优惠券'}
                            textColor={'#888'}
                            textSize={12}
                        />

                    </View>

                    <TextView
                        margin={[0, 8]}
                        text={'美食商家券：爱润西饼屋'}
                        textWeight={"bold"}
                        textSize={16}
                        textColor={'#000'}
                    />

                    <TextView
                        margin={[0, 0, 12, 0]}
                        textColor={'#979797'}
                        text={'有效期：2019-07-01至2019-08-01'}
                        textSize={12}
                    />

                </View>

                <VerDivider
                    margin={[0,5]}
                />

                <View style={{justifyContent: "center", alignItems: 'center', flex: 23}}>

                    <Text style={{color: '#3E98FF', fontSize: 14, fontWeight: 'bold'}}>
                        可{"\n"}
                        用
                    </Text>

                </View>


            </View>
        );
    }


}