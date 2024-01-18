<template>
  <div class="certificate-section">
    <div class="certificate-type">
      <h3>Management System Certificates</h3>
      <div></div>
    </div>

    <div class="certificates d-flex gap-2">
      <div class="certificate-card">
        <img
          src="@/assets/images/certificates/14001.jpg"
          alt=""
          data-aos="fade-right"
          class="shadow"
        />

        <!-- ---------for mobile ---------  -->
        <div class="mobile-certificate-info">
          <div class="row mb-3">
            <div class="col-5">Certificate Number</div>
            <div class="col-6">: 21IEJB21</div>
          </div>
          <div class="row mb-3">
            <div class="col-5">Standard(s)</div>
            <div class="col-6">: ISO 14001:2015</div>
          </div>
          <div class="row mb-3">
            <div class="col-5">Accreditation Body</div>
            <div class="col-6 lh-base">
              : International Accreditation Service
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-5">Certification Body</div>
            <div class="col-6 lh-base">: AQC MIDDLE EAST – F.Z.E</div>
          </div>
          <div class="row mb-3">
            <div class="col">
              <router-link to="certificates/14001" class="btn certificate-btn"
                >View Certificate Information</router-link
              >
            </div>
          </div>
        </div>

        <!-- -------- mobile end----------  -->

        <div class="certificate-info">
          <div class="row" data-aos="flip-down">
            <div class="col-lg-4 col-md-4">Certificate Number</div>
            <div class="col-lg-7 col-md-8">: 21IEJB21</div>
          </div>
          <div class="row" data-aos="flip-down">
            <div class="col-lg-4 col-md-4">Standard(s)</div>
            <div class="col-lg-7 col-md-8">: ISO 14001:2015</div>
          </div>
          <div class="row" data-aos="flip-down">
            <div class="col-lg-4 col-md-4">Accreditation Body</div>
            <div class="col-lg-7 col-md-8">
              : International Accreditation Service
            </div>
          </div>
          <div class="row" data-aos="flip-down">
            <div class="col-lg-4 col-md-4">Certification Body</div>
            <div class="col-lg-7 col-md-8">: AQC MIDDLE EAST – F.Z.E</div>
          </div>
          <div class="row" data-aos="flip-down">
            <div class="col-lg-7">
              <router-link to="certificates/14001" class="btn certificate-btn"
                >View Certificate Information</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="certificate-card">
        <img
          src="@/assets/images/certificates/9001.jpg"
          alt=""
          data-aos="fade-right"
        />

        <!-- ---------for mobile ---------  -->
        <div class="mobile-certificate-info">
          <div class="row mb-3">
            <div class="col-5">Certificate Number</div>
            <div class="col-6">: 21IQJF20</div>
          </div>
          <div class="row mb-3">
            <div class="col-5">Standard(s)</div>
            <div class="col-6">: ISO 9001:2015</div>
          </div>
          <div class="row mb-3">
            <div class="col-5">Accreditation Body</div>
            <div class="col-6 lh-base">
              : International Accreditation Service
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-5">Certification Body</div>
            <div class="col-6 lh-base">: AQC MIDDLE EAST – F.Z.E</div>
          </div>
          <div class="row mb-3">
            <div class="col">
              <router-link to="/certificates/9001" class="btn certificate-btn"
                >View Certificate Information</router-link
              >
            </div>
          </div>
        </div>

        <!-- -------- mobile end----------  -->

        <div class="certificate-info">
          <div class="row" data-aos="flip-down">
            <div class="col-lg-4 col-md-4">Certificate Number</div>
            <div class="col-lg-7 col-md-8">: 21IQJF20</div>
          </div>
          <div class="row" data-aos="flip-down">
            <div class="col-lg-4 col-md-4">Standard(s)</div>
            <div class="col-lg-7 col-md-8">: ISO 9001:2015</div>
          </div>
          <div class="row" data-aos="flip-down">
            <div class="col-lg-4 col-md-4">Accreditation Body</div>
            <div class="col-lg-7 col-md-8">
              : International Accreditation Service
            </div>
          </div>
          <div class="row" data-aos="flip-down">
            <div class="col-lg-4 col-md-4">Certification Body</div>
            <div class="col-lg-7 col-md-8">: AQC MIDDLE EAST – F.Z.E</div>
          </div>
          <div class="row" data-aos="flip-down">
            <div class="col-lg-7">
              <router-link to="/certificates/9001" class="btn certificate-btn"
                >View Certificate Information</router-link
              >
            </div>
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
.certificate-section {
  padding: 80px 13%;
}

.certificate-type h3 {
  font-weight: bold;
}

.certificate-type div {
  border-bottom: 2px solid #000;
}

.certificate-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 700px;
  gap: 30px;
  transition: 0.5s ease;
  margin: 50px 0 15px 20px;
}

.certificate-card:hover {
  background-color: #eee;
}

.certificate-card img {
  width: 200px;
}

.certificate-card .certificate-btn {
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
  .certificate-section {
    padding: 80px 3%;
  }
}

@media (max-width: 450px) {
  .certificate-section {
    padding: 60px 3%;
  }

  .certificate-card {
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
