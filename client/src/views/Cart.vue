<template>
  <main>
    <section v-if="this.empty">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <!-- Cart Empty -->
          </div>
        </div>
      </div>
    </section>
    <section v-else>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="contant_box">
              <div class="shopping__header">
                <h1>Shopping Cart</h1>
              </div>
              <div class="cart_box">
                <div class="cart_box__head">
                  <div class="row">
                    <div class="col-md-4">
                      <h4>Product</h4>
                    </div>
                    <div class="col-md-1">
                      <h4 class="text-center">Color</h4>
                    </div>
                    <div class="col-md-1">
                      <h4 class="text-center">Size</h4>
                    </div>
                    <div class="col-md-2">
                      <h4 class="text-center">Ammount</h4>
                    </div>
                    <div class="col-md-2">
                      <h4 class="text-center">Price</h4>
                    </div>
                    <div class="col-md-2"></div>
                  </div>
                </div>
                <div class="cart_box__body">
                  <div
                    class="produc_cart"
                    v-for="product in this.cartList"
                    :key="product.id"
                  >
                    <div class="row">
                      <div class="col-md-4">
                        <div class="cart_box__body__item">
                          <div class="cart_box__body__item__img">
                            <img
                              src="../assets/products/product-1.jpg"
                              alt=""
                            />
                          </div>
                          <div class="cart_box__body__item__info height name">
                            <router-link
                              :to="{
                                name: 'ProductView',
                                params: { id: product.id },
                              }"
                            >
                              <h4>{{ product.title }}</h4>
                            </router-link>
                            <span>#261311</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-1">
                        <div
                          class="cart_box__body__item justify-content-center"
                        >
                          <div class="cart_box__body__item__info height">
                            <h5>White</h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-1">
                        <div
                          class="cart_box__body__item justify-content-center"
                        >
                          <div class="cart_box__body__item__info height">
                            <h5>XL</h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div
                          class="cart_box__body__item justify-content-center"
                        >
                          <div class="cart_box__body__item__info">
                            <div class="quantity-box d-flex">
                              <span
                                class="quantity-box__decreace"
                                @click="decrement"
                              >
                                <i class="fa fa-minus"></i>
                              </span>
                              <input
                                class="quantity-box__value"
                                type="number"
                                min="1"
                                :value="product.quantity"
                                @change="updateQuantity(product.quantity)"
                              />
                              <span
                                class="quantity-box__increace"
                                @click="increment"
                              >
                                <i class="fa fa-plus"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div
                          class="cart_box__body__item justify-content-center"
                        >
                          <div class="cart_box__body__item__info height">
                            <h5>{{ product.total }}EGP</h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div
                          class="cart_box__body__item justify-content-center"
                        >
                          <div
                            class="cart_box__body__item__info"
                            @click="deleteProduct(product.id)"
                          >
                            <i class="fa fa-times"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="cart_box__footer">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="cart_box__footer__item justify-content-start">
                        <form action="" @submit.prevent="totalPrice(promo)">
                          <input
                            class="form-control"
                            type="text"
                            v-model="promo"
                            placeholder="Promo Code"
                          />
                          <button class="btn" type="submit">
                            <i class="fa fa-paper-plane"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="cart_box__footer__item">
                        <h4>Total cost:</h4>
                        <h5>{{ this.total }}EGP</h5>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="cart_box__footer__item">
                        <router-link class="btn-bg" to="/"
                          >CONTINUE SHOPPING</router-link
                        >
                        <router-link to="/checkout" class="btn btn-sec">
                          Checkout
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      empty: false,
      cartList: [],
      productAdded: {
        color: null,
        size: null,
        quantity: 1,
      },
      promo: "",
      total: "",
      showText: true,
    };
  },
  props: {},
  methods: {
    ...mapActions("cartModule", ["getCart", "removeCartItem"]),

    increment() {
      // if (this.productAdded.quantity < this.singleProduct.stock) {
      this.productAdded.quantity++;
      // }
    },
    decrement() {
      // if (this.productAdded.quantity > 1) {
      this.productAdded.quantity--;
      // }
    },
    updateQuantity(e) {
      // this.productAdded.quantity = e;
      // if (this.productAdded.quantity > this.singleProduct.stock) {
      //   this.productAdded.quantity = this.singleProduct.stock;
      // }
    },
    deleteProduct(id) {
      this.removeCartItem(id);

      this.cartList.splice(this.cartList.indexOf(product), 1);
      this.empty = this.cartList.length == 0;
    },

    totalPrice(code) {
      let total = 0;
      this.cartList.forEach((product) => {
        total += product.total;
      });

      this.total = total;
      let codes = {
        newYear: 10,
        sale: 20,
      };

      let sale = codes[code] != undefined ? codes[code] : 0;
      this.total = this.total - (sale / 100) * this.total;
      return this.total;
    },
  },
  async created() {
    this.cartList = await this.getCart();

    this.totalPrice();
  },
  components: {
    // Components
  },
  computed: {
    ...mapGetters("cartModule", ["cart"]),

    sale() {
      return totalPrice(this.promo);
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: 140px 0 40px;
  .contant_box {
    h1 {
      font-size: 20px;
      font-weight: 600;
    }
    .cart_box {
      &__head {
        margin: 40px 0 20px;

        h4 {
          color: #c1c1c1;
          font-weight: 400;
          font-size: 15px;
        }
      }
      .produc_cart {
        margin-bottom: 20px;
      }
      &__body {
        &__item {
          display: flex;
          align-items: center;
          height: 100%;
          &__img {
            width: 94px;
            height: 94px;
            margin-right: 20px;
            border-radius: 50%;
            overflow: hidden;
            img {
              width: 100%;
            }
          }
          &__info {
            &.height {
              height: auto;
              margin: auto;
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
            &.name {
              width: calc(100% - 94px);
            }
            h4,
            h5 {
              font-size: 16px;
              margin-bottom: 0px;
            }
            h4 {
              font-weight: 600;
              color: #000;
              transition: 0.3s;
              &:hover {
                color: var(--second-color);
              }
            }
            h5 {
              font-weight: 400;
            }
            a {
              text-decoration: none;
            }
            span {
              font-size: 13px;
              font-weight: 300;
              color: #c4c4c4;
            }
          }
        }
      }
      &__footer {
        margin-top: 40px;
        &__item {
          display: flex;
          height: 100%;
          align-items: center;
          justify-content: center;
          h4 {
            font-size: 16px;
            font-weight: 300;
            margin-right: 30px;
          }
          h5 {
            font-size: 16px;
            font-weight: 600;
          }
          .btn-bg {
            margin-right: 20px;
          }
          form {
            position: relative;
            width: 95%;

            input {
              border-radius: 24px;
              border: 1px solid #d8d8d8;
              width: 100%;
              height: 48px;
              padding: 15px 45px 15px 30px;
              overflow: hidden;
              font-size: 13px;
              color: #ababab;
              box-shadow: none;
            }
            button {
              position: absolute;
              height: 100%;
              top: 50%;
              right: 0;
              color: #b5b5b5;
              transform: translateY(-50%);
              border-radius: 0 25px 25px 0;
              padding: 0 24px 0 15px;
              box-shadow: none;
            }
          }
          .back {
            all: unset;
            cursor: pointer;
            span {
              font-weight: 600;
              margin-left: 20px;
            }
          }
        }
      }
    }
  }
}
.quantity-box {
  position: relative;
  background-color: #ffffff;
  border-radius: 24px;
  border: 1px solid #d8d8d8;
  width: 129px;
  height: 48px;
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
</style>