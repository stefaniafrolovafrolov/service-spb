<template>
  <div class="nav-ext-slide-reviews-slider nav-ext-slide-reviews-slider__nav">
    <div v-bind="{'id':prevEl}" class="nav-ext-slide-reviews-slider__nav__prev" @click="$emit('prevClick')">
     <!-- <img src="slide-two-left-1920.svg" alt="левая кнопка для прокрутки слайдера">-->
    </div>
    <div v-bind="{'id':nextEl}" class="nav-ext-slide-reviews-slider__nav__next" @click="$emit('nextClick')">
     <!-- <img src="slide-two-right-1920.svg" alt="правая кнопка для прокрутки слайдера">-->
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
      background-image: url("/service-spb/slide-one-left-1920.svg");
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

      @media (min-width: 575px) {
        &:hover {
          box-shadow: 0px 0px 25px #FFFFFF;
          background-image: url("/service-spb/service-spb/Group95.svg");
          transition: 0.5s ease-in-out;
          cursor: pointer;
        }
      }

      @media (max-width: 1440px) {
        background-image: url("/service-spb/slide-two-left-1440.svg");
        bottom: 115px;
        left: -13%;
      }

      @media (max-width: 1280px) {
        background-image: url("/service-spb/slide-one-left-1280.svg");
        width: 54px;
        height: 54px;
        bottom: 110px;
      }

      @media (max-width: 1024px) {
        background-image: url("/service-spb/slide-one-left-1024.svg");
        width: 48px;
        height: 48px;
        bottom: 100px;
      }

      @media (max-width: 768px) {
        background-image: url("/service-spb/slide-one-left-768.svg");
        width: 40px;
        height: 40px;
        left: -10%;
      }

      @media (max-width: 610px) {
        left: -15%;
        bottom: 131px;
      }

      @media (max-width: 525px) {
        bottom: -60px;
        left: 33%;


      }

      @media (max-width: 425px) {
        width: 35px;
        height: 35px;
      }

     /* &:hover {
        background-color: hsla(0, 0%, 92%, 1);
      }*/
    }

    &__next {
      border: none;
      position: absolute;
      background-image: url("/service-spb/slide-one-right-1920.svg");
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

      @media (min-width: 575px) {
        &:hover {
          box-shadow: 0px 0px 25px #FFFFFF;
          background-image: url("/service-spb/Group96.svg");
          transition: 0.5s ease-in-out;
          cursor: pointer;
        }
      }

      @media (max-width: 1440px) {
        background-image: url("/service-spb/slide-two-right-1440.svg.svg");
        bottom: 115px;
        right: -13%;
      }

      @media (max-width: 1280px) {
        background-image: url("/service-spb/slide-one-right-1280.svg");
        width: 54px;
        height: 54px;
        bottom: 110px;
      }

      @media (max-width: 1024px) {
        background-image: url("/service-spb/slide-one-right-1024.svg");
        width: 48px;
        height: 48px;
        bottom: 100px;
      }

      @media (max-width: 768px) {
        background-image: url("/service-spb/slide-one-right-768.svg");
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
        right: 33%;
      }

      @media (max-width: 425px) {
        width: 35px;
        height: 35px;
      }

     /* &:hover {
        background-color: hsla(0, 0%, 92%, 1);
      }*/
    }
  }
}
</style>
