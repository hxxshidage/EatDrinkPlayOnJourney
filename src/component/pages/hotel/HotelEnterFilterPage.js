import React from 'react';

import {
    View,
    StatusBar,
    DatePickerAndroid
} from 'react-native';
import HeaderBar from "../../widget/common/HeaderBar";
import TextWithIcon from "../../widget/common/TextWithIcon";
import HorDivider from "../../widget/common/HorDivider";
import CheckInTimeSideCpn from "./CheckInTimeSideCpn";
import CheckInTimeMidCpn from "./CheckInTimeMidCpn";
import CheckInTimeKeywordsCpn from "./CheckInTimeKeywordsCpn";
import CardView from "react-native-cardview";
import TouchFeedback from "../../widget/common/TouchFeedback";
import TextView from "../../widget/common/TextView";
import {AppColors} from "../../../assets/colors/Color";
import Picker from 'react-native-picker';
import {Dater, Random, Timer} from "../../../tools/tools";
import area from '../../../assets/area';

export default class HotelEnterFilterPage extends React.PureComponent {

    state = {
        //保存开始和结束日期的时间戳
        startTimeStamp: Dater.getSpecialForwardOrBackTimeStamp(),
        endTimeStamp: Dater.getSpecialForwardOrBackTimeStamp(1)
    };

    componentWillUnmount(): void {
        this.isEndEdit = false;
    }


    render(): React.ReactNode {
        return (
            <View
                style={{flex: 1}}>
                <StatusBar
                    backgroundColor="transparent"
                    translucent={true}
                    hidden={false}
                    animated={false}
                    barStyle={'light-content'}
                />
                <View
                    style={{height: 175, backgroundColor: "#3E98FF"}}>

                    <HeaderBar
                        onGoBack={() => {
                            this.props.navigation && this.props.navigation.goBack(null);
                        }}
                        textColor={'white'}
                        style={{marginTop: 10}}
                        bgColor={'transparent'}
                        backImg={require('../../../assets/images/common/go_back_white.png')}
                        title={'住宿'}
                    />
                </View>

                <CardView
                    cardElevation={5}
                    cardMaxElevation={8}
                    cornerRadius={5}
                    cornerOverlap={true}
                    style={{
                        backgroundColor: 'white',
                        marginLeft: 16,
                        marginRight: 16,
                        paddingTop: 12,
                        paddingBottom: 16,
                        height: 240,
                        position: 'relative',
                        top: -100,
                    }}>
                    <TouchFeedback
                        opacityRadio={0.55}

                        clickCallback={this._showAreaPicker}
                    >
                        <TextWithIcon
                            margin={[10, 10, 10]}
                            imgSrc={require('../../../assets/images/common/route_plan_right.png')}
                            text={'长沙'}
                            textWeight={'bold'}
                            textSize={16}
                            iconPadding={8}
                            align={'start'}
                            direct={'r'}
                            textColor={'#000'}
                        />
                    </TouchFeedback>

                    <HorDivider/>

                    {this._buildCheckInTime()}

                    <HorDivider/>

                    <CheckInTimeKeywordsCpn
                        ref={'keywordsEdit'}
                    />

                </CardView>

                {this._buildQry()}

            </View>);
    }

    _buildCheckInTime = () => {

        const buildStartContent = () => {
            return `${Dater.stampFormat('M/D', this.state.startTimeStamp)}  ${Dater.diffDaysBackDaily(Dater.getSpecialForwardOrBackTimeStamp(0), this.state.startTimeStamp)}`;
        };

        const buildDays = () => {
            const days = Dater.diffDays(this.state.startTimeStamp, this.state.endTimeStamp);
            return days <= 0 ? '-' : `共${days}晚`
        };

        const buildEndContent = () => {
            return `${Dater.stampFormat('M/D', this.state.endTimeStamp)}  ${Dater.diffDaysBackDaily(Dater.getSpecialForwardOrBackTimeStamp(0), this.state.endTimeStamp)}`;
        };

        return (
            <View style={{flexDirection: 'row', flex: 1}}>
                <CheckInTimeSideCpn
                    content={buildStartContent()}
                    title={'入住'}
                    clickCallback={() => {
                        this._showDatePicker({
                            date: new Date(),
                            minDate: Dater.getSpecialForwardOrBackTimeStamp(),
                            maxDate: this.isEndEdit === true ? Dater.getSpecialForwardOrBackTimeStamp(-1, this.state.endTimeStamp) :
                                undefined
                        }).then(this._handleStartTime)
                            .catch(this._handleError);

                    }}
                />

                <CheckInTimeMidCpn
                    text={buildDays()}
                />

                <CheckInTimeSideCpn
                    content={buildEndContent()}
                    title={'离开'}
                    clickCallback={() => {
                        this._showDatePicker({
                            date: new Date(),
                            minDate: Dater.getSpecialForwardOrBackTimeStamp(1, this.state.startTimeStamp)
                        }).then(this._handleEndTime)
                            .catch(this._handleError);
                    }}
                />
            </View>
        );
    };

    _buildQry = () => {
        return (
            <TouchFeedback
                touchStyle={{position: 'relative', top: -30}}
                clickCallback={this._goHotelList}
                opacityRadio={0.75}>

                <TextView
                    margin={[16, 0]}
                    style={{
                        backgroundColor: AppColors.themeColor,
                        borderRadius: 999,
                        height: 40,
                        textAlign: 'center',
                        lineHeight: 40,
                    }}
                    text={'查 询'}
                    textColor={'#fff'}
                />
            </TouchFeedback>
        );
    };

    _showDatePicker = async options => {
        return await DatePickerAndroid.open(options);
    };

    _handleStartTime = dateAction => {
        const {action, year, month, day} = dateAction;
        if (action !== DatePickerAndroid.dismissedAction) {
            this.setState({startTimeStamp: Dater.date2Stamp({year: year, month: month, day: day})})
        }
    };

    _handleEndTime = dateAction => {
        //标志结束时间是否编辑过  为选择开始时间 设定最大值  第一次默认不需要
        this.isEndEdit = true;
        const {action, year, month, day} = dateAction;
        console.warn("year: " + year + '  month: ' + (month + 1) + "  day: " + day);

        if (action !== DatePickerAndroid.dismissedAction) {
            this.setState({endTimeStamp: Dater.date2Stamp({year: year, month: month, day: day})})
        }
    };

    _handleError = err => {
        console.warn(err);
    };


    _showAreaPicker = () => {

        const initArea = () => {
            let data = [];
            let len = area.length;
            for (let i = 0; i < len; i++) {
                let city = [];
                for (let j = 0, cityLen = area[i]['city'].length; j < cityLen; j++) {
                    let _city = {};
                    _city[area[i]['city'][j]['name']] = area[i]['city'][j]['area'];
                    city.push(_city);
                }

                let _data = {};
                _data[area[i]['name']] = city;
                data.push(_data);
            }
            return data;
        };

        Picker.init({
            pickerCancelBtnText: '取消',
            pickerConfirmBtnText: '确定',
            pickerTitleText: "地区选择",
            pickerData: initArea(),
            selectedValue: ['河北', '唐山', '古冶区'],
            onPickerConfirm: pickedValue => {
                console.warn('area', pickedValue);
            },
            onPickerCancel: pickedValue => {
                console.warn('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                // console.warn('area', pickedValue);
            }
        });
        Picker.show();

    };

    _goHotelList = () => {
        if (this.state.endTimeStamp <= this.state.startTimeStamp) {
            console.warn("开始日期不能大于结束日期");
            return;
        }
        this.props.navigation && this.props.navigation.navigate('HotelList');
    };
}

//Picker.init({
//                         pickerData: this.dates(),
//                         pickerTitleText: '日期选择',
//                         pickerConfirmBtnText: '确定',
//                         pickerCancelBtnText: '取消',
//                     });
//                     Picker.show();

//dates = () => {
//         let data = [];
//         let year = null;
//         let monthArr = null;
//         let month = null;
//         let day = null;
//         for (let i = 2009; i <= 2029; i++) {
//             monthArr = [];
//             for (let j = 1; j <= 12; j++) {
//                 day = [];
//                 const days = Timer.obtainDays(i, j);
//                 for (let k = 1; k <= days; k++) {
//                     day.push(k);
//                 }
//                 month = {};
//                 month[j] = day;
//                 monthArr.push(month);
//             }
//             year = {};
//             year[i] = monthArr;
//             data.push(year);
//         }
//         return data;
//     };