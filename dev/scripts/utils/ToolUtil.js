
import Util from './Util'
import Conf from "../../const"
import context from './../context'
class ToolUtil extends Util {
    constructor() {
        super()
    }

    /**
     * const val = 1580646020000;
     * console.log(ToolUtil.formatDate(val, 'Y-M-D h:m:s')); // 打印值为：2020-02-02 20:20:20
     * console.log(ToolUtil.formatDate(val, 'Y-M-D')); // 打印值为：2020-02-02
     * console.log(ToolUtil.formatDate(val, 'Y.M.D')); // 打印值为：2020.02.02 
     */
    formatDate(num, format) {
        const formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
        const returnArr = [];
        const date = new Date(num);
        returnArr.push(date.getFullYear()); // 取得4位数的年份
        returnArr.push(this.__format_number(date.getMonth() + 1)); // 取得日期中的月份，其中0表示1月，11表示12月
        returnArr.push(this.__format_number(date.getDate())); // 返回日期月份中的天数（1到31）
        returnArr.push(this.__format_number(date.getHours())); // 返回日期中的小时数（0到23）
        returnArr.push(this.__format_number(date.getMinutes())); // 返回日期中的分钟数（0到59）
        returnArr.push(this.__format_number(date.getSeconds())); // 返回日期中的秒数（0到59）

        for (const i in returnArr) {
            if ({}.hasOwnProperty.call(returnArr, i)) {
                format = format.replace(formateArr[i], returnArr[i]); // 替换
            }
        }
        return format.replace('2020-','').replace('2021-','').replace('2022-','').replace('2023-','');
    }

    __format_number(n) {
        n = n.toString();
        return n[1] ? n : `0${n}`;
    }
}
export default new ToolUtil