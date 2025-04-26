import React from "react";
import AddTodoCard from "./AddTodoCard";
import { useDispatch } from "react-redux";
import { deleteList } from "../utils/todoSlice";
import TodoCard from "./TodoCard";
import Delete from "../assets/delete.png";

const TodoList = ({ list, index }) => {
  const dispatch = useDispatch();

  const handleDeleteList = () => {
    dispatch(deleteList(index));
  };

  return (
    <div className="flex flex-col w-56">
      <div className="flex items-center justify-between py-3 px-2 rounded-xl bg-[#242731] w-56">
        <p>List : {list.name}</p>
        <button onClick={handleDeleteList}>
          <img className="w-5 h-5 m-1" alt="delete icon" src={Delete} />
        </button>
      </div>

      <AddTodoCard listIndex={index} />

      {list.todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} listIndex={index} />
      ))}
    </div>
  );
};

export default TodoList;