<template>
  <Navbar/>
  <router-view/>
  <Footer/>
</template>

<script>
  import Navbar from "@/components/Navbar.vue"
  import Footer from '@/components/Footer.vue'

  export default {
    components: {Navbar, Footer}
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


html {
  overflow-x: hidden;
}

body {
  font-family: Helvetica bold, sans-serif;
  color: #333;
  font-size: 100%;
  line-height: 100%;
  text-align: left;
  text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -o-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

:root {
  --btn-color: #b1000e;
}

</style>
