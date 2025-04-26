import React from "react";
import AddTodoCard from "./AddTodoCard";
import { useDispatch, useSelector } from "react-redux";
import { deleteList } from "../utils/todoSlice";
import TodoCard from "./TodoCard";
import Delete from "../assets/delete.png";

const TodoList = () => {
  const dispatch = useDispatch();
  const lists = useSelector((store) => store.todo.lists);

  const handleDeleteList = (index) => {
    dispatch(deleteList(index));
  };

  return (
    <div className="m-4 flex gap-4">
      {lists.map((list, index) => (
        <div key={index}>
          
          <div className="flex items-center justify-between py-3 px-2 rounded-xl bg-[#242731] w-56">
            <p>List : {list.name}</p>
            <button onClick={() => handleDeleteList(index)}>
              <img className="w-5 h-5 m-1 " alt="delete icon" src={Delete} />
            </button>
          </div>

          <AddTodoCard listIndex={index} />

          {/* mapping on todoitems */}

          {list.todos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} listIndex={index} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
