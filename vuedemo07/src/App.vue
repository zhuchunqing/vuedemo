<template>
  <div id="app">
    <div class="box1">
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
html{color:rgb(5, 0, 0)}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{margin:0;padding:0}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}address,caption,cite,code,dfn,em,strong,th,var{font-style:normal;font-weight:normal}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}q:before,q:after{content:''}abbr,acronym{border:0;font-variant:normal}sup{vertical-align:text-top}sub{vertical-align:text-bottom}input,textarea,select{font-family:inherit;font-size:inherit;font-weight:inherit;*font-size:100%}legend{color:#000}#yui3-css-stamp.cssreset{display:none}
.box1{
  width: 520px;
  height: 280px;
  /* background-color: rgb(161, 39, 39); */
}
.box1 span{
  width: 200px;
  height: 200px;
  background-color:red;
  position: absolute;
}
.box2{
  width: 100px;
  height: 100px;
  /* background-color: rgb(22, 17, 17); */
  position: fixed;
}
.box3{
  width: 100px;
  height: 2800px;
  background-color: rgb(57, 19, 224);
}
</style>
