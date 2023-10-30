import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskListInput from "./components/TaskListInput";

function App() {
  const [tasks, updatedTask] = useState<string[]>(
    JSON.parse(localStorage.getItem("Pending Task") || "[]")
  );

  const [completedTask, updateCompletedTask] = useState<string[]>(
    JSON.parse(localStorage.getItem("Completed Task") || "[]")
  );

  const addTask = (task: string) => {
    let temp = JSON.parse(localStorage.getItem("Pending Task") || "[]");
    temp.push(task);
    localStorage.setItem("Pending Task", JSON.stringify(temp));
    console.log(
      "json parse",
      JSON.parse(localStorage.getItem("Pending Task") || "[]")
    );
    updatedTask([...tasks, task]);
    console.log("Task is: ", tasks);
  };

  const delTask = (item: string, num: number) => {
    const tempArr1 = tasks;
    const tempArr2 = tasks;
    console.log(item);
    updatedTask([...tempArr1.slice(0, num), ...tempArr2.slice(num + 1)]);
    console.log("Task is:", tasks);
    let temp = JSON.parse(localStorage.getItem("Pending Task") || "[]");
    temp.splice(num, 1);
    localStorage.setItem("Pending Task", JSON.stringify(temp));
  };

  const addCompleteTask = (task: string) => {
    let temp = JSON.parse(localStorage.getItem("Completed Task") || "[]");
    temp.push(task);
    localStorage.setItem("Completed Task", JSON.stringify(temp));
    updateCompletedTask([...completedTask, task]);
    console.log("Completed task is: ", tasks);
  };

  const delCompleteTask = (num: number) => {
    const tempArr1 = completedTask;
    const tempArr2 = completedTask;
    updateCompletedTask([
      ...tempArr1.slice(0, num),
      ...tempArr2.slice(num + 1),
    ]);
    let temp = JSON.parse(localStorage.getItem("Completed Task") || "[]");
    temp.splice(num, 1);
    localStorage.setItem("Completed Task", JSON.stringify(temp));
  };

  const clearAll = () => {
    localStorage.clear();
    updatedTask([]);
    updateCompletedTask([]);
    console.log("Cleared");
  };

  return (
    <div>
      <div className="">
        <div className="row">
          <div className="col-auto me-auto">
            <div className="display-1">a To Do list</div>
          </div>

          <div className="col-auto mt-5">
            <div className="mt-3">Created by Rb.</div>
          </div>
        </div>
      </div>
      <hr id="title-line" />
      <div className="container">
        <TaskListInput callBack={addTask} />
      </div>
      <TaskList
        items={tasks}
        setItems={delTask}
        callback={addCompleteTask}
        completedTask={completedTask}
        delCompleteTask={delCompleteTask}
      />
      <button
        className="btn btn-outline-primary"
        id="overlay-clear"
        onClick={() => clearAll()}
      >
        Clear all
      </button>
    </div>
  );
}

export default App;
