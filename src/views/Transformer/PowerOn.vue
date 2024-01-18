<template>
  <div class="poweron-section">
    <div class="poweron-carousel swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="i in 1" :key="i">
          <div class="image-container">
            <img
              :src="require(`@/assets/images/transformers/poweron/${i}.jpg`)"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="swiper-pagination mt-3" id="swiper-paginate"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <div class="poweron-spec">
      <h2 data-aos="fade-down">Power Transformer (On Load)</h2>
      <div data-aos="fade-up"><Kv33_11_6_6></Kv33_11_6_6></div>
      <div data-aos="fade-up"><Kv66_33></Kv66_33></div>
    </div>
    <div class="free-space">&nbsp;</div>
  </div>
</template>

<script>
import Kv33_11_6_6 from "../../components/poweronload/Kv33_11_6_6";
import Kv66_33 from "../../components/poweronload/Kv66_33";
import { onMounted, ref } from "vue";
// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle'
export default {
  components: {
    Kv33_11_6_6,
    Kv66_33,
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
.poweron-section {
  position: relative;
}
.poweron-carousel {
  margin: 10px 240px 70px;
}

.poweron-carousel .image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 90px;
}
.poweron-carousel .img {
  display: flex;
  justify-content: center;
}

.poweron-carousel img {
  width: 48%;
  height: 100%;
  object-fit: contain;
  filter: brightness(1);
}

.poweron-carousel .swiper-pagination .swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background-color: #fff;
  opacity: 1;
  border: 1px solid var(--btn-color);
}

.poweron-carousel .swiper-pagination .swiper-pagination-bullet-active {
  width: 9px;
  height: 9px;
  background: linear-gradient(to right, #2d0b00, var(--btn-color));
}

.poweron-carousel .swiper-button-next,
.poweron-carousel .swiper-button-prev {
  color: rgb(204, 204, 204, 0.5);
  font-weight: bold;
}

.poweron-carousel .swiper-button-next:after,
.poweron-carousel .swiper-button-prev:after {
  font-size: 30px;
}

.poweron-spec {
  padding: 30px 15%;
  margin-top: 20px;
}

.poweron-spec h2 {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
}

@media (max-width: 1738px) {
  .poweron-carousel {
    margin: 10px 180px 70px;
  }
  .poweron-spec {
    padding: 30px 10%;
    margin-top: 20px;
  }
}

@media (max-width: 1500px) {
  .poweron-carousel {
    margin: 10px 120px 70px;
  }
}

@media (max-width: 1200px) {
  .poweron-carousel {
    margin: 10px 10px 70px;
  }
  .poweron-spec {
    padding: 30px 3%;
  }
}

@media (max-width: 990px) {
  .poweron-carousel {
    margin: 10px 40px 40px;
  }
}

@media (max-width: 450px) {
  .poweron-carousel {
    margin: 10px;
  }

  .swiper {
    padding: 20px 0px 10px;
    height: 300px;
  }
  .swiper-slide .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 70px;
  }

  .poweron-carousel .swiper-pagination .swiper-pagination-bullet {
    width: 5px;
    height: 5px;
    background-color: #fff;
    opacity: 1;
    border: 1px solid var(--btn-color);
  }

  .poweron-carousel .swiper-pagination .swiper-pagination-bullet-active {
    width: 6px;
    height: 6px;
    background: linear-gradient(to right, #2d0b00, var(--btn-color));
  }

  .poweron-carousel .swiper-button-next,
  .poweron-carousel .swiper-button-prev {
    color: rgb(204, 204, 204, 0.5);
    font-weight: bold;
  }

  .poweron-carousel .swiper-button-next:after,
  .poweron-carousel .swiper-button-prev:after {
    font-size: 20px;
  }

  .poweron-spec h2 {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 20px;
  }
}
</style>
