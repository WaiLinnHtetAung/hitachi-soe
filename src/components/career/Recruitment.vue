<template>
    <div class="recruitment">
        <div class="header">
            <span data-aos="fade-up">RECRUITMENT PRODECURE</span>
            <h2 data-aos="fade-left">Full Cycle Recruiting of HISEM​</h2>
        </div>
        <div class="img">
            <img data-aos="fade-up" src="@/assets/images/career/step.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .recruitment {
        padding: 40px 15.5%;
    }

    .recruitment .header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .recruitment .header span {
        background: #f07a7a;
        font-size: 12px;
        font-weight: bold;
        padding: 5px 10px;
        border-radius: 7px;
        color: #fff;
    }

    .recruitment .header h2 {
        font-weight: bold;
        margin: 10px auto;
    }

    .recruitment .img {
        padding: 10px 10%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 50px auto;
    }

    .recruitment .img img {
        width: 70%;
        object-fit: cover;
    }

    @media (max-width: 1550px) {
        .recruitment {
            padding: 40px 9%;
        }

        .recruitment .img img {
            width: 60%;
            object-fit: cover;
        }
    }

    @media (max-width: 1200px) {
        .recruitment {
            padding: 40px 1%;
        }

        .recruitment .img img {
            width: 70%;
            object-fit: cover;
            padding: 10px 3%;
        }
    }

    @media (max-width: 700px) {
        .recruitment .header span {
            font-size: 11px;
            padding: 3px 10px;
        }
    
        .recruitment .header h2 {
            font-size: 22px;
        }

        .recruitment .img img {
            width: 90%;
        }
    }

    @media (max-width: 500px) {
        .recruitment .img img {
            width: 120%;
        }
    }
</style>
