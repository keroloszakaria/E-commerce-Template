<template>
  <div class="product">
    <router-link :to="{ name: 'ProductView', params: { id: product.id } }">
      <div class="product__discount" v-if="this.discount">
        <span>{{ product.discountPercentage }}%</span>
      </div>
      <div class="product__image">
        <img
          class="w-100 lazyloading"
          :src="product.thumbnail"
          loading="lazy"
          alt=""
        />
      </div>
      <p class="product__name">{{ product.title }}</p>
    </router-link>
    <div class="product__price">
      <span :class="{ discount: this.discount }">{{ product.price }} EGP</span>
      <span class="beforeDiscount" v-if="this.discount"
        >{{
          (
            product.price +
            (product.price * product.discountPercentage) / 100
          ).toFixed(2)
        }}
        EGP</span
      >
    </div>
  </div>
</template>

<script>
// Plugins
export default {
  data() {
    return {
      discount: null,
      beforeDiscount: null,
    };
  },
  props: ["product"],
  components: {},
  methods: {
    checkDiscount() {
      if (this.product.discountPercentage > 0) {
        this.discount = true;
      } else {
        this.discount = false;
      }
    },
  },
  created() {
    this.checkDiscount();
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.product {
  position: relative;
  a {
    text-decoration: none;
  }
  &__image {
    height: 300px;
    img {
      height: 100%;
      object-fit: cover;
    }
  }
  &__discount {
    position: absolute;
    left: 10px;
    top: 10px;
    background-color: #ff0000;
    border-radius: 15px;
    padding: 4px 8px;
    font-size: 11px;
    line-height: 12px;
    font-weight: 600;
    color: #ffffff;
  }
  &__name {
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 0;
    margin-top: 20px;
    color: #000;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  &__price {
    font-size: 14px;
    .discount {
      margin-right: 30px;
      color: #ff0000;
    }
    .beforeDiscount {
      color: #cecece;
    }
  }
}
</style>