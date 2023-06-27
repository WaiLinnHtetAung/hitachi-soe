<template>
    <div class="careers" bgcolor=red>
        <div class="container">
            <div class="row">
                <div class="careers-img col-lg-6 col-md-12 col-sm-12 m-sm-auto">
                    <img src="@/assets/images/carrer.jpg" alt="" class="sp">
                </div>
                <div class="careers-text col-lg-6 col-md-12 col-sm-12">
                    <div class="career-box">
                        <h2 class="open-careers_ttl">Careers</h2>
                        <p class="open-careers_txt">Contributing to society through technology.</p>
                        <p><a class="careers_btn btn btn-lg btn-danger" href="/rd/careers/index.html"><span>Learn more</span><i class="uil uil-angle-right"></i></a></p>
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
.careers {
    margin-bottom: 80px;
}

.careers-img img {
    width: 110%;
    height: 100%;
    overflow: hidden;
}

.career-box {
    width: 100%;
    height: 350px;
    background-color: rgba(100, 100, 100, .7);
    margin-top: 70px;
    box-sizing: border-box;
}

.careers-text .career-box h2 {
    padding-top: 60px !important;
    text-align: center;
    font-weight: bold;
}

.careers-text .career-box p {
    margin-top: 60px;
    font-size: 20px;
    text-align: center;
}

.careers_btn {
    justify-content: center !important;
    align-items: center;
    text-align: center;
    padding: 7px 40px;
    background-color: #c02;
    margin: 0 auto;
}

@media (max-width: 850px) {
    .careers .container .careers-img,
    .careers .container .careers-text {
        width: 680px;
        margin: 0 auto;
    }
    .careers .container img,
    .careers .container .career-box {
        width: 100%;
    }
    .careers .career-box {
        height: 350px;
    }
    .careers .career-box h2 {
        font-size: 2rem;
    }
    .careers .career-box p {
        font-size: 1.5rem;
    }
}

@media (max-width: 450px) {
    .careers .container .careers-img,
    .careers .container .careers-text {
        width: 350px;
        margin: 0 auto;
    }
    .careers .container img,
    .careers .container .career-box {
        width: 100%;
    }
    .careers .career-box {
        height: 280px;
    }
    .careers .career-box h2 {
        font-size: 1.2rem;
    }
    .careers .career-box p {
        font-size: 1rem;
    }
    .careers .career-box a {
        font-size: .8rem;
        padding: 0;
    }
}
</style>
