// pages/my/my.js
const app = getApp()
const toast = require('../../utils/toast')
const util = require('../../utils/util')
const config = require('../../utils/config')
const storage = require('../../utils/storage.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageName: '用户中心',
    showNav: false,
    isIphoneX: app.globalData.systemInfo.model.search('iPhone X') != -1 ? true : false,

    func2: [
      { name:'关于组件', type: '', tap:'goAbout', icon: '../../img/user/info_icon.svg' },
      { name:'功能日志', type: '', tap: 'goLogs', icon: '../../img/user/logs_icon.svg' },
      { name:'意见反馈', type: 'feedback', tap:'', icon: '../../img/user/about_icon.svg' },
      { name:'更多功能', type: '', tap:'goUnder', icon: '../../img/user/set_icon.svg' },
    ],

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
        selected: 2
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  onShareTimeline: function (){},

  //滚动条监听
  scroll: function (e) {
    this.setData({ scrollTop: e.detail.scrollTop })
  },

  // 关于组件
  goAbout(){
    wx.showLoading({
      title: '加载中...',
      mask: true,
    })
    wx.navigateTo({
      url: '/user/about/about',
      success(res) {
        wx.hideLoading();
      }
    })
  },

  // 更新日志
  goLogs(){
    wx.showLoading({
      title: '加载中...',
      mask: true,
    })
    wx.navigateTo({
      url: '/user/logs/logs',
      success(res) {
        wx.hideLoading();
      }
    })
  },

  // 建设中
  goUnder(){
    toast.toast('正在建设中...')
  },


})