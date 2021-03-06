module.exports = {
  //异步设置缓存
  Set: (key, value) => {
    wx.setStorage({
      key: key,
      data: value
    })
  },
  //同步设置缓存
  SetSync: (key, value) => {
    try {
      wx.setStorageSync(key, value)
    } catch (e) {

    }
  },
  //异步获取缓存
  Get: (key) => {
    return new Promise((resolve, reject) => {
      wx.getStorage({
        key: key,
        success: function (res) {
          resolve(res)
        },
        fail: function (re) {
          reject(re)
        }
      })
    })
  },
  //同步获取缓存
  GetSync: (key) => {
    try {
      var value = wx.getStorageSync(key)
      if (value) return value;
    } catch (e) {
      return false;
    }
  },
  //同步删除缓存
  DelSync: (key) => {
    try {
      wx.removeStorageSync(key)
    } catch (e) {
      return false;
    }
  },
}