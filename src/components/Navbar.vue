<template>
    <!-- top nav bar  -->
    <nav class="nav1 navbar">
        <div class="nav1-wraper">
            <a class="navbar-brand" href="https://www.hitachi.com/"><img class="hitachi-logo" src="@/assets/images/top-logo.png" alt="Hitachi"></a>

            

            <div class="mobile-toggle">
                <div class="mobile-search">
                    <a class="nav-link nav1-info-container" href="#" role="button" data-toggle="dropdown" aria-expanded="false"><img class="" src="@/assets/images/icon_search.svg" alt="Search"></a>
                </div>

                <button class="toggler nav-toggler">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>

            <div class=" nav1-contact">
                <div class="top-item active">
                    <a class="nav-link nav1-info-container" href="" role="button" data-toggle="dropdown" aria-expanded="false"><img class="earth" src="@/assets/images/icon_earth.png" alt="Region / Language"><span class="language">Region / Language</span></a>
                    <div class="dropdown-menu" id="LangMenu">
                        <a class="dropdown-item" href="#">Global(English)</a>
                        <a class="dropdown-item" href="#">Japan(Japanese)</a>
                        <a class="dropdown-item" href="#">Global Network</a>
                    </div>
                </div>
                <div class="top-item">
                    <a class="nav-link nav1-info-container" href="contact.html"><img class="mail" src="@/assets/images/icon_mail.png" alt="Contact Information"><span>Contact Information</span></a>
                </div>
                <div class="top-item">
                    <a class="nav-link nav1-info-container" href="#" role="button" data-toggle="dropdown" aria-expanded="false"><img class="search" src="@/assets/images/icon_search.svg" alt="Search"><span >Search</span></a>
                </div>
            </div>
        </div>
    </nav>

    <!-- main nav bar  -->

    <nav class="nav2">
        <div class="nav2-wraper">
            <a class="navbar-brand" href="index.html"><img class="logo-text" src="@/assets/images/favicon.png" height="50" alt="Hitachi, Ltd."> Hitachi Soe Electric & Machinery</a>
            
            <div class="menu-wraper">
                <router-link to="#">A-Transformer</router-link>
                <router-link to="#" class="product-services">Products & Services
                    <div class="dropdown">
                        <ul>
                            <li>One</li>
                            <li>Two</li>
                            <li>Three</li>
                        </ul>
                    </div>
                </router-link>
                <router-link to="#">About Us</router-link>
                <router-link to="#">Certificates</router-link>
                <router-link to="#">News</router-link>
                <router-link to="#">Careers</router-link>
                <router-link to="#">Our Clients</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

    /* nav top bar */

    .navbar {
        width: 100%;
        max-height: 44px;
    }
    
    .navbar-brand img {
        width: auto;
        height: 30px;
    }

    .nav1-wraper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15.5%;
    }

    .nav1 ul li {
        list-style: none;
    }

    .mobile-toggle{
        display: none;
    }

    .nav1-contact {
        display: flex;
        align-items: center;
        
    }

    .top-item{
        margin: -11px 0 0 -5px;
        padding-bottom: 5px;
        transition: .3s ease-in-out;
    }

    .top-item:hover {
        background: #c5c5c5;
    }

    .top-item:hover a {
        color: #000;
    }

    .top-item a span {
        font-size: 13px;
        font-weight: 100;

    }

    .nav1 .earth, .nav1 .mail, .nav1 .search {
        width: 24px;
        height: auto;
        margin-right: 10px;
    }

    .nav1 .mail {
        width: 32px;
    }

    .nav1 .search {
        width: 30px;
    }

    a {
        color: #000;
    }


    /* ------------ main navbar ----------- */
    .nav2 {
        height: 53px;
        background: #f2f2f2;
        position: relative;
    }

    .nav2-wraper {
        padding: 10px 15.5% 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav2 .navbar-brand img {
        width: 26px;
        height: auto;
    }

    .nav2 .navbar-brand {
        font-weight: bold;
        font-size: 16px;
    }

    .nav2 .menu-wraper a{
        text-decoration: none;
        font-size: 13px;
        font-weight: 100;
        padding: 20px 18px;
        transition: .2s ease-in-out;
    }

    .nav2 .menu-wraper a:hover {
        background: var(--btn-color);
        color: #fff;
    }

    /* ------dropdown ------------ */

    .product-services .dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        transform: translateY(0);
        opacity: 0;
        pointer-events: none;
        transition: 0.5s;
        z-index: 99;
        background-color: rgba(104, 99, 99, 0.85);
        display: flex;
    }

    .product-services:hover>.dropdown {
        opacity: 1;
        pointer-events: auto;
    }

    

    @media (max-width: 1500px) {
        /* --------- top navbar ------- */
        .navbar {
            width: 100%;
            max-height: 35px;
        }

        .nav1 .navbar-brand {
            margin-top: -8px;

        }
        
        .navbar-brand img {
            width: auto;
            height: 25px;
        }

        .top-item{
            margin: -12px 0 0 -5px;
            padding-bottom: 5px;
            transition: .3s ease-in-out;
        }
    
        .top-item:hover {
            background: #c5c5c5;
        }
    
        .top-item:hover a {
            color: #000;
        }
    
        .top-item a span {
            font-size: 12px;
            font-weight: 100;
    
        }
    
        .nav1 .earth, .nav1 .mail, .nav1 .search {
            width: 19px;
            height: auto;
            margin-right: 5px;
        }
    
        .nav1 .mail {
            width: 24px;
        }
    
        .nav1 .search {
            width: 22px;
        }

        /* --------main navbar----- */
        .nav2 {
            height: 40px;
        }

        .nav2-wraper {
            padding: 5px 15.5% ;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .nav2 .navbar-brand img {
            width: 20px;
            height: auto;
        }
    
        .nav2 .navbar-brand {
            font-size: 12px;
        }

        .nav2 .menu-wraper a{
            text-decoration: none;
            font-size: 12px;
            font-weight: 100;
            padding: 15px 15px;
            transition: .2s ease-in-out;
        }
    }


    @media (max-width: 1260px) {
        /* ------top navbar ---------- */
        .nav1-wraper {
            padding: 0 1%;
        }


        /* --------- main navbar------ */
        .nav2-wraper {
            padding: 0 1%;
        }
    }

    @media (max-width: 900px) {

        /* top navbar */
        .navbar {
            max-height: 44px;
        }

        .top-item{
            margin: -10px 0 0 -5px;
            padding: 4px 0 7px;
            transition: .3s ease-in-out;
        }


        /* main navbar */
        .nav2 {
            height: auto;
            padding: 1px 15px;
        }
        .nav2-wraper {
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 1.5rem;
        }

        .menu-wraper {
            display: flex;
            flex-wrap: wrap;
            padding-bottom: -2px;
        }
    }

    @media (max-width: 768px) {

        /* top navbar */
        .nav1 {
            padding: 0;
        }
        .nav1 .nav1-contact{
            display: none;
        }

        .nav1-wraper {
            padding-right: 0;
            margin-left: 10px;
        }

        .mobile-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .mobile-search {
            display: inline-block;
            width:50px;
            height: 45px;
            padding: 8px 10px;
            position: relative;
            transition: .3s ease-in-out;
        }

        .mobile-search:hover {
            background-color: #c5c5c5;
        }

        .mobile-search a {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .mobile-search a img {
            width: 28px;
        }

        .nav1 .nav-toggler {
            display: inline-block;
            width:45px;
            height: 45px;
            background-color: #ff0026;
            padding: 10px 10px ;
            border: none;
        }

        .nav-toggler i {
            color: #fff;
            font-size: 24px;
        }


        /* ----- main navbar------ */
        .menu-wraper {
            display: flex;
            flex-direction: column;
            padding-bottom: -2px;
        }

        .nav2 .menu-wraper a {
            font-size: 90%;
        }
    }

</style>
