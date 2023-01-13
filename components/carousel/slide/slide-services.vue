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

    @media (max-width: 768px) {
      max-width: 149px;
      font-size: 12px;
      line-height: 15px;
    }


    @media (max-width: 350px) {
      max-width: 164px;
      font-size: 14px;
      line-height: 17px;
    }

  }

  &__image {
    width: 260px;
    height: 260px;
    background-size: cover;
    object-fit: cover;
    background-position: center;
    border-radius: 8px;

    @media (max-width: 1440px) {
      width: 210px;
      height: 210px;
    }

    @media (max-width: 1280px) {
      width: 188px;
      height: 188px;
    }

    @media (max-width: 1024px) {
      width: 202px;
      height: 202px;
    }

    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
    }

    @media (max-width: 767px) {
     border-radius: 11px;
    }

    @media (max-width: 738px) {
      width: 280px;
      height: 280px;

    }

    @media (max-width: 725px) {
      width: 100%;
      height: 100%;
      border-radius: 18px;
    }

    @media (max-width: 610px) {
      border-radius: 14px;
    }

    @media (max-width: 515px) {
      border-radius: 12px;
    }

    @media (max-width: 475px) {
      width: 100%;
      height: 100%;
      border-radius: 15px;
    }

    @media (max-width: 382px) {
      border-radius: 12px;
    }

    @media (max-width: 350px) {
      width: 270px;
      height: 270px;
    }
  }
}


</style>
