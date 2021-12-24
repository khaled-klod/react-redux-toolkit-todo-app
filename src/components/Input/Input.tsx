import "./Input.css"
import React from 'react'
import ControlButton, { ButtonType } from "../ControlButtons/ControlButton";
import { useRef } from "react";
import { add, Todo, TodoStatus } from "../../redux/todoSlice";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";


function Input() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();


  const handleAddTodo = () => {
    if (inputRef.current.value) {
      const newTodo: Todo = {
        id: uuidv4(),
        title: inputRef.current.value,
        status: TodoStatus.Active,
        createdAt: new Date().toJSON(),
      };
      dispatch(add(newTodo));
      inputRef.current.value = "";
    }
  };

    return (
        <div
        className='InputContainer'
      >
        <input
          ref={inputRef}
          type="text"
          className='Input'
        />
        <ControlButton type={ButtonType.Add} onClick={handleAddTodo} className="AddButton" />
      </div>
    )
}

export default Input
