<template>
    <div class="onload-section">
        <div class="onload-carousel swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <div class="img text-end">
                            <img src="@/assets/images/onload/160kVA1.png"  alt="">
                        </div>
                        <div class="img">
                            <img src="@/assets/images/onload/160kVA2.png" alt="">
                        </div>
                        <div class="img">
                            <img src="@/assets/images/onload/160kVA3.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <div class="img text-end">
                            <img src="@/assets/images/onload/200OL.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <div class="img text-end">
                            <img src="@/assets/images/onload/315kVA1.png" alt="">
                        </div>
                        <div class="img">
                            <img src="@/assets/images/onload/315kVA2.png" class="kva160" alt="">
                        </div>
                    </div>
                </div>
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <div class="img text-end">
                            <img src="@/assets/images/onload/400kVA_1.png" style="width: 75%;" alt="">
                        </div>
                        <div class="img">
                            <img src="@/assets/images/onload/400kVAOnload1.png"  style="width: 90%;" class="kva160" alt="">
                        </div>
                        <div class="img">
                            <img src="@/assets/images/onload/400kVAOnload2.png" class="kva160" alt="">
                        </div>
                    </div>
                </div>
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <div class="img text-end">
                            <img src="@/assets/images/onload/750kVAOL.png" alt="">
                        </div>
                        <div class="img">
                            <img src="@/assets/images/onload/750kVAOL_2.png" class="kva160" alt="">
                        </div>
                        <div class="img">
                            <img src="@/assets/images/onload/750kVAOL_3.png" alt="">
                        </div>
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
    height: 600px;
}
.swiper-slide .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 90px;
}
.swiper-slide .img {
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: center;
}

.swiper-slide .img img {
    width: 85%;
    height: 100%;
    object-fit: contain;
}

.swiper-slide .img .kva160 {
    width: 80%;
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
        margin: 10px 120px 70px;
    }

    .swiper {
        padding: 40px 0px 10px;
        height: 460px;
    }

    .swiper-slide .img img {
        width: 70%;
        height: 100%;
        object-fit: contain;
    }

    .swiper-slide .img .kva160 {
        width: 70%;
    }
}

@media (max-width:990px) {
    .onload-carousel {
        margin: 10px 40px 70px;
    }

    .swiper {
        padding: 20px 0px 10px;
        height: 400px;
    }
    .swiper-slide .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 70px;
    }
    .swiper-slide .img {
        width: 400px;
        height: 360px;
        
    }

    .swiper-slide .img img {
        width: 80%;
        height: 100%;
        object-fit: contain;
    }

    .swiper-slide .img .kva160 {
        width: 70%;
    }

    .swiper-slide .img .kva10000 {
        width: 90%;
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
    .swiper-slide .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    .swiper-slide .img {
        width: 300px;
        height: 120px;
    }

    .swiper-slide .img img {
        width: 90%;
        height: 100%;
        object-fit: contain;
    }

    .swiper-slide .img .kva160 {
        width: 70%;
    }

    .swiper-slide .img .kva10000 {
        width: 110%;
        margin: 0;
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