<template>
  <div class="information container">
    <div class="information-row row">
      <section id="portfolio" class="portfolio">
        <div class="row portfolio-container">
          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="@/assets/images/ygn.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Yangon</h4>
                <p></p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="@/assets/images/mdy.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Mandalay</h4>
                <p></p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap portfolio-last-pic">
              <img src="@/assets/images/npt.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Naypyitaw</h4>
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
  margin-bottom: 50px;
}

.portfolio-container {
  background: rgba(255, 255, 255, 0.6);
  padding: 10px;
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

@media (min-width: 450px) and (max-width: 850px) {
  .portfolio-last-pic {
    position: absolute;
    left: 140px;
    top: 30px;
  }
  .main-container .main-margin {
    margin: 0 auto !important;
  }
}

@media (max-width: 450px) {
  .information {
    margin: 10px auto 21px;
  }
  .portfolio-item {
    margin-bottom: 20px !important;
  }

  .portfolio-container {
    width: 320px;
    margin: 0 auto;
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
