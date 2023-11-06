<template>
    <div class="culture">
        <div class="header">
            <span>OUR CULTURE</span>
            <h2>Experience Our Culture</h2>
        </div>
        <div class="img">
            <img src="@/assets/images/career/culture-banner.jpeg" alt="">
            <div class="content">
                <p style="text-indent: 50px;">
                    For more than 100 years, Hitachi has focused on developing the social infrastructure that provides the foundation for nearly every aspect of modern life. We have grown significantly since our inception, but our founding spirit remains at the heart of Hitachi. This spirit is built on three words that guide the way we work. 
                </p>

                <h4>Wa (Harmony)</h4>
                <p>
                    We respect the opinions of others and discuss matters frankly, but also fairly and impartially.
                </p>

                <h4>Makoto (Sincerity)</h4>
                <p>
                    We approach issues openly, honestly and respectfully, in the spirit of true teamwork.
                </p>

                <h4>Kaitakusha-seishin (Pioneering Spirit)</h4>
                <p>
                    We strive to lead in our areas of expertise, promoting the limitless potential of individuals while pursuing new challenges and higher goals.
                </p>

                <p>
                    These values form the foundation for our decisions and link our group companies around the world together. We foster a diverse, rewarding culture that drives innovation and inspires others to do the same. 
                </p>
                <p>
                    We believe our company has the best people, and they get to work on some of the coolest projects on the planet. 
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .culture {
        padding: 20px 15.5%;
    }

    .culture .header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .culture .header span {
        background: #f07a7a;
        font-size: 12px;
        font-weight: bold;
        padding: 5px 10px;
        border-radius: 7px;
        color: #fff;
    }

    .culture .header h2 {
        font-weight: bold;
        margin: 10px auto;
    }

    .culture .img {
        padding: 0 15%;
    }

    .culture .img img {
        width: 100%;
        height: 500px;
        object-fit: cover;
    }

    .culture .img .content {
        margin: 50px auto 20px;
    }

    .culture .content p {
        font-size: 16px;
        margin-bottom: 40px;
    }

    .culture .content h4 {
        font-weight: bold;
        font-size: 19px;
    }

    @media (max-width: 1500px) {
        .culture {
            padding: 20px 13%;
        }
    
        .culture .header span {
            font-size: 12px;
            padding: 5px 10px;
        }
    
        .culture .img {
            padding: 0 11%;
        }
    
        .culture .img img {
            height: 450px;
        }
    
        .culture .content p {
            font-size: 16px;
            margin-bottom: 40px;
        }
    
        .culture .content h4 {
            font-size: 19px;
        }
    }

    @media (max-width: 1250px) {
        .culture {
            padding: 20px 1%;
        }
    }

    @media (max-width: 900px) {
        .culture .header span {
            font-size: 11px;
            padding: 3px 7px;
        }
        .culture .img img {
            height: 400px;
        }
        .culture .img {
            padding: 0 5%;
        }
    }

    @media (max-width: 600px) {
        .culture .header span {
            font-size: 9px;
            padding: 3px 7px;
        }
        .culture .header h2 {
            font-size: 22px;
        }
        .culture .img img {
            height: 300px;
        }
    }

    @media (max-width: 500px) {
        .culture .content p {
            font-size: 14px;
            margin-bottom: 40px;
        }
    
        .culture .content h4 {
            font-size: 17px;
        }
    }
</style>
