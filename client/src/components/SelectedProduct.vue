<template>
  <section class="selectedProduct">
    <div class="container">
      <SeactionHeading
        title="Selected just for you"
        :center="false"
        linkUrl="/"
        linkText="SHOW MORE"
      />

      <swiper v-if="products" class="swiper" :options="swiperOption">
        <swiper-slide v-for="product in products" :key="product.id">
          <Product :product="product" />
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <p v-else class="text-center">no show</p>
    </div>
  </section>
</template>

<script>
// Plugins
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper.scss"; // core Swiper

import SeactionHeading from "@/components/SeactionHeading.vue";
import Product from "@/components/Product.vue";

export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 60,
        loop: true,
        autoplay: {
          delay: 5000,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  props: ["products"],
  components: {
    // Plugin
    Swiper,
    SwiperSlide,
    // Components
    Product,
    SeactionHeading,
  },
};
</script>

<style>
</style>