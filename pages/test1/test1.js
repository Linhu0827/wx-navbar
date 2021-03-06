// pages/test1/test1.js
/**
 * 数据名必须为:lazyData或其它名(与数据以及页面相同)
 *
 * 模拟数据：lazyData
 * 传输数据：_that,data(this,lazyData,lazy_name,loading_icon)
 */
const lazyImg = (_that, data, lazy_name, loading_icon) => {
  for (let i = 0, len = data.length; i < len; i++) {
    wx.createIntersectionObserver().relativeToViewport({
      bottom: 20
    }).observe('.item-' + i, (ret) => {
      ret.intersectionRatio > 0 ? data[i].show = true : '';
      _that.setData({
        [lazy_name]: data,
        loadIcon: loading_icon
      })
    })
  }
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageName: '图片懒加载',
    showNav: true,
    back: true,

    damoHeight: '150',//demo高度
    lazyData: [//图片地址
      { src: '/img/backgroud/001_wximg.jpg' }, 
      { src: '/img/backgroud/002_wximg.jpg' }, 
      { src: '/img/backgroud/003_wximg.jpg' }, 
      { src: '/img/backgroud/004_wximg.jpg' }, 
      { src: '/img/backgroud/005_wximg.jpg' }, 
      { src: '/img/backgroud/006_wximg.jpg' }, 
      { src: '/img/backgroud/007_wximg.jpg' }, 
      { src: '/img/backgroud/008_wximg.jpg' }, 
      { src: '/img/backgroud/001_wximg.jpg' }, 
      { src: '/img/backgroud/002_wximg.jpg' }, 
      { src: '/img/backgroud/003_wximg.jpg' }, 
      { src: '/img/backgroud/004_wximg.jpg' }, 
      { src: '/img/backgroud/005_wximg.jpg' }, 
      { src: '/img/backgroud/006_wximg.jpg' }, 
      
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let pages = getCurrentPages();
    let prevpage = pages[pages.length - 2];
    if(!prevpage)
      this.setData({ back: false })
    /**
     * this - 当前对象
     * this.data.lazyData - 数据源
     * lazy_name - 数据名
     * 加载图标 - https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif
     */
    lazyImg(this, this.data.lazyData, 'lazyData', 'https://img.alicdn.com/tps/i3/T1QYOyXqRaXXaY1rfd-32-32.gif')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  onShareTimeline: function (){},

})