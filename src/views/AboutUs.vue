<template>
  <div v-if="slug == 'chairman-greeting'"><Chairman></Chairman></div>
  <div v-if="slug == 'md-speech'"><MDSpeech></MDSpeech></div>
  <div v-if="slug == 'hitachi-strategy'"><Strategy></Strategy></div>
  <div v-if="slug == 'company-profile'"><CompanyProfile></CompanyProfile></div>
  <div v-if="slug == 'address'"><Address></Address></div>
</template>

<script>
import MDSpeech from "../components/about/MDSpeech";
import Address from "../components/about/Address";
import CompanyProfile from "../components/about/CompanyProfile";
import Strategy from "../components/about/Strategy";
import Chairman from "../components/about/Chairman";
export default {
  components: {
    MDSpeech,
    Address,
    CompanyProfile,
    Strategy,
    Chairman,
  },
  props: ["slug"],
  setup() {},
};
</script>

<style scoped></style>
