const updateManager = wx.getUpdateManager()

const storage = require('utils/storage.js')

const base64Fun = require('utils/base64.js')
const base64Obj = new base64Fun.Base64()

const util = require('utils/util.js')
const md5Obj = require('utils/md5.js')
const sha1Obj = require('utils/sha1.js')

const config = require('utils/config.js')
App({
  onLaunch: function () {
    let that = this

    // 更新
    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      if (res.hasUpdate) {
        updateManager.onUpdateReady(function () {
          wx.showModal({
            title: '更新提示',
            content: '新版本已经准备好，是否重启应用？',
            success: function (res) {
              if (res.confirm) {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                updateManager.applyUpdate()
              }
            }
          })
        })
      }
    })

    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: res => {
        //导航高度
        let statusBarHeight = res.statusBarHeight,
          navTop = menuButtonObject.top,
          navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight)*2;
        this.globalData.navHeight = navHeight;
        this.globalData.navTop = navTop;
        this.globalData.windowHeight = res.windowHeight;
        this.globalData.systemInfo  = res;
      },
      fail(err) {
        console.log(err);
      }
    })
    
  },


  /**
   * 请求接口
   * @param   string  uri     接口地址
   * @param   object  data    提交数据
   * @param   string  method  请求类型
   */
  requestApi: function (uri, data = {}, method = 'POST') {
    var that = this
    var data = that.paramAction(data)
    return new Promise((resolve, reject) => {
      wx.request({
        url: config.api_root + config.app_dir + uri,
        data: data,
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: method.toUpperCase(),
        success: function (res) {
          wx.hideLoading();
          if(res.statusCode == 200){
            var returnData = res.data
            resolve(returnData)
          }else{
            wx.showToast({
              title: '请求超时！',
              icon: 'none',
              duration: 1500
            })
          }
          
        },
        fail: function () {
          wx.hideLoading();
          wx.showToast({
            title: '请求超时！',
            icon: 'none',
            duration: 1500
          })
        }
      })
    })
  },


  /**
   * 请求参数封装
   * @param   object   param   参数
   */
  paramAction: function (param) {
    var data = {}
    var user_id = storage.GetSync('uid')

    if(user_id)
      param.user_id = user_id

    var paramStr = base64Obj.encode(JSON.stringify(param), 'utf-8')

    data.params = paramStr
    data.sign = sha1Obj.hex_sha1(md5Obj.hex_md5(param))

    return data
  },


  /**
   * 图片上传
   */
  picUpload(path, file, data = {}, name = 'picture') {
    let that = this;
    return new Promise((resolve, reject) => {
      wx.uploadFile({
        url: config.api_root + path,
        filePath: file,
        name: 'picture',
        formData: that.paramAction(data),
        success: function (res) {
          var returnData = JSON.parse(res.data)
          resolve(returnData)
        },
        fail: function () {
          reject()
        }
      })
    })
  },

  globalData: {
    systemInfo: null,//客户端设备信息
    userInfo: null,
  }
})
