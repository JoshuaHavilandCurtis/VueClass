const app = Vue.createApp({
  data() {
    return {
      taskinput: "",
      tasks: [],
      taskListIsVisible: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.taskListIsVisible ? "Hide list" : "Show List";
    },
  },
  methods: {
    addTask: function () {
      this.tasks.push(this.taskinput);
    },
    toggleTaskList: function () {
      this.taskListIsVisible = !this.taskListIsVisible;
    },
  },
});

app.mount("#assignment");
