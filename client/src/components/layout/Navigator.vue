<template>
  <nav id="nav" class="navbar navbar-expand-lg">
    <div class="container">
      <div class="navbar__logo">
        <router-link to="/" class="logo">
          <img
            alt="logo"
            width="46"
            height="35"
            src="../../assets/logo_white.png"
          />
          <span>
            <span>E-</span>
            <span>Commerce</span>
          </span>
        </router-link>
      </div>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
          <li
            class="nav-item"
            v-for="category in categoryList"
            :key="category.id"
          >
            <router-link
              class="nav-link"
              :to="{ name: 'ProductFilter', params: { category: category } }"
              >{{ category }}</router-link
            >
          </li>
        </ul>
      </div>
      <div class="shopping d-flex">
        <div class="shopping__search" id="wrap">
          <form action="">
            <input
              id="search"
              name="search"
              type="text"
              placeholder="What're we looking for ?"
            /><input id="search_submit" value="Rechercher" type="submit" />
          </form>
        </div>
        <div class="shopping__cart">
          <a
            class="cart-link"
            data-bs-toggle="modal"
            data-bs-target="#cartModal"
          >
            <img src="../../assets/cart.svg" alt="" />
          </a>
          <!-- Start Cart Modal -->
          <div
            class="modal fade left"
            id="cartModal"
            tabindex="-1"
            aria-labelledby="cartModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="miniCart-navigation active-miniCart">
                  <div class="miniCart-wrapper">
                    <div class="miniCart-wrapper__header">
                      <div class="miniCart-title"><h4>Shopping Cart</h4></div>
                      <div class="miniCart-close__nav">
                        <i
                          class="fa fa-times"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></i>
                      </div>
                    </div>
                    <div class="miniCart-wrapper__inner">
                      <div class="container">
                        <div
                          v-for="product in this.cartList"
                          :key="product.id"
                          class="miniCart-inner d-flex align-items-center"
                        >
                          <div class="miniCart-img">
                            <a href="" class="mini-cart__item-img"
                              ><img
                                :src="product.imageSrc"
                                alt="img"
                                class="img-fluid"
                            /></a>
                          </div>
                          <div class="miniCart-details text-center">
                            <div class="miniCart-product-name">
                              <a href="" class="mini-cart__item-title"
                                ><h6>{{ product.name }}</h6></a
                              >
                            </div>
                            <div class="miniCart-product-size">
                              <p>{{ product.size }}</p>
                            </div>

                            <div class="miniCart-product__count">
                              <div class="counter">
                                <div
                                  class="icon-contaier minus"
                                  @click="decrement"
                                >
                                  <i class="fas fa-minus"></i>
                                </div>
                                <input
                                  type="number"
                                  min="1"
                                  max="100"
                                  class="qty-input"
                                  :value="productCount"
                                />
                                <div
                                  class="icon-contaier plus"
                                  @click="increment"
                                >
                                  <i class="fas fa-plus"></i>
                                </div>
                              </div>
                            </div>

                            <div class="miniCart-price pt-2">
                              <span>{{ product.price }} ج.م</span>
                            </div>
                          </div>
                          <div class="miniCart-remove">
                            <i class="fas fa-trash-alt"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="miniCart-wrapper__footer">
                      <div
                        class="
                          miniCart-subtotal
                          d-flex
                          justify-content-between
                          align-items-center
                          pt-2
                          py-3
                        "
                      >
                        <span>Total cost</span> <span>36 EGP</span>
                      </div>
                      <div class="miniCart-btns pb-2">
                        <a class="btn btn-primary" href="/Cart"
                          >CONTINUE SHOPPING</a
                        >
                        <button class="btn btn-secondary btn-block">
                          PAYMENT
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Cart Modal -->
        </div>
        <div class="shopping__account">
          <a
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
            class="account-link"
          >
            <img src="../../assets/avatar.svg" alt="" />
          </a>
          <!-- Start Login Modal -->
          <div
            class="modal fade"
            id="loginModal"
            tabindex="-1"
            aria-labelledby="loginModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-body">
                  <div class="login-navigation">
                    <!-- Login Form -->
                    <div
                      v-if="currentForm.toLowerCase() === 'login'"
                      class="login-form"
                    >
                      <div
                        class="login-close__nav"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <i class="fa fa-times"></i>
                      </div>
                      <div class="container">
                        <div class="modal-title">
                          <h4>Log in</h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing
                          </p>
                        </div>
                        <form @submit.prevent="logIn()">
                          <div class="col-md-12">
                            <div class="alert-wrapper">
                              <div
                                class="alert alert-danger"
                                style="display: none"
                              >
                                <ul class="list-unstyled mb-0"></ul>
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="input-group mb-2">
                              <div class="input-group-prepend">
                                <div class="input-group-text">
                                  <i class="fas fa-user"></i>
                                </div>
                              </div>
                              <input
                                type="email"
                                id="inlineFormInputGroup"
                                placeholder="E-mail"
                                class="form-control"
                                v-model="login.email"
                              />
                            </div>
                            <div class="input-group mb-2">
                              <div class="input-group-prepend">
                                <div class="input-group-text">
                                  <i class="fas fa-lock"></i>
                                </div>
                              </div>
                              <input
                                type="password"
                                id="passwordForm"
                                placeholder="Password"
                                class="form-control"
                                v-model="login.password"
                              />
                            </div>
                            <div class="forget-password text-right mt-3">
                              <a
                                href="/ar/Registration/ForgetPassword"
                                class="forget-password"
                                >Forgot password?</a
                              >
                            </div>
                            <div class="sign-in-button mt-4 pb-2">
                              <button
                                type="submit"
                                class="btn btn-primary w-100"
                              >
                                Sign in
                              </button>
                            </div>
                            <div class="sign-in-facebook mt-3">
                              <button
                                type="button"
                                class="btn btn-facebook w-100"
                              >
                                <i class="fab fa-facebook-square"></i>
                                Facebook
                              </button>
                            </div>
                            <div
                              class="
                                create-account
                                mt-4
                                d-flex
                                align-items-center
                                justify-content-center
                              "
                            >
                              <p class="m-0 nohave">Not a member yet?</p>
                              <a
                                href="#"
                                @click.prevent="toggleForm()"
                                class="new-account"
                                >Sign up</a
                              >
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <!-- Register Form -->
                    <div class="register-form" v-else>
                      <div
                        class="login-close__nav"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <i class="fa fa-times"></i>
                      </div>
                      <div class="container">
                        <div class="modal-title">
                          <h4>Create an account and discover the benefits</h4>
                        </div>
                        <form @submit.prevent="registerForm()" class="mt-4">
                          <div class="col-12"></div>
                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <div class="input-group">
                                <input
                                  type="text"
                                  placeholder="First Name"
                                  class="form-control validate"
                                  v-model="registerData.firstname"
                                />
                              </div>
                            </div>
                            <div class="form-group col-md-6">
                              <div class="input-group">
                                <input
                                  type="text"
                                  id="inputLastName"
                                  placeholder="Last Name"
                                  class="form-control validate"
                                  v-model="registerData.lastname"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="input-group">
                              <input
                                type="email"
                                id="inputEmail"
                                placeholder="Email"
                                class="form-control"
                                v-model="registerData.email"
                              />
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="input-group">
                              <input
                                type="text"
                                id="inputMobile"
                                placeholder="Password"
                                autocomplete="off"
                                class="form-control"
                                v-model="registerData.mobile"
                              />
                            </div>
                          </div>

                          <div class="form-check select">
                            <input
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                              class="form-check-input"
                              required="required"
                            />
                            <label for="defaultCheck1" class="form-check-label">
                              I have read and agreed on
                              <a href="#" class="terms-link">
                                Terms and Conditions
                              </a></label
                            >
                          </div>
                          <div class="form-check select">
                            <input
                              type="checkbox"
                              value=""
                              id="defaultCheck2"
                              class="form-check-input"
                              v-model="registerData.news"
                            />
                            <label for="defaultCheck2" class="form-check-label">
                              Subscribe to our Newsletters
                            </label>
                          </div>

                          <div class="form-group mt-4">
                            <button
                              type="submit"
                              class="btn btn-primary text-center"
                            >
                              Create New Account
                            </button>
                            <p class="mt-2 text-center nohave mb-0">
                              If you have an account ,
                              <a
                                href="#"
                                class="signin-link"
                                @click.prevent="toggleForm()"
                                >Log in
                              </a>
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Login Modal -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      currentForm: "login",
      cartList: null,

      categoryList: [],
      // Login
      login: {
        email: null,
        password: null,
      },
      // Regester

      registerData: {
        firstname: null,
        lastname: null,
        email: null,
        mobile: null,
        password: null,
        confirm_password: null,
        day: "اليوم",
        month: "الشهر",
        year: "السنة",
        gender: null,
        news: null,
      },
    };
  },
  methods: {
    ...mapActions("categoriesModule", ["getCategories"]),
  },

  async created() {
    this.categoryList = await this.getCategories();
  },
  computed: {
    ...mapGetters("categoriesModule", ["categories"]),
  },

  watch: {
    $route(to, from) {
      if (to.name == "Home") {
        document.querySelector(".navbar").classList.remove("navbar-scroll");
      } else {
        document.querySelector(".navbar").classList.add("navbar-scroll");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  position: absolute;
  background-color: transparent;
  width: 100%;
  z-index: 999;
  margin-top: 20px;
  transition: 0.4s ease-in-out;
  .container > div:not(.navbar-collapse) {
    width: 20%;
  }
  .navbar__logo {
    padding-right: 20px;
    a {
      text-decoration: none;
    }

    span {
      span:first-of-type {
        color: #fff;
      }
      span:last-of-type {
        color: #fff;
      }
    }
  }
  .navbar-collapse {
    text-align: center;
    max-width: 62%;
    .navbar-nav {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }
  .nav-item {
    display: flex;
    align-items: center;
    &:last-of-type .nav-link {
      margin-right: 0;
    }
    .nav-link {
      color: #fff;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      // margin-right: 35px;

      &:hover {
        color: #fbb03b;
      }
    }
  }
  input[type="text"] {
    // background-color: #fff;
  }
  .shopping {
    > div {
      margin: 0 17px;
      width: 22px;
      height: 22px;
    }
    &__search {
      width: calc(100% - 44px) !important;
    }
  }
}

.navbar-scroll {
  position: fixed;
  background-color: #fff;
  top: 0;
  margin-top: 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  .nav-item {
    .nav-link {
      color: #000;
    }
  }
  img,
  input:not([type="text"]) {
    filter: invert(100%);
  }
  .navbar__logo {
    span {
      span:first-of-type {
        color: #fbb03b;
      }
      span:last-of-type {
        color: #000;
      }
    }
  }
}
#wrap {
  // margin: 10px 100px;
  display: inline-block;
  position: relative;
  padding: 0;
}

input[type="text"] {
  height: 22px;
  font-size: 16px;
  display: inline-block;
  border: none;
  outline: none;
  color: #555;
  padding: 3px;
  padding-right: 35px;
  width: 0px;
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  z-index: 3;
  transition: width 0.4s cubic-bezier(0, 0.795, 0, 1);
  cursor: pointer;
}

input[type="text"]:focus:hover {
  border-bottom: 1px solid #bbb;
}

input[type="text"]:focus {
  width: 250px;
  z-index: 1;
  border-bottom: 1px solid #bbb;
  cursor: text;
}
input[type="submit"] {
  width: 22px;
  height: 22px;
  background-color: transparent;
  display: inline-block;
  background-image: url("../../assets/search.svg");
  background-size: contain;
  text-indent: -10000px;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  cursor: pointer;
  transition: opacity 0.4s ease;
}

input[type="submit"]:hover {
  opacity: 0.8;
}
</style>