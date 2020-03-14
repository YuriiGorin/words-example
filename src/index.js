import Test from "./classes/Test";
import Service from "./classes/Service";
import UIController from "./classes/UIController";

window.test = new Test({
    service: new Service("./data.json"),
    ui: new UIController(),
});

// const taskData = [
//     { type: "translate", question: "кот", answer: "cat" },
//     { type: "phrase", question: "I have a cat" },
//     { type: "word", question: "apple" },
// ];
//
// const tasks = taskData.map(Task.create);
// window.tasks = tasks;

// window.currentTask = new TranslateTask({ question: "кот", answer: "cat" });
