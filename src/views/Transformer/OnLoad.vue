<template>
  <div class="onload-section">
    <div class="onload-carousel swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="i in 12" :key="i">
          <div class="image-container">
            <img
              :src="require(`@/assets/images/transformers/onload/${i}.jpg`)"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="swiper-pagination mt-3" id="swiper-paginate"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <div class="onload-spec">
      <h2 data-aos="fade-down">
        DISTRIBUTION TRANSFORMER WITH ON LOAD TAP CHANGER
      </h2>
      <div data-aos="fade-up"><Kv11Four></Kv11Four></div>
      <div data-aos="fade-up"><Kv11Four2></Kv11Four2></div>
      <div data-aos="fade-up"><Kv11Six></Kv11Six></div>
      <div data-aos="fade-up"><Kv11Six2></Kv11Six2></div>
      <div data-aos="fade-up"><Kv33Four></Kv33Four></div>
      <div data-aos="fade-up"><Kv33Four2></Kv33Four2></div>
    </div>
    <div class="free-space">&nbsp;</div>
  </div>
</template>

<script>
import Kv33Four2 from "../../components/onload/Kv33Four2";
import Kv11Six2 from "../../components/onload/Kv11Six2";
import Kv11Four2 from "../../components/onload/Kv11Four2";
import Kv33Four from "../../components/onload/Kv33Four";
import Kv11Six from "../../components/onload/Kv11Six";
import Kv11Four from "../../components/onload/Kv11Four";
import { onMounted, ref } from "vue";
// import Swiper from "swiper/bundle";
// import "swiper/css/bundle";
export default {
  components: {
    Kv33Four2,
    Kv11Six2,
    Kv11Four2,
    Kv33Four,
    Kv11Six,
    Kv11Four,
  },

  setup() {
    const swiper = ref();

    onMounted(() => {
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
.onload-section {
  position: relative;
}
.onload-carousel {
  margin: 10px 240px 70px;
}

.swiper-slide .image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide .image-container img {
  object-fit: cover;
  width: 48%;
  height: 100%;
  filter: brightness(1);
}

.onload-carousel .swiper-pagination .swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background-color: #fff;
  opacity: 1;
  border: 1px solid var(--btn-color);
}

.onload-carousel .swiper-pagination .swiper-pagination-bullet-active {
  width: 9px;
  height: 9px;
  background: linear-gradient(to right, #2d0b00, var(--btn-color));
}

.onload-carousel .swiper-button-next,
.onload-carousel .swiper-button-prev {
  color: rgb(204, 204, 204, 0.5);
  font-weight: bold;
}

.onload-carousel .swiper-button-next:after,
.onload-carousel .swiper-button-prev:after {
  font-size: 30px;
}

.onload-spec {
  padding: 30px 15%;
  margin-top: 20px;
}

.onload-spec h2 {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
}

@media (max-width: 1738px) {
  .onload-carousel {
    margin: 10px 180px 70px;
  }
  .onload-spec {
    padding: 30px 10%;
    margin-top: 20px;
  }
}

@media (max-width: 1500px) {
  .onload-carousel {
    margin: 10px 120px 0px;
  }
}

@media (max-width: 1200px) {
  .onload-carousel {
    margin: 10px 10px 70px;
  }
  .onload-spec {
    padding: 30px 3%;
  }
}

@media (max-width: 990px) {
  .onload-carousel {
    margin: 10px 20px 0px;
  }
}

@media (max-width: 450px) {
  .onload-carousel {
    margin: 10px;
  }

  .onload-carousel .swiper-pagination .swiper-pagination-bullet {
    width: 5px;
    height: 5px;
    background-color: #fff;
    opacity: 1;
    border: 1px solid var(--btn-color);
  }

  .onload-carousel .swiper-pagination .swiper-pagination-bullet-active {
    width: 6px;
    height: 6px;
    background: linear-gradient(to right, #2d0b00, var(--btn-color));
  }

  .onload-carousel .swiper-button-next,
  .onload-carousel .swiper-button-prev {
    color: rgb(204, 204, 204, 0.5);
    font-weight: bold;
  }

  .onload-carousel .swiper-button-next:after,
  .onload-carousel .swiper-button-prev:after {
    font-size: 20px;
  }

  .onload-spec h2 {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 20px;
  }
}
</style>
