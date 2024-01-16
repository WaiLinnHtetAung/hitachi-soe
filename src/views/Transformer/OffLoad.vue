<template>
  <div class="offload-section">
    <div class="offload-carousel swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="i in 9" :key="i">
          <div class="image-container">
            <img
              :src="require(`@/assets/images/transformers/offload/${i}.jpg`)"
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
        DISTRIBUTION TRANSFORMER WITH OFF LOAD TAP CHANGER
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
import Kv33Four2 from "../../components/offload/Kv33Four2";
import Kv11Four2 from "../../components/offload/Kv11Four2";
import Kv33Four from "../../components/offload/Kv33Four";
import Kv11Six from "../../components/offload/Kv11Six";
import Kv11Six2 from "../../components/offload/Kv11Six2";
import Kv11Four from "../../components/offload/Kv11Four";
import { onMounted, ref } from "vue";

export default {
  components: {
    Kv11Four2,
    Kv33Four,
    Kv33Four2,
    Kv11Six,
    Kv11Four,
    Kv11Six2,
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

<style>
.offload-section {
  position: relative;
}
.offload-carousel {
  margin: 10px 240px 70px;
}

.swiper-slide .image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide .image-container img {
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
  padding: 30px 15.5%;
  margin-top: 20px;
}

.offload-spec h2 {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
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

@media (max-width: 1150px) {
  .offload-spec {
    padding: 30px 3%;
  }
}

@media (max-width: 990px) {
  .offload-carousel {
    margin: 10px 40px 0px;
  }

  .swiper-slide .image-container img {
    object-fit: cover;
    width: 80%;
    height: 100%;
  }
}

@media (max-width: 450px) {
  .offload-carousel {
    margin: 10px;
  }

  .swiper-slide .image-container img {
    object-fit: cover;
    width: 70%;
    height: 100%;
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
