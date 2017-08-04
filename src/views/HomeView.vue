<template>
  <div class="home-view">
    <img src="../assets/img/logo.png">
    <h1>Koa Vue SSR Template</h1>
    <p>This template built with <a href="https://github.com/vuejs/vue">vue 2.x</a>, <a href="https://github.com/vuejs/vue-router">vue-router</a> & <a href="https://github.com/vuejs/vuex">vuex</a> with server-side rendering by <a href="https://github.com/koajs/koa">koa</a>.</p>
  </div>
</template>

<script>
export default {
  title() {
    return 'Koa Vue SSR'
  }
}
</script>

<style lang="postcss">
.home-view {
  margin-top: 1rem;
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;

  & h1, & h3 {
    font-weight: normal;
  }

  & p {
    font-size: 18px;
    text-align: center;
    width: 65%;
    margin: 0 auto;
  }
}

</style>
