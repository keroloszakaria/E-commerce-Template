<template>
  <section class="banners">
    <div class="container">
      <div class="banners__grid">
        <div class="banners__item--1">
          <div class="banners__image">
            <img class="w-100" src="../assets/banners/banner-1.jpg" alt="" />
          </div>
          <div class="banners__content">
            <h2 class="banner__heading">
              <span>New arrivals</span>
              <span>are now in!</span>
            </h2>
            <a href="#" class="btn-bg banner__link">SHOW COLLECTION</a>
          </div>
        </div>
        <div class="banners__item--2">
          <div class="banners__image">
            <img class="w-100" src="../assets/banners/banner-2.jpg" alt="" />
          </div>
          <div class="banners__content">
            <h2 class="banner__heading">
              <span>Basic t-shirts</span>
              <span>$29,99</span>
            </h2>
            <a href="#" class="btn-bg banner__link">MORE DETAILS</a>
          </div>
        </div>
        <div class="banners__item--3">
          <div class="banners__image">
            <img class="w-100" src="../assets/banners/banner-3.jpg" alt="" />
          </div>
          <div class="banners__content">
            <div class="banner__discount">
              <span>-50 %</span>
            </div>
            <h2 class="banner__heading">
              <span>Sale this</span>
              <span>Winter</span>
            </h2>
            <a href="#" class="btn-bg banner__link">VIEW ALL</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banners {
  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 30px;
    margin-bottom: 30px;
    > div {
      position: relative;
    }
  }
  &__item {
    &--1 {
      grid-area: 1 / 1 / 2 / 3;
    }
    &--2 {
      grid-area: 1 / 3 / 2 / 4;
    }
    &--3 {
      grid-area: 1 / 4 / 2 / 5;
    }
  }

  &__image {
    height: 100%;
    img {
      height: 100%;
      object-fit: cover;
    }
  }
  &__content {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    top: 50%;
    left: 0;
    padding: 50px 30px;
    transform: translateY(-50%);

    .banner__discount {
      background-color: #ff0000;
      border-radius: 15px;
      width: 55px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      span {
        font-size: 12px;
        font-weight: 600;
        color: #ffffff;
      }
    }

    .banner__heading {
      font-size: 25px;
      margin-bottom: 25px;
      color: #ffffff;
      span {
        display: block;
        text-shadow: 1px 1px 2px #333;
      }
    }
  }
}
</style>