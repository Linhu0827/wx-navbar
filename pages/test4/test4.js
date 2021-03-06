// pages/test4/test4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageName: '日历',
    showNav: true,
    back: true,

    selected: [
      {
        date: '2021-1-2'
      }, {
        date: '2018-5-22'
      },{
        date: '2018-5-24'
      },{
        date: '2018-5-25'
      }
    ],
    data: '当前选中日期',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let pages = getCurrentPages();
    let prevpage = pages[pages.length - 2];
    if(!prevpage)
      this.setData({ back: false })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
  * 日历是否被打开
  */
  bindselect(e) {
    console.log(e.detail.ischeck)
  },
  /**
   * 获取选择日期
   */
  bindgetdate(e) {
    let time = e.detail;
    console.log(time,123)
    let data = '当前选中日期:' + time.year + '年' + time.month + '月' + time.date + '日';
    this.setData({
      data
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  onShareTimeline: function (){},


})