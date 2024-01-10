<template>
  <div class="about-hitachi-soe">
    <img
      class="about-img"
      src="@/assets/images/carousel2.jpg"
      alt="About Hitachi"
    />
    <h3>Hitachi Soe Electric & Machinery Company Limited</h3>
    <p style="text-align: justify">
      Hitachi Soe Electric & Machinery Co., Ltd. (HISEM) is one of the leading
      transformer manufacturers in Myanmar. HISEM has been formed by merging
      Hitachi technological innovation and 23 years of electrical transformer
      manufacturing experience of SEM since Oct 2015. We contribute towards to
      Myanmar’s electricity infrastructure by integrating Hitachi’s transformer
      design and production technologies. HISEM’s outline of business is
      Manufacturing, Installation, Leasing, Maintenance, Repair & Sales of
      Electrical Transformers, switchgear, and transformer related accessories.
      We are ready to be your reliable partner to provide Power and Distribution
      Transformer and Related Panels for your business. HISEM Sales & Marketing
      Office and Factory are in Yangon and there are branches in Nay Pyi Taw and
      Mandalay.
    </p>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
  },
};
</script>

<style scoped>
.about-hitachi-soe {
  padding: 30px 15.5%;
}

.about-hitachi-soe img {
  width: 100%;
  height: 550px;
  object-fit: cover;
}

.about-hitachi-soe h3 {
  font-size: 24px;
  font-weight: bold;
  margin-top: 30px;
}

.about-hitachi-soe p {
  margin-top: 15px;
  font-size: 18px;
  text-indent: 50px;
}

@media (max-width: 1000px) {
  .about-hitachi-soe {
    padding: 30px 3%;
  }
}

@media (max-width: 600px) {
  .about-hitachi-soe img {
    height: 400px;
  }
}
</style>
