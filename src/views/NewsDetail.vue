<template>
  <div class="news-detail">
    <div
      class="d-flex justify-content-between align-items-center mb-5"
      style="background: #faebeb; padding: 5px 10px; border-radius: 7px"
    >
      <i class="fa-solid fa-arrow-left fs-3 pointer" @click="goback()"></i>
      <h2 class="fw-bold">News & Event</h2>
      <div>&nbsp;</div>
    </div>
    <div class="news-detail-container p-3 p-md-5">
      <h2 class="fw-bold mb-4">
        {{ newsDetail.title }}
      </h2>
      <div class="d-flex align-items-center gap-3 my-3">
        <i class="fa-regular fa-calendar-days text-danger fs-4"></i>
        <span class="fs-5 fw-bold text-primary"
          >{{ newsDetail.day }}-{{ newsDetail.month }}-{{
            newsDetail.year
          }}</span
        >
      </div>
      <div
        class="images d-flex justify-content-center align-items-center flex-wrap gap-3 mt-5"
      >
        <img v-for="(item, i) in newsDetail.img" :key="i" :src="item" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  props: ["id"],
  setup({ id }) {
    const store = useStore();
    const goback = () => {
      window.history.go(-1);
    };

    store.dispatch("getNewsDetail", id);
    const newsDetail = computed(() => store.getters["getNewsDetail"]);

    onMounted(() => {
      window.scrollTo(0, 0);
    });

    return { goback, newsDetail };
  },
};
</script>

<style scoped>
.news-detail {
  padding: 30px 15%;
}

@media (max-width: 1500px) {
  .news-detail {
    padding: 30px 13%;
  }
}

@media (max-width: 1260px) {
  .news-detail {
    padding: 30px 3%;
  }
}

@media (max-width: 700px) {
  .news-detail-container h2 {
    font-size: 22px;
  }

  .news-detail .images img {
    width: 100%;
  }
}
</style>
