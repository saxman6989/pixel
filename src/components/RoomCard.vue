<template lang='pug'>
  div.columns
    li(v-for="room in rooms")
      div.card.column.col-6.col-xs-12
        div.card-image
          img.img-responsive(:src="room.coverURL")
        div.card-header
          h4.card-title {{ room.name }}
        div.card-body {{ room.client }}
        div.card-footer
          button.btn.btn-primary(v-on:click="join(room.name)") Join
</template>

<script>
export default {
  name: 'lists',
  props: ['rooms'],
  data () {
    return {
    }
  },
  methods: {
    join: function(room) {
      this.$socket.emit('req.join', room)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  list-style: none
}
</style>
