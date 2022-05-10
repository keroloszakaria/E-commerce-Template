<template>
  <main>
    <section class="section-head">
      <div class="container">
        <h1 class="section-head__title">Returns</h1>
        <p class="section-head__description">
          Here's how the returns process works.
        </p>
      </div>
    </section>
    <section class="return-intro">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-sm-6">
            <h1 id="intro-title">
              Returns should be easy. <strong>We couldn’t agree more.</strong>
            </h1>
            <span class="subtitle">
              Let's show you how to return your products in three easy ways.
            </span>
          </div>
          <div class="col-sm-5 img-col">
            <img
              class="w-100"
              alt="image description"
              src="../assets/soft.webp"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="return-steps">
      <div class="container">
        <div>
          <h2>1. Return to store</h2>
        </div>

        <div class="row">
          <div class="col-sm-3 step">
            <div class="step__icon">
              <i class="fa-solid fa-file-lines"></i>
            </div>
            <h3 class="step__title">1. Fill out your return slip</h3>
            <p class="step__text">
              This will be emailed to you after your products are delivered.
            </p>
          </div>
          <div class="col-sm-3 step">
            <div class="step__icon">
              <i class="fa fa-store"></i>
            </div>
            <h3 class="step__title">2. Visit your nearest store</h3>
            <p class="step__text">
              Wrap your household products in their original packaging and bring
              them over with your return slip and invoice.
            </p>
          </div>
          <div class="col-sm-3 step">
            <div class="step__icon">
              <i class="fa fa-box"></i>
            </div>
            <h3 class="step__title">3. Hand over your return</h3>
            <p class="step__text">
              An authorised staff member will take your package and hand you an
              acknowledgement receipt.
            </p>
          </div>
          <div class="col-sm-3 step">
            <div class="step__icon">
              <i class="fa fa-credit-card"></i>
            </div>
            <h3 class="step__title">4. Receive your refund</h3>
            <p class="step__text">
              This will be processed after we check your returns. If you’ve paid
              by cash, you can ask for a cash refund.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="return-steps">
      <div class="container">
        <div>
          <h2>2. Request a return online</h2>
        </div>

        <div class="row">
          <div class="col-sm-3 step">
            <div class="step__icon">
              <i class="fa fa-display"></i>
            </div>
            <h3 class="step__title">1. Request your return</h3>
            <p class="step__text">
              Go to Order History in My Account, select the products you want to
              return and place a return request.
            </p>
          </div>
          <div class="col-sm-3 step">
            <div class="step__icon">
              <i class="fa fa-box"></i>
            </div>
            <h3 class="step__title">2. Box up your products</h3>
            <p class="step__text">
              Wrap and seal your products in their original packaging or call us
              at +20–22 58 78 1 88 if you no longer have it.
            </p>
          </div>
          <div class="col-sm-3 step">
            <div class="step__icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <h3 class="step__title">3. Hand over your return</h3>
            <p class="step__text">
              Our courier partner may take 3-5 business days to pick it up.
              They’ll give you an acknowledgement receipt when they do.
            </p>
          </div>
          <div class="col-sm-3 step">
            <div class="step__icon">
              <i class="fa fa-credit-card"></i>
            </div>
            <h3 class="step__title">4. Receive your refund</h3>
            <p class="step__text">
              This will be processed after we check your returns. If you’ve paid
              by cash, you can ask for a cash refund.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="return-steps">
      <div class="container">
        <div>
          <h2>3. Call +20–22 58 78 1 88 to schedule a pick-up</h2>
        </div>

        <div class="row">
          <div class="col-sm-3 step">
            <div class="step__icon">
              <i class="fa-solid fa-phone"></i>
            </div>
            <h3 class="step__title">1. Call for a pick-up</h3>
            <p class="step__text">
              Speak to us at +20–22 58 78 1 88 to schedule a pick-up time and
              location. Make sure you fill out the return slip first.
            </p>
          </div>
          <div class="col-sm-3 step">
            <div class="step__icon">
              <i class="fa fa-box"></i>
            </div>
            <h3 class="step__title">2. Box up your products</h3>
            <p class="step__text">
              Wrap and seal your products in their original packaging or call us
              at +20–22 58 78 1 88 if you no longer have it.
            </p>
          </div>
          <div class="col-sm-3 step">
            <div class="step__icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <h3 class="step__title">3. Hand over your return</h3>
            <p class="step__text">
              Our courier partner may take 3-5 business days to pick it up.
              They’ll give you an acknowledgement receipt when they do.
            </p>
          </div>
          <div class="col-sm-3 step">
            <div class="step__icon">
              <i class="fa fa-credit-card"></i>
            </div>
            <h3 class="step__title">4. Receive your refund</h3>
            <p class="step__text">
              This will be processed after we check your returns. If you’ve paid
              by cash, you can ask for a cash refund.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
main {
  margin-top: 150px;

  .return-intro {
    h1 {
      margin: 0 0 7px;
      font-size: 25px;
      line-height: 1;
      color: #1f2123;
    }
    .subtitle {
      margin: 0 0 16px;
      font-size: 15px;
      line-height: 1;
      color: #737982;
      display: block;
    }
  }
  .return-steps {
    margin-bottom: 50px;
    h2 {
      margin: 40px 0;
      font-size: 24px;
      font-weight: bold;
      color: #1f2123;
    }
    .step {
      position: relative;
      min-height: 101px;
      text-align: center;
      color: #72818d;
      font-size: 12px;
      margin-bottom: 10px;
      line-height: 18px;
      &:first-of-type::before {
        content: unset;
      }
      &:last-of-type::after {
        content: unset;
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
        border: 0 dashed #dbdde0;
        border-width: 0 0 1px 0;
        width: 50%;
        top: 37px;
        z-index: -1;
      }
      &::before {
        left: 0%;
      }
      &::after {
        right: 0%;
      }

      &__icon {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;
        width: 70px;
        border: 2px solid #92979e;
        border-radius: 50%;
        color: #92979e;
        text-align: center;
        background: #fff;
        svg {
          font-size: 32px;
        }
      }
      &__title {
        margin: 0 0 5px;
        color: #3d464d;
        font-size: 15px;
        font-weight: bold;
      }
      &__text {
        margin-bottom: 5px;
      }
    }
  }
}

@media (min-width: 1024px) {
  main {
    .return-intro {
      h1 {
        margin: 0 -10px 18px 11px;
        font-size: 40px;
        line-height: 48px;
      }
      .subtitle {
        margin: 0 11px 66px;
        font-size: 18px;
        line-height: 30px;
      }
    }
  }
}
@media (min-width: 768px) {
  .return-steps {
    .step {
      padding: 0 16px;
      min-height: 100%;
      margin-bottom: 16px;
      line-height: 20px;
      text-align: center;

      &__icon {
        position: static;
        margin: 0 auto 24px;
        height: 83px;
        width: 83px;
      }
      &__title {
        margin-bottom: 12px;
        font-size: 18px;
      }
      &__text {
        margin-bottom: 10px;
      }
    }
  }
}
</style>