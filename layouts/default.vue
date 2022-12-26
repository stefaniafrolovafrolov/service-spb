<template>
<div>
  <v-header/>
  <nuxt/>
</div>
</template>

<script>
import vHeader from "@/components/page/v-header"
export default {
  name: "default",
  components: {
    vHeader
  }
}
</script>

<style scoped>

</style>
