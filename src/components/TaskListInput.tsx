import { useState, useRef, useEffect } from "react";

interface Props {
  callBack: (item: string) => void;
}

const TaskListInput = ({ callBack }: Props) => {
  const [message, setMessage] = useState("");
  const [click, updateClick] = useState(true);

  useEffect(() => {
    document.addEventListener("click", inputClicked, true);
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);

  const inputClicked = (e: any) => {
    if (inputRef.current != null) {
      if (!inputRef.current.contains(e.target)) {
        updateClick(true);
      } else {
        updateClick(false);
      }
    }
  };

  return (
    <>
      <div>
        <div>
          <input
            title="Press Enter to submit"
            id="taskInput"
            type="text"
            className="form-control"
            //   onChange={(event) => {
            //     changeInput(event.target.value);
            //     // console.log(event.target.value);
            //   }}
            value={message}
            onChange={(e) => {
              setMessage((e.target as HTMLInputElement).value);
            }}
            onKeyDown={(event) => {
              if (
                event.key == "Enter" &&
                (event.target as HTMLInputElement).value.trim() != ""
              ) {
                console.log((event.target as HTMLInputElement).value);
                callBack((event.target as HTMLInputElement).value);
                setMessage("");
                
              }
            }}
            placeholder={click ? "Enter here" : "Press Enter to submit"}
            ref={inputRef}

            // onChange={(event)=>{callBack((event.target as HTMLInputElement).value)}}
          ></input>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default TaskListInput;
