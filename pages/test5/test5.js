// pages/test5/test5.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageName: '上拉刷新/下拉加载',
		showNav: true,
		back: true,

    list: [],
		height: (wx.getSystemInfoSync().windowHeight - app.globalData.navHeight) * 750 / wx.getSystemInfoSync().windowWidth,
  },

  onLoad: function () {
		let pages = getCurrentPages();
    let prevpage = pages[pages.length - 2];
    if(!prevpage)
      this.setData({ back: false })

		let height = (wx.getSystemInfoSync().windowHeight - app.globalData.navHeight) * 750 / wx.getSystemInfoSync().windowWidth - 180;
		// 注意获取时机，等组件渲染完成后再获取，避免拿到的是null
		this.arefresher = this.selectComponent('#arefresherid');
		const list = this.getList(20, []);
		this.setData({
			list,
			height
		});
		if(list.length < 12){
			this.arefresher.setNoMore();
			return;
		}
	},
	onRefresh() {
		console.log('on refresh');
		setTimeout(() => {
			const list = this.getList(20, []);
			this.setData({
				list
			});
			this.arefresher.stopRefresh();
		}, 3000);
	},
	onLoadMore() {
		console.log('on load more');
		if (this.data.list.length >= 60) {
			this.arefresher.setNoMore();
			return;
		}
		setTimeout(() => {
			const newList = this.getList(20, this.data.list.slice(0));
			if (newList.length <= 100) {
				this.setData({
					list: newList
				});
			}
			this.arefresher.stopLoadMore();
		}, 2000);
	},
	getList(count, list) {
		const length = list.length;
		const range = length + count;
		const newList = [];
		for (let i = length; i < range; i++) {
			newList.push({
				text: i,
				color: this.randomColor()
			});
		}
		return list.concat(newList);
	},
	randomColor() {
		const colorStr = Math.floor(Math.random() * 0xffffff).toString(16).toUpperCase();
		const length = colorStr.length;
		const prefixStr = '000000'.substring(0, 6 - length);
		return `#${prefixStr}${colorStr}`;
	},

	/**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  onShareTimeline: function (){},

  
})