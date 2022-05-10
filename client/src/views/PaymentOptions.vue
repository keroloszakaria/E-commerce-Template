<template>
  <main>
    <section class="section-head">
      <div class="container">
        <h1 class="section-head__title">Payment Options</h1>
        <p class="section-head__description">Start Accepting Payments Online</p>
      </div>
    </section>

    <section class="payments">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 payment">
            <div class="payment__head">
              <i class="fa-solid fa-credit-card me-2"></i>
              Credit and Debit Cards
            </div>
            <div class="payment__methods">
              <img
                class="w-100"
                src="@/assets/payment-methods/master-card.png"
                alt=""
              />
              <img
                class="w-100"
                src="@/assets/payment-methods/visa.png"
                alt=""
              />
              <img
                class="w-100"
                src="@/assets/payment-methods/Meeza.png"
                alt=""
              />
            </div>
          </div>
          <div class="col-lg-6 payment">
            <div class="payment__head">
              <i class="fa-solid fa-wallet me-2"></i>
              Mobile Wallets
            </div>
            <div class="payment__methods">
              <img
                class="w-100"
                src="@/assets/payment-methods/voda.png"
                alt=""
              />
              <img
                class="w-100"
                src="@/assets/payment-methods/orange.png"
                alt=""
              />
              <img
                class="w-100"
                src="@/assets/payment-methods/etisalat.png"
                alt=""
              />
              <img
                class="w-100"
                src="@/assets/payment-methods/phonecash.png"
                alt=""
              />
              <img
                class="w-100"
                src="@/assets/payment-methods/qahera.png"
                alt=""
              />
              <img
                class="w-100"
                src="@/assets/payment-methods/CIB.png"
                alt=""
              />
              <img
                class="w-100"
                src="@/assets/payment-methods/Ahly.png"
                alt=""
              />
            </div>
          </div>
          <div class="col-lg-6 payment">
            <div class="payment__head">
              <i class="fa-solid fa-layer-group me-2"></i> Installments
            </div>
            <div class="payment__methods">
              <img
                class="w-100"
                src="@/assets/payment-methods/cairo bank.png"
                alt=""
              />
              <img
                class="w-100"
                src="@/assets/payment-methods/mashreq.png"
                alt=""
              />
              <img
                class="w-100"
                src="@/assets/payment-methods/misr bank.png"
                alt=""
              />
              <img
                class="w-100"
                src="@/assets/payment-methods/premium.png"
                alt=""
              />
              <img
                class="w-100"
                src="@/assets/payment-methods/sohoula.png"
                alt=""
              />
              <img
                class="w-100"
                src="@/assets/payment-methods/valu.png"
                alt=""
              />
            </div>
          </div>
          <div class="col-lg-6 payment">
            <div class="payment__head">
              <i class="fa-solid fa-store me-2"></i> Kiosk Payments
            </div>
            <div class="payment__methods">
              <img
                class="w-100"
                src="@/assets/payment-methods/mmkn.png"
                alt=""
              />
              <img
                class="w-100"
                src="@/assets/payment-methods/masary.png"
                alt=""
              />
              <img
                class="w-100"
                src="@/assets/payment-methods/aman.png"
                alt=""
              />
            </div>
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
  .payments {
    margin-bottom: 30px;
    .payment {
      margin-bottom: 30px;
      &__head {
        svg {
          font-size: 20px;
          color: var(--slider-icon);
        }
      }
      &__methods {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 15px;
      }
    }
  }
}
</style>