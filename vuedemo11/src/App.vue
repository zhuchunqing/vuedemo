<template>
  <div id="app">
    <div class="card-header"> 
      <h5 v-text="theCardTitle"></h5>
       <!-- <button @click="momSaidChill()" v-if="stopFighting()">给子组件发送一个消息</button> </div>  -->
    <div class="card-body"> 
      <brother-card :messageSon="messageson" @brotherSaid="messageSon">
      </brother-card> 
      <sister-card :messageDaughter="messagedaughter" @sisterSaid="messageDaughter"></sister-card> 
    </div>
    </div>
  </div>
</template>

<script>
import daughter from './components/daughter.vue';
import son from './components/son.vue';

export default {
  name: 'PatentCard',
  data () {
    return {
      messagedaughter:'daughter',
      messageson:'son',
      theCardTitle:"patient组件"
    }
  },
  components:{
    'brother-card':son,
    'sister-card':daughter
  },
methods: {
    messageDaughter(message) {
      this.messageson = message; 
       }, 
    messageSon(message) {
      this.messagedaughter = message;
      },
    // stopFighting() { 
    //   if (this.messagedaughter && this.messageson) 
    //     { return true }
    //   return false }, 
    // momSaidChill() { 
    //   this.messagedaughter = '', this.messageson = '' }
  }
}
</script>
<style>
</style>
