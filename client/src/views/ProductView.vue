<template>
  <main class="productView">
    <section class="subNav">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'Home' }">
                <img src="../assets/home.svg" alt="home" />
              </router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link
                :to="{
                  name: 'ProductFilter',
                  params: { category: this.singleProduct.category },
                }"
              >
                {{ this.singleProduct.category }}
              </router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ this.singleProduct.title }}
            </li>
          </ol>
        </nav>
      </div>
    </section>
    <section class="productDetails">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-12 productDetails__img">
            <div class="row">
              <div class="col-2"></div>
              <div class="col-lg-9">
                <div
                  id="productCarousel"
                  class="carousel productDetails__carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-indicators">
                    <button
                      v-for="(image, index) in this.singleProduct.images"
                      :key="index"
                      type="button"
                      data-bs-target="#productCarousel"
                      :data-bs-slide-to="index"
                      :class="{ active: index === 0 }"
                      aria-current="true"
                      :aria-label="'slide' + index"
                    >
                      <img :src="image" :alt="index" />
                    </button>
                  </div>
                  <div class="carousel-inner">
                    <div
                      v-for="(image, index) in this.singleProduct.images"
                      :key="index"
                      :class="['carousel-item', { active: index === 0 }]"
                    >
                      <img :src="image" class="d-block w-100" :alt="index" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12 productDetails__info">
            <div class="productDetails__category">
              <div class="productDetails__discount" v-if="this.discount">
                <span>SALE</span>
              </div>
              <div class="productDetails__name">
                <h2>{{ this.singleProduct.title }}</h2>
              </div>
              <div class="productDetails__price">
                <span :class="{ discount: this.discount }"
                  >{{ this.singleProduct.price }} EGP</span
                >
                <span class="beforeDiscount" v-if="this.discount"
                  >{{
                    (
                      this.singleProduct.price +
                      (this.singleProduct.price *
                        this.singleProduct.discountPercentage) /
                        100
                    ).toFixed(2)
                  }}
                  EGP</span
                >
              </div>
            </div>

            <div class="productDetails__category">
              <span>Color:</span>
              <div class="productDetails__color">
                <div class="color-box d-flex">
                  <div class="color-box_color">
                    <input
                      type="radio"
                      class="btn-check"
                      name="productDetails__color"
                      id="productDetails__color-1"
                      autocomplete="off"
                      value="1"
                      v-model="productAdded.color"
                    />
                    <label
                      class="btn btn-outline-primary"
                      for="productDetails__color-1"
                      ><span style="background-color: #f5f5f5"></span
                    ></label>
                  </div>
                  <div class="color-box_color">
                    <input
                      type="radio"
                      class="btn-check"
                      name="productDetails__color"
                      id="productDetails__color-2"
                      autocomplete="off"
                      value="2"
                      v-model="productAdded.color"
                    />
                    <label
                      class="btn btn-outline-primary"
                      for="productDetails__color-2"
                      ><span style="background-color: red"></span
                    ></label>
                  </div>
                </div>
              </div>
            </div>

            <div class="productDetails__category">
              <span>Size:</span>
              <div class="productDetails__size">
                <div class="size-box d-flex">
                  <div class="size-box_size">
                    <input
                      type="radio"
                      class="btn-check"
                      id="product__size-1"
                      name="product__size"
                      autocomplete="off"
                      value="1"
                      v-model="productAdded.size"
                    />
                    <label class="btn btn-outline-primary" for="product__size-1"
                      >XS</label
                    >
                  </div>
                  <div class="size-box_size">
                    <input
                      type="radio"
                      class="btn-check"
                      id="product__size-2"
                      name="product__size"
                      autocomplete="off"
                      value="2"
                      v-model="productAdded.size"
                    />
                    <label class="btn btn-outline-primary" for="product__size-2"
                      >S</label
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="productDetails__category">
              <span>Quantity:</span>
              <div class="productDetails__quantity d-flex">
                <div class="quantity-box d-flex">
                  <span class="quantity-box__decreace" @click="decrement">
                    <i class="fa fa-minus"></i>
                  </span>
                  <input
                    class="quantity-box__value"
                    type="number"
                    min="1"
                    :max="this.singleProduct.stock"
                    @change="updateQuantity($event)"
                    v-model="productAdded.quantity"
                  />
                  <span class="quantity-box__increace" @click="increment">
                    <i class="fa fa-plus"></i>
                  </span>
                </div>
                <button
                  @click="addToCart()"
                  href="/"
                  class="btn btn-sec add-to btn-outline"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="productDescription">
      <div class="container">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item productDescription__title" role="presentation">
            <h3
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              DESCRIPTION
            </h3>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade productDescription__content show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
            v-show="!this.productDescription"
          >
            <i class="far fa-file-alt"></i>
            <h4>Details and product description</h4>
            <p>No Details Found</p>
          </div>
          <div
            class="tab-pane fade productDescription__content show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
            v-show="this.productDescription"
          >
            <p>
              {{ this.singleProduct.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- <SelectedProduct /> -->
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import SelectedProduct from "@/components/SelectedProduct.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      singleProduct: [],
      discount: null,
      productDescription: null,

      productAdded: {
        id: this.$route.params.id,
        quantity: 1,

        color: null,
        size: null,
      },
    };
  },
  components: {
    // Components
    SelectedProduct,
  },
  methods: {
    ...mapActions("productModule", ["getSingleProduct"]),
    ...mapActions("cartModule", ["addProductToCart"]),
    checkDiscount() {
      if (this.singleProduct.discountPercentage) {
        this.discount = true;
      } else {
        this.discount = false;
      }
    },
    checkDescription() {
      if (this.singleProduct.description) {
        this.productDescription = true;
      } else {
        this.productDescription = false;
      }
    },
    increment() {
      if (this.productAdded.quantity < this.singleProduct.stock) {
        this.productAdded.quantity++;
      }
    },
    decrement() {
      if (this.productAdded.quantity > 1) {
        this.productAdded.quantity--;
      }
    },
    updateQuantity(e) {
      this.productAdded.quantity = e.target.value;
      // if (this.productAdded.quantity > this.singleProduct.stock) {
      //   this.productAdded.quantity = this.singleProduct.stock;
      // }
    },
    addToCart() {
      console.log(this.id);
      let productData = {
        id: this.id,
      };
      this.addProductToCart(productData);
    },
  },
  async created() {
    this.singleProduct = await this.getSingleProduct(this.id);
    this.checkDiscount();
    this.checkDescription();
  },
  computed: {
    ...mapGetters("productModule", ["product"]),
    ...mapGetters("cartModule", ["cart"]),
  },
};
</script>

<style lang="scss" scoped>
.productView {
  margin-top: 100px;
}
.productDetails {
  margin-top: 50px;

  .carousel-indicators {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    left: -170px;
    max-height: 476px;
    margin-bottom: 0;
    height: 100%;
    button {
      position: relative;
      width: 95px;
      height: 95px;
      margin-bottom: 8px;
      border: none;
      overflow: hidden;
      img {
        position: absolute;
        left: 0;
        width: 100%;
        top: 0;
        object-fit: cover;
      }
    }
  }
  .carousel-item {
    height: 476px;
    img {
      max-height: 476px;
      object-fit: contain;
    }
  }
  &__category {
    margin-bottom: 20px;
    > span {
      display: inline-block;
      font-size: 13px;
      font-weight: 300;
      margin-bottom: 13px;
    }
  }
  &__discount {
    span {
      display: inline-block;
      background-color: #ff0000;
      border-radius: 15px;
      padding: 5px 10px;
      font-size: 12px;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 10px;
    }
  }
  &__name {
    h2 {
      display: inline-block;
      font-size: 30px;
      font-weight: 300;
      margin-bottom: 10px;
    }
  }
  &__price {
    span {
      color: #000;
      font-size: 22px;
    }
    .discount {
      color: #ff0000;
      margin-right: 30px;
    }
    .beforeDiscount {
      text-decoration: line-through;
      color: #cecece;
    }
  }
  &__quantity {
    align-items: center;
    .quantity-box {
      position: relative;
      background-color: #ffffff;
      border-radius: 24px;
      border: 1px solid #d8d8d8;
      width: 129px;
      height: 48px;
      margin-right: 20px;
      span {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      &__decreace {
        left: 15px;
      }
      &__increace {
        right: 15px;
      }
      &__value {
        text-align: center;
        border: none;
        background: transparent;
        width: 100%;
        outline: none;
        padding: 0 40px;
      }
      input[type="number"]::-webkit-inner-spin-button,
      input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
    .add-to {
      width: fit-content;
      padding: 15px 30px;
      margin: 0;
    }
  }
}
.productDescription {
  margin: 100px 0;
  .nav-tabs {
    justify-content: center;
    border: none;
  }
  .productDescription__title {
    h3 {
      font-size: 13px;
      font-weight: 600;
      margin: 20px auto;
      padding: 15px 50px;
      text-align: center;
      border-radius: 24px;
      width: fit-content;
      font-size: 13px;
      color: #d4d4d4;
      cursor: pointer;
      margin: 0 10px;
    }
    h3.active {
      color: #000;
      border: 1px solid #fbb03b;
    }
  }
  .productDescription__content {
    text-align: center;
    margin-top: 50px;

    p {
      font-size: 14px;
      font-weight: 300;
      line-height: 1.5;
      margin-bottom: 20px;
    }
    svg {
      font-size: 64px;
      color: #d4d4d4;
    }
    h4 {
      font-size: 16px;
      font-weight: 600;
      margin: 30px 0 20px;
    }
    p {
      font-size: 16px;
      font-weight: 300;
    }
  }
}
</style>