import "./App.css";
import DisplayTodos from "./DisplayTodos/DisplayTodos";
import Input from "./Input/Input";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "3rem",
      }}
    >
      <h1
        style={{
          display: "inline",
          textAlign: "center",
          marginBottom: "2rem",
          color: "#e1ebfd",
          textShadow: "0 0 5px #433aa8, 3px -1px 5px #271c6c",
        }}
      >
        Todo App
      </h1>

      <Input />
      <DisplayTodos />
    </div>
  );
}

export default App;
