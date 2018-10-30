<template>
  <div id="app">
    <div class="header">
      <div>
        <img src="//www.baidu.com/img/bd_logo1.png?where=super" />
      </div>
    </div>
    <div class="content">
      <div class="contenthead"><input  /></div>
      <div class="contentdiv"><p class="contenhend">百度一下</p></div>

    </div>
    <div class="footer">
      <div class="footerdiv">
        
      </div>
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
.header{
  height: 100px;
  text-align: center;
  /* background-color: red */
}
.header img{
  text-align: center;
  height: 100px;
  width: 200px;
}
.content{
  height: 200px;
  text-align: center
  /* background-color:blue */
}
.content .contenthead{
  height: 35px;
  width: 500px;
  display:inline-block;
}
.content .contenthead input{
  height: 35px;
  width: 500px;
  display:inline-block;
}
.content .contentdiv{
  height: 30px;
  width: 100px;
  display:inline-block;
}
.footer {
  width: 30px;
  height: 32px;
  /* background-color: red; */
  background-repeat: no-repeat;
  background-image: url("./images/weibo.png");
  background-position: -250px -149px;
}

.footer .footerdiv{
  text-align: center;
}
/* .content p{
  display: inline-block;
  background-color:rgb(123, 123, 233);
  height:35px;
  
} */
/* .content span{
    margin-top: -10px;
    border:1px;
    width:102px;
} */
</style>
