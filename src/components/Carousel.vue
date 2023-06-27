<template>
    <!-- Start Header Slide -->
    <div id="carouselExampleFade" class="carousel slide carousel-fade row" data-bs-ride="carousel" data-bs-interval="5000">
        <div class="carousel-inner col-lg-12 col-md-12 col-sm-12">
            <div class="carousel-item active">
                <img src="@/assets/images/carousel1.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="@/assets/images/carousel2.jpg" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <!-- End Header Slide -->
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .carousel-item img {
        width: 100%;
        height: 700px;
        object-fit: cover;
    }

    @media (max-width:1500px) {
        .carousel-item img {
            height: 550px;
        }
    }

    @media (max-width: 990px) {
        .carousel-item img {
            height: 300px;
        }
    }

    @media (max-width:450px) {
        .carousel-item img {
            height: 150px;
        }
    }
</style>
