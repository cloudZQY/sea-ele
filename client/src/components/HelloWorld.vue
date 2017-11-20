<template>
  <div class="login-page">
    {{ msg }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  created() {
    axios.get('http://localhost:3000/api/abc').then((data) => {
      this.msg = 'connect~!'
    })
  },
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
