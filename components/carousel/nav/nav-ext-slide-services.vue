<template>
  <div class="nav-ext-slide-product-slider nav-ext-slide-product-slider__nav">
    <div v-bind="{'id':prevEl}" class="nav-ext-slide-product-slider__nav__prev" @click="$emit('prevClick')">
<!--      <img style="width: 30%" src="/ico/prev-black.svg" alt="">-->
    </div>
    <div v-bind="{'id':nextEl}" class="nav-ext-slide-product-slider__nav__next" @click="$emit('nextClick')">
<!--      <img  style="width: 30%" src="/ico/next.svg" alt="">-->

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

<style scoped  lang='scss'>
.nav-ext-slide-product-slider {
  position: relative;

  right: 0;
  left: auto;
  &__nav {
    display: flex;




    &__prev {
      position: absolute;
      background: #8B0000;


      width: 40px;
      height: 40px;
      border-radius: 100%;
      left: 0;

      display: flex;
      justify-content: center;
      cursor: pointer;

      &:hover {
        background-color: hsla(0, 0%, 92%, 1);

      }
    }

    &__next {
      background: #8B0000;
      position: absolute;


      border-radius: 100%;
      width: 40px;
      height: 40px;
      right: 0;
      display: flex;
      justify-content: center;
      cursor: pointer;

      &:hover {
        background-color: hsla(0, 0%, 92%, 1);
      }
    }
  }
}
</style>


