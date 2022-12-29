<template>
<div style="border: 1px solid red; width: 100px; height: 50px; background-color: #00FF00; ">
{{item.title}}
  <img :src="item.src" alt="">
</div>
</template>

<script>
import mixinSlide from '../slide/_mixin-slide'
export default {
  name: "slide-services",
  mixins: [mixinSlide],
}
</script>

<style scoped >

</style>
