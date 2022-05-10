<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 column">
          <div class="column__logo logo">
            <img
              alt="logo"
              width="46"
              height="35"
              src="../../assets/logo.png"
            />
            <span>
              <span style="color: #fbb03b">E-</span>
              <span>Commerce</span>
            </span>
          </div>
          <div class="column__info">
            <p>
              House My Brand designs clothing for the young, the old & everyone
              in between – but most importantly, for the fashionable
            </p>
          </div>
          <div class="column__social">
            <a
              v-if="this.personalData.facebook"
              :href="this.personalData.facebook"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              v-if="this.personalData.twitter"
              :href="this.personalData.twitter"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              v-if="this.personalData.linkedin"
              :href="this.personalData.linkedin"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a
              v-if="this.personalData.instagram"
              :href="this.personalData.instagram"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              v-if="this.personalData.youtube"
              :href="this.personalData.youtube"
            >
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="row">
            <div class="col-lg-4 column">
              <div class="column__heading">
                <h3>Shopping online</h3>
              </div>
              <ul class="column__list">
                <li>
                  <router-link to="/gift-card">Gift Cards</router-link>
                </li>
                <li>
                  <router-link to="/return">Returns</router-link>
                </li>
                <li>
                  <router-link to="/payment-options"
                    >Payment Options</router-link
                  >
                </li>
                <li>
                  <router-link to="/shipping">Shipping</router-link>
                </li>
              </ul>
            </div>
            <div class="col-lg-4 column">
              <div class="column__heading">
                <h3>Information</h3>
              </div>

              <ul class="column__list">
                <li>
                  <router-link to="/about">About Us</router-link>
                </li>
                <li>
                  <router-link to="/find-store">Find a store</router-link>
                </li>
                <li>
                  <router-link to="/contact">Contact Us</router-link>
                </li>
              </ul>
            </div>
            <div class="col-lg-4 column">
              <div class="column__heading">
                <h3>Contact</h3>
              </div>

              <ul class="column__list">
                <li>
                  <a :href="'mailto:' + this.personalData.email">{{
                    this.personalData.email
                  }}</a>
                </li>
                <li>
                  <a :href="'tel:' + this.personalData.telephone">{{
                    this.personalData.telephone
                  }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="container">
        <p>
          DESIGN BY
          <a href="/" target="_blank">Pythoners</a>
          - © 2022. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      personalData: [],
    };
  },
  methods: {
    ...mapActions("personalModule", ["getPersonal"]),
  },
  async created() {
    this.personalData = await this.getPersonal();
  },
  computed: {
    ...mapGetters("personalModule", ["personal"]),
  },
};
</script>

<style lang="scss" scoped>
</style>