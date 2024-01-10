<template>
  <div class="news">
    <div class="banner">
      <img
        class="w-100 mb-3"
        :src="require('@/assets/images/news/news_banner.jpg')"
        alt=""
      />
    </div>
    <div class="news-content mt-4">
      <h3 class="border-bottom fw-bold mb-4">News</h3>
      <div class="row mb-4">
        <div class="col-4 col-md-2 date">January 10, 2024</div>
        <div class="col-8 col-md-10">
          <a href="/news/1.pdf" target="_blank"
            >Hitachi to host "Hitachi Social Innovation Forum in Myanmar"（PDF
            format, 129kBytes）</a
          >
          <img :src="require('@/assets/images/news/pdf.gif')" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.news {
  padding: 20px 15.5%;
}

.news-content .date {
  font-size: 18px;
}

.news-content a {
  font-size: 19px;
  color: var(--btn-color);
}

.news-content img {
  width: 20px;
  margin-top: -10px;
}

@media (max-width: 1500px) {
  .news {
    padding: 20px 10%;
  }
}

@media (max-width: 1200px) {
  .news {
    padding: 20px 3%;
  }
}

@media (max-width: 600px) {
  .news-content .date {
    font-size: 15px;
  }

  .news-content a {
    font-size: 16px;
  }
}
</style>
