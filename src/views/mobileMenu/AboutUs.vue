<template>
  <div class="mobile-menu">
    <div class="top-link">
      <router-link to="/">Home</router-link>
      <span>></span>
      <span>About Us</span>
    </div>
    <div class="content">
      <div class="product">
        <h2>Company Information</h2>

        <div class="items">
          <div class="item" v-for="(item, i) in items" :key="i">
            <div class="img">
              <img
                :src="item.img"
                alt=""
                style="width: 100%; height: 120px; object-fit: cover"
                :class="{ 'md-speech': item.title == 'MD Speech' }"
              />
            </div>
            <div class="link" style="height: 35px; margin-top: -1px">
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
    let items = [
      {
        img: require("@/assets/images/md.jpg"),
        title: "Chairman Greeting",
        link: "/about-us/chairman-greeting",
      },
      {
        img: require("@/assets/images/director.png"),
        title: "MD Speech",
        link: "/about-us/md-speech",
      },
      {
        img: require("@/assets/images/strategy.jpg"),
        title: "Hitachi Group Strategy",
        link: "/about-us/hitachi-strategy",
      },
      {
        img: require("@/assets/images/carousel2.jpg"),
        title: "Company Profile",
        link: "/about-us/company-profile",
      },

      {
        img: require("@/assets/images/address.jpg"),
        title: "Location & Address",
        link: "/about-us/address",
      },
    ];

    return { items };
  },
};
</script>
<style scoped>
.mobile-menu img.md-speech {
  object-fit: contain !important;
  background: #dae0e0;
}
</style>
