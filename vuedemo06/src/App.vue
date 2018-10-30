<template>
  <div id="app">
    <div class="header">
      <div class="logo">
        <a href="" title="网易163免费邮"></a><a href="" title="网易126免费邮"></a><a href="" title="网易Yeah.net免费邮"></a>
      </div>
      <div class="links">
        <a href="" title="了解更多">了解更多</a> | <a href="" title="反馈意见">反馈意见</a>
      </div>
    </div>
    <div class="content">
      <div class="top">
        <h1>欢迎注册无限容量的网易邮箱！邮件地址可以登录使用其他网易旗下产品。</h1>
      </div>
      <div class="bottom">
        <div class="left">
          <div class="articTop">
            <ul>
              <li class="first">注册字母邮箱</li>
              <li class="second">注册手机号码邮箱</li>
              <li class="three">注册VIP邮箱</li>
            </ul>
          </div>
          <div class="articTobbom">
            <div class="line">
              <span><span class="star">*</span>邮件地址</span>
              <div>
                <input type="text">@
                <select>
                  <option value="163">163</option>
                  <option value="126">126</option>
                  <option value="测试">测试</option>
                </select>
              </div>
            </div>
            <p> 6~18个字符，可使用字母、数字、下划线，需以字母开头</p>
            <div class="line">
              <span><span class="star">*</span>密码</span>
              <div>
                 <input type="password" class="special">
              </div>
            </div>
            <p> 6~16个字符，区分大小写</p>
            <div class="line">
              <span><span class="star">*</span>确认密码</span>
              <div>
                <input type="password" class="special">
              </div>
            </div>
            <p> 请再次填写密码</p>
            <div class="line">
              <span><span class="star">*</span>手机号</span>
              <div>
                <input type="password" class="special">
              </div>
            </div>
            <p> 请填写正确的手机号</p>
            <div class="line">
              <span><span class="star">*</span>验证码</span>
              <div>
                <input type="text">
            </div>
            </div>
            <p> 请填写图片中的字符，不区分大小写</p>
            <div class="line">
              <span><span class="star">*</span>短信验证码</span>
              <div>
                <input type="password" class="special">
              </div>
            </div>
            <p> 请查收手机短信，并填写短信中的验证码</p>
            <p><input type="checkbox" checked="checked"> 隐私权相关政策</p>
            <p><input type="submit" value="注册提交"></p>
          </div>
        </div>
        <div class="right">
          <div class="logo"></div>
        </div>
      </div>
    </div>
    <div class="footer">
      <p> <a href="">关于网易</a>  <a  href="">关于网易免费邮</a>  <a  href="">邮箱官方博客</a>  <a  href="">客户服务</a>  <a href="">隐私政策</a>  |  网易公司版权所有 © 1997-2018</p>
      <p>数据来源：艾媒咨询《2015-2018中国个人邮箱行业研究报告》</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
html{color:#000}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{margin:0;padding:0}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}address,caption,cite,code,dfn,em,strong,th,var{font-style:normal;font-weight:normal}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}q:before,q:after{content:''}abbr,acronym{border:0;font-variant:normal}sup{vertical-align:text-top}sub{vertical-align:text-bottom}input,textarea,select{font-family:inherit;font-size:inherit;font-weight:inherit;*font-size:100%}legend{color:#000}#yui3-css-stamp.cssreset{display:none}
body{
  background-color: #F9F9F9;
  height: 100%;
}
.header{
  width: 960px;
  height: 68px;
  margin: 0 auto;
  padding-top: 28px;
  box-sizing: border-box;
}
.header .logo{
width: 644px;
height: 27px;
background: url("images/glb_v2.png") no-repeat 0 0;
float: left;
}
.header .logo a{
  height: 27px;
  width: 130px;
  display: inline-block;
}
.header .links{
  float:right;
  width: 200px;
  height: 27px;
  text-align: right;
}
.header .links a{
  font-size: 12px;
  text-decoration: none;
  color: #039;
  line-height: 27px;
}
.content{
  width: 960px;
  height: 600px;
  margin-top: 20px;
  margin: 20px auto;
}
.content .top{
  box-sizing: border-box;
  width: 960px;
  height: 38px;
  background-color: #5E8FC1;
  border:2px #5E8FC1 solid;
  border-radius: 3px 3px 3px 3px;
}
.content .top h1{
  font-size: 14px;
  line-height: 38px;
  font-weight: normal;
  color: #FFF;
  margin-left: 40px;
}
.content .bottom{
  width: 960px;
  height: 562px;
  /* background-color:rgb(202, 187, 187); */
}
.content .bottom .left{
  box-sizing: border-box;
  width: 642px;
  height: 562px;
  float: left;
  padding-top: 50px;
  padding-left: 80px;
  background-color: white;
}

.content .bottom .left .articTop{
  width: 560px;
  height: 60px;
  /* background-color: #000; */
}

.content .bottom .left .articTop ul{
  list-style: none;
  width: 450px;
  height: 34px;
}
.content .bottom .left .articTop ul .first{
  float: left;
  width: 137px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  background: url("images/glb_v2.png") no-repeat 0px -432px;
}
.content .bottom .left .articTop ul .second{
  float: left;
  width: 137px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  background: url("images/glb_v2.png") no-repeat -167px -432px;
}

.content .bottom .left .articTop ul .three{
  float: left;
  width: 167px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  background: url("images/glb_v2.png") no-repeat -528px -432px;
}
.content .bottom .left .articTobbom{
  width: 560px;
  height: 373px;
}
.content .bottom .left .articTobbom .line{
  width: 413px;
  height: 28px;
  /* background-color: rgb(79, 81, 196); */
  padding-left: 10px;
}
.content .bottom .left .articTobbom .line span{
  float: left;
  width: 60px;
  height: 28px;
  font-size: 12px;
  line-height: 28px;
  text-align: left;
}
.content .bottom .left .articTobbom .line .star{
  width: 6px;
  color: red;
}
.content .bottom .left .articTobbom .line div{
  float: left;
  width: 350px;
  height: 28px;
  /* background-color: skyblue; */
  text-align: left;
}
.content .bottom .left .articTobbom .line input{
  width: 214px;
  height: 24px;
}
.content .bottom .left .articTobbom .line .special{
  width: 337px;
}
.content .bottom .left .articTobbom .line select{
  width: 100px;
  height: 28px;
}
.content .bottom .left .articTobbom p{
  font-size: 12px;
  margin-left: 80px;
  line-height: 28px;
  margin-bottom: 4px;
}
.content .bottom .left .articTobbom .line div{
  float: left;
  width: 350px;
  height: 28px;
  /* background-color: skyblue; */
  text-align: left;
}
.content .bottom .left .articTobbom  input[type=submit]{
  width: 121px;
  height: 37px;
  background: url("images/glb_v2.png") no-repeat -144px -360px;
  border: none;
  color: white;
  margin-left: 0px;
  margin-top: 10px;
}
.content .bottom .right  {
  box-sizing: border-box;
  width: 318px;
  height: 562px;
  float: left; 
  padding-left: 80px;
  padding-top: 120px;
  background-color: #E0E0E0;
}
.content .bottom .right .logo{
  width: 212px;
  height: 216px;
  background:url("images/glb_v2.png") no-repeat -314px -61px;
}
.footer{
  width: 960px;
  height: 100px;
  margin: 0 auto;
  text-align: center;
  font-size: 12px;
  font-family: verdana,sans-serif;
    color: #999;
  /* background-color: brown; */
}
.footer p{
  padding-top: 23px;
}
.footer a{
  text-decoration: none;
  color: #999;
  display: inline-block;
}
</style>
