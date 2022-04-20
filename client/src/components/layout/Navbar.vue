<template>
  <header>
    <nav
      id="nav"
      v-show="this.route === 'Home'"
      class="navbar navbar-expand-lg navbar-fixed"
    >
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
      <div class="navbar-menu">
        <div class="navbar-menu_top">
          <div class="top-background">
            <div class="shipping">
              <ul>
                <li class="tooltip-box">
                  <img src="../../assets/choose/shipping.svg" alt="shipping" />
                  <p class="">
                    Free Shipping
                    <span class="tooltiptext">On orders above EGP 399</span>
                  </p>
                </li>
                <li class="tooltip-box">
                  <img src="../../assets/choose/shipping.svg" alt="shipping" />
                  <p class="">
                    Home Delivery
                    <span class="tooltiptext">Within 2-4 business days</span>
                  </p>
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
                  /><input
                    id="search_submit"
                    value="Rechercher"
                    type="submit"
                  />
                </form>
              </div>
              <div class="shopping__cart">
                <router-link to="/cart">
                  <img src="../../assets/cart.svg" alt="cart" />

                  <span class="shopping__cart__number">{{ cartLength }}</span>
                </router-link>
              </div>
              <div class="shopping__account">
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                  class="account-link"
                >
                  <img src="../../assets/avatar.svg" alt="avatar" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar-menu_bottom">
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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                class="nav-item"
                v-for="category in categoryList"
                :key="category.id"
              >
                <router-link
                  class="nav-link"
                  :to="{
                    name: 'ProductFilter',
                    params: { category: category },
                  }"
                  >{{ category }}</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <nav
      id="nav"
      v-show="this.route !== 'Home'"
      class="navbar navbar-expand-lg navbar-fixed navbar-scroll"
    >
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
      <div class="navbar-menu">
        <div class="navbar-menu_top">
          <div class="top-background">
            <div class="shipping">
              <ul>
                <li class="tooltip-box">
                  <img src="../../assets/choose/shipping.svg" alt="shipping" />
                  <p class="">
                    Free Shipping
                    <span class="tooltiptext">On orders above EGP 399</span>
                  </p>
                </li>
                <li class="tooltip-box">
                  <img src="../../assets/choose/shipping.svg" alt="shipping" />
                  <p class="">
                    Home Delivery
                    <span class="tooltiptext">Within 2-4 business days</span>
                  </p>
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
                  /><input
                    id="search_submit"
                    value="Rechercher"
                    type="submit"
                  />
                </form>
              </div>
              <div class="shopping__cart">
                <router-link to="/cart">
                  <img src="../../assets/cart.svg" alt="cart" />

                  <span class="shopping__cart__number">{{ cartLength }}</span>
                </router-link>
              </div>
              <div class="shopping__account">
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                  class="account-link"
                >
                  <img src="../../assets/avatar.svg" alt="avatar" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar-menu_bottom">
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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                class="nav-item"
                v-for="category in categoryList"
                :key="category.id"
              >
                <router-link
                  class="nav-link"
                  :to="{
                    name: 'ProductFilter',
                    params: { category: category },
                  }"
                  >{{ category }}</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      categoryList: [],
      i: true,
      route: null,
    };
  },
  props: ["cartLength"],
  methods: {
    ...mapActions("categoriesModule", ["getCategories"]),
    onScroll(e) {
      window.addEventListener("scroll", () => {
        this.windowTop = window.top.scrollY;
        if (this.windowTop > 200) {
          document.querySelector(".navbar").classList.add("navbar-scroll");
        } else {
          document.querySelector(".navbar").classList.remove("navbar-scroll");
        }
      });
    },
  },

  async created() {
    this.categoryList = await this.getCategories();
  },
  computed: {
    ...mapGetters("categoriesModule", ["categories"]),
  },
  watch: {
    $route(to, from) {
      this.route = to.name;
      if (this.route === "Home") {
        this.onScroll();

        //       document.querySelector(".navbar").classList.remove("navbar-scroll");
      }
      // else {
      //       document.querySelector(".navbar").classList.add("navbar-scroll");
      //     }
    },
  },
};
</script>

<style lang="scss" scoped>
$top-height: 30px;

.shipping {
  ul {
    display: flex;
    margin-bottom: 0;
    .tooltip-box {
      position: relative;
      display: flex;
      align-items: center;
      margin-right: 20px;
      cursor: pointer;
      &:hover .tooltiptext {
        visibility: visible;
        display: block;
        transition: 0.4s;
      }
      img {
        filter: invert(1);
        margin-right: 7px;
        width: 30px;
      }
      p {
        margin-bottom: 0;
        .tooltiptext {
          position: absolute;
          width: 200px;
          top: 150%;
          left: 0;
          visibility: hidden;
          display: none;
          background-color: #fff;
          border-radius: 6px;
          padding: 10px;
          z-index: 1;
          box-shadow: 0 8px 10px 0 rgba(10, 31, 68, 10%),
            0 0 1px 0 rgba(10, 31, 68, 8%);
          font-size: 12px;
          color: #212121;
          transition: 0.4s;
          &::after {
            content: "";
            position: absolute;
            bottom: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent #fff transparent;
          }
        }
      }
    }
  }
}

.navbar-fixed {
  position: fixed;
  display: flex;
  align-items: flex-start;
  height: 75px;
  width: 100%;
  // background: red;
  box-shadow: 0 1px 3px rgb(32 33 36 / 10%);
  top: 0;
  left: 0;
  z-index: 99;
  padding: 0;
  .navbar__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 15%;
    .logo {
      text-decoration: none;
      color: #fff;
    }
  }
  .navbar-menu {
    position: relative;
    width: 85%;
    height: 100%;
    &_top {
      position: absolute;
      width: 100%;
      height: $top-height;
      max-width: 1100px;
      top: 0;
      right: 0;
      left: 0;
      margin: 0 auto;

      .top-background {
        position: relative;
        height: $top-height;
        color: #ffffff;
        width: 100%;
        position: relative;
        font-size: 13px;
        padding: 0 15px 0 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &::before {
          content: "";
          position: absolute;
          width: 2000px;
          height: 100%;
          left: 0;
          background: var(--footer_hover);
          border-bottom-left-radius: 5px;
          transform: skewX(30deg);
          border-bottom-right-radius: 5px;
        }
        > div {
          position: relative;
        }
        .shopping {
          > div {
            position: relative;
            margin: 0 17px;
            width: 47px;
          }
          &__cart__number {
            position: absolute;
            top: -3px;
            right: -8px;
            background: #ff0000;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            border-radius: 50%;
            width: 15px;
            height: 15px;
            font-size: 9px;
            line-height: 10px;
          }
          a {
            cursor: pointer;
            img {
              width: 100%;
            }
          }
          &__search {
            width: calc(100% - 44px) !important;
          }
        }
        #wrap {
          // margin: 10px 100px;
          display: inline-block;
          position: relative;
          padding: 0;
          $search-width: 20px;
          input[type="text"] {
            height: $search-width;
            font-size: 16px;
            display: inline-block;
            border: none;
            outline: none;
            color: #fff;
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
            width: $search-width;
            height: $search-width;
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
        }
      }
    }
    &_bottom {
      position: absolute;
      width: 100%;
      height: calc(100% - $top-height);
      top: $top-height;
      left: 0;
      display: flex;
      align-items: center;
      padding: 0 $top-height;
      .nav-item {
        display: flex;
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
    }
  }
}
.navbar-scroll {
  position: fixed;
  background-color: #fff;
  top: 0;
  margin-top: 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 99;
  .navbar-menu_bottom {
    .nav-item {
      .nav-link {
        color: #000;
      }
    }
  }

  .navbar__logo img {
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
</style>