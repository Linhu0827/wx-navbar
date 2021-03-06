module.exports = {

  regStrFn: function (str) {
    let reg = /([^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n])|(\s)/g,
      indexArr = reg.exec(str);
    if (str.match(reg)) {
      str = str.replace(reg, '');
    }
    let obj = { val: str, index: indexArr }
    return obj
  }, 

  /**
   * 格式化时间
   * @param   object  date            时间
   * @param   string  date_join_str   日期间隔符 默认'/'
   * @param   boolean is_hms          是否显示时分秒 默认显示
   * @retrun  string
   */
  formatTime (date, date_join_str = '/', is_hms = true) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(this.formatNumber).join(date_join_str)
      + (is_hms ? ' ' + [hour, minute, second].map(this.formatNumber).join(':') : '')
  },

  addMonth(addNum = 1){
        var num = parseInt(addNum);
        var d=new Date(); 
        
        var thisMonth = d.getMonth()+1;
        var thisYear = d.getFullYear();
        var thisDay = d.getDate();
        var thisHour = d.getHours();
        var thsiMinu = d.getMinutes();
        var thisSecon = d.getSeconds();
        
        var addCount = thisMonth + num;
        var diffMonthCount = parseInt(addCount/12);    //取整
        
        if((thisMonth + num) == 12*diffMonthCount){    //如果是本年
            if((thisMonth + num) == 12){
                diffMonthCount = 0;
            }else{
                diffMonthCount = diffMonthCount-1;
            }
        }
        if(thisMonth + num > 12){    //如果是大于一年
            thisYear += diffMonthCount;
        }
        thisMonth = (addCount)-12*diffMonthCount;
        if(thisMonth < 10){
            thisMonth = "0"+thisMonth;
        }
        if(thisHour < 10){
            thisHour = "0"+thisHour;
        }
        if(thsiMinu < 10){
            thsiMinu = "0"+thsiMinu;
        }
        if(thisSecon < 10){
            thisSecon = "0"+thisSecon;
        }
        
        var thatDate = new Date(thisYear,thisMonth,0); //当天数为0 js自动处理为上一月的最后一天
        var thatDay = thatDate.getDate();//指定年月的当月最大天数
        
        var diffDay = thatDay - thisDay;
        if((thatDay - thisDay) > 0 || (thatDay - thisDay) < 0){
            thisDay = thatDay;
        }
        var dateStr = "";
        if(thsiMinu == 0 && thisSecon == 0){
            dateStr = thisYear + "-" + thisMonth + "-" + thisDay;
        }else{
            dateStr = thisYear + "-" + thisMonth + "-" + thisDay +" " +thisHour+":"+ thsiMinu+":"+thisSecon;
        }
        return dateStr;
    },

    // 判断是否为手机号
    isPoneAvailable(phone) {
      var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      if (!myreg.test(phone)) {
          return false;
      } else {
          return true;
      }
  },


  /**
   * 时间加法运算
   * @param   string  interval    运算单位 默认d（年-y 季度-q 月-m 周-w 天-d 小时-h 分钟-i 秒-s）
   * @param   int     add_number  添加数量
   * @param   object  date        时间
   * @retrun  object  时间
   */
  dateAdd (interval, add_number, date) {
    switch (interval) {
      case "y": {
        date.setFullYear(date.getFullYear() + add_number);
        return date;
        break;
      }
      case "q": {
        date.setMonth(date.getMonth() + add_number * 3);
        return date;
        break;
      }
      case "m": {
        date.setMonth(date.getMonth() + add_number);
        return date;
        break;
      }
      case "w": {
        date.setDate(date.getDate() + add_number * 7);
        return date;
        break;
      }
      case "d": {
        date.setDate(date.getDate() + add_number);
        return date;
        break;
      }
      case "h": {
        date.setHours(date.getHours() + add_number);
        return date;
        break;
      }
      case "i": {
        date.setMinutes(date.getMinutes() + add_number);
        return date;
        break;
      }
      case "s": {
        date.setSeconds(date.getSeconds() + add_number);
        return date;
        break;
      }
      default: {
        date.setDate(date.getDate() + add_number);
        return date;
        break;
      }
    }
  },


  /**
   * 数据类型判断
   */
  dataType (data) {
    var Type = Object.prototype.toString.call(data)
    if (Type == '[object Array]') {
      return 'Array'
    } else if (Type == '[object Object]') {
      return 'Object'
    } else {
      return typeof data
    }
  },

  // 保存图片方法
  saveImage(filePath) {
    wx.downloadFile({
      url: filePath,     //图片地址
      success: function (res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success(res) {
              wx.showToast({
                title: '保存图片成功！',
              })
            },
            fail(res) {
              wx.showToast({
                title: '保存图片失败！',
              })
            }
          })
        }
      }
    })
  },

  formatNumber (n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  },

  /**
   * 获取当前页url
   */
  getCurrentPageUrl () {
    var pages = getCurrentPages()    //获取加载的页面
    var currentPage = pages[pages.length - 1]    //获取当前页面的对象
    var url = currentPage.route    //当前页面url
    return '/' + url
  },

  /**
   * 获取当前页带参数的url
   */
  getCurrentPageUrlWithArgs () {
    var pages = getCurrentPages()    //获取加载的页面
    var currentPage = pages[pages.length - 1]    //获取当前页面的对象
    var url = currentPage.route    //当前页面url
    var options = currentPage.options    //如果要获取url中所带的参数可以查看options

    //拼接url的参数
    var urlWithArgs = url + '?'
    for (var key in options) {
      var value = options[key]
      urlWithArgs += key + '=' + value + '&'
    }
    urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1)

    return '/' + urlWithArgs
  },

  /**
   * 获取当前时间
   */
  getNowTime () {
    var myDate = new Date();
    let year = myDate.getFullYear(); //年份
    let month = myDate.getMonth() + 1; //月份
    if (month < 10) {
      month = '0' + month;
    }
    let day = myDate.getDate();  //日子
    if (day < 10)
      day = '0' + day;
    let hour = myDate.getHours();  //小时数
    let date = year + '-' + month + '-' + day;
    //console.log(year + '-' + month + '-' + day);
    return { date, hour };
  },

  /**
   * 格式化金钱数量，转换为大写
   */
  moneyFormat (money) {
    //汉字的数字    
    var cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
    //基本单位    
    var cnIntRadice = new Array('', '拾', '佰', '仟');
    //对应整数部分扩展单位    
    var cnIntUnits = new Array('', '万', '亿', '兆');
    //对应小数部分单位    
    var cnDecUnits = new Array('角', '分', '毫', '厘');
    //整数金额时后面跟的字符    
    var cnInteger = '整';
    //整型完以后的单位    
    var cnIntLast = '元';
    //最大处理的数字    
    var maxNum = 999999999999999.9999;
    //金额整数部分    
    var integerNum;
    //金额小数部分    
    var decimalNum;
    //输出的中文金额字符串    
    var chineseStr = '';
    //分离金额后用的数组，预定义    
    var parts;
    if (money == '') {
      return '';
    }
    money = parseFloat(money);
    if (money >= maxNum) {
      //超出最大处理数字      
      return '';
    }
    if (money == 0) {
      chineseStr = cnNums[0] + cnIntLast + cnInteger;
      return chineseStr;
    }
    //转换为字符串    
    money = money.toString();
    if (money.indexOf('.') == -1) {
      integerNum = money;
      decimalNum = '';
    } else {
      parts = money.split('.');
      integerNum = parts[0];
      decimalNum = parts[1].substr(0, 4);
    }
    //获取整型部分转换    
    if (parseInt(integerNum, 10) > 0) {
      var zeroCount = 0;
      var IntLen = integerNum.length;
      for (var i = 0; i < IntLen; i++) {
        var n = integerNum.substr(i, 1);
        var p = IntLen - i - 1;
        var q = p / 4;
        var m = p % 4;
        if (n == '0') {
          zeroCount++;
        } else {
          if (zeroCount > 0) {
            chineseStr += cnNums[0];
          }
          //归零          
          zeroCount = 0;
          chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
        }
        if (m == 0 && zeroCount < 4) {
          chineseStr += cnIntUnits[q];
        }
      }
      chineseStr += cnIntLast;
    }
    //小数部分    
    if (decimalNum != '') {
      var decLen = decimalNum.length;
      for (var i = 0; i < decLen; i++) {
        var n = decimalNum.substr(i, 1);
        if (n != '0') {
          chineseStr += cnNums[Number(n)] + cnDecUnits[i];
        }
      }
    }
    if (chineseStr == '') {
      chineseStr += cnNums[0] + cnIntLast + cnInteger;
    } else if (decimalNum == '') {
      chineseStr += cnInteger;
    }
    return chineseStr;
  },
  
  /**
   * 金额处理
   * @param   v  金额  数字
   * @retrun  符合标准的金额
   */
  amountFormat (v) {
    var inputVal;
    inputVal = v.replace(/[^\d.]/g, "").replace(/^\./g, "").replace(/\.{2,}/g, ".").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    var reg = /^\d+(\.\d{1,2})?$/;
    if (reg.test(inputVal)) {
      return inputVal;
    } else {
      if (v == '.') {
        components
        return inputVal;
      } else {
        let a = inputVal.split('.')
        let b = a[1]
        if (b) {
          if (b.length > 2) {
            inputVal = a[0] + '.' + a[1].substr(0, 2)
          }
        }
        return inputVal;
      }
    }
    return inputVal;
  },

  // 倒计时
  countdown(that) {
    var EndTime = '1591350439000';
    // console.log(EndTime);
    var NowTime = new Date().getTime();
    var total_micro_second = EndTime - NowTime || [];   //单位毫秒
    if (total_micro_second < 0) {
      // console.log('时间初始化小于0，活动已结束状态');
      total_micro_second = 1;     //单位毫秒 ------  WHY？
    }
    // 渲染倒计时时钟
    that.setData({
      clock: dateformat(total_micro_second)   //若已结束，此处输出'0天0小时0分钟0秒'
    });
    console.log(that.data.clock)
    if (total_micro_second <= 0) {
      that.setData({
        clock: "活动已经截止"
      });
      return;
    }
    setTimeout(function () {
      total_micro_second -= 1000;
      countdown(that);
    }
      , 1000)
  },
 
  // 时间格式化输出，如11天03小时25分钟19秒  每1s都会调用一次
  dateformat(micro_second) {
    // 总秒数
    var second = Math.floor(micro_second / 1000);
    // 天数
    var day = Math.floor(second / 3600 / 24);
    // 小时
    var hr = Math.floor(second / 3600 % 24);
    // 分钟
    var min = Math.floor(second / 60 % 60);
    // 秒
    var sec = Math.floor(second % 60);
    return day + "天" + hr + "小时" + min + "分钟" + sec + "秒";
  },

  /**
 * 处理富文本里的图片宽度自适应
 * 1.去掉img标签里的style、width、height属性
 * 2.img标签添加style属性：max-width:100%;height:auto
 * 3.修改所有style里的width属性为max-width:100%
 * 4.去掉<br/>标签
 * @param html
 * @returns {void|string|*}
 */
formatRichText(html){
  let newContent= html.replace(/<img[^>]*>/gi,function(match,capture){
    match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
    match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
    match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
    return match;
  });
  newContent = newContent.replace(/style="[^"]+"/gi,function(match,capture){
    match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi, 'max-width:100%;');
    return match;
  });
  newContent = newContent.replace(/<br[^>]*\/>/gi, '');
  newContent = newContent.replace(/\<img/gi, '<img style="max-width:100%;height:auto;"');
  return newContent;
}


}
