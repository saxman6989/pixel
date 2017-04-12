<template lang='pug'>
  div
    tools(:room="room" v-show="visible")
    room-manager#room-manager(v-show="!visible")
    ul(v-show="!visible")
      room-card(:rooms="rooms")
        
</template>

<script>
import Tools from './Tools'
import RoomManager from './RoomManager'
import RoomCard from './RoomCard'

export default {
  name: 'lists',
  components: {
    Tools,
    RoomManager,
    RoomCard
  },
  data () {
    return {
      rooms: [],
      room: '',
      visible: false,
      index: null
    }
  },
  sockets:{
    'res.setup': function(rooms) {
      this.rooms = rooms
    },
    'res.join': function(data) {
      this.room = data.name
      this.visible = true
    },
    'res.leave': function() {
      this.room = null
      this.visible = false
    },
    'res.error': function(err) {
      alert(err)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#room-manager {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2
}
</style>
