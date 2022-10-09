<template>
  <form @submit.prevent="formSubmit" class="userdata--form">
    <input v-model="users.username" type="text" placeholder="Your Username" />
    <input v-model="users.age" type="number" placeholder="Your Age" />
    <button type="submit">Add UserData</button>
  </form>
</template>

<style scoped>
.userdata--form {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.userdata--form button {
  background-color: red;
  border: none;
  color: white;
  padding: 10px;
}
.userdata--form input {
  padding: 10px;
}
</style>

<script>
export default {
  data() {
    return {
      users: [
        {
          username: "",
          age: "",
        },
      ],
    };
  },
  emits: ["userdata"],
  methods: {
    formSubmit() {
      this.$emit("userdata", this.users.username, this.users.age);
    },
  },
};
</script>
