<template>
  <div id="app">
    {{ info }}
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: 'app',
  components: {
    
  },
  data () {
    return {
      info: null
    }
  },
  created() {
   
  },
  mounted () {
    axios
      .get('https://enwebsideapi.herokuapp.com/items/5c7e72810f1ef621725221aa')
      .then(response => (this.info = response))
  },
  methods: {
    
   
    
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
</style>
