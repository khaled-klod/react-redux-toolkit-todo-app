import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Todo, TodoStatus } from "../../redux/todoSlice";
import Card from "../Card/Card";
import FilterButton, { Filter } from "../FilterButton/FilterButton";
import "./DisplayTodos.css";

const filterActiveTodos = (allTodos: Todo[]) => {
  return allTodos.filter((todo) => {
    return todo.status === TodoStatus.Active;
  });
};

const filterCompletedTodos = (allTodos: Todo[]) => {
  return allTodos.filter((todo) => {
    return todo.status === TodoStatus.Completed;
  });
};
const selectAllTodos = (state: RootState) => {
  return state;
};

function DisplayTodos() {
  const allTodos = useSelector(selectAllTodos);

  const [todos, setTodos] = useState(allTodos);
  const [filter, setFilter] = useState(Filter.All);

  useEffect(() => {
    switch (filter) {
      case Filter.Completed:
        setTodos(filterCompletedTodos(allTodos));
        return;

      case Filter.Active:
        setTodos(filterActiveTodos(allTodos));
        return;

      case Filter.All:
      default:
        setTodos(allTodos);
        return;
    }
  }, [allTodos, filter]);

  const filterTodos = (filterType: Filter) => {
    setFilter(filterType);
  };

  return (
    <div className="DisplayTodos">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="FilterButtons">
          <FilterButton filter={Filter.Active} onFilter={filterTodos} />
          <FilterButton filter={Filter.Completed} onFilter={filterTodos} />
          <FilterButton filter={Filter.All} onFilter={filterTodos} />
        </div>
      </div>
      <ul
        style={{
          alignSelf: "center",
          display: "flex",
          listStyle: "none",
        }}
      >
        {todos.map((todo) => {
          return (
            <Card
              key={todo.id}
              todoId={todo.id}
              todoTitle={todo.title}
              status={todo.status}
              filter={filter}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default DisplayTodos;
