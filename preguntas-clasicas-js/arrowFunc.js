const bunny = {
  name: "Usagi",
  task: ["transform", "eat cake", "blow kisses"],
  showTasks: function () {
    this.task.forEach((task) => {
      console.log(this.name + " wants to " + task);
    });
  },
};
bunny.showTasks();