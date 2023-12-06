<template>
  <div class="md-speech">
    <h2>MD Speech</h2>
    <div class="img">
      <img src="@/assets/images/MD.jpg" alt="" />
    </div>
    <p>Dear Valued Customers,</p>
    <p>
      This year 2023, Hitachi Soe Electric & Machinery Co., Ltd. (HISEM) proudly
      celebrates our 8<sup>th</sup> anniversary since the merger of two
      exceptional organizations between SEM and Hitachi Group. As the Managing
      Director, I would like to take a moment to express our deepest gratitude
      for your unwavering support and loyalty throughout this incredible
      journey.
    </p>
    <p>
      The traditional seventh wedding anniversary symbol is copper, and the
      eighth year anniversary symbol is bronze or pottery. As bronze is made
      mixing the copper and tin, it becomes stronger and makes it look more
      magnificent. This metaphor reflects our two companies meaning that we grow
      stronger and look more magnificent.
    </p>
    <p>
      Again, this metaphor represents our two companies: no matter how many
      difficulties we face, we overcome as strong as family ties with positive
      mindsets. As a result of our mutual efforts, we have been contributing to
      Myanmar’s Basic Infrastructure especially in electrical power and are
      resolute in providing reliable power and distribution transformers.
    </p>
    <p>
      The merging of our two companies was a visionary step that allowed us to
      pool our resources, knowledge, and expertise, as well as to pave the way
      for remarkable growth and innovation. We are incredibly proud of the
      milestones we have achieved together in the electrical power industry, and
      it wouldn't have been possible without your trust in our capabilities. We
      also celebrate the triumphs and breakthroughs that have shaped us into the
      dynamic organization we are today in the electrical power industry.
    </p>
    <p>
      On the other hand, the world is facing climate changes year by year as
      industries develop rapidly, which everyone must give more attention to. We
      will be focusing on low carbon emissions from our electrical products
      which will help next generations.
    </p>
    <p>
      Our parent company, Hitachi Industrial Equipment Systems Co. Ltd., sets a
      new tag line “leading a sustainable future” which we will follow through
      our development of technology, reliable products, better service quality,
      and innovative ideas based on harmony, sincerity, and pioneer spirits of
      Hitachi Group, everyone’s smile could contribute to social challenges.
    </p>
    <p class="mb-2 mt-5">Your Sincerely,</p>
    <p class="mb-2 fw-bold">Mr. Makoto Shinohara</p>
    <p class="mb-2">Managing Director</p>
    <p class="mb-2">Hitachi Soe Electric & Machinery Co., Ltd.</p>
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
.md-speech {
  padding: 30px 15.5%;
}

.md-speech h2 {
  text-align: center;
  font-weight: bold;
  margin-bottom: 40px;
}

.md-speech .img {
  text-align: center;
  margin-bottom: 50px;
}
.md-speech img {
  width: 70%;
  height: 550px;
  object-fit: contain;
}

.md-speech p {
  padding: 0px 12% 0px;
}

@media (max-width: 1500px) {
  .md-speech {
    padding: 30px 13%;
  }
}

@media (max-width: 1260px) {
  .md-speech {
    padding: 30px 1%;
  }

  .md-speech p {
    padding: 0px 13% 0px;
  }
}

@media (max-width: 990px) {
  .md-speech p {
    padding: 0px 7% 0px;
  }
}

@media (max-width: 768px) {
  .md-speech img {
    width: 80%;
    height: 400px;
  }

  .md-speech p {
    padding: 0px 7% 0px;
  }
}

@media (max-width: 600px) {
  .md-speech img {
    width: 100%;
    height: 400px;
  }

  .md-speech p {
    padding: 0px 5% 0px;
  }
}

@media (max-width: 600px) {
  .md-speech img {
    width: 90%;
    height: 300px;
  }
}
</style>
