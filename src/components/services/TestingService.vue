<template>
  <div class="testing-service">
    <h2 data-aos="fade-right" class="text-center fw-bold my-5 service-title">
      Testing & Inspection Service
    </h2>
    <div class="testing-service-carousel swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="@/assets/images/services/testing/banner.jpg" alt="" />
        </div>
      </div>
    </div>

    <div class="my-5">
      <h2 class="mt-5 mb-4 fw-bold">Available Services</h2>
      <ul data-aos="fade-up">
        <li>Distribution & Power Transformer (upto 230 kV)</li>
        <li>Switchgear Panel (upto 33 kV)</li>
        <li>400 V Main Distribution Panel</li>
        <li>Low Voltage Capacitor Bank</li>
      </ul>
    </div>

    <h4
      class="mt-5 fw-bold"
      style="border-bottom: 2px solid rgb(211, 62, 62)"
      data-aos="fade-left"
    >
      Our Experiences
    </h4>
    <div class="row my-5 experience">
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/testing/1.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="fade-down-right"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/testing/3.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/testing/3.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="fade-down-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/testing/4.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/testing/5.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="flip-right"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/testing/6.jpg')"
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
import { onMounted, ref } from "vue";
export default {
  setup() {
    const swiper = ref();

    onMounted(() => {
      window.scrollTo(0, 0);
    });

    return { swiper };
  },
};
</script>

<style scoped>
.testing-service {
  padding: 0px 15.6%;
}

.service-title {
  position: relative;
}
.service-title::before {
  content: "";
  position: absolute;
  width: 150px;
  height: 3px;
  background-color: var(--btn-color);
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: -10px;
}

.testing-service .swiper {
  height: 500px;
}

.testing-service ol li,
.testing-service ul li {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 18px;
}

.experience img {
  transition: 0.3s ease;
}

.experience img:hover {
  transform: translateY(-15px) translateX(10px) !important;
}

@media (max-width: 1500px) {
  .testing-service {
    padding: 0px 13%;
  }

  .testing-service .swiper {
    height: 350px;
  }

  .testing-service h2 {
    font-size: 24px;
  }

  .testing-service ul li {
    font-size: 19px;
  }
}

@media (max-width: 1260px) {
  .testing-service {
    padding: 0px 1%;
  }
}

@media (max-width: 990px) {
  .testing-service h2 {
    font-size: 25px;
  }
  .testing-service ol li,
  .testing-service ul li {
    font-size: 18px;
  }

  .testing-service .row div {
    font-size: 17px !important;
  }
}

@media (max-width: 580px) {
  .testing-service .swiper {
    height: 400px;
  }
}

@media (max-width: 490px) {
  .testing-service .swiper {
    height: 350px;
  }
}
</style>
