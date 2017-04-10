<template lang='pug'>
  .app
    tools
  </div>
</template>

<script>
import Tools from './components/Tools'

export default {
  name: 'app',
  components: {
    Tools
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
