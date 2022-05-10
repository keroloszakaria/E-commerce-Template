<template>
  <main>
    <section class="section-head">
      <div class="container">
        <h1 class="section-head__title">Shipping</h1>
        <p class="section-head__description">
          Get information on delivery schedules and shipping charges.
        </p>
      </div>
    </section>
    <section class="shipping-intro">
      <div class="container">
        <div class="head">
          <strong>Delivery Charges</strong>
          <p>
            Your delivery charges will depend on the products you order. These
            charges will be displayed during the checkout process.
          </p>
        </div>
        <strong>Here’s how your shipping charges will work:</strong>
        <div class="table-responsive">
          <table class="table table-bordered" border="1" bordercolor="#D3D3D3">
            <tbody>
              <tr>
                <th><strong>Shipping Type</strong></th>
                <th><strong>Order Value</strong></th>
                <th><strong>Shipping Charge</strong></th>
                <th><strong>Cash on Delivery</strong></th>
              </tr>
              <tr>
                <td rowspan="2">Standard delivery</td>
                <td>Less than EGP 399</td>
                <td>EGP 25</td>
                <td>EGP 20</td>
              </tr>
              <tr>
                <td>EGP 399 or more</td>
                <td>Free</td>
                <td>EGP 20</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Orders placed before 3:30 PM from Saturday to Thursday will be
          delivered the next business day, while orders placed after 3:30 PM
          (and all day Friday) will be delivered in 2-3 business days.
        </p>
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

  .shipping-intro {
    margin-bottom: 40px;
    .head {
      margin-bottom: 30px;
    }
    strong {
      font-size: 15px;
    }
    p {
      font-size: 14px;
    }
    table {
      margin-top: 0.5rem;
      td,
      th {
        padding-left: 10px !important;
        padding: 10px !important;
        vertical-align: middle !important;
        height: 40px;
        width: 200px !important;
        font-size: 15px;
        strong {
          font-weight: 600;
        }
      }
    }
  }
}
</style>