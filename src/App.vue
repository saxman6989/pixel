<template lang='pug'>
  .app
    sketch
  </div>
</template>

<script>
import Sketch from './components/Sketch'

export default {
  name: 'app',
  components: {
    Sketch
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
