const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      paragraph: true,
      inputBackgroundColor: "",
    };
  },
  methods: {
    toggle: function () {
      this.paragraph = !this.paragraph;
    },
  },
  computed: {
    userMatch: function () {
      return {
        user1: this.userInput === "user1",
        user2: this.userInput === "user2",
        visible: this.paragraph,
        hidden: !this.paragraph,
      };
    },
  },
});

app.mount("#assignment");
