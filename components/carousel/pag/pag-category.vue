<template>
  <div class="pag-category">
    <div :id="pagExtId" style="display: flex; justify-content: center" class="swiper-pagination"/>
  </div>
</template>

<script>
export default {
  name: "pag-category",
  props: {
    sliderId: {
      type: String,

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

<style lang="scss">
.pag-category {
   margin-top: 10px;

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
      background: transparent;
      width: 20px;
      height: 20px;

      &__content {
        border-radius: 100%;
        background: #b9b9b9;
        width: 8px;
        height: 8px;

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
        background: #e22227;
      }
    }
  }
}

.swiper-pagination {
}
</style>



