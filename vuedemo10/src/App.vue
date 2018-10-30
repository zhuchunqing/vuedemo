<template>
  <div id="app">
    <div class="header">
      <v-header v-bind:seller="seller"></v-header>
    </div>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
     <router-view></router-view>
  </div>
</template>

<script>

const ERR_OK=0;
import header from './components/header/header.vue';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';
export default {
  data(){
    return{
      seller:{}
    }
  },
  components:{
    "v-header":header
  },
  created(){
      this.$http.get('/api/seller').then(response => {
        response=response.body;
        console.log(response);
        if(response.errno===ERR_OK){
          this.seller=response.data;
        }
      }, response => {
      });
  }
}
</script>

<style lang="stylus">
@import './common/stylus/mixin.styl'
/* @import "../static/css/reset.css"; */
#app .tab{
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-1px(rgba(7,17,27,0.1));
}
#app .tab .tab-item{
  flex: 1;
  text-align: center;
}
#app .tab .tab-item a{
  display:block;
  font-size: 14px;
  color: rgb(77,85,93) 
}
#app .tab .tab-item .router-link-exact-active {
  color: red;
}
</style>
