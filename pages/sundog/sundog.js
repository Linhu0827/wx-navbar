const app = getApp()
const toast = require('../../utils/toast')
const config = require('../../utils/config')
const storage = require('../../utils/storage.js')
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageName: '日记',
    showNav: false,

    sundog: {
      navigation: ['舔狗日记',util.formatTime(new Date()),'晴天'],
      content: "今天我看见她好像特别难受，不知道为什么，我好想安慰一下，可是当我问的那一下，她叫我滚开，或许我真的有打扰到你吧，我想让她开心，所以我走开了"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  onShareTimeline: function (){},

  
})