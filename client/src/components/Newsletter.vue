<template>
  <section>
    <div class="container">
      <div class="newsletter">
        <div class="row">
          <div class="col-lg-6">
            <h2>
              Subscribe to our newsletter andreceive exclusive offers every week
            </h2>
          </div>
          <div class="col-lg-6">
            <form class="subscribe" action="#">
              <input
                class="form-control"
                type="text"
                placeholder="Enter your e-mail"
              />
              <input class="btn btn-sec" type="submit" value="SUBSCRIBE" />
            </form>
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
.newsletter {
  background-image: url("../assets/Newspaper.jpg");
  background-position: 100% 100%;
  background-size: cover;
  height: 242px;
  display: flex;
  align-items: center;
  padding: 0 40px;

  h2 {
    font-size: 29px;
    color: #ffffff;
    margin-bottom: 0;
    text-shadow: 1px 1px 2px #333;
  }
  .subscribe {
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .form-control {
      background-color: #ffffff;
      border-radius: 24px;
      max-width: 315px;
      height: 48px;
      overflow: hidden;
      font-size: 13px;
      color: #ababab;
      padding: 14px 20px 14px 35px;
      border: none;
      box-shadow: none;
    }
  }
}
</style>