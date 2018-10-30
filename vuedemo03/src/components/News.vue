<template>
    <div>
        {{msg}}
     <ul class="list">
        <li v-for="(item,key) in list">
             <router-link :to="'/content/'+item.aid">{{item.title}}</router-link>
        </li>
     </ul>
    </div>
</template>
<script>
import store from '../vuex/store.js';
export default {
    data(){
        return{
            msg:"News组件msg",   
            list:['1111111','222222','333333'],
        }
    },
    store,
    methods:{
        GetData(){
         this.$http.jsonp('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1').then(response => {
        // get body data
            this.someData = response.body;
            this.list=response.body.result;
            console.log(response);     
            this.$store.commit("addlist",response.body.result)   
          }, response => {
              console.log(response);
          });
        },
    },
    mounted(){
        var listData=this.$store.state.list;
        console.log(listData.length)
        // if(listData.length>0){
        //     this.list=listData
        // }
        // else{
        //     this.GetData()
        // }
        this.GetData();
    }
}
</script>
<style lang="scss" scoped>
ul{
    margin:0px;padding:0px;
}
.list{
    li {
    // list-style: none;
        display: block;
        overflow: hidden;
        margin: 0px;
        text-align: left;
        font-size: 15px;
        height: 3.4rem;
        line-height: 3.4rem;
        border-bottom: 1px solid #eee;
    //   float: left;
        }
}
</style>



