<template>
  <section class="slider">
    <div id="sliderIntro" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <span>01</span>
        <button
          type="button"
          data-bs-target="#sliderIntro"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#sliderIntro"
          data-bs-slide-to="1"
          aria-current="true"
          aria-label="Slide 2"
        ></button>
        <span>02</span>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/slider/slider-1.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5 class="animate__animated animate__backInDown">
              Sale of the
              <br />
              summer
              <br />
              collection
            </h5>
            <a class="link animate__animated animate__backInLeft" href="/">
              <span class="link__icon">
                <i class="fa fa-arrow-right"></i>
              </span>
              <span class="link__text">SHOP NOW</span>
            </a>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/slider/slider-2.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5 class="animate__animated animate__backInDown">
              Sale of the
              <br />
              summer
              <br />
              collection
            </h5>
            <a class="link animate__animated animate__backInLeft" href="/">
              <span class="link__icon">
                <i class="fa fa-arrow-right"></i>
              </span>
              <span class="link__text">SHOP NOW</span>
            </a>
          </div>
        </div>
      </div>
      <div class="carousel-control">
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#sliderIntro"
          data-bs-slide="prev"
        >
          <i class="fa fa-arrow-left carousel-control-prev-icon"></i>
          <!-- <span class="" aria-hidden="true"></span> -->
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#sliderIntro"
          data-bs-slide="next"
        >
          <i class="fa fa-arrow-right carousel-control-next-icon"></i>

          <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span> -->
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div class="features">
      <div class="feature">
        <div class="feature__icon">
          <img src="../assets/slider-icons/trunch.svg" alt="" srcset="" />
        </div>
        <div class="feature__content">
          <h3 class="feature__title">Free shipping</h3>
          <p class="feature__text">On purchases over $199</p>
        </div>
      </div>
      <div class="feature">
        <div class="feature__icon">
          <img src="../assets/slider-icons/happy.svg" alt="" srcset="" />
        </div>
        <div class="feature__content">
          <h3 class="feature__title">99% Satisfied Customers</h3>
          <p class="feature__text">
            Our clients' opinions speak for themselves
          </p>
        </div>
      </div>
      <div class="feature">
        <div class="feature__icon">
          <img src="../assets/slider-icons/guarantee.svg" alt="" srcset="" />
        </div>
        <div class="feature__content">
          <h3 class="feature__title">Originality Guaranteed</h3>
          <p class="feature__text">
            30 days warranty for each product from our store
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import "animate.css";

export default {
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  height: 100vh;
}
.carousel {
  height: 100%;
  &-indicators {
    width: fit-content;
    flex-direction: column;
    margin: unset;
    left: 10%;
    height: 100%;
    max-height: 353px;
    top: 50%;
    transform: translateY(-50%);
    span {
      font-size: 12px;
      font-weight: 600;
      color: #ffffff;
      margin: 10px 0;
    }
    button {
      width: 2px;
      height: 123px;
      border: none;
      margin: 0 auto;
    }
  }
  &-inner {
    height: 100%;
  }

  &-item {
    height: 100%;

    img {
      height: 100%;
      object-fit: cover;
    }
  }
  &-caption {
    top: 50%;
    bottom: unset;
    transform: translateY(-50%);
    h5 {
      text-align: left;
      font-size: var(--biggest-font-size);
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 40px;
    }

    .link {
      display: flex;
      align-items: center;
      text-decoration: none;
      width: fit-content;
      &__icon {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--slider-icon);
        border-radius: 50%;
        border: 1px solid var(--slider-icon);
        width: 38px;
        height: 38px;
        margin-right: 20px;
        color: #ffffff;
      }
      &__text {
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 1.04px;
        color: #ffffff;
      }
    }
  }
  &-control {
    position: absolute;
    bottom: 5%;
    right: 5%;
    width: 161px;
    height: 72px;
    &-prev,
    &-next {
      background-color: rgba(255, 255, 255, 0.12);
      width: 72px;
      height: 72px;
      opacity: 1;
      transition: 0.4s;
      &-icon {
        color: #ffffff;
        width: 25px;
        height: 22px;
        background-image: none;
        transition: 0.4s;
      }
      &:hover {
        background-color: #ffffff;
        * {
          color: #000;
        }
      }
    }
  }
}

.features {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 80%;
  height: 110px;
  background: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 91;
  padding-left: 10%;
  padding-right: 30px;
  border-radius: 0 80px 0 0;
  .feature {
    display: flex;
    width: 33%;
    &__icon {
      background-color: #fff3df;
      border-radius: 10px;
      width: 39px;
      height: 39px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__content {
      padding: 0 20px;
      h3 {
        font-size: 16px;
        font-weight: 600;
        color: #000000;
        margin-bottom: 9px;
      }
      p {
        font-size: 12px;
        font-weight: 400;
        line-height: 1.5;
        color: #a8a8a8;
        margin-bottom: 0;
      }
    }
  }
}
</style>