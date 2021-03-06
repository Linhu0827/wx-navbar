const app = getApp()
const toast = require('../../utils/toast')

Page({
  data: {
    pageName: '首页',
    showNav: false,
    isIphoneX: app.globalData.systemInfo.model.search('iPhone X') != -1 ? true : false,

    func1: [
      { name: '单一列表图片懒加载', id: 1, color: '#CC329D', url: '/pages/test1/test1' },
      { name: '轮播吸顶', id: 2, color: '#FFD31C', url: '/pages/test2/test2' },
      { name: '签名板', id: 3, color: '#09BFEA', url: '/pages/test3/test3' },
      { name: '日历选择', id: 4, color: '#09BFB6', url: '/pages/test4/test4' },
      { name: 'echarts', id: 5, color: '#09BF7B',url: '/echarts/index/index' },
      { name: '上拉刷新/下拉加载', id: 6, color: '#09BF3F',url: '/pages/test5/test5' },
      { name: '垂直导航', id: 7, color: '#FF9966',url: '/pages/shop/shop' },
      { name: '滑动菜单', id: 8, color: '#5677FC',url: '/tools/swipe-action/swipe-action' },
      { name: '滚动消息', id: 9, color: '#333366',url: '/tools/rolling_news/rolling_news' },
    ],
  },
  onLoad: function () {
    
  },

  onShow(){
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
    this.toggleDelay();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  onShareTimeline: function (){},

  goModel(e){
    let url = e.currentTarget.dataset.url;
    if(url.length <= 0){
      return toast.toast('努力制作中...')
    }
    wx.showLoading({
      title: '加载中...',
      mask: true,
    })
    wx.navigateTo({
      url: url,
      success(res) {
        wx.hideLoading();
      }
    })
  },

  toggleDelay() {
    var that = this;
    that.setData({
      toggleDelay: true
    })
    setTimeout(function() {
      that.setData({
        toggleDelay: false
      })
    }, 1000)
  }

  
})
