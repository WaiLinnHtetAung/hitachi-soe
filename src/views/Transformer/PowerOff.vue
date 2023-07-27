<template>
    <div class="poweroff-section">
        <div class="poweroff-carousel swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <div class="img text-end">
                            <img src="@/assets/images/poweroff/5000kVA(33-11kV)OffLoadTapChangerTransformer.png"  alt="">
                        </div>
                    </div>
                </div>
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <div class="img text-end">
                            <img src="@/assets/images/poweroff/5000kVA(66-11kV)OffLoadTapChanger.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <div class="img text-end">
                            <img src="@/assets/images/poweroff/10000kVA(33-11kV)OffLoadTapChangerTransformer.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination mt-3" id="swiper-paginate"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        <div class="poweroff-spec">
            <h2 data-aos="fade-down">Power Transformer (Off Load)</h2>
            <div data-aos="fade-up"><Kv33_11></Kv33_11></div>
            <div data-aos="fade-up"><Kv66_11></Kv66_11></div>
            <div data-aos="fade-up"><Kv66_33></Kv66_33></div>
            <div data-aos="fade-up"><Kv33_11_6_6></Kv33_11_6_6></div>
            <div data-aos="fade-up"><Kv66_11_6_6></Kv66_11_6_6></div>
        </div>
        <div class="free-space">
            &nbsp;
        </div>
    </div>
</template>

<script>
    import Kv66_11_6_6 from '../../components/poweroffload/Kv66_11_6_6'
import Kv33_11_6_6 from '../../components/poweroffload/Kv33_11_6_6'
import Kv66_33 from '../../components/poweroffload/Kv66_33'
import Kv66_11 from '../../components/poweroffload/Kv66_11'
import Kv33_11 from '../../components/poweroffload/Kv33_11'
import { onMounted, ref } from 'vue'
    import Swiper from 'swiper/bundle';
    import 'swiper/css/bundle'
    export default {
  components: {
    Kv66_11_6_6,
    Kv33_11_6_6,
    Kv66_33,
    Kv66_11, Kv33_11 },

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
    .poweroff-section {
        position: relative;
    }
    .poweroff-carousel {
        margin: 10px 240px 70px;
    }

    .swiper {
        padding: 40px 0px 10px;
        height: 680px;
    }
    .swiper-slide .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 90px;
    }
    .swiper-slide .img {
        width: 600px;
        height: 600px;
        display: flex;
        justify-content: center;
    }

    .swiper-slide .img img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .poweroff-carousel .swiper-pagination .swiper-pagination-bullet {
        width:8px;
        height:8px;
        background-color: #fff;
        opacity: 1;
        border: 1px solid var(--btn-color);
    }
    
    .poweroff-carousel .swiper-pagination .swiper-pagination-bullet-active {
        width: 9px;
        height: 9px;
        background: linear-gradient(to right, #2d0b00, var(--btn-color));
    }

    .poweroff-carousel .swiper-button-next, .poweroff-carousel .swiper-button-prev {
        color: rgb(204, 204, 204, .5);
        font-weight: bold;
    }

    .poweroff-carousel .swiper-button-next:after, .poweroff-carousel .swiper-button-prev:after {
        font-size: 30px;
    }

    .poweroff-spec {
        padding: 30px 15.5%;
        margin-top: 20px;
    }

    .poweroff-spec h2 {
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 20px;
    }

    @media (max-width:1500px) {
        .poweroff-carousel {
            margin: 10px 200px 70px;
        }
    
        .swiper {
            padding: 40px 0px 10px;
            height: 490px;
        }
        .swiper-slide .image-container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 90px;
        }
        .swiper-slide .img {
            width: 450px;
            height: 400px;
            display: flex;
            justify-content: center;
        }
    }

    @media (max-width:990px) {
        .poweroff-carousel {
            margin: 10px 40px 40px;
        }
    
        .swiper {
            padding: 10px 0px 10px;
            height: 450px;
        }
        .swiper-slide .img {
            width: 400px;
            height: 400px;
        }
    
        .swiper-slide .img img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    
        .poweroff-spec {
            padding: 30px 5%;
            margin-top: 20px;
        }
    }

    @media (max-width: 450px) {
        .poweroff-carousel {
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
        .swiper-slide .img {
            width: 300px;
            height: 220px;
        }
    
        .swiper-slide .img img {
            width: 90%;
            height: 100%;
            object-fit: contain;
        }
    
        .poweroff-spec {
            padding: 30px 5%;
            margin-top: 20px;
        }

        .poweroff-carousel .swiper-pagination .swiper-pagination-bullet {
            width:5px;
            height:5px;
            background-color: #fff;
            opacity: 1;
            border: 1px solid var(--btn-color);
        }
        
        .poweroff-carousel .swiper-pagination .swiper-pagination-bullet-active {
            width: 6px;
            height: 6px;
            background: linear-gradient(to right, #2d0b00, var(--btn-color));
        }
    
        .poweroff-carousel .swiper-button-next, .poweroff-carousel .swiper-button-prev {
            color: rgb(204, 204, 204, .5);
            font-weight: bold;
        }
    
        .poweroff-carousel .swiper-button-next:after, .poweroff-carousel .swiper-button-prev:after {
            font-size: 20px;
        }
    
    
        .poweroff-spec h2 {
            font-weight: bold;
            font-size: 16px;
            margin-bottom: 20px;
        }
    }


</style>
