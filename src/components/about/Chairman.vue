<template>
    <div class="chairman-greeting">
        <h2>Chairman Greeting</h2>
        <div class="img">
            <img src="@/assets/images/chairman.jpg" alt="">
        </div>
        <p>Dear Valued Customers,</p>
        <p>Hitachi Soe Electric & Machinery Co., Ltd (HISEM) is proudly brought out by merging Hitachi technological innovation and SEM (electrical transformer manufacturing) in 2015. Hereby, I would like to reinforce the founding principles of HISEM as our late Chairman always brought up, we will continue to create value to the community by means of creating employment opportunity, transferring technical knowledge and industrial development. </p>
        <p>
            SEM, one of the long-standing reputable players in Myanmar Market and the formation of strategic alliance with Hitachi technological innovation, strengthens HISEM to oblige our company goal and vision to be aligned with national electrification goal implementing under the leadership of "Ministry of Electricity and Energy.". 
        </p>
        <p>
            One of the remarkable milestones of HISEM is an opportunity to be part of World Bank (IDA) program, National Electrification Project, supplying distribution transformer (5,389) units of NEP tender. 
        </p>
        <p>
            Once again, we are proud to be part of this program which is to help increase access to electricity in Myanmar which will support the communities and households economically and socially. 
        </p>
        <p>
            Our commitment of managing responsible business is that we make sure meeting the requirements of ISO9001:2015&14001:2015 in our business activities such as Manufacturing, Maintenance and Repair Services of Electrical Power and Distribution Transformers and Electrical panels. Likewise, we will continue our promise to produce reliable and eco-friendly products which provide convenience of electrical power system, reduce load loss, increase efficiency. 
        </p>
        <p>
            We believe in sustainable development and keep pursuing to be an innovative, responsible, and reliable manufacturer. According to our continuous commitment, consistent philosophy of creating value, we would like to thank support from our stakeholders and customers. 
        </p>
        <p class="text-end mt-5 fw-bold">Chairman Kyaw Min Htun</p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .chairman-greeting {
        padding: 30px 15.5%;
    }

    .chairman-greeting h2 {
        text-align: center;
        font-weight: bold;
        margin-bottom: 40px;
    }

    .chairman-greeting .img {
        text-align: center;
        margin-bottom: 50px;
    }
    .chairman-greeting img {
        width: 70%;
        height: 550px;
        object-fit: cover;
    }

    .chairman-greeting p {
        padding: 0px 12% 0px;
    }

    @media (max-width: 1500px) {
        .chairman-greeting {
            padding: 30px 13%;
        }
    }

    @media (max-width: 1260px) {
        .chairman-greeting {
            padding: 30px 1%;
        }
        .chairman-greeting img {
            width: 60%;
            height: 550px;
        }
    
        .chairman-greeting p {
            padding: 0px 13% 0px;
        }
    }

    @media (max-width: 990px) {
        .chairman-greeting img {
            width: 70%;
            height: 400px;
        }
    
        .chairman-greeting p {
            padding: 0px 7% 0px;
        }
    }

    @media (max-width: 768px) {
        .chairman-greeting img {
            width: 80%;
            height: 400px;
        }
    
        .chairman-greeting p {
            padding: 0px 7% 0px;
        }
    }

    @media (max-width: 600px) {
        .chairman-greeting img {
            width: 90%;
            height: 400px;
        }
    
        .chairman-greeting p {
            padding: 0px 5% 0px;
        }
    }

    @media (max-width: 600px) {
        .chairman-greeting img {
            width: 90%;
            height: 300px;
        }
    
    }
</style>
