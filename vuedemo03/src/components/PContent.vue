<template>
    <div id=Pcontent>
        {{msg}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:"Pcontent"
        }
    },
    mounted(){
        // 获取动态路由传值
        console.log(this.$route.query);
    }
}
</script>

