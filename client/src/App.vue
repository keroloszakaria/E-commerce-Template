<template>
  <div id="app">
    <Navbar :cartLength="cartLength" />
    <router-view />
    <Newsletter />
    <Footer />

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
              <div v-if="currentForm === 'login'" class="login-form">
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
                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                  </div>
                  <form @submit.prevent="logIn()">
                    <div class="col-md-12">
                      <div class="alert-wrapper">
                        <div class="alert alert-danger" style="display: none">
                          <ul class="list-unstyled mb-0"></ul>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        id="inlineFormInputGroup"
                        placeholder="E-mail"
                        class="form-control"
                        v-model="login.email"
                      />
                    </div>

                    <div class="form-group">
                      <input
                        type="password"
                        id="passwordForm"
                        placeholder="Password"
                        class="form-control"
                        v-model="login.password"
                      />
                    </div>
                    <div class="text-end mt-3">
                      <a
                        href="/"
                        @click.prevent="toggleForm('forget')"
                        class="forget-password"
                        >Forgot password?</a
                      >
                    </div>
                    <div class="sign-in-button mt-4 pb-2">
                      <button type="submit" class="btn btn-sec w-100">
                        Sign in
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
                        @click.prevent="toggleForm('register')"
                        class="form-link ms-2"
                        >Sign up</a
                      >
                    </div>
                  </form>
                </div>
              </div>
              <!-- Register Form -->
              <div class="register-form" v-if="currentForm === 'register'">
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
                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                  </div>
                  <form @submit.prevent="registerForm()" class="mt-4">
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="First Name"
                        class="form-control validate"
                        v-model="registerData.firstname"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        id="inputLastName"
                        placeholder="Last Name"
                        class="form-control validate"
                        v-model="registerData.lastname"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        id="inputEmail"
                        placeholder="Email"
                        class="form-control"
                        v-model="registerData.email"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        id="inputMobile"
                        placeholder="Password"
                        autocomplete="off"
                        class="form-control"
                        v-model="registerData.mobile"
                      />
                    </div>
                    <div class="form-group select">
                      <input
                        type="checkbox"
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

                    <div class="form-group mt-4">
                      <button type="submit" class="btn btn-sec w-100">
                        Sign up
                      </button>
                    </div>
                    <div class="text-center">
                      <a
                        href="#"
                        class="form-link mt-3"
                        @click.prevent="toggleForm('login')"
                        >Are you already a member?
                      </a>
                    </div>
                  </form>
                </div>
              </div>

              <!-- Forget Form -->
              <div class="register-form" v-if="currentForm === 'forget'">
                <div
                  class="login-close__nav"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i class="fa fa-times"></i>
                </div>
                <div class="container">
                  <div class="modal-title">
                    <h4>Forgot your password?</h4>
                    <p>Enter your email and recover your account</p>
                  </div>
                  <form action="" class="mt-4">
                    <div class="form-group">
                      <input
                        type="email"
                        placeholder="Email"
                        class="form-control validate"
                      />
                    </div>
                    <button type="submit" class="btn btn-sec w-100">
                      Reset password
                    </button>
                  </form>
                  <div class="text-center">
                    <a
                      href="#"
                      class="form-link mt-3"
                      @click.prevent="toggleForm('login')"
                      >Login Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Login Modal -->
  </div>
</template>



<script>
import { mapGetters, mapActions } from "vuex";
import Navbar from "@/components/layout/Navbar";
import Newsletter from "@/components/Newsletter.vue";
import Footer from "@/components/layout/Footer";

export default {
  data() {
    return {
      test: [],
      currentForm: "login",
      cartList: [],
      cartLength: 0,
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
  components: {
    Navbar,
    Footer,
    Newsletter,
  },
  methods: {
    ...mapActions("cartModule", ["getCartLength"]),
    // async testAPI() {
    //   fetch("https://dummyjson.com/products/search?q=powder")
    //     .then((res) => res.json())
    //     .then(console.log);
    // },
    toggleForm(modal) {
      console.log(modal);
      this.currentForm = modal;
    },
  },
  async created() {
    // this.test = await this.testAPI();
    this.cartLength = await this.getCartLength();

    console.log(
      "%cPython%cers",
      "color: #00A1D7;  font-size:25px",
      "color: #FFCC33; font-size:25px",
      `
      
E-commerce Template
------------------
>> Programmed by : Pythoners Developers
>> Information   : https://www.pythoners-eg.com`
    );
  },
  computed: {
    ...mapGetters("cartModule", ["cart"]),
  },
};
</script>


<style>
</style>
