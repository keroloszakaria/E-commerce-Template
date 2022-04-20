<template>
  <section class="choose-us">
    <div class="container">
      <SeactionHeading title="Why should you choose us?" :center="true" />
      <div class="row">
        <div class="col-lg-3 box">
          <div class="box__icon">
            <img src="../assets/choose/shipping.svg" alt="" />
          </div>
          <h3 class="box__heading">Free Shipping</h3>
          <p class="box__paragraph">
            All purchases over $199 are eligible for free shipping via USPS
            First Class Mail.
          </p>
        </div>
        <div class="col-lg-3 box">
          <div class="box__icon">
            <img src="../assets/choose/easy payment.svg" alt="" />
          </div>
          <h3 class="box__heading">Easy Payments</h3>
          <p class="box__paragraph">
            All payments are processed instantly over a secure payment protocol.
          </p>
        </div>
        <div class="col-lg-3 box">
          <div class="box__icon">
            <img src="../assets/choose/money back.svg" alt="" />
          </div>
          <h3 class="box__heading">Money-Back Guarantee</h3>
          <p class="box__paragraph">
            If an item arrived damaged or you've changed your mind, you can send
            it back for a full refund.
          </p>
        </div>
        <div class="col-lg-3 box">
          <div class="box__icon">
            <img src="../assets/choose/finest.svg" alt="" />
          </div>
          <h3 class="box__heading">Finest Quality</h3>
          <p class="box__paragraph">
            Designed to last, each of our products has been crafted with the
            finest materials.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SeactionHeading from "@/components/SeactionHeading.vue";

export default {
  components: {
    SeactionHeading,
  },
};
</script>

<style lang="scss" scopped>
.box {
  &__icon {
    background-color: #f6f6f6;
    border-radius: 10px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__heading {
    font-size: 16px;
    font-weight: 600;
  }
  &__paragraph {
    font-size: 13px;
    color: #808080;
  }
}
</style>