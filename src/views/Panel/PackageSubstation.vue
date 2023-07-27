<template>
    <div class="package-section">
        <div class="package-carousel swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <div class="img text-end">
                            <img src="@/assets/images/PackageSubstation/Package.png"  alt="">
                        </div>
                    </div>
                </div>
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <div class="img text-end">
                            <img src="@/assets/images/PackageSubstation/Package_1.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <div class="img text-end">
                            <img src="@/assets/images/PackageSubstation/Package_2.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <div class="img text-end">
                            <img src="@/assets/images/PackageSubstation/Package_3.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <div class="img text-end">
                            <img src="@/assets/images/PackageSubstation/Package_4.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination mt-3" id="swiper-paginate"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        <div class="package-spec">
            <h2 data-aos="fade-down">Package Type Transformer</h2>
            <div data-aos="fade-up"><Package></Package></div>
            <div data-aos="fade-up"><CapacitorBank></CapacitorBank></div>
            <div data-aos="fade-up"><ListFor400VDPanel></ListFor400VDPanel></div>
            <div data-aos="fade-up"><ProductionListForOtherPanel></ProductionListForOtherPanel></div>
        </div>
        <div class="free-space">
            &nbsp;
        </div>
    </div>
</template>

<script>

    import ProductionListForOtherPanel from '../../components/packageSubstation/ProductionListForOtherPanel'
import ListFor400VDPanel from '../../components/packageSubstation/ListFor400VDPanel'
import CapacitorBank from '../../components/packageSubstation/CapacitorBank'
import Package from '../../components/packageSubstation/Package'
import Swiper from 'swiper/bundle';
    import 'swiper/css/bundle'
    import { onMounted, ref } from 'vue'
    export default {
  components: {
    ProductionListForOtherPanel,
    ListFor400VDPanel,
    CapacitorBank, Package },

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
    .package-section {
        position: relative;
    }
    .package-carousel {
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

    .package-carousel .swiper-pagination .swiper-pagination-bullet {
        width:8px;
        height:8px;
        background-color: #fff;
        opacity: 1;
        border: 1px solid var(--btn-color);
    }
    
    .package-carousel .swiper-pagination .swiper-pagination-bullet-active {
        width: 9px;
        height: 9px;
        background: linear-gradient(to right, #2d0b00, var(--btn-color));
    }

    .package-carousel .swiper-button-next, .package-carousel .swiper-button-prev {
        color: rgb(204, 204, 204, .5);
        font-weight: bold;
    }

    .package-carousel .swiper-button-next:after, .package-carousel .swiper-button-prev:after {
        font-size: 30px;
    }

    .package-spec {
        padding: 30px 15.5%;
        margin-top: 20px;
    }

    .package-spec h2 {
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 20px;
    }

    @media (max-width:1500px) {
        .package-carousel {
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
        .package-carousel {
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
    
        .package-spec {
            padding: 30px 5%;
            margin-top: 20px;
        }
    }

    @media (max-width: 450px) {
        .package-carousel {
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
    
        .package-spec {
            padding: 30px 5%;
            margin-top: 20px;
        }

        .package-carousel .swiper-pagination .swiper-pagination-bullet {
            width:5px;
            height:5px;
            background-color: #fff;
            opacity: 1;
            border: 1px solid var(--btn-color);
        }
        
        .package-carousel .swiper-pagination .swiper-pagination-bullet-active {
            width: 6px;
            height: 6px;
            background: linear-gradient(to right, #2d0b00, var(--btn-color));
        }
    
        .package-carousel .swiper-button-next, .package-carousel .swiper-button-prev {
            color: rgb(204, 204, 204, .5);
            font-weight: bold;
        }
    
        .package-carousel .swiper-button-next:after, .package-carousel .swiper-button-prev:after {
            font-size: 20px;
        }
    
    
        .package-spec h2 {
            font-weight: bold;
            font-size: 16px;
            margin-bottom: 20px;
        }
    }


</style>
