
//各种验证

module.exports = {

  /**
   * 手机验证
   */
  phone(phone) {
    let reg = /(^1[3|4|5|7|8|9]\d{9}$)|(^09\d{8}$)/;
    return !reg.exec(phone) ? false : true;
  },

  /**
   * 银行卡号正则
   */
  bankCard(card_number){
    let reg = /^\d{19}$/g;
    return !reg.exec(card_number) ? false : true;
  },

  /**
   * 身份证号验证
   */
  idCard(idCard){
    let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return !reg.exec(idCard)?false:true;
  },

}