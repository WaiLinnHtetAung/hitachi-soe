<template>
  <div class="customer">
    <div class="banner">
      <img src="@/assets/images/customer/banner.jpg" alt="" />
    </div>
    <h2>Our Clients</h2>
    <div class="content">
      <div v-for="i in 52" :key="i" class="item" data-aos="zoom-in">
        <img
          :class="{
            'large-img':
              i == 2 ||
              i == 35 ||
              i == 38 ||
              i == 41 ||
              i == 42 ||
              i == 45 ||
              i == 15 ||
              i == 16 ||
              i == 17,
            'middle-img':
              i == 1 ||
              i == 3 ||
              i == 4 ||
              i == 8 ||
              i == 10 ||
              i == 12 ||
              i == 18 ||
              i == 21 ||
              i == 22 ||
              i == 31 ||
              i == 32 ||
              i == 36 ||
              i == 39 ||
              i == 43 ||
              i > 45,
          }"
          :src="require(`@/assets/images/customer/${i}.jpg`)"
          alt=""
        />
      </div>
    </div>
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
.customer .banner img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.customer h2 {
  text-align: center;
  font-weight: bold;
  margin: 70px auto 10px;
  font-size: 35px;
}

.customer .content {
  padding: 30px 15.5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.customer .content .item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 200px;
  height: 200px;
  box-shadow: 1px 1px 3px gray;
}

.customer .content .item img {
  object-fit: cover;
  width: 60%;
}

.customer .content .item img.middle-img {
  width: 75%;
}

.customer .content .item img.large-img {
  width: 90%;
}

@media (max-width: 1560px) {
  .customer .content {
    padding: 30px 9%;
  }

  .customer .content .item {
    width: 190px;
    height: 190px;
  }
}

@media (max-width: 1250px) {
  .customer .content {
    padding: 30px 1%;
  }

  .customer .content .item {
    width: 170px;
    height: 170px;
  }
}

@media (max-width: 800px) {
  .customer .banner img {
    height: 400px;
  }

  .customer h2 {
    margin: 50px auto 10px;
    font-size: 28px;
  }
  .customer .content .item {
    width: 140px;
    height: 140px;
  }
}

@media (max-width: 500px) {
  .customer .banner img {
    height: 350px;
  }
}

@media (max-width: 400px) {
  .customer .banner img {
    height: 300px;
  }
}
</style>
