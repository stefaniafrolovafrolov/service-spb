<template>
  <div class="slide-two">
    <div class="slide-two__number">
<div>{{item.number}}{{item.author}}{{item.text}}</div>

    <img class="slide-two__image" :src="item.src" alt="изображения пяти звездочек">
    </div>

  </div>
</template>

<script>
import mixinSlide from '../slide/_mixin-slide';
export default {
  name: "slide-reviews",
  mixins: [mixinSlide],
}
</script>

<style scoped lang="scss">
.slide-two {
position: relative;

  &__number {


  }
  &__image {

  }
}


</style>
