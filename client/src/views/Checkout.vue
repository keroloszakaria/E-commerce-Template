<template>
  <main>
    <section class="checkout">
      <div class="container">
        <div class="row">
          <div class="col-12 checkout__content">
            <div class="checkout__content__title">
              <h1>Address data and type of delivery</h1>
              <div class="checkout__content__steps">
                <div
                  :class="[
                    'checkout__content__steps__step',
                    { active: this.step == 1 },
                  ]"
                >
                  <i class="fab fa-opencart"></i>
                </div>
                <div
                  :class="[
                    'checkout__content__steps__step',
                    { active: this.step == 2 },
                  ]"
                >
                  <i class="fas fa-truck"></i>
                </div>
                <div
                  :class="[
                    'checkout__content__steps__step',
                    { active: this.step == 3 },
                  ]"
                >
                  <i class="fa fa-credit-card"></i>
                </div>
              </div>
            </div>

            <div v-if="this.step == 1" class="checkout__content__body">
              <form action="">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>First name</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="First Name"
                        v-model="delivery.firstname"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Last name</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Last Name"
                        v-model="delivery.lastname"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Address</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Address"
                        v-model="delivery.addres"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>City</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="City"
                        v-model="delivery.city"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Phone Number</label>
                      <input
                        type="tele"
                        class="form-control"
                        placeholder="Phone Number"
                        v-model="delivery.phone"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>email</label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="email"
                        v-model="delivery.email"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div v-if="this.step == 2" class="checkout__content__body"></div>
          </div>
          <div class="col-12 checkout__footer">
            <div class="checkout__footer__item">
              <button v-if="this.step > 1" @click="prevStep" class="back">
                <i class="fa-solid fa-arrow-left-long"></i>
                <span>Back</span>
              </button>
            </div>
            <div class="checkout__footer__item">
              <router-link class="btn-bg me-3" to="/"
                >CONTINUE SHOPPING</router-link
              >
              <button @click="nextStep" class="btn btn-sec">Next Step</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      delivery: {
        firstname: "",
        lastname: "",
        addres: "",
        city: "",
        phone: "",
        email: "",
      },
    };
  },
  methods: {
    nextStep() {
      this.step++;
    },
    prevStep() {
      this.step--;
    },
  },
  created() {
    // console.log(this.delivery);
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: 140px 0 40px;

  .checkout {
    &__content {
      &__title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
        h1 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 0;
        }
      }
      &__steps {
        position: relative;

        width: 25%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &::before {
          content: "";
          display: block;
          width: 100%;
          height: 1px;
          background-color: #f5f5f5;
          position: absolute;
          top: 50%;
          left: 0;
          z-index: -1;
        }
        &__step {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          padding: 10px;
          width: 60px;
          height: 60px;
          background-color: #fff;

          border: 10px solid #fff;
          &.active {
            background-color: #fbb03b;
            svg {
              color: #fff;
            }
          }
          svg {
            color: #d8d8d8;
          }
          img {
            width: 17px;
          }
        }
      }
      &__body {
        margin-bottom: 40px;
        form {
        }
      }
    }
    &__footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &__item {
        display: flex;
        align-items: center;
        .back {
          all: unset;
          cursor: pointer;
          span {
            font-weight: 600;
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>