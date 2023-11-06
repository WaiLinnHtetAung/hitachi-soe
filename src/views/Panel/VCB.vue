<template>
    <div class="vbc-section">
        <div class="vbc-carousel swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <div class="img text-end">
                            <img src="@/assets/images/vcb/VCB1.png"  alt="">
                        </div>
                    </div>
                </div>
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <div class="img text-end">
                            <img src="@/assets/images/vcb/VCB2.png"  alt="">
                        </div>
                    </div>
                </div>
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <div class="img text-end">
                            <img src="@/assets/images/vcb/VCB3.png"  alt="">
                        </div>
                    </div>
                </div>
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <div class="img text-end">
                            <img src="@/assets/images/vcb/VCB4.png"  alt="">
                        </div>
                    </div>
                </div>
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <div class="img text-end">
                            <img src="@/assets/images/vcb/VCB5.png"  alt="">
                        </div>
                    </div>
                </div>
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <div class="img text-end">
                            <img src="@/assets/images/vcb/VCB6.png"  alt="">
                        </div>
                    </div>
                </div>
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <div class="img text-end">
                            <img src="@/assets/images/vcb/VCB7.png"  alt="">
                        </div>
                    </div>
                </div>
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <div class="img text-end">
                            <img src="@/assets/images/vcb/VCB8.png"  alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination mt-3" id="swiper-paginate"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        <div class="vbc-spec">
            <h2 data-aos="fade-down">VCB</h2>
            <div data-aos="fade-up"><ProductionListForOtherPanel></ProductionListForOtherPanel></div>
        </div>
        <div class="free-space">
            &nbsp;
        </div>
    </div>
</template>

<script>

    import ProductionListForOtherPanel from '../../components/vcb/ProductionListForOtherPanel'
import Swiper from 'swiper/bundle';
    import 'swiper/css/bundle'
    import { onMounted, ref } from 'vue'
    export default {
  components: { ProductionListForOtherPanel },

        setup() {
            const swiper = ref();

            onMounted(() => {
                window.scrollTo(0,0);

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
    .vbc-section {
        position: relative;
    }
    .vbc-carousel {
        margin: 10px 280px 70px;
    }

    .swiper {
        padding: 40px 0px 10px;
        height: 550px;
    }
    .swiper-slide .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 90px;
    }
    .swiper-slide .img {
        width: 500px;
        height: 450px;
        display: flex;
        justify-content: center;
    }

    .swiper-slide .img img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .vbc-carousel .swiper-pagination .swiper-pagination-bullet {
        width:8px;
        height:8px;
        background-color: #fff;
        opacity: 1;
        border: 1px solid var(--btn-color);
    }
    
    .vbc-carousel .swiper-pagination .swiper-pagination-bullet-active {
        width: 9px;
        height: 9px;
        background: linear-gradient(to right, #2d0b00, var(--btn-color));
    }

    .vbc-carousel .swiper-button-next, .vbc-carousel .swiper-button-prev {
        color: rgb(204, 204, 204, .5);
        font-weight: bold;
    }

    .vbc-carousel .swiper-button-next:after, .vbc-carousel .swiper-button-prev:after {
        font-size: 30px;
    }

    .vbc-spec {
        padding: 30px 15.5%;
        margin-top: 20px;
    }

    .vbc-spec h2 {
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 20px;
    }

    @media (max-width:1500px) {
        .vbc-carousel {
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
        .vbc-carousel {
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
    
        .vbc-spec {
            padding: 30px 5%;
            margin-top: 20px;
        }
    }

    @media (max-width: 450px) {
        .vbc-carousel {
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
    
        .vbc-spec {
            padding: 30px 5%;
            margin-top: 20px;
        }

        .vbc-carousel .swiper-pagination .swiper-pagination-bullet {
            width:5px;
            height:5px;
            background-color: #fff;
            opacity: 1;
            border: 1px solid var(--btn-color);
        }
        
        .vbc-carousel .swiper-pagination .swiper-pagination-bullet-active {
            width: 6px;
            height: 6px;
            background: linear-gradient(to right, #2d0b00, var(--btn-color));
        }
    
        .vbc-carousel .swiper-button-next, .vbc-carousel .swiper-button-prev {
            color: rgb(204, 204, 204, .5);
            font-weight: bold;
        }
    
        .vbc-carousel .swiper-button-next:after, .vbc-carousel .swiper-button-prev:after {
            font-size: 20px;
        }
    
    
        .vbc-spec h2 {
            font-weight: bold;
            font-size: 16px;
            margin-bottom: 20px;
        }
    }


</style>
