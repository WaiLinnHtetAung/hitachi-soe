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
</template>

<script>
import PreventiceMaintenance from "../components/services/PreventiceMaintenance";
import AfterSaleService from "../components/services/AfterSaleService";
import Installation from "../components/services/Installation";
export default {
  components: {
    PreventiceMaintenance,
    AfterSaleService,
    Installation,
  },
  props: ["slug"],
};
</script>

<style scoped></style>
