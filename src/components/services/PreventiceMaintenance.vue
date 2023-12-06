<template>
  <div class="aftersale-service">
    <div class="aftersale-service-carousel swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="@/assets/images/services/preventice/banner.webp" alt="" />
        </div>
      </div>
      <div class="swiper-pagination mt-3" id="swiper-paginate"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>

    <h2 class="mt-5 mb-4 fw-bold">Preventice Maintenance Service</h2>
    <div class="my-3 mb-5">
      <span
        class="bg-primary me-3 p-2 rounded text-white fw-bold rounded-pill px-4"
      >
        One Time Inspection</span
      >
      <span
        class="bg-primary me-3 p-2 rounded text-white fw-bold rounded-pill px-4"
      >
        Yearly Maintenance Contract</span
      >
    </div>
    <ol>
      <li>Survey (Online/Onsite)</li>
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

    <!-- PMS-1. Maintenance & Inspection  -->
    <div
      class="exp-head d-flex align-items-center gap-3 my-5"
      data-aos="flip-up"
    >
      <img src="@/assets/images/services/aftersale/icon.png" alt="" />
      <h4 class="fw-bold">PMS-1. Maintenance & Inspection</h4>
    </div>

    <div class="row">
      <div class="fs-5 mb-3 fw-bold col-3 col-sm-2 col-md-1">Name</div>
      <div class="fs-5 mb-3 col-9 col-sm-10 col-md-11">
        : Maintenance & Inspection (One Time Inspection)
      </div>
    </div>
    <div class="row">
      <div class="fs-5 mb-3 fw-bold col-3 col-sm-2 col-md-1">Location</div>
      <div class="fs-5 mb-3 col-9 col-sm-10 col-md-11">
        : Thilawa SEZ-A, S.P Pet Pack Factory
      </div>
    </div>
    <div class="row my-5">
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS1/1.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="fade-down-right"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS1/3.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS1/3.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="fade-down-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS1/4.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS1/5.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="flip-right"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS1/6.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="flip-right"
        />
      </div>
    </div>
    <hr />

    <!-- PMS-2. Maintenance & Inspection   -->
    <div
      class="exp-head d-flex align-items-center gap-3 my-5"
      data-aos="flip-up"
    >
      <img src="@/assets/images/services/aftersale/icon.png" alt="" />
      <h4 class="fw-bold">PMS-2. Maintenance & Inspection</h4>
    </div>

    <div class="row">
      <div class="fs-5 mb-3 fw-bold col-3 col-sm-2 col-md-1">Name</div>
      <div class="fs-5 mb-3 col-9 col-sm-10 col-md-11">
        : Maintenance & Inspection as per Yearly Maintenance Contract
      </div>
    </div>
    <div class="row">
      <div class="fs-5 mb-3 fw-bold col-3 col-sm-2 col-md-1">Location</div>
      <div class="fs-5 mb-3 col-9 col-sm-10 col-md-11">
        : Thilawa SEZ-B, MJTD Factory
      </div>
    </div>
    <div class="row my-5">
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS2/1.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="fade-down-right"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS2/2.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS2/3.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="fade-down-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS2/4.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS2/5.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="flip-right"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS2/6.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="flip-right"
        />
      </div>
    </div>
    <hr />

    <!-- PMS-3. Maintenance & Inspection  -->
    <div
      class="exp-head d-flex align-items-center gap-3 my-5"
      data-aos="flip-up"
    >
      <img src="@/assets/images/services/aftersale/icon.png" alt="" />
      <h4 class="fw-bold">PMS-3. Maintenance & Inspection</h4>
    </div>

    <div class="row">
      <div class="fs-5 mb-3 fw-bold col-3 col-sm-2 col-md-1">Name</div>
      <div class="fs-5 mb-3 col-9 col-sm-10 col-md-11">
        : Maintenance & Inspection as per Yearly Maintenance Contract.
      </div>
    </div>
    <div class="row">
      <div class="fs-5 mb-3 fw-bold col-3 col-sm-2 col-md-1">Location</div>
      <div class="fs-5 mb-3 col-9 col-sm-10 col-md-11">
        : Mingalar Taung Nyunt Township, Makro Supermarket (Sett San)
      </div>
    </div>
    <div class="my-5 row">
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS3/1.jpg')"
          alt=""
          class="w-100 h-100 mb-3"
          data-aos="fade-down-right"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS3/2.jpg')"
          alt=""
          class="w-100 h-100 mb-3"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS3/3.jpg')"
          alt=""
          class="w-100 h-100 mb-3"
          data-aos="fade-down-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS3/4.jpg')"
          alt=""
          class="w-100 h-100 mb-3"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS3/5.jpg')"
          alt=""
          class="w-100 h-100 mb-3"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS3/6.jpg')"
          alt=""
          class="w-100 h-100 mb-3"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS3/7.jpg')"
          alt=""
          class="w-100 h-100 mb-3"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS3/8.jpg')"
          alt=""
          class="w-100 h-100 mb-3"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS3/9.jpg')"
          alt=""
          class="w-100 h-100 mb-3"
          data-aos="flip-left"
        />
      </div>
    </div>
    <hr />

    <!-- PMS-4. Maintenance & Inspection  -->
    <div
      class="exp-head d-flex align-items-center gap-3 my-5"
      data-aos="flip-up"
    >
      <img src="@/assets/images/services/aftersale/icon.png" alt="" />
      <h4 class="fw-bold">PMS-4. Maintenance & Inspection</h4>
    </div>

    <div class="row">
      <div class="fs-5 mb-3 fw-bold col-3 col-sm-2 col-md-1">Name</div>
      <div class="fs-5 mb-3 col-9 col-sm-10 col-md-11">
        : Maintenance & Inspection to Amorphous Transformer
      </div>
    </div>
    <div class="row">
      <div class="fs-5 mb-3 fw-bold col-3 col-sm-2 col-md-1">Location</div>
      <div class="fs-5 mb-3 col-9 col-sm-10 col-md-11">
        : Thilawa SEZ-B, Kubota Factory
      </div>
    </div>
    <div class="my-5 row">
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS4/1.jpg')"
          alt=""
          class="w-100 h-100 mb-3"
          data-aos="fade-down-right"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS4/2.jpg')"
          alt=""
          class="w-100 h-100 mb-3"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS4/3.jpg')"
          alt=""
          class="w-100 h-100 mb-3"
          data-aos="fade-down-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS4/4.jpg')"
          alt=""
          class="w-100 h-100 mb-3"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS4/5.jpg')"
          alt=""
          class="w-100 h-100 mb-3"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS4/6.jpg')"
          alt=""
          class="w-100 h-100 mb-3"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS4/7.jpg')"
          alt=""
          class="w-100 h-100 mb-3"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/preventice/PMS4/8.jpg')"
          alt=""
          class="w-100 h-100 mb-3"
          data-aos="flip-left"
        />
      </div>
    </div>
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
.aftersale-service {
  padding: 0px 15.6%;
}

.aftersale-service .swiper {
  height: 500px;
}

.aftersale-service ol li {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 18px;
}

@media (max-width: 1500px) {
  .aftersale-service {
    padding: 0px 13%;
  }
}

@media (max-width: 1260px) {
  .aftersale-service {
    padding: 0px 1%;
  }
}

@media (max-width: 990px) {
  .aftersale-service h2 {
    font-size: 25px;
  }
  .aftersale-service ol li {
    font-size: 18px;
  }

  .aftersale-service .row div {
    font-size: 17px !important;
  }
}

@media (max-width: 580px) {
  .aftersale-service .swiper {
    height: 400px;
  }
}

@media (max-width: 490px) {
  .aftersale-service .swiper {
    height: 350px;
  }
}
</style>
