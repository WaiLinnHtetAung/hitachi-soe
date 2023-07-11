<template>
    <div class="certificate">
        <div class="certificate-banner">
            <img src="@/assets/images/certificate.jpg" alt="">
            <div class="certificate-caption">
                Awards & Certificates
            </div>
        </div>
        <ManagementCertificate></ManagementCertificate>
        <TypeTestCertificate></TypeTestCertificate>
    </div>
</template>

<script>
import TypeTestCertificate from '../components/TypeTestCertificate'
import ManagementCertificate from '../components/ManagementCertificate'
import { onMounted, onUpdated } from 'vue'
    export default {
  components: {
    TypeTestCertificate, ManagementCertificate },
        // setup() {
        //     onMounted(() => {
        //         window.scrollTo(0,0)
        //     })

        //     onUpdated(() => {
        //         window.scrollTo(0,0)
        //     })
        // }
    }
</script>

<style scoped>
    .certificate {
        overflow-x: hidden;
    }
    .certificate-banner {
        width: 100%;
        position: relative;
    }

    .certificate-banner img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        filter: brightness(.5);
    }

    .certificate-caption {
        position: absolute;
        top: 50%;
        left: 20%;
        color: #fff;
        font-size: 30px;
        background-color: var(--btn-color);
        padding: 20px;
        font-weight: bold;
    }

    @media (max-width:450px) {
        .certificate-banner img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            filter: brightness(.5);
        }

        .certificate-caption {
            position: absolute;
            top: 50%;
            left: 10%;
            color: #fff;
            font-size: 17px;
            background-color: var(--btn-color);
            padding: 12px;
            font-weight: bold;
        }
    }

    
</style>
