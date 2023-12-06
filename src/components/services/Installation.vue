<template>
  <div class="installation-service">
    <div class="installation-service-carousel swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="@/assets/images/services/installation/banner.webp" alt="" />
        </div>
      </div>
      <div class="swiper-pagination mt-3" id="swiper-paginate"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>

    <h2 class="mt-5 mb-4 fw-bold">Installation Service Process</h2>
    <ol>
      <li>Onsite Survey</li>
      <li>Discuss to Layout Design & Location</li>
      <li>Submit Quotation</li>
    </ol>
    <br />

    <h4
      class="mt-5 fw-bold"
      style="border-bottom: 2px solid rgb(211, 62, 62)"
      data-aos="fade-left"
    >
      Our Experiences
    </h4>

    <!-- 1.33kv installation  -->
    <div
      class="exp-head d-flex align-items-center gap-3 my-5"
      data-aos="flip-up"
    >
      <img src="@/assets/images/services/installation/icon.png" alt="" />
      <h4 class="fw-bold">Installation-1. 33 kV Substation</h4>
    </div>

    <div class="row">
      <div class="fs-5 mb-3 fw-bold col-3 col-sm-2 col-md-1">Name</div>
      <div class="fs-5 mb-3 col-9 col-sm-10 col-md-11">
        : 7500 kVA, 33/11 kV Substation
      </div>
    </div>
    <div class="row">
      <div class="fs-5 mb-3 fw-bold col-3 col-sm-2 col-md-1">Location</div>
      <div class="fs-5 mb-3 col-9 col-sm-10 col-md-11">
        : Shwe Pyi Thar Township, Shwe Pyi Thar Industrial Zone -4, Mindama
        Steel Structure Co., Ltd.
      </div>
    </div>
    <hr />

    <!-- 2.11kv installation  -->
    <div
      class="exp-head d-flex align-items-center gap-3 my-5"
      data-aos="flip-up"
    >
      <img src="@/assets/images/services/installation/icon.png" alt="" />
      <h4 class="fw-bold">Installation-2. 11 kV Substation</h4>
    </div>

    <div class="row">
      <div class="fs-5 mb-3 fw-bold col-3 col-sm-2 col-md-1">Name</div>
      <div class="fs-5 mb-3 col-9 col-sm-10 col-md-11">
        : 1000 kVA, (11/0.4) kV Substation
      </div>
    </div>
    <div class="row">
      <div class="fs-5 mb-3 fw-bold col-3 col-sm-2 col-md-1">Location</div>
      <div class="fs-5 mb-3 col-9 col-sm-10 col-md-11">
        : Hlaing Thar Yar Township, Shwe Lin Ban Industrial Zone, Absolute Metal
        Co., Ltd.
      </div>
    </div>
    <div class="row my-5">
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="
            require('@/assets/images/services/installation/two_eleven/1.jpg')
          "
          alt=""
          class="w-100 h-100"
          data-aos="fade-down-right"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="
            require('@/assets/images/services/installation/two_eleven/2.jpg')
          "
          alt=""
          class="w-100 h-100"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="
            require('@/assets/images/services/installation/two_eleven/3.jpg')
          "
          alt=""
          class="w-100 h-100"
          data-aos="fade-down-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="
            require('@/assets/images/services/installation/two_eleven/4.jpg')
          "
          alt=""
          class="w-100 h-100"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="
            require('@/assets/images/services/installation/two_eleven/5.jpg')
          "
          alt=""
          class="w-100 h-100"
          data-aos="flip-right"
        />
      </div>
    </div>
    <hr />

    <!-- 3.11kv installation  -->
    <div
      class="exp-head d-flex align-items-center gap-3 my-5"
      data-aos="flip-up"
    >
      <img src="@/assets/images/services/installation/icon.png" alt="" />
      <h4 class="fw-bold">Installation-3. 11 kV Substation</h4>
    </div>

    <div class="row">
      <div class="fs-5 mb-3 fw-bold col-3 col-sm-2 col-md-1">Name</div>
      <div class="fs-5 mb-3 col-9 col-sm-10 col-md-11">: -</div>
    </div>
    <div class="row">
      <div class="fs-5 mb-3 fw-bold col-3 col-sm-2 col-md-1">Location</div>
      <div class="fs-5 mb-3 col-9 col-sm-10 col-md-11">: -</div>
    </div>
    <hr />

    <!-- package unit substation  -->
    <div
      class="exp-head d-flex align-items-center gap-3 my-5"
      data-aos="flip-up"
    >
      <img src="@/assets/images/services/installation/icon.png" alt="" />
      <h4 class="fw-bold">Installation-4. Package Unit Substation</h4>
    </div>

    <div class="row">
      <div class="fs-5 mb-3 fw-bold col-3 col-sm-2 col-md-1">Name</div>
      <div class="fs-5 mb-3 col-9 col-sm-10 col-md-11">
        : 1000 kVA, (11/0.4) kV Package Unit Substation
      </div>
    </div>
    <div class="row">
      <div class="fs-5 mb-3 fw-bold col-3 col-sm-2 col-md-1">Location</div>
      <div class="fs-5 mb-3 col-9 col-sm-10 col-md-11">
        : Hlaing Township, Eastern Properties Co.,td, Parami Villa Project
      </div>
    </div>
    <div class="my-5 row">
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="
            require('@/assets/images/services/installation/package_unit/1.jpeg')
          "
          alt=""
          class="w-100 h-100 mb-3"
          data-aos="fade-down-right"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="
            require('@/assets/images/services/installation/package_unit/2.jpg')
          "
          alt=""
          class="w-100 h-100 mb-3"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="
            require('@/assets/images/services/installation/package_unit/3.jpeg')
          "
          alt=""
          class="w-100 h-100 mb-3"
          data-aos="fade-down-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="
            require('@/assets/images/services/installation/package_unit/4.jpg')
          "
          alt=""
          class="w-100 h-100 mb-3"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="
            require('@/assets/images/services/installation/package_unit/5.jpg')
          "
          alt=""
          class="w-100 h-100 mb-3"
          data-aos="flip-right"
        />
      </div>
    </div>
    <hr />

    <!-- two people type  -->
    <div
      class="exp-head d-flex align-items-center gap-3 my-5"
      data-aos="flip-up"
    >
      <img src="@/assets/images/services/installation/icon.png" alt="" />
      <h4 class="fw-bold">Installation-5. Two Pole Type Substation</h4>
    </div>

    <div class="row">
      <div class="fs-5 mb-3 fw-bold col-3 col-sm-2 col-md-1">Name</div>
      <div class="fs-5 mb-3 col-9 col-sm-10 col-md-11">
        : 400 kVA, (11/0.4) kV Substation
      </div>
    </div>
    <div class="row">
      <div class="fs-5 mb-3 fw-bold col-3 col-sm-2 col-md-1">Location</div>
      <div class="fs-5 mb-3 col-9 col-sm-10 col-md-11">
        : East Dagon Township, East Dagon Industrial Zone, Asia Business
        Alliance Group Co., Ltd
      </div>
    </div>
    <div class="row my-5">
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="
            require('@/assets/images/services/installation/two_people_type/1.jpg')
          "
          alt=""
          class="w-100 h-100"
          data-aos="fade-down-right"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="
            require('@/assets/images/services/installation/two_people_type/2.jpeg')
          "
          alt=""
          class="w-100 h-100"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="
            require('@/assets/images/services/installation/two_people_type/3.jpeg')
          "
          alt=""
          class="w-100 h-100"
          data-aos="fade-down-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="
            require('@/assets/images/services/installation/two_people_type/4.jpg')
          "
          alt=""
          class="w-100 h-100"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="
            require('@/assets/images/services/installation/two_people_type/5.jpeg')
          "
          alt=""
          class="w-100 h-100"
          data-aos="flip-right"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="
            require('@/assets/images/services/installation/two_people_type/6.jpg')
          "
          alt=""
          class="w-100 h-100"
          data-aos="flip-right"
        />
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { onMounted, ref } from "vue";
export default {
  setup() {
    const swiper = ref();

    onMounted(() => {
      window.scrollTo(0, 0);
      swiper.value = new Swiper(".swiper", {
        speed: 300,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    });

    return { swiper };
  },
};
</script>

<style scoped>
.installation-service {
  padding: 0px 15.6%;
}

.installation-service .swiper {
  height: 500px;
}

.installation-service ol li {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 18px;
}

@media (max-width: 1500px) {
  .installation-service {
    padding: 0px 13%;
  }
}

@media (max-width: 1260px) {
  .installation-service {
    padding: 0px 1%;
  }
}

@media (max-width: 990px) {
  .installation-service h2 {
    font-size: 25px;
  }
  .installation-service ol li {
    font-size: 18px;
  }

  .installation-service .row div {
    font-size: 17px !important;
  }
}

@media (max-width: 580px) {
  .installation-service .swiper {
    height: 400px;
  }
}

@media (max-width: 490px) {
  .installation-service .swiper {
    height: 350px;
  }
}
</style>
