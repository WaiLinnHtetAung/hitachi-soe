<template>
  <div class="mobile-menu">
    <div class="top-link">
      <router-link to="/">Home</router-link>
      <span>></span>
      <span>Products & Services</span>
    </div>
    <div class="content">
      <div class="product">
        <h2>Transformers</h2>

        <div class="items">
          <div class="item" v-for="(item, i) in transformers" :key="i">
            <div class="img">
              <img :src="item.img" alt="" />
            </div>
            <div class="link">
              <i class="fa-solid fa-caret-right"></i>
              <router-link :to="item.link">{{ item.title }}</router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="product">
        <h2>Panels</h2>

        <div class="items">
          <div class="item" v-for="(item, i) in panels" :key="i">
            <div class="img">
              <img :src="item.img" alt="" />
            </div>
            <div class="link">
              <i class="fa-solid fa-caret-right"></i>
              <router-link :to="item.link">{{ item.title }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "@/assets/css/mobilemenu.css";

export default {
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
    let transformers = [
      {
        img: require("@/assets/images/offload/offload.jpg"),
        title: "Distribution Transformer with Off Load Tapchanger",
        link: "/products/offload",
      },
      {
        img: require("@/assets/images/onload/onload.jpg"),
        title: "Distribution Transformer with On Load Tapchanger",
        link: "/products/onload",
      },
      {
        img: require("@/assets/images/poweroff/poweroff.jpg"),
        title: "Power Off Load Transformer with On Load Tapchanger",
        link: "/products/powerOffLoad",
      },

      {
        img: require("@/assets/images/poweron/poweron.jpg"),
        title: "Power On Load Transformer with On Load Tapchanger",
        link: "/products/powerOnLoad",
      },
    ];

    let panels = [
      {
        img: require("@/assets/images/panels/unit_package.png"),
        title: "Unit Package Substation",
        link: "/products/panels/unit-package-substation",
      },
      {
        img: require("@/assets/images/panels/panel_with_drop_out_fuse.png"),
        title: "Drop Out Fuse / Encosed Cut Out Fuse",
        link: "/products/panels/panel-with-drop-out-fuse",
      },
      {
        img: require("@/assets/images/panels/hybrid_vcb.png"),
        title: "Hybrid VCB Switchgear Panel",
        link: "/products/panels/hybrid-vcb-switchgear-panel",
      },
      {
        img: require("@/assets/images/panels/ACB.jpg"),
        title: "ACB Panel",
        link: "/products/panels/acb-panel",
      },
      {
        img: require("@/assets/images/panels/ACB.jpg"),
        title: "ATS Panel",
        link: "/products/panels/ats-panel",
      },
      {
        img: require("@/assets/images/panels/mdb_with_mccb.png"),
        title: "Main Distribution Panel with MCCB",
        link: "/products/panels/mdb-mccb",
      },
      {
        img: require("@/assets/images/panels/mdb_with_cb.png"),
        title: "Main Distribution Panel with CB",
        link: "/products/panels/mdb-cb",
      },
      {
        img: require("@/assets/images/panels/low_voltage.png"),
        title: "Low Voltage Capacitor Bank",
        link: "/products/panels/low-voltage-cb",
      },
      {
        img: require("@/assets/images/panels/backup_power.png"),
        title: "OLTC Backup Power Panel",
        link: "/products/panels/backup-power-panel",
      },
      {
        img: require("@/assets/images/panels/power_control.png"),
        title: "OLTC Control Panel",
        link: "/products/panels/power-control",
      },
      {
        img: require("@/assets/images/panels/marshal-2.png"),
        title: "Marshalling Kiosk",
        link: "/products/panels/marshalling-kiosk",
      },
      {
        img: require("@/assets/images/panels/meter_panel.png"),
        title: "kWh Meter Panel",
        link: "/products/panels/meter-panel",
      },
    ];

    return { transformers, panels };
  },
};
</script>
