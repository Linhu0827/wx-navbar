// pages/test2/test2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageName: '轮播吸顶',
    showNav: true,
    back: true,

    banner: [
      { src: '/img/backgroud/001_wximg.jpg' }, 
      { src: '/img/backgroud/002_wximg.jpg' }, 
      { src: '/img/backgroud/003_wximg.jpg' }, 
      { src: '/img/backgroud/004_wximg.jpg' }, 
      { src: '/img/backgroud/005_wximg.jpg' }, 
    ],
    current: 0,


    slider: [
      { src: '/img/backgroud/001_wximg.jpg' }, 
      { src: '/img/backgroud/002_wximg.jpg' }, 
      { src: '/img/backgroud/003_wximg.jpg' }, 
      { src: '/img/backgroud/004_wximg.jpg' }, 
      { src: '/img/backgroud/005_wximg.jpg' }, 
    ],
    swiperCurrent: 0,
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

  change: function (e) {
    this.setData({
      current: e.detail.current
    })
  },

  //轮播图的切换事件
  swiperChange: function(e){
    //只要把切换后当前的index传给<swiper>组件的current属性即可
        this.setData({
          swiperCurrent: e.detail.current
        })
      },
      //点击指示点切换
      chuangEvent: function(e){
        this.setData({
          swiperCurrent: e.currentTarget.id
        })
      },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  onShareTimeline: function (){},


})