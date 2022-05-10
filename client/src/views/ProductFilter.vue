<template>
  <div class="filtering">
    <section class="subNav">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'Home' }">
                <img src="../assets/home.svg" alt="home" />
              </router-link>
            </li>

            <li class="breadcrumb-item active" aria-current="page">
              {{ this.category }}
            </li>
          </ol>
        </nav>
      </div>
    </section>

    <main class="container">
      <aside>
        <div class="accordion accordion-flush" id="accordionType">
          <div class="accordion-item">
            <h3 class="accordion-header" id="accordionType-headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#accordionType-collapseOne"
                aria-expanded="false"
                aria-controls="accordionType-collapseOne"
              >
                <span>PRODUCT TYPE</span>
                <i class="fa fa-chevron-down"></i>
              </button>
            </h3>
            <div
              id="accordionType-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="accordionType-headingOne"
              data-bs-parent="#accordionType"
            >
              <div class="accordion-body">
                <div class="filter">
                  <div
                    class="filter__box type"
                    v-for="category in this.categoryList"
                    :key="category.id"
                  >
                    <input
                      @click="fetchProducts(category)"
                      type="radio"
                      name="subcategory"
                      v-model="subcategory"
                      :id="category"
                      :value="category"
                      :checked="category === subcategory"
                    />
                    <label :for="category">{{ category }}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="accordion accordion-flush" id="accordionprice">
          <div class="accordion-item">
            <h3 class="accordion-header" id="accordionprice-headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#accordionprice-collapseOne"
                aria-expanded="false"
                aria-controls="accordionprice-collapseOne"
              >
                <span>price</span>
                <i class="fa fa-chevron-down"></i>
              </button>
            </h3>
            <div
              id="accordionprice-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="accordionprice-headingOne"
              data-bs-parent="#accordionprice"
            >
              <div class="accordion-body">
                <div class="filter">
                  <PriceRange />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="accordion accordion-flush" id="accordioncollection">
          <div class="accordion-item">
            <h3 class="accordion-header" id="accordioncollection-headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#accordioncollection-collapseOne"
                aria-expanded="false"
                aria-controls="accordioncollection-collapseOne"
              >
                <span>collectios</span>
                <i class="fa fa-chevron-down"></i>
              </button>
            </h3>
            <div
              id="accordioncollection-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="accordioncollection-headingOne"
              data-bs-parent="#accordioncollection"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
              </div>
            </div>
          </div>
        </div>

        <div class="accordion accordion-flush" id="accordionSize">
          <div class="accordion-item">
            <h3 class="accordion-header" id="accordionSize-headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#accordionSize-collapseOne"
                aria-expanded="false"
                aria-controls="accordionSize-collapseOne"
              >
                <span>size</span>
                <i class="fa fa-chevron-down"></i>
              </button>
            </h3>
            <div
              id="accordionSize-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="accordionSize-headingOne"
              data-bs-parent="#accordionSize"
            >
              <div class="accordion-body">
                <div class="filter">
                  <div class="filter__box size-box">
                    <input
                      type="checkbox"
                      class="btn-check"
                      id="btncheck1"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="btncheck1"
                      >XS</label
                    >
                  </div>
                  <div class="filter__box size-box">
                    <input
                      type="checkbox"
                      class="btn-check"
                      id="btncheck2"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="btncheck2"
                      >s</label
                    >
                  </div>
                  <div class="filter__box size-box">
                    <input
                      type="checkbox"
                      class="btn-check"
                      id="btncheck3"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="btncheck3"
                      >M</label
                    >
                  </div>
                  <div class="filter__box size-box">
                    <input
                      type="checkbox"
                      class="btn-check"
                      id="btncheck4"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="btncheck4"
                      >L</label
                    >
                  </div>
                  <div class="filter__box size-box">
                    <input
                      type="checkbox"
                      class="btn-check"
                      id="btncheck5"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="btncheck5"
                      >XL</label
                    >
                  </div>
                  <div class="filter__box size-box">
                    <input
                      type="checkbox"
                      class="btn-check"
                      id="btncheck18"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="btncheck18"
                      >xxl</label
                    >
                  </div>
                  <div class="filter__box size-box">
                    <input
                      type="checkbox"
                      class="btn-check"
                      id="btncheck15"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="btncheck15"
                      >3l</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="accordion accordion-flush" id="accordionColor">
          <div class="accordion-item">
            <h3 class="accordion-header" id="accordionColor-headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#accordionColor-collapseOne"
                aria-expanded="false"
                aria-controls="accordionColor-collapseOne"
              >
                <span>COLOR</span>
                <i class="fa fa-chevron-down"></i>
              </button>
            </h3>
            <div
              id="accordionColor-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="accordionColor-headingOne"
              data-bs-parent="#accordionColor"
            >
              <div class="accordion-body">
                <div class="filter">
                  <div class="filter__box color color-box">
                    <input
                      type="checkbox"
                      class="btn-check"
                      id="btncheck222"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="btncheck222"
                      ><span style="background-color: #f5f5f5"></span
                    ></label>
                  </div>
                  <div class="filter__box color color-box">
                    <input
                      type="checkbox"
                      class="btn-check"
                      id="btncheck22223"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="btncheck22223"
                      ><span style="background-color: #f5f5f5"></span
                    ></label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <section>
        <div class="row">
          <div
            class="col-lg-3 mb-4"
            v-for="product in this.products"
            :key="product.id"
          >
            <Product :product="product" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
// Vuex
import { mapGetters, mapActions } from "vuex";

import PriceRange from "@/components/PriceRange.vue";
import Product from "@/components/Product.vue";
export default {
  data() {
    return {
      category: this.$route.params.category,
      subcategory: this.$route.params.category,
      products: [],
      categoryList: [],
    };
  },
  components: {
    PriceRange,
    Product,
  },

  methods: {
    ...mapActions("categoriesModule", ["getCategories"]),
    ...mapActions("productModule", ["getProductByCategory"]),
    async fetchProducts(category) {
      const products = await this.getProductByCategory(category);
      this.products = products;
    },
  },
  async created() {
    this.products = await this.getProductByCategory(this.category);
    this.categoryList = await this.getCategories();
  },
  computed: {
    ...mapGetters("categoriesModule", ["categories"]),
    ...mapGetters("productModule", ["product"]),
  },

  watch: {
    $route(to, from) {
      this.fetchProducts(to.params.category);
      this.subcategory = to.params.category;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  .nav-item {
    .nav-link {
      color: #000;
    }
  }
  img,
  input {
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

.filtering {
  padding-top: 100px;
}

main {
  display: flex;
  justify-content: space-between;
  aside {
    width: 309px;
  }
  section {
    width: calc(100% - (309px + 36px));
  }
}

.accordion {
  border: 1px solid #e6e6e6;
  margin-bottom: 14px;

  &-item {
    .accordion-header {
      box-shadow: 0px 5px 8px #eee;
    }
    button {
      background-color: transparent;
      box-shadow: none;
      color: #000000;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 1.08px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-transform: uppercase;
      svg {
        transition: 0.4s;
      }
      &::after {
        content: unset;
      }
    }
    .accordion-button:not(.collapsed) svg {
      transform: rotate(-180deg);
    }
    .accordion-body {
      padding: 1.5rem 1.25rem;
      max-height: 240px;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 9px; /* width of the entire scrollbar */
      }
      &::-webkit-scrollbar-track {
        background: transparent; /* color of the tracking area */
      }
      &::-webkit-scrollbar-thumb {
        background: var(--footer_hover);
        border-radius: 20px; /* roundness of the scroll thumb */
        border: 1px solid #fff;
      }
    }
    .filter {
      display: flex;
      flex-wrap: wrap;

      .type {
        display: block;
        width: 100%;
        margin-bottom: 20px;
        text-transform: uppercase;
        input {
          padding: 0;
          height: initial;
          width: initial;
          margin-bottom: 0;
          display: none;
          cursor: pointer;
          &:checked + label {
            &::before {
              background-color: #000;
            }
            &::after {
              content: "";
              display: block;
              position: absolute;
              top: 4.4px;
              left: 10.5px;
              width: 6px;
              height: 14px;
              border: solid #fff;
              border-width: 0 2px 2px 0;
              transform: rotate(45deg);
            }
          }
        }
        label {
          position: relative;
          cursor: pointer;
          display: flex;
          align-items: center;
          span {
            color: #c4c4c4;
            margin-left: 5px;
            font-size: 14px;
          }
          &::before {
            content: "";
            background-color: transparent;
            display: inline-block;
            position: relative;
            border: 1px solid #d4d4d4;
            width: 25px;
            height: 25px;
            margin-right: 20px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>