<template>
  <section class="featured-items">
    <div class="heading">
      <h2 class="title">Просмотренные товары</h2>
      <div class="slider-buttons">
        <button class="prev btn">
          <svg
            width="10"
            height="20"
            viewBox="0 0 10 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 19L1 10L9 0.999999"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
        <div class="pages">
          <span class="active"><span class="total"></span></span>
        </div>
        <button class="next btn">
          <svg
            width="10"
            height="20"
            viewBox="0 0 10 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1L9 10L1 19"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
    <Swiper
      :slides-per-view="4"
      :navigation="navigation"
      :modules="modules"
      :pagination="pagination"
      :spaceBetween="20"
      :breakpoints="breakpoints">
      <SwiperSlide
        v-for="{ id, title, description, imgUrl, price, priceEuro } in [
          ...slidesArr,
          ...slidesArr,
        ]"
        :key="id">
        <TheSliderProduct
          :id="id"
          :title="title"
          :description="description"
          :imgUrl="imgUrl"
          :price="price"
          :priceEuro="priceEuro" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script>
import { Navigation, Pagination } from "swiper";

export default {
  setup() {
    return {
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: ".next.btn",
        prevEl: ".prev.btn",
      },
      pagination: {
        type: "fraction",
        el: ".pages",
        currentClass: "active",
        totalClass: "total",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    };
  },
  computed: {
    slidesArr() {
      return [...this.$store.getters["featured/featuredArr"]];
    },
  },
  mounted() {
    this.$store.dispatch("featured/init");
  },
};
</script>

<style lang="scss" scoped>
.swiper-pagination-current,
.active {
  font-size: 24px;
  line-height: 36px;
  color: $col_black_1;
}
.swiper-slide {
  display: flex;
  justify-content: center;
}
.featured-items {
  margin: 92px 0;

  & .heading {
    display: flex;
    justify-content: space-between;
    margin-bottom: 45px;

    & .title {
      @include font_lato_semibold;
      font-size: 30px;
      line-height: 36px;
      color: $col_black_1;
    }
  }
  .slider-buttons {
    display: flex;
    align-items: center;
    gap: 20px;

    & .pages {
      @include font_lato_reg;
      font-size: 18px;
      line-height: 27px;
      color: $col_gray_1;
      width: 50px;

      & .active {
        font-size: 24px;
        line-height: 36px;
        color: $col_black_1;
      }
    }
    & .btn {
      border-radius: 50%;
      background-color: $col_gray_3;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      cursor: pointer;
      width: 50px;
      height: 50px;
    }
  }
}
</style>
