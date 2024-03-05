import React from 'react';
import {
    View,
    Image,
} from 'react-native';
import {Sizer, screenW} from "../../../tools/tools";
import TextView from "../../widget/common/TextView";
import RatingBar from "../../widget/common/RatingBar";
import HorDivider from '../../widget/common/HorDivider';
import ImageView from "../../widget/common/ImageView";
import DetailHead from '../../widget/common/DetailHead';
import DetailLocation from '../../widget/common/DetailLocation';
import LoadingWrapper from "../../widget/common/wrapper/LoadingWrapper";
import LoadingPage from "../base/LoadingPage";

//该继承的就要继承
export default class FoodDetailPage extends LoadingPage {

    componentDidMount(): void {
        setTimeout(()=>{
            this.dismissLoading();
        },3000)
    }

    render(): React.ReactNode {
        return (
            <LoadingWrapper ref={ref => this.loadingWrapper = ref}>
                <View
                    style={{flex: 1, backgroundColor: 'white'}}>

                    <ImageView
                        size={[screenW, screenW * 0.6]}
                        imgSrc={require('../../../assets/images/delete/food_detail.png')}
                    />


                    <DetailHead
                        onBack={this._goBack}
                        onMore={() => {
                            console.warn("on more");
                        }}
                        onShare={() => {
                            console.warn("on share");
                        }}
                    />

                    <TextView
                        margin={[10, 10, 0, 10]}
                        textWeight={'bold'}
                        text={'苍之涛海鲜自助主题餐厅'}
                        textSize={16}
                        textColor={'black'}
                    />

                    {this._buildScore()}

                    <HorDivider margin={[10, 10, 16]}/>

                    <TextView
                        numberOfLines={null}
                        style={{paddingLeft: 10, paddingRight: 10}}
                        text={'在我们对电脑中的程序进行运行之后，都会在任务栏中有图标出，只是在默认的情况中如果我们打开很多次一样的程序，那么就会将其图标合并，因此任务栏上非常的整洁，不过并不方便切换，所以就有用户想分离'}
                        textColor={'#666'}
                        textSize={14}
                    />

                    <HorDivider margin={[16, 10, 0]}/>

                    <DetailLocation
                        textAddress={'岳麓区工业园A区101号雷驰科技505室雷驰科技505室'}
                        textDistance={'1.2km'}
                        phoneNum={'181 7597 0161'}
                        onCallPhone={phone => {
                            console.warn(phone);
                        }}
                    />

                    <HorDivider margin={[10, 0]}/>

                    {this._buildBusinessHour()}

                </View>
            </LoadingWrapper>
        );
    }

    _buildScore = () => {
        return (
            <View style={{
                flexDirection: 'row', marginLeft: 10, marginRight: 10, alignItems: 'center',
                marginTop: 5
            }}>

                <RatingBar
                    size={12}
                    rating={3.5}
                />
                <TextView
                    margin={[0, 16, 0, 5]}
                    text={'4分'}
                    textColor={'#888888'}
                    textSize={10}
                />

                <TextView
                    textSize={12}
                    textColor={'#888888'}
                    text={'$28/人'}
                />

            </View>
        );
    };

    /*_buildLocation = () => {
        return (
            <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
                <ImageView imgSrc={require('../../../assets/images/common/location.png')}/>
                <TextView
                    style={{marginLeft: 5, flex: 1, marginRight: 16, paddingTop: 5, paddingBottom: 5}}
                    textSize={14}
                    textColor={'#333'}
                    text={'岳麓区工业园A区101号雷驰科技505室雷驰科技505室'}/>

                <TextView
                    text={'500m'}
                    textSize={14}
                    textColor={'#888'}
                />

                <VerDivider
                    fillParent={true}
                    margin={[16, 0]}
                />

                <TouchFeedback
                    opacityRadio={0.65}
                    extraData={{data: 'extra'}}
                    clickCallback={(extra) => {
                        console.warn(extra.data);
                    }}
                >
                    <ImageView
                        style={{marginRight: 16}}
                        imgSrc={require('../../../assets/images/common/call_phone.png')}/>
                </TouchFeedback>
            </View>);
    };*/

    _buildBusinessHour = () => {
        return (
            <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
                <ImageView
                    imgSrc={require('../../../assets/images/common/business_hour.png')}/>
                <TextView
                    margin={[0, 10, 0, 5]}
                    style={{flex: 1, paddingTop: 5, paddingBottom: 5}}
                    textSize={14}
                    textColor={'#333'}
                    text={'岳麓区工业园A区101号雷驰科技505室雷驰科技505室岳麓区工业园A区101号雷驰科技505室雷驰科技505室'}/>

            </View>);
    };


    _goBack = () => {
        const {navigation} = this.props;
        // console.warn(navigation);
        // navigation && navigation.navigate('FoodList');
        navigation && navigation.goBack();

    };
};