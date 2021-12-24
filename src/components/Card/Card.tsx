import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Card.css";
import { useDispatch } from "react-redux";
import { complete, edit, remove, TodoStatus } from "../../redux/todoSlice";
import ControlButton, {
  ButtonColor,
  ButtonType,
} from "../ControlButtons/ControlButton";
import { Filter } from "../FilterButton/FilterButton";

function Card({ todoId, todoTitle, status, filter }) {
  const textRef = useRef(null);
  const dispatch = useDispatch();
  const toggleEditTodo = () => {
    textRef.current.disabled = false;
    textRef.current.focus();
  };

  const handleEditTodo = (event) => {
    if (event.key === "Enter") {
      dispatch(
        edit({
          id: todoId,
          newTitle: textRef.current.value,
        })
      );
      textRef.current.disabled = true;
    }
  };

  const handleRemoveTodo = () => {
    dispatch(remove(todoId));
  };

  const handleCompleteTodo = () => {
    dispatch(complete(todoId));
  };

  useEffect(() => {
    if (textRef.current) {
      textRef.current.disabled = true;
    }
  }, []);

  return (
    <motion.li
      initial={{ x: "100%" }}
      animate={{ x: "0vw" }}
      exit={{ opacity: '0' }}
      style={{ transform: 'opacity' }}
      key={todoId}
      className="Card"
    >
      <textarea
        onKeyDown={handleEditTodo}
        ref={textRef}
        disabled={textRef.current}
        className="TextArea"
        defaultValue={todoTitle}
      />
      <div className="CrudButtons">
        <ControlButton
          type={ButtonType.Edit}
          color={ButtonColor.None}
          onClick={toggleEditTodo}
        />
        {filter !== Filter.All && (
          <ControlButton
            type={ButtonType.Complete}
            color={ButtonColor.Green}
            onClick={handleCompleteTodo}
          />
        )}
        <ControlButton
          type={ButtonType.Remove}
          color={ButtonColor.Red}
          onClick={handleRemoveTodo}
        />
      </div>
      {status === TodoStatus.Completed && (
        <span className="Completed">done</span>
      )}
    </motion.li>
  );
}

export default Card;
