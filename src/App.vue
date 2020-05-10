<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
  import Header from './components/Header/Header'
  import './assets/style/sass/_main.sass'
  
  export default {
    components: {
      Header
    }
  }
</script>
