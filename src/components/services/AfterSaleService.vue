<template>
  <div class="aftersale-service">
    <div class="aftersale-service-carousel swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="@/assets/images/services/aftersale/banner.jpg" alt="" />
        </div>
      </div>
      <div class="swiper-pagination mt-3" id="swiper-paginate"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>

    <h2 class="mt-5 mb-4 fw-bold">After Sale Service Process</h2>
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

    <!-- AFS-1. 66 kV OLTC Maintenance  -->
    <div
      class="exp-head d-flex align-items-center gap-3 my-5"
      data-aos="flip-up"
    >
      <img src="@/assets/images/services/aftersale/icon.png" alt="" />
      <h4 class="fw-bold">AFS-1. 66 kV OLTC Maintenance</h4>
    </div>

    <div class="row">
      <div class="fs-5 mb-3 fw-bold col-3 col-sm-2 col-md-1">Name</div>
      <div class="fs-5 mb-3 col-9 col-sm-10 col-md-11">
        : 20 MVA, (66/11) kV, OLTC Maintenance (MR)
      </div>
    </div>
    <div class="row">
      <div class="fs-5 mb-3 fw-bold col-3 col-sm-2 col-md-1">Location</div>
      <div class="fs-5 mb-3 col-9 col-sm-10 col-md-11">
        : Ayerwady Division, Myaung Mya 66 kV Substation
      </div>
    </div>
    <div class="row my-5">
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/aftersale/afs166/1.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="fade-down-right"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/aftersale/afs166/3.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/aftersale/afs166/3.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="fade-down-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/aftersale/afs166/4.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/aftersale/afs166/5.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="flip-right"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/aftersale/afs166/6.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="flip-right"
        />
      </div>
    </div>
    <hr />

    <!-- 2. 33 kV OLTC Maintenance  -->
    <div
      class="exp-head d-flex align-items-center gap-3 my-5"
      data-aos="flip-up"
    >
      <img src="@/assets/images/services/aftersale/icon.png" alt="" />
      <h4 class="fw-bold">AFS-2. 33 kV OLTC Maintenance</h4>
    </div>

    <div class="row">
      <div class="fs-5 mb-3 fw-bold col-3 col-sm-2 col-md-1">Name</div>
      <div class="fs-5 mb-3 col-9 col-sm-10 col-md-11">
        : 35 MVA, (33/11) kV, OLTC Maintenance (ABB)
      </div>
    </div>
    <div class="row">
      <div class="fs-5 mb-3 fw-bold col-3 col-sm-2 col-md-1">Location</div>
      <div class="fs-5 mb-3 col-9 col-sm-10 col-md-11">
        : Mingalardon Township, Myanmar Central Power Co., Ltd (Z&A), Hlawgar
        Power Plant
      </div>
    </div>
    <div class="row my-5">
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/aftersale/afs233/1.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="fade-down-right"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/aftersale/afs233/2.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/aftersale/afs233/3.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="fade-down-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/aftersale/afs233/4.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/aftersale/afs233/5.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="flip-right"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/aftersale/afs233/6.jpg')"
          alt=""
          class="w-100 h-100"
          data-aos="flip-right"
        />
      </div>
    </div>
    <hr />

    <!-- 3. 33 kV OLTC Maintenance  -->
    <div
      class="exp-head d-flex align-items-center gap-3 my-5"
      data-aos="flip-up"
    >
      <img src="@/assets/images/services/aftersale/icon.png" alt="" />
      <h4 class="fw-bold">AFS-3. 33 kV OLTC Maintenance</h4>
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

    <!-- 4. 11 kV OLTC Maintenance  -->
    <div
      class="exp-head d-flex align-items-center gap-3 my-5"
      data-aos="flip-up"
    >
      <img src="@/assets/images/services/aftersale/icon.png" alt="" />
      <h4 class="fw-bold">AFS-4. 11 kV OLTC Maintenance</h4>
    </div>

    <div class="row">
      <div class="fs-5 mb-3 fw-bold col-3 col-sm-2 col-md-1">Name</div>
      <div class="fs-5 mb-3 col-9 col-sm-10 col-md-11">
        : 1250 kVA, (11-6.6/0.4) kV, OLTC Maintenance
      </div>
    </div>
    <div class="row">
      <div class="fs-5 mb-3 fw-bold col-3 col-sm-2 col-md-1">Location</div>
      <div class="fs-5 mb-3 col-9 col-sm-10 col-md-11">
        : Dagon Township, Shwedagon Pagoda St., Prime Hill Business Square
        (CHIYODA & PUBLIC WORK Co., Ltd)
      </div>
    </div>
    <div class="my-5 row">
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/aftersale/afs411/1.jpg')"
          alt=""
          class="w-100 h-100 mb-3"
          data-aos="fade-down-right"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/aftersale/afs411/2.jpg')"
          alt=""
          class="w-100 h-100 mb-3"
          data-aos="flip-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/aftersale/afs411/3.jpg')"
          alt=""
          class="w-100 h-100 mb-3"
          data-aos="fade-down-left"
        />
      </div>
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <img
          :src="require('@/assets/images/services/aftersale/afs411/4.jpg')"
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
