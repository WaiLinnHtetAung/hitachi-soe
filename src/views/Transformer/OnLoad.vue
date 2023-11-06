<template>
    <div class="onload-section">
        <div class="onload-carousel swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <img src="@/assets/images/onload/160.png" alt="">
                    </div>
                </div>
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <img src="@/assets/images/onload/200.png" alt="">
                    </div>
                </div>
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <img src="@/assets/images/onload/315.png" alt="">
                    </div>
                </div>
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <img src="@/assets/images/onload/400.png" alt="">
                    </div>
                </div>
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <img src="@/assets/images/onload/750.png" alt="">
                    </div>
                </div>
            </div>
            <div class="swiper-pagination mt-3" id="swiper-paginate"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        <div class="onload-spec">
            <h2 data-aos="fade-down">Distribution Transformer (On Load)</h2>
            <div data-aos="fade-up"><Kv11Four></Kv11Four></div>
            <div data-aos="fade-up"><Kv11Six></Kv11Six></div>
            <div data-aos="fade-up"><Kv33Four></Kv33Four></div>
            <div data-aos="fade-up"><Kv33Eleven></Kv33Eleven></div>
        </div>
        <div class="free-space">
            &nbsp;
        </div>
    </div>
</template>

<script>

import Kv33Eleven from '../../components/onload/Kv33Eleven'
import Kv33Four from '../../components/onload/Kv33Four'
import Kv11Six from '../../components/onload/Kv11Six'
import Kv11Four from '../../components/onload/Kv11Four'
import { onMounted, ref } from 'vue'
    import Swiper from 'swiper/bundle';
    import 'swiper/css/bundle'
    export default {
  components: {
    Kv33Eleven,
    Kv33Four,
    Kv11Six, Kv11Four },
 
        setup() {
            const swiper = ref();

            onMounted(() => {
                swiper.value = new Swiper('.swiper', {
                    speed: 300,
                    loop: true,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        type: 'bullets'
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }
                })
            });

            return {swiper}
        }
    }
</script>

<style >
.onload-section {
    position: relative;
}
.onload-carousel {
    margin: 10px 240px 70px;
}

.swiper {
    padding: 80px 0px 10px;
    height: 500px;
}
.swiper-slide .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide .image-container img {
    object-fit: cover;
    width: 50%;
    height: 100%;
}


.onload-carousel .swiper-pagination .swiper-pagination-bullet {
    width:8px;
    height:8px;
    background-color: #fff;
    opacity: 1;
    border: 1px solid var(--btn-color);
}

.onload-carousel .swiper-pagination .swiper-pagination-bullet-active {
    width: 9px;
    height: 9px;
    background: linear-gradient(to right, #2d0b00, var(--btn-color));
}

.onload-carousel .swiper-button-next, .onload-carousel .swiper-button-prev {
    color: rgb(204, 204, 204, .5);
    font-weight: bold;
}

.onload-carousel .swiper-button-next:after, .onload-carousel .swiper-button-prev:after {
    font-size: 30px;
}

.onload-spec {
    padding: 30px 15.5%;
    margin-top: 20px;
}

.onload-spec h2 {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 20px;
}

@media (max-width:1500px) {
    .onload-carousel {
        margin: 10px 120px 0px;
    }

    .swiper {
        padding: 40px 0px 10px;
        height: 400px;
    }

}

@media (max-width:990px) {
    .offload-carousel {
        margin: 10px 20px 0px;
    }

    .swiper {
        padding: 40px 0px 10px;
        height: 370px;
    }

    .swiper-slide .image-container img {
        object-fit: cover;
        width: 80%;
        height: 100%;
    }


    .onload-spec {
        padding: 30px 5%;
        margin-top: 20px;
    }
}

@media (max-width: 450px) {
    .onload-carousel {
        margin: 10px;
    }

    .swiper {
        padding: 20px 0px 10px;
        height: 200px;
    }
    .swiper-slide .image-container img {
        object-fit: cover;
        width: 80%;
        height: 100%;
    }

    .onload-spec {
        padding: 30px 5%;
        margin-top: 20px;
    }

    .onload-carousel .swiper-pagination .swiper-pagination-bullet {
        width:5px;
        height:5px;
        background-color: #fff;
        opacity: 1;
        border: 1px solid var(--btn-color);
    }
    
    .onload-carousel .swiper-pagination .swiper-pagination-bullet-active {
        width: 6px;
        height: 6px;
        background: linear-gradient(to right, #2d0b00, var(--btn-color));
    }

    .onload-carousel .swiper-button-next, .onload-carousel .swiper-button-prev {
        color: rgb(204, 204, 204, .5);
        font-weight: bold;
    }

    .onload-carousel .swiper-button-next:after, .onload-carousel .swiper-button-prev:after {
        font-size: 20px;
    }


    .onload-spec h2 {
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 20px;
    }
}
</style>