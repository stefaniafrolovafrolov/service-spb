<template>
  <div class="nav-ext-slide-reviews-slider nav-ext-slide-reviews-slider__nav">
    <div v-bind="{'id':prevEl}" class="nav-ext-slide-reviews-slider__nav__prev" @click="$emit('prevClick')">
     <!-- <img src="/slide-two-left-1920.svg" alt="левая кнопка для прокрутки слайдера">-->
    </div>
    <div v-bind="{'id':nextEl}" class="nav-ext-slide-reviews-slider__nav__next" @click="$emit('nextClick')">
     <!-- <img src="/slide-two-right-1920.svg" alt="правая кнопка для прокрутки слайдера">-->
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-ext-slide-reviews",
  props: {
    sliderId: {
      type: String,
      required: true
    },
  },
  data: () => ({
    prefWhite: false,
    nextWhite: false
  }),
  mounted() {
    this.$emit('navigation', {
      nextEl: '#' + this.nextEl,
      prevEl: '#' + this.prevEl,
    })
  },
  computed: {
    nextEl() {
      return this.sliderId + '_nav_next'
    },
    prevEl() {
      return this.sliderId + '_nav_prev'
    },
  },
}

</script>

<style lang="scss">
.nav-ext-slide-reviews-slider {
  position: relative;
  right: 0;
  left: auto;
  &__nav {
    display: flex;

    &__prev {
      position: absolute;
      border: none;
      background-image: url("/slide-one-left-1920.svg");
      background-size: cover;
      background-repeat: no-repeat;
     /* background: #FF0000;*/
      border-radius: 10px;
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      cursor: pointer;
      bottom: 140px;
      left: -13%;

      @media (max-width: 1440px) {
        background-image: url("/slide-two-left-1440.svg");
        bottom: 85px;
        left: -15%;
      }

      @media (max-width: 1280px) {
        background-image: url("/slide-one-left-1280.svg");
        width: 54px;
        height: 54px;
        bottom: 110px;
      }

      @media (max-width: 1024px) {
        background-image: url("/slide-one-left-1024.svg");
        width: 48px;
        height: 48px;
      }

      @media (max-width: 768px) {
        background-image: url("/slide-one-left-768.svg");
        width: 40px;
        height: 40px;
        left: -10%;
      }

      @media (max-width: 610px) {
        left: -15%;
        bottom: 125px;
      }

      @media (max-width: 525px) {
        bottom: -60px;
        left: 36%;
      }

      @media (max-width: 410px) {
        background-image: url("/slide-one-left-320.svg");
        width: 24px;
        height: 24px;
      }


      &:hover {
        background-color: hsla(0, 0%, 92%, 1);

      }
    }

    &__next {
      border: none;
      position: absolute;
      background-image: url("/slide-one-right-1920.svg");
      background-size: cover;
      background-repeat: no-repeat;
      /*background: #FF0000;*/
      border-radius: 10px;
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      cursor: pointer;
      bottom: 140px;
      right: -13%;

      @media (max-width: 1440px) {
        background-image: url("/slide-two-right-1440.svg.svg");
        bottom: 85px;
        right: -15%;
      }

      @media (max-width: 1280px) {
        background-image: url("/slide-one-right-1280.svg");
        width: 54px;
        height: 54px;
        bottom: 110px;
      }

      @media (max-width: 1024px) {
        background-image: url("/slide-one-right-1024.svg");
        width: 48px;
        height: 48px;
      }

      @media (max-width: 768px) {
        background-image: url("/slide-one-right-768.svg");
        width: 40px;
        height: 40px;
        right: -10%;
      }

      @media (max-width: 610px) {
        right: -15%;
        bottom: 130px;
      }

      @media (max-width: 525px) {
        bottom: -60px;
        right: 36%;
      }

      @media (max-width: 410px) {
        background-image: url("/slide-one-right-320.svg");
        width: 24px;
        height: 24px;
      }

      &:hover {
        background-color: hsla(0, 0%, 92%, 1);
      }
    }
  }
}
</style>
