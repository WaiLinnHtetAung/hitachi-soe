<template>
  <div class="information">
    <div class="information-row row">
      <section id="portfolio" class="portfolio">
        <div class="row portfolio-container">
          <div class="col-lg-3 col-md-6 portfolio-item mb-3 filter-app">
            <div class="portfolio-wrap">
              <img src="@/assets/images/ygn.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Yangon</h4>
                <p></p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 portfolio-item mb-3 filter-web">
            <div class="portfolio-wrap">
              <img src="@/assets/images/mdy.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Mandalay</h4>
                <p></p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 portfolio-item mb-3 filter-web">
            <div class="portfolio-wrap">
              <img src="@/assets/images/npt.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Naypyitaw</h4>
                <p></p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 portfolio-item mb-3 filter-web">
            <div class="portfolio-wrap">
              <img
                src="@/assets/images/sale_office.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>Sale Office</h4>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.information {
  position: relative;
  margin-top: -40px;
  z-index: 3 !important;
  padding: 0px 10%;
}

.portfolio-container {
  background: rgba(255, 255, 255, 0.6);
  padding: 10px 0px;
}

.portfolio .portfolio-item {
  padding: 0 12px;
}

.portfolio .portfolio-wrap {
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background: rgba(0, 0, 0, 0.85);
}

.portfolio .portfolio-wrap img {
  width: 100%;
  height: 200px;
}

.portfolio .portfolio-wrap::before {
  content: "";
  background: rgba(0, 0, 0, 0.65);
  position: absolute;
  left: 30px;
  right: 30px;
  top: 30px;
  bottom: 30px;
  transition: all ease-in-out 0.3s;
  z-index: 2;
  opacity: 0;
}

.portfolio .portfolio-wrap .portfolio-info {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  z-index: 3;
  transition: all ease-in-out 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.portfolio .portfolio-wrap .portfolio-info::before {
  display: block;
  content: "";
  width: 48px;
  height: 48px;
  position: absolute;
  top: 35px;
  left: 35px;
  border-top: 3px solid #bdc6ca;
  border-left: 3px solid #bdc6ca;
  transition: all 0.5s ease 0s;
  z-index: 9994;
}

.portfolio .portfolio-wrap .portfolio-info::after {
  display: block;
  content: "";
  width: 48px;
  height: 48px;
  position: absolute;
  bottom: 35px;
  right: 35px;
  border-bottom: 3px solid #bdc6ca;
  border-right: 3px solid #bdc6ca;
  transition: all 0.5s ease 0s;
  z-index: 9994;
}

.portfolio .portfolio-wrap .portfolio-info h4 {
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  margin-top: 20px;
}

.portfolio .portfolio-wrap .portfolio-info p {
  color: #0f394c;
  font-size: 14px;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
}

.portfolio .portfolio-wrap:hover::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
}

.portfolio .portfolio-wrap:hover .portfolio-info {
  opacity: 1;
}

.portfolio .portfolio-wrap:hover .portfolio-info::before {
  top: 15px;
  left: 15px;
}

.portfolio .portfolio-wrap:hover .portfolio-info::after {
  bottom: 15px;
  right: 15px;
}

@media (max-width: 1600px) {
  .information {
    padding: 0px 5%;
  }
}

@media (max-width: 1250px) {
  .information {
    padding: 0px 3%;
  }

  .portfolio .portfolio-wrap img {
    width: 100%;
    height: 150px;
  }
}

@media (min-width: 450px) and (max-width: 850px) {
  .main-container .main-margin {
    margin: 0 auto !important;
  }
}

@media (max-width: 768px) {
  .portfolio-container {
    width: 80%;
    margin: 0px auto;
  }
  .portfolio .portfolio-wrap img {
    width: 100%;
    height: 200px;
  }
}

@media (max-width: 600px) {
  .information {
    padding: 0px;
  }
  .portfolio-container {
    width: 95%;
  }
}

@media (max-width: 450px) {
  .information {
    margin: 10px auto 21px;
  }
  .portfolio-item {
    margin-bottom: 20px !important;
  }

  .main-container .main-margin {
    margin: 0 auto !important;
  }
  .main-container h2,
  .main-image-content h4 a {
    font-size: 1.1rem !important;
  }
  .main-container .main-text p,
  .main-image-content p {
    font-size: 0.8rem !important;
    text-align: justify;
  }
  .main-image-content.social {
    top: 9.5rem !important;
  }
}
</style>
