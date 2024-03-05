/**
 * @Description: 指定类别搜索  没有结果头部展示
 * @author HQ
 * @date 2019/7/5 11:39
 */
import React from 'react';
import {View} from 'react-native';
import ImageView from "../widget/common/ImageView";
import TextView from "../widget/common/TextView";
import VerDivider from "../widget/common/VerDivider";
import {AppColors} from "../../assets/colors/Color";

export default class SearchNoResultsHeadCell extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <View style={{alignItems: "center", marginBottom: 10}}>


                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 180}}>
                    <ImageView
                        imgSrc={require('../../assets/images/search/search_no_results.png')}/>


                    <TextView
                        margin={[0, 0, 0, 12]}
                        text={'抱歉,暂无搜索结果'}
                        textColor={'#666'}
                        textSize={12}
                    />
                </View>

                <View style={{
                    flexDirection: "row", alignItems: "center",
                    alignSelf: "stretch",
                    backgroundColor: '#F3F3F3'
                }}>

                    <VerDivider
                        style={{borderRadius: 3}}
                        width={3}
                        color={AppColors.themeColor}
                        margin={[0, 5]}
                    />

                    <TextView
                        text={'猜你喜欢'}
                        textColor={'#000'}
                        textWeight={'bold'}
                        textSize={16}
                        margin={[10, 0, 10, 10]}
                    />
                </View>

            </View>
        );
    }
}