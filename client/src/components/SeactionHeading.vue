<template>
  <div :class="['sectoin-heading', { center: center }]">
    <div>
      <h2>{{ title }}</h2>
    </div>
    <a v-if="linkUrl" class="btn-bg" :href="linkUrl">{{ linkText }}</a>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    title: String,
    center: Boolean,
    linkUrl: String,
    linkText: String,
  },
};
</script>

<style lang="scss" scoped>
.sectoin-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
  &.center {
    justify-content: center;
  }
  h2 {
    font-size: 29px;
    font-weight: 300;
  }
}
</style>
