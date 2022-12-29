<template>
  <div class="pag-ext-slide-product-slider">
    <div :id="pagExtId" style="display: flex; justify-content: center" class="swiper-pagination"/>
  </div>
</template>

<script>
export default {
name: "pag-ext-slide-product-slider",
  props: {
    sliderId: {
      type: String,
      required: true,
    },
  },
  data: () => ({}),
  computed: {
    pagExtId() {
      return this.sliderId + '_pag'
    },
  },
  mounted() {
    this.$emit('pagination', {
      el: '#' + this.pagExtId,
      clickable: true,
      renderBullet(index, className) {
        return '<div class="' + className + '"><div class="' + className + '__content"></div></div>'
      },
    })
  },
}
</script>

<style  lang="scss">
.pag-ext-slide-product-slider {
  margin-top: 62px;
  user-select: none;
  .swiper {
    &-pagination {
      display: flex;
      position: inherit;
    }

    &-pagination-bullet {
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 1;
      margin: 0 !important;
      border: 1px solid transparent;
      background: hsla(0, 0%, 92%, 1);
      width: 100%;
      height: 1px;

      &__content {
        border-radius: 0%;
        background: transparent;
        width: 100%;
        height: 4px;
      }
    }

    &-pagination-bullet-active {
      /*    width: 40px;
          height: 40px;*/
      /*  background: transparent;
        border: 1px solid #686868;*/
      display: flex;
      justify-content: center;
      align-items: center;

      & > .swiper-pagination-bullet__content {
        background: hsla(0, 0%, 82%, 1);
        transition: 0.5s;
      }
    }
  }
}
</style>




