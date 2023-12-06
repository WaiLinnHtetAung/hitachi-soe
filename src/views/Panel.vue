<template>
  <div v-if="slug == 'unit-package-substation'">
    <UnitPackageSubstation></UnitPackageSubstation>
  </div>
  <div v-if="slug == 'panel-with-drop-out-fuse'">
    <PanelWithDropOutFuse></PanelWithDropOutFuse>
  </div>
  <div v-if="slug == 'hybrid-vcb-switchgear-panel'">
    <HybridVCBSwitchgearPanel></HybridVCBSwitchgearPanel>
  </div>
  <div v-if="slug == 'acb-panel'">
    <ACBPanel />
  </div>
  <div v-if="slug == 'ats-panel'">
    <ATSPanel />
  </div>
  <div v-if="slug == 'mdb-mccb'">
    <MDBWithMCCB />
  </div>
  <div v-if="slug == 'mdb-cb'">
    <MDBWithCB />
  </div>
  <div v-if="slug == 'low-voltage-cb'">
    <LowVoltageCB />
  </div>
  <div v-if="slug == 'backup-power-panel'">
    <BackupPowerPanel />
  </div>
  <div v-if="slug == 'power-control'">
    <PowerControl />
  </div>
  <div v-if="slug == 'marshalling-kiosk'">
    <MarshallingKiosk />
  </div>
  <div v-if="slug == 'meter-panel'">
    <MeterPanel />
  </div>
</template>

<script>
import HybridVCBSwitchgearPanel from "../components/panels/HybridVCBSwitchgearPanel";
import PanelWithDropOutFuse from "../components/panels/PanelWithDropOutFuse";
import UnitPackageSubstation from "../components/panels/UnitPackageSubstation";
import ACBPanel from "@/components/panels/ACBPanel.vue";
import ATSPanel from "@/components/panels/ATSPanel.vue";
import MDBWithMCCB from "@/components/panels/MDBWithMCCB.vue";
import MDBWithCB from "@/components/panels/MDBWithCB.vue";
import LowVoltageCB from "@/components/panels/LowVoltageCB.vue";
import BackupPowerPanel from "@/components/panels/BackupPowerPanel.vue";
import PowerControl from "@/components/panels/PowerControl.vue";
import MarshallingKiosk from "@/components/panels/MarshallingKiosk.vue";
import MeterPanel from "@/components/panels/MeterPanel.vue";
import { onMounted } from "vue";
export default {
  components: {
    HybridVCBSwitchgearPanel,
    PanelWithDropOutFuse,
    UnitPackageSubstation,
    ACBPanel,
    ATSPanel,
    MDBWithMCCB,
    MDBWithCB,
    LowVoltageCB,
    BackupPowerPanel,
    PowerControl,
    MarshallingKiosk,
    MeterPanel,
  },
  props: ["slug"],
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
  },
};
</script>

<style scoped></style>
