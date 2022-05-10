<template>
  <main>
    <section class="section-head">
      <div class="container">
        <h1 class="section-head__title">Stores</h1>
        <p class="section-head__description">
          Come see the best of at our stores.
        </p>
      </div>
    </section>
    <section class="stores">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-4"
            v-for="store in this.storesList"
            :key="store.id"
          >
            <div class="card">
              <a class="card__link" :href="store.location"></a>
              <div class="card__img">
                <img class="w-100" :src="store.image" alt="" />
              </div>
              <div class="card__details">
                <h2>{{ store.title }}</h2>
                <address class="card__address">{{ store.address }}</address>
                <p class="card__phone">{{ store.phone }}</p>
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
      storesList: [],
    };
  },
  methods: {
    ...mapActions("StoresModule", ["getStores"]),
  },
  async created() {
    this.storesList = await this.getStores();
  },
  computed: {
    ...mapGetters("StoresModule", ["stores"]),
  },
};
</script>

<style lang="scss" scoped>
main {
  margin-top: 150px;
  .stores {
    margin-bottom: 30px;

    .card {
      position: relative;
      margin-bottom: 30px;
      border-radius: 15px;
      overflow: hidden;
      &__link {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
      &__img {
        height: 200px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &__details {
        padding: 22px 30px 20px;
        min-height: 120px;
        h2 {
          font-size: 19px;
          font-weight: 600;
          color: #1d1d1f;
        }
      }
      &__address {
        margin: 4px 0 8px;
        font-size: 14px;
        font-weight: 400;
        color: #6e6e73;
      }
      &__phone {
        margin: 4px 0 8px;
        font-size: 14px;
        font-weight: 400;
        color: #6e6e73;
        margin-top: auto;
      }
    }
  }
}
</style>