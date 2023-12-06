<template>
  <div class="news">
    <div class="banner">
      <img :src="require('@/assets/images/news/banner.webp')" alt="" />
    </div>

    <div
      class="d-flex justify-content-between align-items-center pe-3 news-title"
      style="margin-top: 40px"
    >
      <div>
        <h3 class="fw-bold">Upcoming News & Events {{ type }}</h3>
      </div>
      <div class="d-flex news-type">
        <span :class="{ 'news-active': type == 'all' }" @click="type = 'all'"
          >All</span
        >
        <span
          :class="{ 'news-active': type == 'event' }"
          @click="type = 'event'"
          >Events</span
        >
        <span :class="{ 'news-active': type == 'csr' }" @click="type = 'csr'"
          >CSR</span
        >
      </div>
    </div>
    <hr />
    <div class="news-container">
      <div class="row" v-for="(item, i) in news" :key="i">
        <div class="row new-item" v-if="type == 'all' || type == item.type">
          <div class="col-md-2">
            <div
              class="d-flex flex-column justify-content-center align-items-center gap-2 h-100"
            >
              <span>{{ item.month }}</span>
              <h2 class="fw-bold" style="font-style: italic">{{ item.day }}</h2>
              <span>{{ item.year }}</span>
            </div>
          </div>
          <div class="col-md-4 news-img">
            <div class="d-flex justify-content-center align-items-center h-100">
              <img :src="item.img ? item.img[0] : ''" alt="" />
            </div>
          </div>
          <div class="col-md-6 news-info">
            <div
              class="d-flex flex-column justify-content-center gap-2 h-100 p-3"
            >
              <h4>{{ item.title }}</h4>
              <div>
                <span class="p-2 rounded text-white bg-info">{{
                  item.type ? item.type.toUpperCase() : ""
                }}</span>
              </div>
              <div class="mt-3">
                <router-link :to="`/news-detail/${item.id}`"
                  >View More <i class="fa-solid fa-arrow-right ms-2"></i
                ></router-link>
              </div>
            </div>
          </div>
          <hr class="mt-5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const type = ref("all");
    const store = useStore();

    const news = computed(() => store.getters["getNews"]);

    return { type, news };
  },
};
</script>

<style scoped>
.news {
  padding: 30px 15%;
}

.news .banner img {
  width: 100%;
  filter: brightness(0.7);
  height: 500px;
  object-fit: cover;
}

.news .news-container {
  margin-top: 60px;
}

.news .news-item h2 {
  font-size: 38px;
}

.news .news-img img {
  width: 100%;
}

.news .news-info h4 {
  font-weight: bold;
  line-height: 40px;
}

.news .news-info a {
  text-decoration: none;
  background: rgb(184, 69, 69);
  padding: 7px 20px;
  border-radius: 7px;
  color: #f2f2f2;
  transition: 0.5s;
  font-size: 12px;
  font-weight: bold;
}

.news .news-info a:hover {
  background: rgb(56, 56, 173);
}

.news .news-type span {
  padding: 10px 30px;
  cursor: pointer;
}

.news .news-active {
  background: #f2f2f2;
  border-left: 5px solid var(--btn-color);
}

@media (max-width: 1500px) {
  .news {
    padding: 30px 13%;
  }
}

@media (max-width: 1260px) {
  .news {
    padding: 30px 1%;
  }

  .news .banner img {
    height: 350px;
  }
}

@media (max-width: 700px) {
  .news .news-title {
    flex-direction: column;
    gap: 20px;
  }

  .news .news-info h4 {
    line-height: 30px;
    font-size: 19px;
  }
}
</style>
