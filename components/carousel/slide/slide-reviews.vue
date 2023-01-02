<template>
  <div class="slide-two">
    <div class="slide-two__titles">
      <div class="slide-two__container">
        <div class="slide-two__number">{{ item.number }}</div>
        <div class="slide-two__author">{{ item.author }}</div>
        <img class="slide-two__image" :src="item.src" alt="изображения пяти звездочек">
      </div>
      <div class="slide-two__text" v-html="item.text"></div>

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

  &__titles {
    margin-top: 40px;
    margin-left: 40px;

  }

  &__container {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    max-width: 250px;
  }


  &__number {
    max-width: 129px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.04em;
    color: #000000;


  }

  &__author {
    max-width: 250px;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-decoration-line: underline;
    color: #000000;
    margin-bottom: 6px;

  }


  &__image {
    background-size: cover;
  }

  &__text {
    max-width: 832px;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #000000;

  }
}


</style>
