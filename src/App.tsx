import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskListInput from "./components/TaskListInput";

function App() {
  const [tasks, updatedTask] = useState<string[]>([]);
  const addTask = (task: string) => {
    updatedTask([...tasks, task]);
    console.log("Task is: ", tasks);
  };

  const delTask = (item: string, num: number) => {
    const tempArr1 = tasks;
    const tempArr2 = tasks;
    console.log(item);
    // console.log(...tasks.splice(0, num));
    // console.log(...tasks.splice(num + 1));
    updatedTask([...tempArr1.slice(0, num), ...tempArr2.slice(num + 1)]);
    console.log("Task is:", tasks);
  };

  return (
    <div>
      <div className="">
        <div className="row">
          <div className="col-auto me-auto">
            <div className="display-1">a To Do list</div>
          </div>

          <div className="col-auto mt-5">
          <div className="mt-3">
          Created by Rb.</div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <TaskListInput callBack={addTask} />
      </div>
      <TaskList items={tasks} setItems={delTask} />
    </div>
  );
}

export default App;
