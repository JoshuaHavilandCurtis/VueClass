<template>
  <section class="activeuser--container">
    <h2>Username: {{ username }}</h2>
    <h3>Age: {{ userage }}</h3>
  </section>
</template>

<style scoped>
.activeuser--container {
  border-bottom: solid 1px red;
  color: black;
  margin-top: 20px;
}
</style>

<script>
export default {
  props: ["username", "userage"],
};
</script>
