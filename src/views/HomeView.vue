<template>
  <div class="home">
    <Carousel></Carousel>
    <OfficeBranch></OfficeBranch>
    <MainSection></MainSection>
    <OurProducts></OurProducts>
    <Career></Career>
  </div>
</template>

<script>
import Career from '../components/Career'
import OurProducts from '../components/OurProducts'
import MainSection from '../components/MainSection'
import OfficeBranch from '../components/OfficeBranch'
import Carousel from '../components/Carousel'
// @ is an alias to /src

export default {
  components: {
    Career,
    OurProducts,
    MainSection,
    OfficeBranch, Carousel },

}
</script>


<style scoped>
  .home {
    overflow-x: hidden;
  }
</style>