<template>
  <div class="nav-ext-slide-services-slider nav-ext-slide-services-slider__nav">
    <div v-bind="{'id':prevEl}" class="nav-ext-slide-services-slider__nav__prev" @click="$emit('prevClick')">
      <!-- <img src="slide-one-left-1920.svg" alt="левая кнопка для прокрутки слайдера">-->
    </div>
    <div v-bind="{'id':nextEl}" class="nav-ext-slide-services-slider__nav__next" @click="$emit('nextClick')">
      <!--<img src="slide-one-right-1920.svg" alt="правая кнопка для прокрутки слайдера">-->

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
    nextWhite: false,

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
    /*display: flex;*/
    display: block;

    &__prev {
      position: absolute;
      border: none;
      background-image: url("/service-spb/slide-one-left-1920.svg");
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


      @media (min-width: 575px) {
        &:hover {
          box-shadow: 0px 0px 25px #FFFFFF;
          background-image: url("/service-spb/Group95.svg");
          transition: 0.5s ease-in-out;
          cursor: pointer;
        }
      }


      @media (max-width: 1440px) {
        bottom: 85px;
      }

      @media (max-width: 1280px) {
        background-image: url("/service-spb/slide-one-left-1280.svg");
        width: 54px;
        height: 54px;
        bottom: 70px;
        left: -11%;
      }


      @media (max-width: 1024px) {
        background-image: url("/service-spb/slide-one-left-1024.svg");
        width: 48px;
        height: 48px;
        left: -15%;
        bottom: 82px;
      }

      @media (max-width: 860px) {
        left: -10%;
      }

      @media (max-width: 795px) {
        left: -9%;
      }

      @media (max-width: 768px) {
        background-image: url("/service-spb/slide-one-left-768.svg");
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
        bottom: 195px;
        left: -17%;
      }

      @media (max-width: 635px) {
        bottom: 170px;
        left: -15%;
      }

      @media (max-width: 520px) {
        bottom: 140px;
        left: -19%;
      }

      @media (max-width: 475px) {
        bottom: -55px;
        left: 33%;
      }

      @media (max-width: 425px) {
        width: 35px;
        height: 35px;
        bottom: -45px;
        left: 33%;
      }

    /*  &:hover {
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
      right: 0;
      display: flex;
      justify-content: center;
      cursor: pointer;
      bottom: 110px;
      right: -10%;

      @media (min-width: 575px) {
        &:hover {
          box-shadow: 0px 0px 25px #FFFFFF;
          background-image: url("/service-spb/Group96.svg");
          transition: 0.5s ease-in-out;
          cursor: pointer;
        }
      }

      @media (max-width: 1440px) {
        bottom: 85px;
      }

      @media (max-width: 1280px) {
        background-image: url("/service-spb/slide-one-right-1280.svg");
        width: 54px;
        height: 54px;
        bottom: 70px;
        right: -11%;
      }

      @media (max-width: 1024px) {
        background-image: url("/service-spb/slide-one-right-1024.svg");
        width: 48px;
        height: 48px;
        right: -15%;
        bottom: 82px;
      }

      @media (max-width: 860px) {
        right: -10%;
      }

      @media (max-width: 795px) {
        right: -9%;
      }


      @media (max-width: 768px) {
        background-image: url("/service-spb/slide-one-right-768.svg");
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
        bottom: 195px;
        right: -17%;
      }

      @media (max-width: 635px) {
        bottom: 170px;
        right: -15%;
      }

      @media (max-width: 520px) {
        bottom: 140px;
        right: -19%;
      }

      @media (max-width: 475px) {
        bottom: -55px;
        right: 33%;
      }

      @media (max-width: 425px) {
        width: 35px;
        height: 35px;
        bottom: -45px;
        right: 33%;
      }

     /* &:hover {
        background-color: hsla(0, 0%, 92%, 1);
      }*/
    }
  }
}
</style>


