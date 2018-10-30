<template>
   <div id=home>
<el-button type="primary" icon="el-icon-edit"></el-button>
       <h2>我是home组件--{{msg}}</h2>
       我是首页组件  -- {{this.$store.state.count}}-----{{this.$store.getters.computedCount}}
       <br>
       <button @click="incCount()">增加数量</button>
   </div>
</template>
<script>
// import Header from '../components/Header.vue';
// import VueEvent from '../model/vueEmit';
import store from '../vuex/store.js';

export default {
    data(){
        return{
            msg:"我是home组件数据",
            title:"home里面的title"
        }
    },
    store,
    methods:{
        run(){
            alert("home组件的run方法")
        },
        incCount(){
            // this.$store.commit('increment')
              this.$store.dispatch('mutationsCount');
        },

        GetData(){
         this.$http.jsonp('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1').then(response => {
        // get body data
            this.someData = response.body;
            console.log(response);        
          }, response => {
              console.log(response);
          });
        },
        getNews(){
            // this.$router.push({path:'news'})
            this.$router.push({name:'news'})
        },
        // GetChirenData(){
        //     // alert(this.$refs.header.msg)
        //     this.$refs.header.run()
        // },
        // run(){
        //     alert("父组件run方法");
        // },
        // emitNews(){
        //     VueEvent.$emit("to-new",this.mes)
        // }
    },
    // mounted(){
    //     GetData();
    // }
    
  // 挂载组件
//   components:{
//     "v-header":Header
//   },
}
</script>
<style lang="scss" scoped>
    h2{
        color:red
    }

</style>



