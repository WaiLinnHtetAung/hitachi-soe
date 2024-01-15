<template>
  <div class="mobile-menu">
    <div class="top-link">
      <router-link to="/">Home</router-link>
      <span>&gt;</span>
      <span>Products & Services</span>
    </div>
    <div class="my-4">
      <div class="btn-group">
        <button
          class="btn btn-sm btn-outline-danger"
          @click="currentTab = 'products'"
          :class="{ 'btn-danger text-white': currentTab == 'products' }"
        >
          Products
        </button>
        <button
          class="btn btn-sm btn-outline-danger"
          @click="currentTab = 'services'"
          :class="{ 'btn-danger text-white': currentTab == 'services' }"
        >
          Services
        </button>
      </div>
    </div>
    <div class="content">
      <!-- products -->
      <div class="product" v-if="currentTab === 'products'">
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

      <div class="product" v-if="currentTab === 'products'">
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

      <!-- services -->
      <div class="product" v-if="currentTab === 'services'">
        <h2>Services</h2>

        <div class="items">
          <div class="item" v-for="(item, i) in services" :key="i">
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
import { onMounted, ref } from "vue";
import "@/assets/css/mobilemenu.css";

export default {
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });

    let currentTab = ref("products");

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
        img: require("/public/panels/unit_package.png"),
        title: "Unit Package Substation",
        link: "/products/panels/unit-package-substation",
      },
      {
        img: require("/public/panels/panel_with_drop_out_fuse.png"),
        title: "Drop Out Fuse / Encosed Cut Out Fuse",
        link: "/products/panels/panel-with-drop-out-fuse",
      },
      {
        img: require("/public/panels/hybrid_vcb.png"),
        title: "Hybrid VCB Switchgear Panel",
        link: "/products/panels/hybrid-vcb-switchgear-panel",
      },
      {
        img: require("/public/panels/ACB.jpg"),
        title: "ACB Panel",
        link: "/products/panels/acb-panel",
      },
      {
        img: require("/public/panels/ats.png"),
        title: "ATS Panel",
        link: "/products/panels/ats-panel",
      },
      {
        img: require("/public/panels/mdb_with_mccb.png"),
        title: "Main Distribution Panel with MCCB",
        link: "/products/panels/mdb-mccb",
      },
      {
        img: require("/public/panels/mdb_with_cb.png"),
        title: "Main Distribution Panel with CB",
        link: "/products/panels/mdb-cb",
      },
      {
        img: require("/public/panels/low_voltage.png"),
        title: "Low Voltage Capacitor Bank",
        link: "/products/panels/low-voltage-cb",
      },
      {
        img: require("/public/panels/backup_power.png"),
        title: "OLTC Backup Power Panel",
        link: "/products/panels/backup-power-panel",
      },
      {
        img: require("/public/panels/power_control.png"),
        title: "OLTC Control Panel",
        link: "/products/panels/power-control",
      },
      {
        img: require("/public/panels/marshal-2.png"),
        title: "Marshalling Kiosk",
        link: "/products/panels/marshalling-kiosk",
      },
      {
        img: require("/public/panels/meter_panel.png"),
        title: "kWh Meter Panel",
        link: "/products/panels/meter-panel",
      },
    ];

    let services = [
      {
        img: require("@/assets/images/services/installation.png"),
        title: "Installation Service",
        link: "/products/services/installation-service",
      },
      {
        img: require("@/assets/images/services/after-sale.png"),
        title: "After Sale Service",
        link: "/products/services/aftersale-service",
      },
      {
        img: require("@/assets/images/services/preventice-service.png"),
        title: "Preventice Maintenance Service",
        link: "/products/services/preventice-service",
      },

      {
        img: require("@/assets/images/services/repare.png"),
        title: "Repairing Services",
        link: "/comming",
      },
      {
        img: require("@/assets/images/services/inspection.png"),
        title: "Testing & Inspection",
        link: "/comming",
      },
    ];

    return { transformers, panels, services, currentTab };
  },
};
</script>
