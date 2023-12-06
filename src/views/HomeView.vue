<template>
  <div class="home">
    <Carousel></Carousel>
    <OfficeBranch></OfficeBranch>
    <!-- <ThreeSixtyView></ThreeSixtyView> -->
    <MainSection></MainSection>
    <OurProducts></OurProducts>
    <Career></Career>
  </div>
</template>

<script>
import ThreeSixtyView from "../components/ThreeSixtyView";
import Career from "../components/Career";
import OurProducts from "../components/OurProducts";
import MainSection from "../components/MainSection";
import OfficeBranch from "../components/OfficeBranch";
import Carousel from "../components/Carousel";
// @ is an alias to /src

export default {
  components: {
    ThreeSixtyView,
    Career,
    OurProducts,
    MainSection,
    OfficeBranch,
    Carousel,
  },

  setup() {},
};
</script>

<style scoped>
.home {
  overflow-x: hidden;
}
</style>
