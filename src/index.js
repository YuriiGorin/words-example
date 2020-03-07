import Test from "./classes/Test";
import { Task } from "./classes/Task";
import Service from "./classes/Service";

window.addEventListener("load", () => {
    const app = new Test();
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
