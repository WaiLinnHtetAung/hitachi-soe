<template>
  <div v-if="slug == 'installation-service'">
    <Installation></Installation>
  </div>
  <div v-if="slug == 'aftersale-service'">
    <AfterSaleService></AfterSaleService>
  </div>
  <div v-if="slug == 'preventice-service'">
    <PreventiceMaintenance></PreventiceMaintenance>
  </div>
  <div v-if="slug == 'testing-service'">
    <TestingService></TestingService>
  </div>
</template>

<script>
import TestingService from "../components/services/TestingService";
import PreventiceMaintenance from "../components/services/PreventiceMaintenance";
import AfterSaleService from "../components/services/AfterSaleService";
import Installation from "../components/services/Installation";
export default {
  components: {
    TestingService,
    PreventiceMaintenance,
    AfterSaleService,
    Installation,
  },
  props: ["slug"],
};
</script>

<style scoped></style>
