<template>
    <div class="certificate">
        <h2>CONFIRMATION OF <br> CERTIFICATE</h2>
        <div class="header">
            This certifies that the Management System of <br> <span class="hitachi">HITACHI SOE ELECTRIC & <br> MACHINERY COMPANY LIMITED</span> <br> Myanmar
        </div>
        <hr>

        <div class="certificate-img">
            <img src="@/assets/images/certificates/9001-2015.jpg" alt="">
        </div>
        <hr>

        <div class="information">
            <div class="row my-5">
                <div class="col-lg-4 col-md-6 info-head">
                    Status
                </div>
                <div class="col-lg-4 col-md-6 fw-bold text-success">
                    <i class="fa-solid fa-check me-2"></i>valid
                </div>
            </div>
            <hr>
            <!-- -----certificate detail information ----  -->
            <div class="row my-5">
                <div class="col-lg-4 first-column info-head">
                    Information
                </div>
                <div class="col-lg-3 col-md-6 info-sub-head">
                    Type 
                </div>
                <div class="col-lg-5 col-md-6">
                    Management System
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4 first-column">
                    
                </div>
                <div class="col-lg-3 col-md-6 info-sub-head">
                    Standard(s)
                </div>
                <div class="col-lg-5 col-md-6 lh-base">
                    Accredited, under MLA <br>
                    ISO 9001:2015 <br>
                    Environmental Management Systems
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4 first-column">
                    
                </div>
                <div class="col-lg-3 col-md-6 info-sub-head">
                    Certificate number
                </div>
                <div class="col-lg-5 col-md-6 lh-base">
                    21IQJF20/R1
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4 first-column">
                    
                </div>
                <div class="col-lg-3 col-md-6 info-sub-head">
                    Economy/Country
                </div>
                <div class="col-lg-5 col-md-6 lh-base">
                    Myanmar
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4 first-column">
                    
                </div>
                <div class="col-lg-3 col-md-6 info-sub-head">
                    Site
                </div>
                <div class="col-lg-5 col-md-6 lh-base">
                    MYANMAR, Myanmar
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 first-column">
                    
                </div>
                <div class="col-lg-3 col-md-6 info-sub-head">
                    Scope of Registration
                </div>
                <div class="col-lg-5 col-md-6 lh-base registration">
                    OFFICE: SALES AND MARKETING OF ELECTRICAL TRANSFORMERS AND ELECTRICAL PANELS. <br><br>
                    FACTORY: DESIGN AND MANUFACTURE OF ELECTRICAL TRANSFORMERS AND SERVICES (MAINTENANCE AND REPAIR). DESIGN AND MANUFACTURE OF ELECTRICAL PANELS.
                </div>
            </div>

            <hr>
            <!-- ---- detail end ---  -->

            <div class="row my-5">
                <div class="col-lg-4 col-md-6 info-sub-head">
                    Certification Body
                </div>
                <div class="col-lg-4 col-md-6 ">
                    <a href="https://www.iafcertsearch.org/certification-body/0f7d6afd-748a-56e8-9d94-f78c6d6c5518" target="_blink">AQC MIDDLE EAST – F.Z.E</a>
                </div>
            </div>
            <hr>

            <div class="row my-5">
                <div class="col-lg-4 col-md-6 info-sub-head">
                    Accreditation Body
                </div>
                <div class="col-lg-4 col-md-6 ">
                    <a href="https://www.iafcertsearch.org/accreditation-body/c9199a09-95ed-5bee-a8b4-4126c01d2657" class="text-uppercase lh-base" target="_blink">International Accreditation Service (IAS)</a>
                </div>
            </div>
            <hr>

            <div class="row my-5">
                <div class="col-lg-4 col-md-6 info-sub-head">
                    IAF
                </div>
                <div class="col-lg-4 col-md-6 ">
                    <a href="https://iaf.nu/en/home/" class="text-uppercase lh-base" target="_blink">International Accreditation Forum</a>
                </div>
            </div>
            <hr>

            <div class="row my-5">
                <div class="col-lg-4 mb-md-5 info-sub-head">
                    Official Certificate Link
                </div>
                <div class="col-lg-4 col-md-6 ">
                    <a href="https://www.iafcertsearch.org/certification/8459ea96-315e-570f-b513-9f54bb6aa853" class="lh-base" target="_blink">https://www.iafcertsearch.org/certification/8459ea96-315e-570f-b513-9f54bb6aa853</a>
                </div>
                <div class="col-lg-4 col-md-6 text-center qr">
                    <img src="@/assets/images/iaf.png" alt="">
                </div>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue'
    export default {
        setup() {
            onMounted(() => {
                window.scrollTo(0,0)
            })
        }
    }
</script>

<style scoped>
    .certificate {
        padding: 80px 15.5%;
    }

    .certificate h2 {
        text-align: center;
        font-weight: bolder;
        font-size: 42px;
        margin-bottom: 45px;
    }

    .certificate .header {
        text-align: center;
        line-height: 38px;
        font-size: 18px;
        padding-bottom: 20px;
    }

    .certificate .hitachi {
        font-weight: bold;
        font-size: 30px;
        color: rgb(24, 110, 207);
    }

    .certificate-img {
        text-align: center;
        margin-top: 80px;
        padding-bottom: 20px;
    }
    .certificate-img img {
        width: 55%;
    }

    .information .row{
        margin-top: 20px;
    }

    @media (max-width: 1500px) {
        .certificate h2 {
            font-size: 38px;
        }
    
        .certificate .hitachi {
            font-size: 24px;
        }

        .certificate-img img {
            width: 50%;
        }
            
    }

    @media (max-width: 990px) {
        .certificate h2 {
            font-size: 32px;
        }
    
        .certificate .hitachi {
            font-size: 22px;
        }

        .certificate .registration {
            font-size: 14px;
        }

        .certificate-img img {
            width: 80%;
        }

        .first-column {
            display: none;
        }
    }

    @media (max-width: 450px) {
        .certificate h2 {
            font-size: 24px;
        }
    
        .certificate .header {
            text-align: center;
            line-height: 24px;
            font-size: 14px;
            padding-bottom: 20px;
        }
        .certificate .hitachi {
            font-size: 18px;
        }

        .certificate-img img {
            width: 100%;
        }

        .first-column {
            display: block;
        }

        .certificate .registration {
            font-size: 14px;
        }

        .info-head {
            margin-bottom: 20px;
            font-weight: bold;
            font-size: 22px;
        }

        .info-sub-head {
            font-weight: bold;
            margin-bottom: 10px;
        }

        .qr {
            margin-top: 25px;
        }
    }

</style>
