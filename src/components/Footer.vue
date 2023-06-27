<template>
    <footer class="footer">
        <div class="footer-container container">
            <div class="footer-row row">
                <div class="footer-col col-lg-3 col-md-6">
                    <div class="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft;">
                        <h3 class="f-title f_600 t_color f_size_18">Connect with Us</h3>
                        <p>Please send us email to query.</p>
                        <form action="#" class="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
                            <input type="text" name="EMAIL" class="form-control memail" placeholder="Email">
                            <!--<button class="btn btn_get btn_get_two" type="submit">Subscribe</button>-->
                            <a href="" class="careers_btn btn btn-danger btn_get btn_get_two custom-btn btn-9">Submit</a>
                            <p class="mchimp-errmessage" style="display: none;"></p>
                            <p class="mchimp-sucmessage" style="display: none;"></p>
                        </form>
                    </div>
                </div>
                <div class="footer-col col-lg-3 col-md-6">
                    <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInLeft;">
                        <h3 class="f-title f_600 t_color f_size_18">Resources</h3>
                        <ul class="list-unstyled f_list">
                            <li><a href="">Home</a></li>
                            <li><a href="">Global</a></li>
                            <li><a href="">Products & Services</a></li>
                            <li><a href="">News</a></li>
                            <li><a href="">Careers</a></li>
                            <li><a href="">About Us</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-col col-lg-3 col-md-6">
                    <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInLeft;">
                        <h3 class="f-title f_600 t_color f_size_18">Contact Us</h3>
                        <ul class="list-unstyled f_list">
                            <li><a href="">Building No.1, Aung Chan Thar Housing Estate, East Shwegonedine Road, Bahan Township,</a></li>
                            <li><a href="">Yangon, Myanmar.</a></li>
                            <li><a href="">+(95)-1-546100</a></li>
                            <li><a href="">info@hitachi-soe.com</a></li>
                            <li>
                                <a href=""></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-col col-lg-3 col-md-6">
                    <h3 class="f-title f_600 t_color f_size_18">Social Network</h3>
                    <div class="fusion-text fusion-text-4" id="slider-social-media-icons">
                        <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInLeft;">
                            <p>
                                <a href="" rel="noopener">
                                    <img class="alignnone size-medium wp-image-8983" src="@/assets/images/facebook.png" alt="">
                                </a>
                                &nbsp; &nbsp;
                                <a href="" rel="noopener">
                                    <img class="alignnone size-medium wp-image-8968" src="@/assets/images/youtube.png" alt="">
                                </a>
                                &nbsp; &nbsp;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--<div class="footer_bg">
					<div class="footer_bg_one"></div>
					<div class="footer_bg_two"></div>
				  </div>-->
        <div class="footer_bottom">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12">
                        <p class="mb-0 f_400"><a class="footer-bottom-text" href="" target="_blank">© Hitachi Soe Electric & Machinery </a>2023 All rights reserved and developed by itGateway Technology Group Ltd.</p>
                    </div>
                    <!--<div class="col-lg-6 col-sm-5 text-right">
						<p>Developed by <i class="icon_heart"></i><a class="footer-bottom-text" href="" target="_blank">itGateway Technology Group Ltd.</a></p>
					  </div>-->
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.footer {
    background-color: rgba(100, 100, 100, .5);
}

.footer-row {
    padding-top: 40px;
    padding-bottom: 20px;
}

.footer-container {
    position: relative;
    overflow-x: hidden;
}

.footer-col {
    padding-right: 15px;
    padding-left: 15px;
}

.footer_bottom {
    padding-top: 5px;
    padding-bottom: 10px;
}

.f-title {
    font-size: 20px;
    padding-bottom: 10px;
}

.f_list li {
    padding-bottom: 10px;
}

.f_list li a:hover {
    color: #000;
    opacity: 0.7;
    text-decoration: none;
}

a {
    color: #000000;
    text-decoration: none;
}

.f_list li i {
    padding-right: 5px;
}

.btn_get {
    margin-top: 20px;
    color: #fff;
}

.footer-bottom-text:hover {
    color: #000 !important;
    opacity: 0.7;
}

.text-right {
    right: 10%;
}

img {
    width: 40px;
}

@media (max-width:450px) {
    .footer {
        margin-top: .7rem;
        background-color: rgba(100, 100, 100, .5);
        padding: 1rem;
    }
    .footer-row h3 {
        font-size: 1.2rem;
    }
    .footer-row a {
        font-size: .8rem;
        width: 5rem !important;
        padding: 3px 0;
    }
}
</style>
