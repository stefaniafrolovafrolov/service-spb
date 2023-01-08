<template>
  <div class="nav-ext-slide-services-slider nav-ext-slide-services-slider__nav">
    <div v-bind="{'id':prevEl}" class="nav-ext-slide-services-slider__nav__prev" @click="$emit('prevClick')">
     <!-- <img src="/slide-one-left-1920.svg" alt="левая кнопка для прокрутки слайдера">-->
    </div>
    <div v-bind="{'id':nextEl}" class="nav-ext-slide-services-slider__nav__next" @click="$emit('nextClick')">
      <!--<img src="/slide-one-right-1920.svg" alt="правая кнопка для прокрутки слайдера">-->

    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-ext-slide-services',
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

<style lang='scss'>
.nav-ext-slide-services-slider {
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
      /*background: #FF0000;*/
      border-radius: 10px;
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      cursor: pointer;
      bottom: 110px;
      left: -10%;

       @media (max-width: 1440px) {
        bottom: 85px;
      }

      @media (max-width: 1280px) {
          background-image: url("/slide-one-left-1280.svg");
          width: 54px;
          height: 54px;
      }


      @media (max-width: 1024px) {
        background-image: url("/slide-one-left-1024.svg");
        width: 48px;
        height: 48px;
        left: -15%;
      }

      @media (max-width: 860px) {
        left: -10%;
      }

      @media (max-width: 795px) {
        left: -9%;
      }

      @media (max-width: 768px) {
        background-image: url("/slide-one-left-768.svg");
        width: 40px;
        height: 40px;
        bottom: 75px;
        left: -10%;
      }

      @media (max-width: 767px) {
        bottom: 130px;
        left: -10%;
      }

      @media (max-width: 738px) {
        bottom: 125px;
        left: -9%;
      }

      @media (max-width: 725px) {
        left: -17%;
      }

      @media (max-width: 635px) {
        left: -23%;
      }

      @media (max-width: 465px) {
        left: -18%;
      }

      @media (max-width: 425px) {
        background-image: url("/slide-one-left-320.svg");
        width: 30px;
        height: 30px;
        bottom: -45px;
        left: 33%;
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
      right: 0;
      display: flex;
      justify-content: center;
      cursor: pointer;
      bottom: 110px;
      right: -10%;

      @media (max-width: 1440px) {
        bottom: 85px;
      }

      @media (max-width: 1280px) {
        background-image: url("/slide-one-right-1280.svg");
        width: 54px;
        height: 54px;
      }

      @media (max-width: 1024px) {
        background-image: url("/slide-one-right-1024.svg");
        width: 48px;
        height: 48px;
        right: -15%;
      }

      @media (max-width: 860px) {
        right: -10%;
      }

      @media (max-width: 795px) {
        right: -9%;
      }



      @media (max-width: 768px) {
        background-image: url("/slide-one-right-768.svg");
        width: 40px;
        height: 40px;
        bottom: 75px;
        right: -10%;
      }

      @media (max-width: 767px) {
        bottom: 125px;
        right: -10%;
      }

      @media (max-width: 738px) {
        bottom: 125px;
        right: -9%;
      }

      @media (max-width: 725px) {
        right: -17%;
      }

      @media (max-width: 635px) {
        right: -23%;
      }

      @media (max-width: 465px) {
        right: -18%;
      }

      @media (max-width: 425px) {
        background-image: url("/slide-one-right-320.svg");
        width: 30px;
        height: 30px;
        bottom: -45px;
        right: 33%;
      }

      &:hover {
        background-color: hsla(0, 0%, 92%, 1);
      }
    }
  }
}
</style>


