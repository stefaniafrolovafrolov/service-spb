<template>
<div>
  <v-header/>
  <nuxt/>
  <v-footer/>
</div>
</template>

<script>
import vHeader from "../components/page/v-header";
import vFooter from "../components/page/v-footer";
export default {
  name: "default",
  components: {
    vHeader,
    vFooter
  },
}
</script>

<style scoped>

</style>
