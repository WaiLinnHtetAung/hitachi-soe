<template>
  <div class="amorphous">
    <img :src="require('@/assets/images/amorphous/1.jpg')" alt="" />
    <img :src="require('@/assets/images/amorphous/2.jpg')" alt="" />
    <img :src="require('@/assets/images/amorphous/3.jpg')" alt="" />
    <img :src="require('@/assets/images/amorphous/4.jpg')" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.amorphous {
  padding: 30px 15%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.amorphous img {
  width: 100%;
}

@media (max-width: 1500px) {
  .amorphous {
    padding: 30px 13%;
  }
}

@media (max-width: 1500px) {
  .amorphous {
    padding: 30px 1%;
  }
}
</style>
