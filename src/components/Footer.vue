<template>
    <footer class="footer ">
        <div class="footer1">
            <div class="social">
                <router-link to="#"><img src="@/assets/images/icon_sns_facebook.png" alt=""></router-link>
                <router-link to="#"><img src="@/assets/images/icon_sns_linkedin.png" alt=""></router-link>
                <router-link to="#"><img src="@/assets/images/icon_sns_twitter.png" alt=""></router-link>
                <router-link to="#"><img src="@/assets/images/icon_sns_youtube.png" alt=""></router-link>
            </div>
            <div class="link ">
                <router-link to="#">About Hitachi's Social Media Activities</router-link>
                <router-link to="#">Sitemap</router-link>
                <router-link to="#">Contact Information</router-link>
            </div>
        </div>

        <div class="global-site">
            <router-link to="https://www.hitachi.com">Hitachi Global Website</router-link>
        </div>

        <div class="policy">
            <div class="copy-right">
                &copy;&nbsp;Hitachi, Ltd.&nbsp; 1994, &nbsp; 2023. &nbsp; All rights reserved.
            </div>
            <div class="access-policy">
                <router-link to="#">Accessbility Policy</router-link>
                <router-link to="#">Terms of Use</router-link>
                <router-link to="#">Privacy Policy</router-link>
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
    background-color: #e5e5e5;
    padding: 20px 15.5%;
}

.footer1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer .social img {
    width: 7%;
    margin-right: 15px;
}

.footer .link a {
    text-decoration: none;
    font-size: 90%;
    margin-left: 30px;
    color: #040404;
}

.footer .link a:hover {
    color: #d95369;
    text-decoration: underline;
}

.global-site {
    margin: 35px auto 20px;
}

.global-site a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
    font-size: 100%;
}

.global-site a:hover {
    text-decoration: underline;
    color: #d95369;
}

.policy {
    display: flex;
    justify-content: space-between;
}

.policy .copy-right {
    font-size: 65%;
}

.policy .access-policy a{
    text-decoration: none;
    font-size: 70%;
    margin-left: 30px;
    color: #040404;
}

.policy .access-policy a:hover {
    text-decoration: underline;
    color: #d95369;
}

@media (max-width: 1500px) {
    .footer {
        padding: 20px 10%;
    }
}

@media (max-width: 990px) {
    .footer {
        padding: 20px 2%;
    }

    .footer1 {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }

    .footer .social img {
        width: 12%;
    }

    .footer .link a{
        margin-left: 20px;
    }
}

@media (max-width: 768px) {

    .footer {
        padding: 30px 5%;
    }

    .footer1 .social {
        text-align: center;
    }

    .footer .social img {
        width: 9%;
        margin: 15px 10px 35px;
    }
    .footer1 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .footer1 .link {
        align-self: flex-start;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .footer1 .link a {
        margin-left: 0;
        font-size: 80%;
    }

    .footer .global-site {
        border: 1px solid #000;
        padding: 15px 30px;
        text-align: center;
        transition: .5s ease;
    }

    .footer .global-site:hover {
        background: #c5c2c2;
    }

    .footer .global-site:hover a {
        color: #000;
        text-decoration: none;
    }

    .policy {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        gap: 14px;
    }

    .policy .access-policy a {
        margin: 1px 8px;
    }

}

</style>
