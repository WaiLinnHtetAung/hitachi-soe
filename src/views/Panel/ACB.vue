<template>
    <div class="acb-section">
        <div class="acb-carousel swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <div class="img text-end">
                            <img src="@/assets/images/ACB/MainACBPanelIMG_0084.png"  alt="">
                        </div>
                    </div>
                </div>
                <div class="swiper-slide ">
                    <div class="image-container ">
                        <div class="img text-end">
                            <img src="@/assets/images/ACB/MainACBPanel(Open)IMG_0130.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination mt-3" id="swiper-paginate"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        <div class="acb-spec">
            <h2 data-aos="fade-down">Main Distribution ACB</h2>
            <div data-aos="fade-up"><CapacitorBank></CapacitorBank></div>
            <div data-aos="fade-up"><ProductionListForOtherPanel></ProductionListForOtherPanel></div>
            <div data-aos="fade-up"><ListFor400VDPanel></ListFor400VDPanel></div>
            <div data-aos="fade-up"><Acb></Acb></div>
        </div>
        <div class="free-space">
            &nbsp;
        </div>
    </div>
</template>

<script>

    import ListFor400VDPanel from '../../components/acbpanel/ListFor400VDPanel'
import ProductionListForOtherPanel from '../../components/acbpanel/ProductionListForOtherPanel'
import CapacitorBank from '../../components/acbpanel/CapacitorBank'
import Acb from '../../components/acbpanel/Acb'
    import { onMounted, ref } from 'vue'
    import Swiper from 'swiper/bundle';
    import 'swiper/css/bundle'
    export default {
    components: {
    ListFor400VDPanel,
    ProductionListForOtherPanel,
    CapacitorBank, Acb },

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
    .acb-section {
        position: relative;
    }
    .acb-carousel {
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
        width: 600px;
        height: 500px;
        display: flex;
        justify-content: center;
    }

    .swiper-slide .img img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .acb-carousel .swiper-pagination .swiper-pagination-bullet {
        width:8px;
        height:8px;
        background-color: #fff;
        opacity: 1;
        border: 1px solid var(--btn-color);
    }
    
    .acb-carousel .swiper-pagination .swiper-pagination-bullet-active {
        width: 9px;
        height: 9px;
        background: linear-gradient(to right, #2d0b00, var(--btn-color));
    }

    .acb-carousel .swiper-button-next, .acb-carousel .swiper-button-prev {
        color: rgb(204, 204, 204, .5);
        font-weight: bold;
    }

    .acb-carousel .swiper-button-next:after, .acb-carousel .swiper-button-prev:after {
        font-size: 30px;
    }

    .acb-spec {
        padding: 30px 15.5%;
        margin-top: 20px;
    }

    .acb-spec h2 {
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 20px;
    }

    @media (max-width:1500px) {
        .acb-carousel {
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
        .acb-carousel {
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
    
        .acb-spec {
            padding: 30px 5%;
            margin-top: 20px;
        }
    }

    @media (max-width: 450px) {
        .acb-carousel {
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
    
        .acb-spec {
            padding: 30px 5%;
            margin-top: 20px;
        }

        .acb-carousel .swiper-pagination .swiper-pagination-bullet {
            width:5px;
            height:5px;
            background-color: #fff;
            opacity: 1;
            border: 1px solid var(--btn-color);
        }
        
        .acb-carousel .swiper-pagination .swiper-pagination-bullet-active {
            width: 6px;
            height: 6px;
            background: linear-gradient(to right, #2d0b00, var(--btn-color));
        }
    
        .acb-carousel .swiper-button-next, .acb-carousel .swiper-button-prev {
            color: rgb(204, 204, 204, .5);
            font-weight: bold;
        }
    
        .acb-carousel .swiper-button-next:after, .acb-carousel .swiper-button-prev:after {
            font-size: 20px;
        }
    
    
        .acb-spec h2 {
            font-weight: bold;
            font-size: 16px;
            margin-bottom: 20px;
        }
    }


</style>
