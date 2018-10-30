<template>
    <div id=content>
        我是详情
        <h2>{{list.title}}</h2>
        <div v-html="list.content">{{list.content}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:"content",
            list:[],
        }
    },
    mounted(){
        // 获取动态路由传值
        var aid=this.$route.params.aid;
        this.requestData(aid);
    },
    methods:{
        requestData(aid){
            var api='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;
            this.$http.get(api).then((response)=>{
                this.list=response.body.result[0];
            }),(err)=>{

            }
        }
    }
}
</script>

<style lang="scss">
    #content{
        padding: 1rem;

        line-height: 2;
     img{
            max-width: 100%;
        }
    }

</style>
