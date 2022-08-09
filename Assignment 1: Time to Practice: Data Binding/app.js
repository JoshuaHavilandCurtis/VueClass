const app = Vue.createApp({
  data() {
    return {
      name: "Josh",
      age: 25,
      img: "https://iso.500px.com/wp-content/uploads/2015/03/business_cover.jpeg",
    };
  },
  methods: {
    agein5years: function () {
      return this.age + 5;
    },
    favoriteNumber: function () {
      return Math.random();
    },
  },
});

app.mount("#assignment");
