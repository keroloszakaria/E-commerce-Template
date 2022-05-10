<template>
  <main>
    <section class="section-head">
      <div class="container">
        <h1 class="section-head__title">Gift Cards</h1>
        <p class="section-head__description">
          Here's how the returns process works.
        </p>
      </div>
    </section>

    <section class="cards">
      <div class="container">
        <div class="row">
          <div
            :class="'col-lg-4 ' + card.code"
            @click="copyToClipboard(card.code)"
            v-for="card in this.cardsList"
            :key="card.id"
          >
            <div :class="'card ' + card.title">
              <div class="card__overlay">Copied</div>
              <h2>
                <strong>{{ card.title }}</strong>
                <span>Discount</span>
              </h2>
              <div class="card__details">
                <p class="card__description">{{ card.description }}</p>
                <p class="card__precentage">{{ card.percentage }}%</p>
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
      cardsList: [],
    };
  },
  methods: {
    ...mapActions("GiftCardsModule", ["getCards"]),
    copyToClipboard(value) {
      navigator.clipboard.writeText(value);
      // this.$refs[value].classList.add("copied");
      let card = document.querySelector(`.${value}`);
      card.classList.add("copied");

      setTimeout(() => {
        card.classList.remove("copied");
      }, 1000);
    },
  },
  async created() {
    this.cardsList = await this.getCards();
  },
  computed: {
    ...mapGetters("GiftCardsModule", ["cards"]),
  },
};
</script>

<style lang="scss" scoped>
main {
  margin-top: 150px;
  .cards {
    margin-bottom: 50px;
  }
  .card {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 200px;
    border-radius: 10px;
    padding: 20px;
    overflow: hidden;
    margin-bottom: 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: inset 0 0 10px 10px rgb(0 0 0 / 10%);
      background-image: url("../assets/gift-card.jpg");
      background-position: 100% 100%;
      background-size: cover;
      background-repeat: no-repeat;
    }

    &__overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #6d6e70;
      color: #fff;
      font-size: 2rem;
      font-weight: 500;
      z-index: 12;
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }

    h2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      font-size: 2rem;
      font-weight: 600;
      color: #6d6e70;
      text-shadow: 1px 1px 2px #fff;
      text-transform: uppercase;
      z-index: 9;
      strong {
        letter-spacing: 1px;
      }
      span {
        font-weight: 400;
      }
    }

    &__details {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        z-index: 9;
        text-transform: uppercase;
        margin-bottom: 0;
        text-shadow: 1px 1px 2px #fff;
      }
    }
    &__description {
      font-size: 1.1rem;
    }
    &__precentage {
      // position: absolute;
      // bottom: 10px;
      // right: 10px;
      font-size: 2rem;
      font-weight: 500;
      color: #d21313;
    }
  }
  .copied {
    .card__overlay {
      opacity: 1;
    }
  }
}
</style>