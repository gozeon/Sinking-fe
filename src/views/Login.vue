<template>
  <div class="about">
    <h1>Login</h1>
    <button @click="handleLogin">login</button>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Login extends Vue {
  handleLogin() {
    localStorage.setItem('jwt', String(+Date.now()))

    if (this.$route.query?.nextUrl != null) {
      this.$router.push(String(this.$route.query.nextUrl))
    } else {
      this.$router.push({
        name: 'Home',
      })
    }
  }
}
</script>
