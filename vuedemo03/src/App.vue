<template>


  <div id="app"> 
    <header class="header">
      <router-link to="/home">首页</router-link>
      <router-link to="/news">新闻</router-link>
      <router-link to="/header">头部</router-link>
      <router-link to="/content/aid">content</router-link>
      <router-link to="/pcontent">pcontent</router-link>
      <router-link to="/User">用户</router-link>
      <!-- <button @click="GetData()">测试数据</button> -->
    </header>
    <hr>
       <router-view></router-view>
  </div>

</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[
        '1111111','222222','333333'
    ],

    }
  },
  methods:{
        GetData(){
         this.$http.get('http://localhost/VisualStudioCode/api/values').then(response => {
        // get body data
            this.someData = response.body;
            console.log(response);        
          }, response => {
         // error callback
          });
        },
  }
  // // 挂载组件
  // components:{
  //   "v-home":Home,
  //   "v-news":News,
  //   "v-header":Header
  // }
}
</script>

<style lang="scss">
  .header{
    // top: 0px;
    height: 4.4rem;
    background: #000;
    color: #fff;
    line-height: 4.4rem;
    text-align: center;
    a{
      color: #fff;
      padding: 0 1rem;
    };
    button{
      color: #000;
      padding: 0 2rem;
    }
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  // display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
