<template>
  <div class="offload-section">
    <div class="offload-carousel swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="i in 2" :key="i">
          <div class="image-container">
            <img
              :src="
                require(`@/assets/images/transformers/highefficiency/${i}.jpg`)
              "
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="swiper-pagination mt-3" id="swiper-paginate"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <div class="offload-spec">
      <h2 data-aos="fade-down">
        HIGH EFFICIENT DISTRIBUTION TRANSFORMER WITH OFF LOAD TAP CHANGER
      </h2>
      <div data-aos="fade-up"><Kv11Four></Kv11Four></div>
      <div data-aos="fade-up"><Kv11Four2></Kv11Four2></div>
      <div data-aos="fade-up"><Kv11Six></Kv11Six></div>
      <div data-aos="fade-up"><Kv11SixFour></Kv11SixFour></div>
      <div data-aos="fade-up"><Kv33></Kv33></div>
    </div>
    <div class="free-space">&nbsp;</div>
  </div>
</template>

<script>
import Kv33 from "../../components/highefficient/Kv33";
import Kv11SixFour from "../../components/highefficient/Kv11SixFour";
import Kv11Six from "../../components/highefficient/Kv11Six";
import Kv11Four2 from "../../components/highefficient/Kv11Four2";
import Kv11Four from "../../components/highefficient/Kv11Four";
import { onMounted, ref } from "vue";

export default {
  components: {
    Kv33,
    Kv11SixFour,
    Kv11Six,
    Kv11Four2,
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
.offload-section {
  position: relative;
}
.offload-carousel {
  margin: 0px 240px 70px;
}

.offload-carousel .image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.offload-carousel .image-container img {
  object-fit: cover;
  height: 100%;
  width: 48%;
  filter: brightness(1);
}

.offload-carousel .swiper-pagination .swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background-color: #fff;
  opacity: 1;
  border: 1px solid var(--btn-color);
}

.offload-carousel .swiper-pagination .swiper-pagination-bullet-active {
  width: 9px;
  height: 9px;
  background: linear-gradient(to right, #2d0b00, var(--btn-color));
}

.offload-carousel .swiper-button-next,
.offload-carousel .swiper-button-prev {
  color: rgb(204, 204, 204, 0.5);
  font-weight: bold;
}

.offload-carousel .swiper-button-next:after,
.offload-carousel .swiper-button-prev:after {
  font-size: 30px;
}

.offload-spec {
  padding: 30px 15%;
  margin-top: 20px;
}

.offload-spec h2 {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
}

@media (max-width: 1738px) {
  .offload-carousel {
    margin: 0px 180px 70px;
  }
  .offload-spec {
    padding: 30px 10%;
    margin-top: 20px;
  }
}

@media (max-width: 1500px) {
  .offload-carousel {
    margin: 10px 120px 0px;
  }
}

@media (max-width: 1350px) {
  .offload-spec {
    padding: 30px 9%;
  }
}

@media (max-width: 1200px) {
  .offload-carousel {
    margin: 0px 10px 70px;
  }
  .offload-spec {
    padding: 30px 3%;
  }
}

@media (max-width: 990px) {
  .offload-carousel {
    margin: 10px 40px 0px;
  }
}

@media (max-width: 450px) {
  .offload-carousel {
    margin: 10px;
  }

  .offload-carousel .swiper-pagination .swiper-pagination-bullet {
    width: 5px;
    height: 5px;
    background-color: #fff;
    opacity: 1;
    border: 1px solid var(--btn-color);
  }

  .offload-carousel .swiper-pagination .swiper-pagination-bullet-active {
    width: 6px;
    height: 6px;
    background: linear-gradient(to right, #2d0b00, var(--btn-color));
  }

  .offload-carousel .swiper-button-next,
  .offload-carousel .swiper-button-prev {
    color: rgb(204, 204, 204, 0.5);
    font-weight: bold;
  }

  .offload-carousel .swiper-button-next:after,
  .offload-carousel .swiper-button-prev:after {
    font-size: 20px;
  }

  .offload-spec h2 {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 20px;
  }
}
</style>
