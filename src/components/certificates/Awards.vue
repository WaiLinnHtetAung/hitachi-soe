<template>
  <div class="awards-section">
    <div class="awards-type">
      <h3>IYGA & ASEAN Outstandaing Acheivement Award</h3>
      <div></div>
    </div>

    <div class="certificates d-flex gap-2">
      <div class="awards-card">
        <img
          src="@/assets/images/certificates/inspiration-of-the-year.jpg"
          alt=""
          data-aos="fade-right"
        />

        <!-- ---------for mobile ---------  -->
        <div class="mobile-certificate-info">
          <div class="row mb-3">
            <div class="col-5">Title</div>
            <div class="col-6">: Inspiration of the Year Global Award</div>
          </div>
          <div class="row mb-3">
            <div class="col-5">Date</div>
            <div class="col-6">: December 19, 2018</div>
          </div>
        </div>

        <!-- -------- mobile end----------  -->

        <div class="certificate-info">
          <div class="row" data-aos="flip-down">
            <div class="col-lg-4 col-md-4">Title</div>
            <div class="col-lg-8 col-md-8 lh-base">
              : Inspiration of the Year Global Award
            </div>
          </div>
          <div class="row" data-aos="flip-down">
            <div class="col-lg-4 col-md-4">Date</div>
            <div class="col-lg-8 col-md-8">: December 19, 2018</div>
          </div>
        </div>
      </div>

      <div class="awards-card">
        <img
          src="@/assets/images/certificates/asean-outstanding-engineering.jpg"
          alt=""
          data-aos="fade-right"
        />

        <!-- ---------for mobile ---------  -->
        <div class="mobile-certificate-info">
          <div class="row mb-3">
            <div class="col-5">Title</div>
            <div class="col-6">
              : ASEAN Outstanding Engineering Achievement Awards
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-5">Date</div>
            <div class="col-6">: 23-26 November 2015</div>
          </div>
        </div>

        <!-- -------- mobile end----------  -->

        <div class="certificate-info">
          <div class="row" data-aos="flip-down">
            <div class="col-lg-4 col-md-4">Title</div>
            <div class="col-lg-8 col-md-8 lh-base">
              : ASEAN Outstanding Engineering Achievement Award
            </div>
          </div>
          <div class="row" data-aos="flip-down">
            <div class="col-lg-4 col-md-4">Date</div>
            <div class="col-lg-8 col-md-8">: 23-26 November 2015</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.awards-section {
  padding: 80px 13%;
}

.awards-type h3 {
  font-weight: bold;
}

.awards-type div {
  border-bottom: 2px solid #000;
}

.awards-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 700px;
  gap: 30px;
  transition: 0.5s ease;
  margin: 50px 0 15px 20px;
}

.awards-card:hover {
  background-color: #eee;
}

.awards-card img {
  width: 200px;
}

.awards-card .certificate-btn {
  background: var(--btn-color);
  color: #fff;
  font-weight: bold;
}

.certificate-info {
  width: 450px;
}

.certificate-info .row {
  margin-bottom: 30px;
}

.mobile-certificate-info {
  display: none;
}

@media (max-width: 1500px) {
  .certificates {
    flex-wrap: wrap;
  }
}

@media (max-width: 990px) {
  .awards-section {
    padding: 80px 3%;
  }
}

@media (max-width: 450px) {
  .awards-section {
    padding: 60px 3%;
  }

  .awards-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    gap: 30px;
    transition: 0.5s ease;
    margin: 30px auto 20px;
  }

  .certificate-info {
    display: none;
  }

  .mobile-certificate-info {
    display: block;
    background: #eee;
    padding: 20px 0 0 20px;
  }
}
</style>
