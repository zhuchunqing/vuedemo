<!-- NumberComponent.vue --> 
<template> 
  <div> 
    <h2>The numbers are {{ numbers }}</h2> 
  </div>
</template>

<script> 
  export default { 
    name: 'NumberComponent', 
    data: () => ({ numbers: [1, 2, 3] }) } 
</script>

<style>
</style>
