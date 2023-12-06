<template>
  <div class="certificate">
    <div class="certificate-banner">
      <img src="@/assets/images/certificate.jpg" alt="" />
      <div class="certificate-caption" data-aos="fade-left">
        Awards & Certificates
      </div>
    </div>
    <div class="certificate-tab">
      <div
        class="mt-5 d-flex justify-content-around align-items-center gap-3"
        style="background: #dde1e0"
      >
        <div
          class="d-flex justify-content-center align-items-center flex-column gap-3 w-100 tab pointer p-2"
          :class="{ 'certificate-active': currentTab == 'mgmt_system' }"
          @click="currentTab = 'mgmt_system'"
        >
          <img src="@/assets/images/certificates/system.png" alt="" />
          <span>Management System Certificates</span>
        </div>
        <div
          class="d-flex justify-content-center align-items-center flex-column gap-3 w-100 tab pointer p-2"
          :class="{ 'certificate-active': currentTab == 'type_test' }"
          @click="currentTab = 'type_test'"
        >
          <img src="@/assets/images/certificates/type_test.png" alt="" />
          <span>Test & Performance Certificates</span>
        </div>
        <div
          class="d-flex justify-content-center align-items-center flex-column gap-3 w-100 tab pointer p-2"
          :class="{ 'certificate-active': currentTab == 'awards' }"
          @click="currentTab = 'awards'"
        >
          <img src="@/assets/images/certificates/award.png" alt="" />
          <span>Awards</span>
        </div>
      </div>
    </div>
    <div v-if="currentTab == 'mgmt_system'">
      <ManagementCertificate></ManagementCertificate>
    </div>
    <div v-if="currentTab == 'type_test'">
      <TypeTestCertificate></TypeTestCertificate>
    </div>
    <div v-if="currentTab == 'awards'">
      <Awards></Awards>
    </div>
  </div>
</template>

<script>
import Awards from "../components/certificates/Awards";
import TypeTestCertificate from "../components/certificates/TypeTestCertificate";
import ManagementCertificate from "../components/certificates/ManagementCertificate";
import { onMounted, onUpdated, ref } from "vue";

export default {
  components: {
    Awards,
    TypeTestCertificate,
    ManagementCertificate,
  },
  setup() {
    const currentTab = ref("mgmt_system");
    onMounted(() => {
      window.scrollTo(0, 0);
    });
    onUpdated(() => {
      window.scrollTo(0, 0);
    });

    return { currentTab };
  },
};
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
  filter: brightness(0.5);
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

.certificate-tab {
  padding: 0px 13%;
}

.certificate-active {
  background: #fff !important;
  border-top: 5px solid var(--btn-color);
}

@media (max-width: 1400px) {
  .tab img {
    width: 45px;
  }
}

@media (max-width: 1200px) {
  .certificate-tab {
    padding: 0px 10%;
  }

  .tab {
    padding: 0 !important;
  }
}

@media (max-width: 1050px) {
  .certificate-tab {
    padding: 0px 3%;
  }
  .tab {
    height: 100px;
    text-align: center;
  }
}

@media (max-width: 700px) {
  .tab img {
    width: 35px;
  }

  .tab {
    font-size: 12px;
  }
}

@media (max-width: 450px) {
  .certificate-banner img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    filter: brightness(0.5);
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
