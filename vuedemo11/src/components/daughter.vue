<template> <div class="message">
    <div class="message-header">
        <h5 v-text="theCardTitle"></h5> 
           </div> <div class="message-body"> 
               <!-- <p class="message-text">我是Brother组件</p>  -->
               <button @click="messageBrother" class="btn">给哥哥发消息</button> 
               <div v-if="fromBrother" class="alert" v-html="fromBrother">
               </div> 
            </div> 
    </div> 
</template>
<script> 
    import {eventBus} from '../main'
    export default 
    {
        //  props: ['messageSon'],
         data(){
             return{
                 theCardTitle:"我是Sister组件",
                 fromBrother:"",
             }
         },
         methods: {
              messageBrother()
                { 
                  eventBus.$emit('sisterSaid',"哥哥要写作业哦")
                } 
         },
         created(){
             eventBus.$on("brotherSaid",(message)=>{
                 this.fromBrother=message;
             })
         } 
    } 
</script>
