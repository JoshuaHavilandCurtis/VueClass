<template>
  <section>
    <user-data @userdata="handleUserData"></user-data>
    <active-user :username="user.name" :userage="user.age"></active-user>
  </section>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";

export default {
  components: { ActiveUser, UserData },
  data() {
    return {
      user: {
        name: "Joshua Curtis",
        age: 25,
      },
    };
  },
  methods: {
    handleUserData(username, userage) {
      this.user = {
        name: username,
        age: userage,
      };
    },
  },
};
</script>
