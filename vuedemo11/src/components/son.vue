<template> <div class="message">
    <div class="message-header">
        <h5 v-text="theCardTitle"></h5> 
           </div> <div class="message-body"> 
               <!-- <p class="message-text">我是Brother组件</p>  -->
               <button @click="messageSister" class="btn">给妹妹发消息</button> 
               <div v-if="fromSister" class="alert" v-html="fromSister">
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
                 theCardTitle:"我是Brother组件",
                 fromSister:"",
             }
         },
         methods: {
              messageSister()
                { 
                  eventBus.$emit('brotherSaid',"妹妹要写作业哦")
                } 
         },
         created(){
             eventBus.$on("sisterSaid",message=>{
                 this.fromSister=message;
             })
         } 
    } 
</script>