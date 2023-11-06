<template>
    <div class="address">
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="map" data-aos="fade-right">
                    <img src="@/assets/images/map.png" alt="">
                </div>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12">
                <div class="locations">
                    <div data-aos="fade-left" class="location-card  shadow">
                        <h2>Sales & Marketing Office</h2>
                        <div class="office">
                            <div class="office-address">
                                <div class="d-flex gap-3">
                                    <i class="fa-solid fa-map-location-dot"></i>
                                    <span>
                                        : Building No.1, Aung Chan Thar Housing Estate,​ East Shwe Gone Daing Road, Bahan Tsp, Yangon, Myanmar.​
                                    </span>
                                </div>
                                <div class="d-flex gap-3">
                                    <i class="fa-solid fa-phone-volume"></i>
                                    <span>
                                        : +95-1-546100, 556576​
                                    </span>
                                </div>
                                <div class="d-flex gap-3 mb-3">
                                    <span>Fax</span>
                                    <span>
                                        : +95-1-546050​
                                    </span>
                                </div>

                                <div class="d-flex gap-3 mb-3">
                                    <span>Sales & Marketing</span>
                                    <span>
                                        : +95-1-556754, 8603502​
                                    </span>
                                </div>
                                
                            </div>
                            <div class="office-img">
                                <img src="@/assets/images/sale-office.jpg" alt="">
                            </div>
                        </div>
                    </div>

                    <div data-aos="zoom-in" class="location-card  shadow">
                        <h2>Factory</h2>
                        <div class="office">
                            <div class="office-address">
                                <div class="d-flex gap-3">
                                    <i class="fa-solid fa-map-location-dot"></i>
                                    <span>
                                        : Plot No. 472, 23rd Quarter, No.(1) Industrial Zone, ​Dagon Myothit (South), Yangon, Myanmar.​
                                    </span>
                                </div>
                                <div class="d-flex gap-3">
                                    <i class="fa-solid fa-phone-volume"></i>
                                    <span>
                                        :  +95-1590225, 591101, 2348126​, 2348213, 707488​
                                    </span>
                                </div>
                                <div class="d-flex gap-3">
                                    <span>Fax</span>
                                    <span>
                                        : +95-1-2348502​
                                    </span>
                                </div>

                                <div class="d-flex gap-3">
                                    <span>24 Hour Service</span>
                                    <span>
                                        : +95-9-5128541​
                                    </span>
                                </div>
                                
                            </div>
                            <div class="office-img">
                                <img src="@/assets/images/factory.jpg" alt="">
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" class="location-card  shadow">
                        <h2>Mandalay Branch</h2>
                        <div class="office">
                            <div class="office-address">
                                <div class="d-flex gap-3">
                                    <i class="fa-solid fa-map-location-dot"></i>
                                    <span>
                                        : No. 34, YGN-MDY Highway Road, Kywesekan Quarter, Pyi Gyi Tagon Tsp, Mandalay, Myanmar.​
                                    </span>
                                </div>
                                <div class="d-flex gap-3">
                                    <i class="fa-solid fa-phone-volume"></i>
                                    <span>
                                        :  +95-2-70627, 54925
                                    </span>
                                </div>
                                <div class="d-flex gap-3">
                                    <i style="visibility: hidden;" class="fa-solid fa-phone-volume"></i>
                                    <span>
                                        :  +95-9-200 5924
                                    </span>
                                </div>
                                <div class="d-flex gap-3">
                                    <i style="visibility: hidden;" class="fa-solid fa-phone-volume"></i>
                                    <span>
                                        :  +95-9-8601342
                                    </span>
                                </div>
                                
                            </div>
                            <div class="office-img">
                                <img src="@/assets/images/mandalay-office.jpg" alt="">
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" class="location-card  shadow">
                        <h2>Nay Pyi Taw Branch​</h2>
                        <div class="office">
                            <div class="office-address">
                                <div class="d-flex gap-3">
                                    <i class="fa-solid fa-map-location-dot"></i>
                                    <span>
                                        : Plot No. 32, Bawga Thiri High Class Car Service Compound, YGN-MDY Myoe Shaung Road, Nay Pyi Taw, Myanmar.
                                    </span>
                                </div>
                                <div class="d-flex gap-3">
                                    <i class="fa-solid fa-phone-volume"></i>
                                    <span>
                                        :  +95-67-27002
                                    </span>
                                </div>
                                <div class="d-flex gap-3">
                                    <i style="visibility: hidden;" class="fa-solid fa-phone-volume"></i>
                                    <span>
                                        :  +95-67-27003
                                    </span>
                                </div>
                                <div class="d-flex gap-3">
                                    <i style="visibility: hidden;" class="fa-solid fa-phone-volume"></i>
                                    <span>
                                        :  +95-67-27004
                                    </span>
                                </div>
                                <div class="d-flex gap-3">
                                    <i style="visibility: hidden;" class="fa-solid fa-phone-volume"></i>
                                    <span>
                                        :  +95-67-27005
                                    </span>
                                </div>
                                
                            </div>
                            <div class="office-img">
                                <img src="@/assets/images/mandalay-office.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .address {
        padding: 30px 15.5%;
    }

    .address .map {
        display: flex;
        justify-content: center;
    }

    .address .map img {
        width: 500px;
    }

    .locations {
        margin-top: 30px;
    }

    .location-card {
        padding: 20px;
        border-radius: 7px;
        margin-bottom: 30px;
    }

    .location-card h2 {
        font-weight: bold;
        margin-bottom: 20px;
        font-size: 26px;
    }

    .location-card .office {
        display: flex;
        gap: 15px;
    }

    .location-card .office .office-img {
        width: 400px;
    }

    .location-card .office img {
        width: 100%;
    }

    .office-address i {
        color: rgb(82, 118, 236);
    }

    .office-address .d-flex {
        margin-bottom: 5px;
    }

    @media (max-width: 1500px) {
        .address {
            padding: 30px 13%;
        }
    
        .address .map img {
            width: 400px;
        }
    
        .location-card {
            margin-bottom: 20px;
        }
    
        .location-card h2 {
            font-size: 22px;
        }
    
        .location-card .office .office-img {
            width: 400px;
        }
    
        .location-card .office img {
            width: 100%;
        }

        .office-address span {
            font-size: 14px;
        }
    
        .office-address i {
            color: rgb(82, 118, 236);
        }
    }

    @media (max-width: 1260px) {
        .address {
            padding: 30px 1%;
        }
    }

    @media (max-width: 1050px) {
        .address .map img {
            width: 350px;
        }
    }

    @media (max-width: 990px) {
        .locations {
            padding: 0 10%;
        }
        .location-card {
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    
        .location-card h2 {
            font-size: 22px;
        }

        .location-card .office {
            display: flex;
            flex-direction: column-reverse;
            gap: 15px;
        }
    
        .location-card .office .office-img {
            width: 100%;
        }
    
        .location-card .office img {
            width: 100%;
            height: 220px;
            object-fit: cover;
        }

        .office-address span {
            font-size: 14px;
        }
    
        .office-address i {
            color: rgb(82, 118, 236);
        }
    }

    @media (max-width: 860px) {
        .address .map img {
            width: 300px;
        }
    }

    @media (max-width: 550px) {
        .locations {
            padding: 0 3%;
        }
    }
</style>
