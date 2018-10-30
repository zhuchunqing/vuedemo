<template>
    <div id=User>
        {{this.$store.state.count}}
        {{msg}}
        <!-- <v-actionsheet></v-actionsheet> -->
         <!-- <mt-button @click.native="flag = true" size="large">选择用户头像</mt-button>
         <mt-actionsheet :actions="actions" v-model="flag"></mt-actionsheet> -->
         <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <li v-for="item in list">{{ item.title }}</li>
        </ul>
            <!-- <div class=User>
                <div class=left>
                    <ul>
                        <li >
                            <router-link to="/user/useradd">增加用户</router-link>
                        </li>
                        <li>
                             <router-link to="/user/userlist">用户列表</router-link> 
                            
                        </li>
                    </ul>
                </div>
                <div class=right>
                    内容区域
                    <router-view></router-view>
                </div>
            </div> -->
    </div>
</template> 
<script>
import store from '../vuex/store.js';
import ActionSheet from './ActionSheet.vue'
export default {
    data(){
        return{
            msg:"user组件",
            flag:false,
            actions:[],
            list:[],
            j:0,
        }
    },
        store,
    methods:{
        // takePhoto(){
        //     alert("执行拍照")
        // },
        // openAlbum(){
        //     alert("从相册中选择");
        // },
        loadMore() {
            this.requstData();
                // this.loading = true;
                // let last = this.list[this.list.length - 1];
                // alert(last);
                // for (let i = 1; i <= 80;i++, this.j++) {
                // this.list.push(i);
                //  }
                // this.loading = false;
            },
            requstData(){
            var api='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+495;
            this.$http.get(api).then((response)=>{
                this.list=response.body.result[0];
                console.log(response.body.result[0])
            }),(err)=>{
              }
           }
    },
    components:{
        'v-actionsheet':ActionSheet,
    },
    //  mounted() {
    //   this.actions = [{
    //     name: '拍照',
    //     method: this.takePhoto
    //   }, {
    //     name: '从相册中选择',
    //     method: this.openAlbum
    //   }];
    //   this.actions2 = [{
    //     name: '确定'
    //   }, {
    //     name: '返回上一步',
    //     method: this.goBack
    //   }];
    // }
}
</script>
<style lang="scss">
    .User{
        display: flex;
        li{
            display: block;
            // overflow: hidden;
        }
        .left{
            width: 200px;
            min-height: 400px;
            border-right: 1px solid #eee;
            li{
                line-height: 2;
            }
        }
        .right{
            flex: 1;

        }   
}
</style>
