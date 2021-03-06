Page({
  data: {
    phone: '',
    password: '',
    success: false,
    text: ''
 
  },
 
  // 获取输入账号 
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
 
  // 获取输入密码 
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
 
  // 登录 
  login: function () {
    var that = this;   
 
    var warn = null; //warn为当手机号为空或格式不正确时提示用户的文字，默认为空
    if (that.data.phone.length == 0) {
      wx.showToast({
        title: '用户名不能为空',
        icon: 'loading',
        duration: 1000
      })
    } else if (that.data.password.length == 0) {
      wx.showToast({
        title: '密码不能为空',
        icon: 'loading',
        duration: 1000
      })
    }else {
      
      wx.request({
        url: 'http://192.168.41.40:8002/login',
        method: "POST",
        data: {
          cardNo: that.data.phone,
          password: that.data.password
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          if (res.data.state == 1) {  //判断是否能正常登录
            warn = "卡号密码不匹配";
            wx.showModal({
              title: '提示',
              content: warn
            })
            return;
          } else {
            that.setData({
              success: true,
              text: res.data.url
            })
          }
        }
 
      })
 
 
 
    }
  },
  // 注册 
  registerClick: function () {
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },

  loginClick: function() {
    wx.navigateTo({
      url: '../info/info',
    })
  }
 
})
