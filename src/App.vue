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
  overflow: hidden;
  max-width: 1980px;
  margin: 0 auto;
}


html {
  overflow-x: hidden;
}

body {
  font-family: Helvetica bold, sans-serif;
  color: #333;
  font-size: 100%;
  text-align: left;
  text-size-adjust: 100%;
  position: relative;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -o-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  height: 100%;
}

:root {
  --btn-color: #b1000e;
}

</style>
