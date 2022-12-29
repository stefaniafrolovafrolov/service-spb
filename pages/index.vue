<template>
  <main class="content">
    <main-block/>
    <advantage/>
    <services/>
    <prices/>
    <reviews/>
    <contacts/>
  </main>
</template>

<script>
import mainBlock from "../components/project/main-block";
import advantage from "../components/project/advantage";
import services from "../components/project/services";
import prices from "../components/project/prices";
import reviews from "../components/project/reviews";
import contacts from "../components/project/contacts";

export default {
  name: 'IndexPage',
  components: {
    mainBlock,
    advantage,
    services,
    prices,
    reviews,
    contacts
  },


}
</script>

<style scoped lang="scss">
.content {
  max-width: 1920px;
  background: #F4F7FF;
}


</style>


