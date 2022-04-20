<template>
  <main class="home">
    <IntroSlider />

    <Banners />

    <SelectedProduct :products="this.products" />
    <ChooseUs />

    <section class="products">
      <div class="container">
        <SeactionHeading title="Products in today" :center="true" />
        <swiper v-if="this.products" class="swiper" :options="swiperOption">
          <swiper-slide v-for="product in this.products" :key="product.id">
            <Product :product="product" />
          </swiper-slide>

          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <p v-else class="text-center">no show</p>
      </div>
    </section>
  </main>
</template>

<script>
// Plugins
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper.scss"; // core Swiper
// Vuex
import { mapActions, mapGetters } from "vuex";

// @ is an alias to /src
import Product from "@/components/Product.vue";
import SeactionHeading from "@/components/SeactionHeading.vue";
import Banners from "@/components/Banners.vue";
import ChooseUs from "@/components/ChooseUs.vue";
import IntroSlider from "@/components/IntroSlider.vue";
import SelectedProduct from "@/components/SelectedProduct.vue";

export default {
  name: "Home",
  data() {
    return {
      products: [],

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
  components: {
    // Plugin
    Swiper,
    SwiperSlide,
    // Components
    Product,
    SeactionHeading,
    Banners,
    ChooseUs,
    IntroSlider,
    SelectedProduct,
  },
  methods: {
    ...mapActions("productModule", ["getProducts"]),
  },
  async created() {
    this.products = await this.getProducts();
  },
  computed: {
    ...mapGetters("productModule", ["product"]),
  },
  mounted() {},
  watch: {
    $route(to, from) {},
  },
};
</script>


<style lang="scss" scoped>
</style>