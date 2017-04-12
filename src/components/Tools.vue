<template lang='pug'>
  div
    sketch(:color="color")
    div#picker
      div.dropdown
        button.btn.btn-primary.dropdown-toggle(href="#" tabindex="0") Settings
        ul.menu
          li.menu-item
            input.jscolor.form-input(v-model="color" v-validate="{ rules: { regex: /^#[0-9A-F]{6}$/i, required: true} }")
          li.divider(data-content="Clear Canvas")
          li.menu-item
            button.btn(v-on:click="confirmClear") Clear
          li.divider(data-content="Leave")
          li.menu-item
            button.btn(v-on:click="confirmLeave") Leave
</template>

<script>
import Sketch from './Sketch'

export default {
  name: 'tools',
  components: {
    Sketch
  },
  props: ['room'],
  data () {
    return {
      color: '#000000'
    }
  },
  methods: {
    confirmClear: function() {
      if(confirm("Clear everything?") === true) {
        this.$socket.emit('req.clear')
      }
    },
    confirmLeave: function() {
      if(confirm("Leave?") === true) {
        this.$socket.emit('req.leave', this._props.room)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#picker {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2
}
</style>
