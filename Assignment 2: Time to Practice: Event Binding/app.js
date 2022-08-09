const app = Vue.createApp({
  data() {
    return {
      name: "Josh",
      age: 25,
      img: "https://iso.500px.com/wp-content/uploads/2015/03/business_cover.jpeg",
      keydownval: "",
      keydownenterval: "",
    };
  },
  methods: {
    alert: function () {
      alert("This is an alert message");
    },
    keydown: function (e) {
      const inputval = e.target.value;
      console.log(inputval);
      return (this.keydownval = inputval);
    },
    keydownenter: function (e) {
      const inputvalenter = e.target.value;
      console.log(inputvalenter);
      return (this.keydownenterval = inputvalenter);

      // Or instead of holding the value in a variable I could do:
      // this.keydownenterval = e.target.value;
    },
    agein5years: function () {
      return this.age + 5;
    },
    favoriteNumber: function () {
      return Math.random();
    },
  },
});

app.mount("#assignment");
