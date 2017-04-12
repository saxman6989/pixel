<template lang='pug'>
  div.dropdown
    button.btn.btn-primary.dropdown-toggle(href="#" tabindex="0") Rooms
    ul.menu
      li.menu-item
        input.form-input(v-model="room")
      li.divider
      li.menu-item
        input.form-input(v-model="coverURL")
      li.divider
      li.menu-item      
        button.btn(v-on:click="create") Create
</template>

<script>

export default {
  name: 'room-manager',
  data () {
    return {
      room: 'Room 1',
      coverURL: 'http://imgsv.imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-140mmf_35-56g_ed_vr/img/sample/sample1_l.jpg'
    }
  },
  methods: {
    create: function() {
      this.$socket.emit('req.create', {
        room: this.room,
        coverURL: this.coverURL
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
