<template>
  <!-- top nav bar  -->
  <nav class="nav1 navbar">
    <div class="nav1-wraper">
      <a class="navbar-brand" href="https://www.hitachi.com/"
        ><img
          class="hitachi-logo"
          src="@/assets/images/top-logo.png"
          alt="Hitachi"
      /></a>

      <div class="mobile-toggle">
        <div class="mobile-search" :class="{ 'search-bg': showMobileSearch }">
          <a
            @click="showMobileSearch = !showMobileSearch"
            class="nav-link nav1-info-container"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-expanded="false"
            ><img class="" src="@/assets/images/icon_search.svg" alt="Search" />
          </a>
        </div>

        <button class="x-toggle" v-if="isToggle" @click="isToggle = !isToggle">
          <i class="bx bx-x"></i>
        </button>

        <button
          class="toggler nav-toggler"
          v-if="!isToggle"
          @click="isToggle = !isToggle"
        >
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>

      <div class="nav1-contact">
        <div class="top-item active">
          <a
            class="nav-link nav1-info-container nav1-language"
            style="margin-top: 2px"
            role="button"
            aria-expanded="false"
            ><img
              class="earth"
              src="@/assets/images/icon_earth.png"
              alt="Region / Language"
            /><span class="language">Region / Language</span>

            <div class="languages">
              <a href=""
                ><img
                  src="@/assets/images/icon_checkmark.png"
                  alt=""
                />English</a
              >
              <a href="" class="burmese"
                ><img
                  src="@/assets/images/icon_checkmark.png"
                  alt=""
                />Burmese</a
              >
            </div>
          </a>
        </div>
        <div class="top-item">
          <a class="nav-link nav1-info-container" href="contact.html"
            ><img
              class="mail"
              src="@/assets/images/icon_mail.png"
              alt="Contact Information"
            /><span>Contact Information</span></a
          >
        </div>
        <div
          class="top-item"
          @click="isSearch = !isSearch"
          :class="{ bgg: isSearch }"
        >
          <a
            class="nav-link nav1-info-container"
            role="button"
            @click="isSearch = !isSearch"
            data-toggle="dropdown"
            aria-expanded="false"
            ><img
              class="search"
              src="@/assets/images/icon_search.svg"
              alt="Search"
            /><span>Search</span></a
          >
        </div>
      </div>
    </div>
    <div
      class="mobile-search-bar"
      :class="{ 'mobile-search-bar-toggle': showMobileSearch }"
    >
      <div class="mb-close" @click="showMobileSearch = !showMobileSearch">
        <i class="bx bx-x pointer"></i>
      </div>
      <div class="input-group">
        <input
          class="mb-search form-control"
          type="text"
          placeholder="Search here"
        />
        <span class="input-group-text">Search</span>
      </div>
    </div>
  </nav>

  <div class="search-form" :class="{ 'show-search': isSearch }">
    <div class="close" @click="isSearch = !isSearch">
      <i class="bx bx-x pointer"></i>
    </div>
    <input class="search" type="text" placeholder="Search here" />
    <input class="search-btn" type="button" value="Search" />
  </div>

  <!-- main nav bar  -->

  <nav class="nav2">
    <div class="nav2-wraper">
      <a v-if="!isToggle" class="navbar-brand" href="/"
        ><img
          class="logo-text"
          src="@/assets/images/favicon.png"
          height="50"
          alt="Hitachi, Ltd."
        />
        Hitachi Soe Electric & Machinery</a
      >

      <div
        class="menu-wraper"
        :class="{
          'mobile-menu-wraper': isToggle,
          'opacity-0': isMobile && !isToggle,
        }"
      >
        <div
          class="mobile-menu"
          :class="{ 'menu-animate': isToggle }"
          @click="isToggle = false"
        >
          <router-link
            to="/products"
            class="product-services"
            :class="{
              'route-active': currentRoute.substring(0, 9) === '/products',
            }"
            >Products & Services
            <div class="dropdown">
              <div class="transformer product">
                <ul>
                  <li class="mb-2 header">TRANSFORMERS</li>
                  <li>
                    <router-link to="/products/offload"
                      >Distribution Off Load</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/products/onload"
                      >Distribution On Load</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/products/powerOffLoad"
                      >Power Off Load</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/products/powerOnLoad"
                      >Power On Load</router-link
                    >
                  </li>
                </ul>
              </div>
              <div class="panel product">
                <ul>
                  <li class="mb-2 header">PANELS</li>
                  <li>
                    <router-link to="/products/panels/main-distribution-panel"
                      >Main Distribution Panel</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/products/panels/acb">ACB</router-link>
                  </li>
                  <li>
                    <router-link to="/products/panels/package-substation"
                      >Package Substation</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/products/panels/vcb">VCB</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </router-link>
          <i class="bx bx-chevron-right mobile-arrow"></i>
        </div>
        <div
          class="mobile-menu"
          :class="{ 'menu-animate': isToggle }"
          @click="isToggle = false"
        >
          <router-link to="/comming">A-Transformer</router-link>
          <i class="bx bx-chevron-right mobile-arrow"></i>
        </div>
        <div
          class="mobile-menu about"
          :class="{ 'menu-animate': isToggle }"
          @click="isToggle = false"
        >
          <router-link
            to="/mobile/about-us"
            class="about-us"
            :class="{
              'route-active': currentRoute.substring(0, 9) === '/about-us',
            }"
            >About Us
            <div class="dropdown">
              <h2>
                <i class="fa-solid fa-arrow-right-long me-2 text-danger"></i
                >Company Information
              </h2>
              <div class="menu-item">
                <div class="about-card">
                  <img src="@/assets/images/md.jpg" alt="" />
                  <div class="link">
                    <i class="fa-solid fa-caret-right"></i>
                    <router-link to="/about-us/chairman-greeting"
                      >Chairman Greeting</router-link
                    >
                  </div>
                </div>
                <div class="about-card">
                  <img
                    src="@/assets/images/director.png"
                    style="object-fit: contain; background: #dae0e0"
                    alt=""
                  />
                  <div class="link">
                    <i class="fa-solid fa-caret-right"></i>
                    <router-link to="/about-us/md-speech"
                      >MD Speech</router-link
                    >
                  </div>
                </div>
                <div class="about-card">
                  <img src="@/assets/images/strategy.jpg" alt="" />
                  <div class="link">
                    <i class="fa-solid fa-caret-right"></i>
                    <router-link to="/about-us/hitachi-strategy"
                      >Hitachi Group Strategy</router-link
                    >
                  </div>
                </div>
                <div class="about-card">
                  <img src="@/assets/images/carousel2.jpg" alt="" />
                  <div class="link">
                    <i class="fa-solid fa-caret-right"></i>
                    <router-link to="/about-us/company-profile"
                      >Company Profile</router-link
                    >
                  </div>
                </div>
                <div class="about-card">
                  <img src="@/assets/images/address.jpg" alt="" />
                  <div class="link">
                    <i class="fa-solid fa-caret-right"></i>
                    <router-link to="/about-us/address"
                      >Location & Address</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </router-link>
          <i class="bx bx-chevron-right mobile-arrow"></i>
        </div>
        <div
          class="mobile-menu"
          :class="{ 'menu-animate': isToggle }"
          @click="isToggle = false"
        >
          <router-link
            to="/certificates"
            :class="{ 'route-active': currentRoute === '/certificates' }"
            >Awards & Certificates</router-link
          >
          <i class="bx bx-chevron-right mobile-arrow"></i>
        </div>
        <div
          class="mobile-menu"
          :class="{ 'menu-animate': isToggle }"
          @click="isToggle = false"
        >
          <router-link to="/comming">News</router-link>
          <i class="bx bx-chevron-right mobile-arrow"></i>
        </div>
        <div
          class="mobile-menu"
          :class="{ 'menu-animate': isToggle }"
          @click="isToggle = false"
        >
          <router-link to="/customers">Our Clients</router-link>
          <i class="bx bx-chevron-right mobile-arrow"></i>
        </div>
        <div
          class="mobile-menu career"
          :class="{ 'menu-animate': isToggle }"
          @click="isToggle = false"
        >
          <router-link
            to="/mobile/career"
            class="career"
            :class="{
              'route-active': currentRoute.substring(0, 7) === '/career',
            }"
            >Career
            <div class="dropdown">
              <h2>
                <i class="fa-solid fa-arrow-right-long me-2 text-danger"></i
                >Career Information
              </h2>
              <div class="menu-item">
                <div class="career-card">
                  <img src="@/assets/images/career/apply.jpg" alt="" />
                  <div class="link">
                    <i class="fa-solid fa-caret-right"></i>
                    <router-link to="/career/apply">To Apply</router-link>
                  </div>
                </div>
                <div class="career-card">
                  <img src="@/assets/images/career/culture.jpeg" alt="" />
                  <div class="link">
                    <i class="fa-solid fa-caret-right"></i>
                    <router-link to="/career/culture">Our Culture</router-link>
                  </div>
                </div>
                <div class="career-card">
                  <img src="@/assets/images/career/recruitment.png" alt="" />
                  <div class="link">
                    <i class="fa-solid fa-caret-right"></i>
                    <router-link to="/career/recruitment-procedure"
                      >Recruitment Procedure</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </router-link>
          <i class="bx bx-chevron-right mobile-arrow"></i>
        </div>
        <div
          class="mobile-menu mobile-language"
          style="border-top: 1px solid #d3d2d2"
          :class="{
            'menu-animate ': isToggle,
            'mb-language-open': showMobileLanguage,
          }"
        >
          <div class="d-flex align-items-center" style="padding: 18px 16px">
            <img
              class="black-earth"
              :class="{ 'd-none': showMobileLanguage }"
              src="@/assets/images/icon_earth.png"
              alt=""
            />
            <img
              class="white-earth"
              :class="{ 'd-inline-block': showMobileLanguage }"
              src="@/assets/images/white-earth.jpg"
              alt=""
            />
            <div style="font-size: 90%; padding: 3px 0 0 14px">
              Region / Language
            </div>
          </div>
          <i
            class="bx bx-plus mobile-arrow pointer"
            @click="showMobileLanguage = !showMobileLanguage"
            v-if="!showMobileLanguage"
          ></i>
          <i
            class="bx bx-minus text-white mobile-arrow pointer"
            @click="showMobileLanguage = !showMobileLanguage"
            v-if="showMobileLanguage"
          ></i>
        </div>

        <div
          class="mb-language"
          :class="{ 'mb-language-show': showMobileLanguage }"
        >
          <div class="d-flex align-items-center" style="padding: 18px 16px">
            <img
              class="margin-img"
              src="@/assets/images/icon_checkmark.png"
              alt=""
            />
            <div style="font-size: 90%; padding: 3px 0 0 14px">
              <img
                src="@/assets/images/icon_checkmark.png"
                :class="{ 'no-choose-language': !isEnglish }"
                alt=""
              />&nbsp;&nbsp;English
            </div>
          </div>
          <i class="bx bx-chevron-right mobile-arrow"></i>
        </div>
        <div
          class="mb-language"
          :class="{ 'mb-language-show': showMobileLanguage }"
        >
          <div class="d-flex align-items-center" style="padding: 18px 16px">
            <img
              class="margin-img"
              src="@/assets/images/icon_checkmark.png"
              alt=""
            />
            <div style="font-size: 90%; padding: 3px 0 0 14px">
              <img
                src="@/assets/images/icon_checkmark.png"
                :class="{ 'no-choose-language': isEnglish }"
                alt=""
              />&nbsp;&nbsp;Burmese
            </div>
          </div>
          <i class="bx bx-chevron-right mobile-arrow"></i>
        </div>

        <div
          class="mobile-menu mobile-mail"
          :class="{ 'menu-animate': isToggle }"
        >
          <div class="d-flex align-items-center" style="padding: 18px 16px">
            <img
              class="black-mail"
              src="@/assets/images/icon_mail.png"
              alt=""
            />
            <img
              class="white-mail"
              src="@/assets/images/white-mail.png"
              alt=""
            />
            <div style="font-size: 90%; padding: 3px 0 0 10px">
              Contact Information
            </div>
          </div>
          <i class="bx bx-chevron-right mobile-arrow"></i>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { onMounted, onUpdated, ref } from "vue";
import { useRouter } from "vue-router";
import "@/assets/css/aboutus.css";
import "@/assets/css/career.css";
export default {
  setup() {
    let router = useRouter();
    let isToggle = ref(false);
    let isMobile = ref(false);
    let isSearch = ref(false);
    let showMobileSearch = ref(false);
    let isEnglish = ref(true);
    let showMobileLanguage = ref(false);
    let currentRoute = ref("");

    let width = ref(0);

    let updateWidth = () => {
      width.value = window.innerWidth;
      if (width.value < 768) {
        isMobile.value = true;
      } else {
        isMobile.value = false;
      }
    };

    onMounted(() => {
      updateWidth();
      window.addEventListener("resize", updateWidth);

      //active route
      router.afterEach((to) => {
        currentRoute.value = to.path;
      });
    });

    onUpdated(() => {
      updateWidth();
      window.addEventListener("resize", updateWidth);
    });

    return {
      isToggle,
      isMobile,
      isSearch,
      showMobileSearch,
      isEnglish,
      showMobileLanguage,
      currentRoute,
    };
  },
};
</script>

<style scoped>
/* nav top bar */

.navbar {
  width: 100%;
  max-height: 44px;
}

.navbar-brand img {
  width: auto;
  height: 30px;
}

.nav1-wraper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15.5%;
}

.nav1 ul li {
  list-style: none;
}

.mobile-toggle,
.mobile-arrow {
  display: none;
}

.nav1-contact {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.top-item {
  margin: -11px 0 2px -5px;
  padding-bottom: 5px;
  transition: 0.3s ease-in-out;
  height: 44px;
}

.top-item:hover {
  background: #ccc;
}

.top-item:hover a {
  color: #000;
}

.top-item a span {
  font-size: 13px;
  font-weight: 100;
}

.nav1 .earth,
.nav1 .mail,
.nav1 .search {
  width: 24px;
  height: auto;
  margin-right: 10px;
}

.nav1 .mail {
  width: 32px;
}

.nav1 .search {
  width: 30px;
}
.mobile-search-bar {
  display: none;
}

a {
  color: #000;
}

.nav1-info-container {
  position: relative;
}

.languages {
  position: absolute;
  z-index: 9999;
  right: -37px;
  top: 100%;
  margin-top: 1px;
}

.languages a {
  width: 250px;
  display: block;
  background: #c5c5c5;
  padding: 0px 73px 0px 45px;
  margin-right: 37px;
  text-decoration: none;
  font-size: 13px;
  height: 0;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
}

.nav1-info-container:hover .languages a {
  height: 45px;
  padding: 20px 73px 40px 45px;
  transition: all 0.3s ease-in-out;
  opacity: 1;
  visibility: visible;
}

.languages img {
  width: 15%;
  margin: 2px 10px 4px -25px;
}

.languages .burmese img {
  opacity: 0;
  transition: 0.3s ease;
}

.languages .burmese:hover img {
  opacity: 1;
}

.search-form {
  background: #ccc;
  text-align: center;
  transition: all 0.3s ease;
  opacity: 0;
  height: 0;
  overflow-x: hidden;
}

.show-search {
  height: 100px;
  opacity: 1;
}

.close {
  width: 900px;
  margin: 0 auto;
  text-align: right;
  padding-top: 8px;
}
.close i {
  font-size: 32px;
  color: #818080;
  margin-bottom: 10px;
}
.search-form .search {
  width: 750px;
  height: 37px;
  border: none;
  padding-left: 20px;
}

.search-form .search:focus {
  outline: none;
}
.search-form .search-btn {
  height: 37px;
  border: none;
  background: #b1000e;
  width: 150px;
  color: #fff;
  font-size: 14px;
}

/* ------------ main navbar ----------- */
.nav2 {
  height: 53px;
  background: #f2f2f2;
  position: relative;
}

.nav2-wraper {
  padding: 10px 15.5% 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav2 .navbar-brand img {
  width: 26px;
  height: auto;
}

.nav2 .navbar-brand {
  font-weight: bold;
  font-size: 16px;
}

.nav2 .mobile-menu {
  display: inline-block;
}

.mb-language {
  display: none;
}

.nav2 .menu-wraper a {
  text-decoration: none;
  font-size: 13px;
  font-weight: 100;
  padding: 20px 16px 18px;
  transition: 0.2s ease-in-out;
}

.nav2 .menu-wraper a:hover {
  background: var(--btn-color);
  color: #fff;
}

.route-active {
  background: var(--btn-color);
  color: #fff;
}

.nav2 .mobile-language,
.nav2 .mobile-mail {
  display: none;
}

/* ------dropdown ------------ */

.product-services .dropdown {
  position: absolute;
  top: 100%;
  left: 50%;
  width: 50%;
  transform: translateY(0) translateX(-50%);
  opacity: 0;
  pointer-events: none;
  z-index: 99;
  background-color: rgba(20, 20, 20, 0.9);
  display: flex;
  gap: 60px;
  transition: 0.3s ease;
  padding: 30px 40px;
  visibility: hidden;
}

.product-services .dropdown ul li {
  height: 0px;
  line-height: 0;
  transition: all 0.5s ease;
  opacity: 0;
  list-style: none;
  font-size: 12px;
}

.product-services:hover .dropdown ul li {
  opacity: 1;
  height: 30px;
  line-height: 30px;
}

.product-services:hover .dropdown ul li a {
  text-decoration: none;
  font-size: 12px;
  font-weight: 100;
  padding: 0;
  transition: 0.4s ease-in-out !important;
  color: #fff !important;
}

.product-services:hover .dropdown ul li a:hover {
  background: none !important;
  border-bottom: 2px solid var(--btn-color);
  color: var(--btn-color);
}

.product-services:hover > .dropdown {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.product-services .dropdown .product .header {
  font-size: 14px;
  font-weight: bolder;
}

@media (min-width: 900px) and (max-width: 1500px) {
  /* --------- top navbar ------- */
  .navbar {
    width: 100%;
    max-height: 38px;
  }

  .nav1 .navbar-brand {
    margin-top: -8px;
  }

  .nav1-wraper {
    padding: 5px 13%;
  }

  .navbar-brand img {
    width: auto;
    height: 25px;
  }

  .top-item {
    margin: -18px 0 0 -5px;
    padding-bottom: 5px;
    transition: 0.3s ease-in-out;
    height: 40px;
  }

  .top-item:hover {
    background: #c5c5c5;
  }

  .top-item:hover a {
    color: #000;
  }

  .top-item a span {
    font-size: 12px;
    font-weight: 100;
  }

  .nav1 .earth,
  .nav1 .mail,
  .nav1 .search {
    width: 19px;
    height: auto;
    margin-right: 5px;
  }

  .nav1 .mail {
    width: 24px;
  }

  .nav1 .search {
    width: 22px;
  }

  .languages {
    position: absolute;
    z-index: 99999;
    right: -37px;
    top: 100%;
    margin-top: 0px;
    transform: translateY(1px);
  }

  .nav1-info-container.nav1-language {
    display: flex;
  }

  .languages a {
    width: 250px;
    display: block;
    background: #c5c5c5;
    padding: 0px 73px 0px 45px;
    margin-right: 37px;
    text-decoration: none;
    font-size: 13px;
    height: 0;
    transition: all 0.3s ease-in-out;
    opacity: 0;
    margin-bottom: -3px;
    visibility: hidden;
  }

  .nav1-info-container:hover .languages a {
    height: 35px;
    padding: 15px 73px 30px 45px;
    transition: all 0.3s ease-in-out;
    opacity: 1;
    visibility: visible;
  }

  /* --------main navbar----- */
  .nav2 {
    height: 40px;
  }

  .nav2-wraper {
    padding: 4px 13% 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav2 .navbar-brand img {
    width: 20px;
    height: auto;
  }

  .nav2 .navbar-brand {
    font-size: 12px;
  }

  .nav2 .menu-wraper a {
    text-decoration: none;
    font-size: 12px;
    font-weight: 100;
    padding: 13px 15px;
    transition: 0.2s ease-in-out;
  }
  .product-services .dropdown .transformer .header {
    font-size: 14px;
    font-weight: bold;
  }
  .product-services:hover .dropdown ul li a {
    font-size: 12px;
  }
}

@media (max-width: 1260px) {
  /* ------top navbar ---------- */
  .nav1 {
    z-index: 1;
  }
  .nav1-wraper {
    padding: 0 1%;
  }

  .languages {
    margin-top: 4px;
  }

  .languages a {
    width: 250px;
    display: block;
    background: #c5c5c5;
    padding: 0px 73px -5px 45px;
    margin-right: 37px;
    margin-bottom: -3px;
    text-decoration: none;
    font-size: 13px;
    height: 0;
    transition: all 0.3s ease-in-out;
    opacity: 0;
  }

  .nav1-info-container:hover .languages a {
    height: 33px;
    padding: 15px 73px 40px 45px;
    transition: all 0.3s ease-in-out;
    transform: translateY(-4px);
    opacity: 1;
  }

  /* --------- main navbar------ */
  .nav2-wraper {
    padding: 0 1%;
  }
}

@media (max-width: 900px) {
  /* top navbar */
  .navbar {
    max-height: 44px;
  }

  .nav1 .navbar-brand {
    margin-top: -8px;
    margin-bottom: 8px;
  }

  .mobile-search-bar {
    visibility: hidden;
    opacity: 0;
  }

  .top-item {
    margin: -12px 0 0 -5px;
    padding: 4px 0 7px;
    transition: 0.3s ease-in-out;
  }

  .languages {
    position: absolute;
    z-index: 9999;
    right: -37px;
    top: 100%;
    margin-top: 0px;
  }

  .languages a {
    width: 250px;
    display: block;
    background: #c5c5c5;
    padding: 0px 73px -5px 45px;
    margin-right: 37px;
    margin-bottom: -3px;
    text-decoration: none;
    font-size: 13px;
    height: 0;
    transition: all 0.3s ease-in-out;
    opacity: 0;
  }

  .nav1-info-container:hover .languages a {
    height: 33px;
    padding: 18px 73px 45px 45px;
    transition: all 0.3s ease-in-out;
    transform: translateY(-3px);
    opacity: 1;
  }

  .show-search {
    height: 100px;
    opacity: 1;
  }

  .close {
    width: 650px;
    margin: 0 auto;
    text-align: right;
    padding-top: 8px;
  }
  .close i {
    font-size: 32px;
    color: #818080;
    margin-bottom: 10px;
  }
  .search-form .search {
    width: 500px;
    height: 37px;
    border: none;
    padding-left: 20px;
  }

  /* main navbar */
  .nav2 {
    height: auto;
    padding: 1px 15px;
  }
  .nav2-wraper {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1.5rem;
  }

  .mobile-menu {
    margin-top: 7px;
    padding-bottom: 16px;
  }

  .menu-wraper {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: -2px;
  }
}

@media (max-width: 765px) {
  /* top navbar */
  .nav1 {
    padding: 0;
  }
  .nav1 .nav1-contact {
    display: none;
  }

  .nav1 .navbar-brand {
    margin-top: 0px;
  }

  .nav1-wraper {
    padding-right: 0;
    margin-left: 10px;
  }

  .mobile-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mobile-search {
    display: inline-block;
    width: 50px;
    height: 45px;
    padding: 8px 10px;
    margin-bottom: 3px;
    position: relative;
    transition: 0.3s ease-in-out;
  }

  .mobile-search:hover {
    background-color: #c5c5c5;
  }

  .mobile-search a {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .mobile-search a img {
    width: 28px;
  }

  .nav1 .nav-toggler {
    display: inline-block;
    width: 45px;
    height: 45px;
    background-color: #ff0026;
    padding: 10px 10px;
    border: none;
    margin-bottom: 4px;
  }

  .nav-toggler i {
    color: #fff;
    font-size: 24px;
  }

  .nav1 .x-toggle {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    background-color: var(--btn-color);
    border: none;
    margin-bottom: 4px;
  }

  .x-toggle i {
    color: #fff;
    font-size: 40px;
  }

  .mobile-search-bar {
    display: block;
    background: #ccc;
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    z-index: 999999;
    height: 0;
    margin-bottom: 20px;
    padding: 0;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  .mobile-search-bar-toggle {
    height: 93px;
    padding: 0px 4%;
    visibility: visible;
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }

  .mobile-search-bar .input-group {
    margin: 0 auto;
  }

  .mobile-search-bar .mb-close {
    margin-top: 10px;
    text-align: right;
  }

  .mobile-search-bar .mb-close i {
    font-size: 30px;
    color: #807c7c;
  }

  .mobile-search-bar .input-group .mb-search:focus {
    outline: none;
  }

  .mobile-search-bar .input-group-text {
    background-color: #b1000e !important;
    color: #fff;
  }

  .search-bg {
    background-color: #ccc;
  }

  /* ----- main navbar------ */
  .nav2 {
    padding: 0;
  }

  .nav2 .navbar-brand {
    margin-left: 18px;
  }

  .nav2-wraper {
    padding: 10px 0px;
  }

  .menu-wraper {
    position: absolute;
    background: #f2f2f2;
    z-index: 9999;
    top: 100%;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease;
  }

  .mobile-menu-wraper {
    opacity: 1;
    visibility: visible;
    margin-top: -2px;
  }

  .nav2 .mobile-menu {
    display: flex !important;
    align-items: center;
    width: 100%;
    padding-bottom: 0px;
    padding: 3px 0px;
    margin: 0;
    opacity: 0;
    height: 0;
    line-height: 0;
    transition: all 0.5s ease-in-out;
  }

  .menu-wraper .menu-animate {
    transition: all 0.3s ease-in-out;
    transition-delay: 0.08s;
    opacity: 1;
    height: 56px;
    line-height: 16px;
  }

  .product-services .dropdown {
    display: none;
  }

  .nav2 .menu-wraper a {
    font-size: 90%;
  }

  .nav2 .menu-wraper a:hover {
    background: none;
    color: #fff;
  }

  .mobile-menu:hover {
    background-color: var(--btn-color);
  }

  .mobile-menu:hover a,
  .mobile-menu:hover .mobile-arrow,
  .mobile-menu:hover div {
    color: #fff;
  }

  .mobile-arrow {
    display: block;
    font-size: 35px;
    font-weight: 200;
    color: #777;
    padding-right: 10px;
  }

  .mobile-menu a {
    display: block;
    width: 100%;
  }

  .menu-wraper img {
    width: 7%;
  }

  .menu-wraper .white-earth {
    width: 30px;
    display: none;
  }

  .menu-wraper .mobile-menu .black-earth {
    width: 25px;
  }

  .menu-wraper .mobile-mail .black-mail {
    width: 30px;
  }

  .mobile-mail .white-mail {
    width: 12%;
    display: none;
  }

  .mobile-menu:hover .black-earth {
    display: none;
  }
  .mobile-menu:hover .white-earth {
    display: inline-block;
  }

  .mobile-menu:hover .black-mail {
    display: none;
  }
  .mobile-menu:hover .white-mail {
    display: block;
  }

  /* dropdown effect */

  /* mobile language */
  .nav2 .mobile-language,
  .nav2 .mobile-mail {
    justify-content: space-between;
  }
  .mb-language {
    display: flex !important;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0;
    margin: 0;
    transition: all 0.3s ease-in-out;
    transition-delay: 0.08s;
    opacity: 0;
    height: 0;
    line-height: 0;
    transition: all 0.5s ease-in-out;
    background: #ccc;
    transition: all 0.3s ease-in-out;
  }

  .mb-language-show {
    opacity: 1;
    height: 56px;
    line-height: 16px;
    padding: 3px 0px;
    transition: all 0.3s ease-in-out;
  }

  .mb-language .margin-img {
    width: 20%;
    opacity: 0;
  }

  .mb-language div img {
    width: 20%;
  }

  .mb-language .no-choose-language {
    opacity: 0;
  }

  .mb-language-open {
    background: #b1000e;
    color: #fff;
  }
}
</style>
