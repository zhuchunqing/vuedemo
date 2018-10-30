<template>
  <div id="app">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>      
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
}
li {
  /* display: inline-block; */
  /* width: 60%; */
  /* flex: 1; */
  margin: 200px;
}
a {
  color: #42b983;
}
</style>
