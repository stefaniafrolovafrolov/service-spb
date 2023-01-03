<template>
  <div class="slide-one">
    <div class="slide-one__title" v-html="item.title">

    </div>
    <img class="slide-one__image" :src="item.src" alt="изображения запчастей коробок передач">


  </div>

</template>

<script>
import mixinSlide from '../slide/_mixin-slide';

export default {
  name: "slide-services",
  mixins: [mixinSlide],
}
</script>

<style scoped lang="scss">
.slide-one {
  position: relative;

  &__title {
    position: absolute;
    bottom: 12px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    max-width: 190px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.04em;
    text-transform: uppercase;
    color: #FFFFFF;

    @media (max-width: 1440px) {
      max-width: 155px;
      font-size: 14px;
      line-height: 17px;
    }
  }

  &__image {
    width: 260px;
    height: 260px;
    border-radius: 10px;

    @media (max-width: 1440px) {
      width: 210px;
      height: 210px;
    }
  }
}


</style>
