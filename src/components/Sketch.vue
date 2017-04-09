<template lang='pug'>
  .container
    canvas#sketch
    canvas#bg(v-on:click="draw")
    
</template>

<script>
export default {
  name: 'sketch',
  data () {
    return {
      size: {
        x:10000,
        y:5000
      }
    }
  },
  mounted () {
    ['bg', 'sketch'].forEach(e => {
      let canvas = document.getElementById(e)

      canvas.height = this.size.x
      canvas.width = this.size.y
    })
    let ctx = bg.getContext("2d")
    ctx.translate(0.5, 0.5)

    const drawBoard = () => {
      for (var x = 0; x <= bg.width; x += 20) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, bg.height)
      }

      for (var x = 0; x <= bg.height; x += 20) {
        ctx.moveTo(0, x)
        ctx.lineTo(bg.width, x)
      }

      ctx.strokeStyle = "#BFBFC5"
      ctx.stroke()
    }

    drawBoard()
  },
  methods: {
    draw: function(event) {
      const canvas = document.getElementById('sketch')
      let ctx = canvas.getContext("2d")
      const point = (e) => {
        let boxSize = 20
        ctx.fillStyle = "yellow"
        let dx = Math.floor(e.offsetX / boxSize) * boxSize
        let dy = Math.floor(e.offsetY / boxSize) * boxSize

        console.log(`${dx}, ${dy}`)

        //ctx.clearRect(dx, dy, boxSize, boxSize)
        ctx.fillRect(dx, dy, boxSize, boxSize)
      }
      point(event)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.container {
  width: 100%;
  height: 90vh;
  position: relative;
  overflow: scroll;
  background-color: #fff
}

button {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2
}

#bg {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1
}

#sketch {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
