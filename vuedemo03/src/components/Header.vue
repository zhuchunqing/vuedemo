<template>
    <div>
        <h1> 我是header组件--{{msg}}</h1>
        <!-- <button @click="getPatent()">子组件获取父组件方法</button> -->
    </div>
</template>
<script>

export default {
    data(){
        return{
            msg:"Header组件msg"
        }
    },
    methods:{
        run(){
            alert("header里面的run方法")
        },
        getPatent(){
            // alert(this.$parent.mes)
            this.$parent.run();
        }
    }
}
</script>



