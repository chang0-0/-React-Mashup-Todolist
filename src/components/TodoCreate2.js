import React, { useState } from "react";
import cn from "classnames";
import "../styles/TodoCreate2.scss";
import { MdAdd } from "react-icons/md";

const TodoCreate2 = () => {
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);

  return (
    <div className={cn("TodoCreate2")}>
      {open && (
        <div className={cn("InsertFormPositioner")}>
          <form className={cn("InsetForm")}>
            <input
              className={cn("Input")}
              placeholder="할 일을 입력 후, Enter 를 누르세요"
            />
          </form>
        </div>
      )}
      <button
        className={cn("CircleButton", { open })}
        onClick={onToggle}
        open={open}
      >
        <MdAdd />
      </button>
    </div>
  );
};

export default TodoCreate2;
