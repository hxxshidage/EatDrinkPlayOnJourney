import {
    Dimensions,
    Platform,
    PixelRatio,
    StatusBar
} from 'react-native';
import area from "../assets/area";


function _obtainPaddingOrMarginFromArray(targetArr, direct) {
    if (!targetArr || targetArr.length <= 0) return 0;

    if (targetArr.length === 1) {
        return targetArr[0];
    } else if (targetArr.length === 2) {
        switch (direct) {
            case 'l':
            case 'r':
                return targetArr[0];
            case 't':
            case 'b':
                return targetArr[1];
            default:
                return targetArr[0];
        }
    } else if (targetArr.length === 3) {
        switch (direct) {
            case 't':
                return targetArr[0];
            case 'l':
            case 'r':
                return targetArr[1];
            case 'b':
                return targetArr[2];
            default:
                return targetArr[0];
        }
    } else {
        switch (direct) {
            case 'l':
                return targetArr[3];
            case 'r':
                return targetArr[1];
            case 't':
                return targetArr[0];
            case 'b':
                return targetArr[2];
            default:
                return targetArr[0];
        }
    }
}

function _obtainOppositeAttributesFromArray(arr, normal = true) {
    if (!arr || arr.length <= 0) return null;
    if (arr.length === 1) return arr[0];
    else return normal === true ? arr[0] : arr[1];
}

function _obtainSize(arr, dir) {
    if (!arr || arr.length < 1) return null;

    if (arr.length === 1) return arr[0];
    else {
        switch (dir) {
            case 'w':
                return arr[0];
            case 'h':
                return arr[1];
        }
    }

    return null;
}

export const Sizer = {

    px2dp: px => PixelRatio.roundToNearestPixel(px),

    dp2px: dp => PixelRatio.getPixelSizeForLayoutSize(dp),

    statusBarHeight: () => Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    //[top,right,bottom,left]
    //[top,left/right,bottom]
    //[left/right,top/bottom]
    //[top/right/bottom/left]
    obtainPaddingOrMarginFromArray: _obtainPaddingOrMarginFromArray,
    //[normal,unNormal]
    obtainOppositeAttributesFromArray: _obtainOppositeAttributesFromArray,
    //[w,h]
    obtainSize: _obtainSize
};

export const screenW = Dimensions.get('window').width;
export const screenH = Dimensions.get('window').height;

export const Differ = {
    isAndroid: () => Platform.OS === 'android',
};

export const NavLeader = {
    goBack: (cmp) => {
        cmp.props.navigation && cmp.props.navigation.goBack(null);
    },
    nav: (cmp, routeName, params) => {
        cmp.props.navigation && cmp.props.navigation.navigate(routeName, params);
    },
    navReturn: (cmp, routeName, params, callback) => {
        cmp.props.navigation && cmp.props.navigation.navigate(routeName, Object.assign({}, params, {callback: callback}))
    }
};

export class Random {
    static randInt(min, max, floor = true, ceil = true) {
        //min <= rand <= max
        if (floor && ceil) return Math.round(Math.random() * (max - min)) + min;
        //min < rand <= max
        else if (!floor && ceil) return Math.ceil(Math.random() * (max - min)) + min;
        //min <= rand < max
        else if (floor && !ceil) return Math.floor(Math.random() * (max - min)) + min;
        //min < rand < max
        else return Math.floor(Math.random() * (max - (min + 1))) + (min + 1);
    }

    static randColor() {
        return `rgb(${Random.randInt(0, 255)},
                    ${Random.randInt(0, 255)},
                    ${Random.randInt(0, 255)})`
    };
}

// const mdRounding = num => num >= 10 ? num.toString() : `0${num}`;

export class Dater {
    //var sjc = 1488481383;//时间戳
    // console.log(time.formatTime(sjc,'Y/M/D h:m:s'));//转换为日期：2017/03/03 03:03:03
    // console.log(time.formatTime(sjc, 'h:m'));//转换为日期：03:03
    static _formatArr = ['Y', 'M', 'D', 'h', 'm', 's'];

    //5=>05
    static mdRounding(md) {
        return md >= 10 ? md.toString() : `0${md}`;
    }

    //时间戳 转换为对应格式
    static stampFormat(format, timeStamp = new Date().getTime()) {
        const returnArr = [];

        const date = new Date(timeStamp);

        returnArr.push(date.getFullYear());
        returnArr.push(Dater.mdRounding(date.getMonth() + 1));
        returnArr.push(Dater.mdRounding(date.getDate()));
        returnArr.push(Dater.mdRounding(date.getHours()));
        returnArr.push(Dater.mdRounding(date.getMinutes()));
        returnArr.push(Dater.mdRounding(date.getSeconds()));

        for (let i in returnArr) {
            format = format.replace(Dater._formatArr[i], returnArr[i]);
        }
        return format;
    }

    //'yyyy/year/day'  => 1591324232626
    //{year:2019,month:5,day:21} =>1591324232626
    static date2Stamp(formatDate) {
        //new Date("month dd,yyyy hh:mm:ss");
        // new Date("month dd,yyyy");
        // new Date("yyyy/MM/dd hh:mm:ss");
        // new Date("yyyy/MM/dd");
        // new Date(yyyy,mth,dd,hh,mm,ss);
        // new Date(yyyy,mth,dd);
        // new Date(ms);
        if (typeof formatDate === 'string') {
            return new Date(formatDate).getTime();
        } else if (typeof formatDate === 'object') {
            return new Date(formatDate.year, formatDate.month, formatDate.day).getTime();
        }
    }

    //两个日期相差的天数
    static diffDays(start, end) {
        if (typeof start === 'string' && typeof end === 'string') {
            return Math.floor((Dater.date2Stamp(end) - Dater.date2Stamp(start)) / (1000 * 60 * 60 * 24));

        } else if (typeof start === 'number' && typeof end === 'number') {
            return Math.floor((end - start) / (1000 * 60 * 60 * 24));
        }

        return 0;
    }


    static diffDaysBackDaily(start, end) {
        const diff = Dater.diffDays(start, end);
        if (diff <= 0) return '今天';
        else if (diff === 1) return '明天';
        else if (diff === 2) return '后天';
        // else if (diff > 2 && diff < 7) return `${diff}天后`;
        else if (diff === 7) return '一周后';
        else return `${diff}天后`;
    }

    static getSpecialForwardOrBackTimeStamp(days = 0, datumStamp) {

        if (days === 0) {
            const date = new Date();
            //从零时零秒开始  防止计算diffDays不准确
            return Dater.date2Stamp({year: date.getFullYear(), month: date.getMonth(), day: date.getDate()});
        }
        //now
        const date = datumStamp ? new Date(datumStamp) : new Date();
        date.setDate(date.getDate() + days);
        return date.getTime();
    }
}

export class Documenter {

    static async readArea(area) {
        await new Promise((resolve, err) => {
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

            resolve(data);
        });
    }

}


export class Timer {

    static roundingZero(target) {
        return (target >> 0) < 10 ? "0" + target : target;
    }

    static mediaTimeFormat(duration) {
        const target = Math.round(duration);
        const h = Math.floor(target / 3600);
        const m = Math.floor(target / 60) % 60;
        const s = (target % 60);

        return `${h > 0 ? Timer.roundingZero(h) + ':' : ''}${Timer.roundingZero(m)}:${Timer.roundingZero(s)}`;
    };

    static obtainDays = (y, m) => {
        let days = 0;
        switch (m) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                days = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                days = 30;
                break;
            case 2:
                days = (y % 4 === 0 && y % 100 !== 0 || y % 400 === 0) ? 29 : 28;
        }
        return days;
    }
}





