<template>
  <main>
    <section class="page_404">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="four_zero_four_bg">
              <h1 class="text-center">404</h1>
            </div>
            <div class="contant_box_404">
              <h3 class="h2">Look like you're lost</h3>
              <p>the page you are looking for not avaible!</p>
              <router-link class="link_404" to="/"> Go to Home </router-link>
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
<style scoped lang="scss">
.page_404 {
  padding: 90px 0 40px;
  background: #fff;
}

.page_404 img {
  width: 100%;
}

.four_zero_four_bg {
  background-image: url("../assets/Notfound.gif");
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
}

.four_zero_four_bg h1 {
  font-size: 80px;
}

.four_zero_four_bg h3 {
  font-size: 80px;
}

.link_404 {
  color: #fff !important;
  padding: 10px 20px;
  background: var(--copyright_link);
  margin: 20px 0;
  display: inline-block;
  font-weight: bold;
  border: 2px solid var(--copyright_link);
  transition: 0.3s ease-in-out;
  border-radius: 4px;
  text-transform: uppercase;
  text-decoration: none;
}
.link_404:hover {
  text-decoration: none;
  border-color: var(--copyright_link);
  background: transparent;
  color: var(--copyright_link) !important;
}
.contant_box_404 {
  margin-top: -50px;
}
</style>