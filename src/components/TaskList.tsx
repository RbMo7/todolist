import { useState } from "react";

interface Props {
  items: string[];
  setItems: (item: string, num: number) => void;
  callback: (item: string) => void;
  completedTask: string[];
  delCompleteTask: (num: number) => void;
}

const TaskList = ({
  items,
  setItems,
  callback,
  completedTask,
  delCompleteTask,
}: Props) => {
  const [isClicked, statusClicked] = useState(true);

  const deleteItem = (item: string, num: number) => {
    if (item != "") {
      callback(item);
    }
    setItems(item, num);
  };

  const deleteTask = (num: number) => {
    delCompleteTask(num);
  };

  return (
    <>
      <div className="container text-center pt-2 pb-2">
        <div className="row">
          <div className="col-sm-auto">
            <button
              className={
                isClicked ? "btn btn-outline-primary btn-sm" : "btn btn-sm"
              }
              onClick={() => {
                statusClicked(true);
              }}
            >
              Pending
            </button>
            {/* </div> */}
            {/* <div className="col-sm-auto"> */}
            <button
              className={
                isClicked
                  ? "btn btn-sm pl-auto pl-md-0"
                  : "btn btn-outline-primary btn-sm pl-auto"
              }
              onClick={() => statusClicked(false)}
            >
              Completed
            </button>
          </div>
          <div className="col-10 text-end">
            {isClicked ? "Task Pending: " : "Task Completed: "}
            {isClicked ? items.length : completedTask.length}
          </div>
        </div>
      </div>

      {isClicked ? (
        <div>
          <ul className="list-group">
            {items.map((item, num) => {
              // console.log(num, item);
              return (
                <li className="list-group-item " key={num}>
                  <button className="btn" onClick={() => deleteItem(item, num)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg>
                  </button>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>
          <ul className="list-group">
            {completedTask.map((item, num) => {
              // console.log(num, item);
              return (
                <li className="list-group-item " key={num}>
                  <button className="btn" onClick={() => deleteTask(num)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />{" "}
                    </svg>
                  </button>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default TaskList;
