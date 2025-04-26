import React from "react";
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import { useDispatch } from "react-redux";
import { deleteTodo, selectTodo } from "../utils/todoSlice";

const TodoCard = ({ todo, listIndex }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(selectTodo({ ...todo, listIndex }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ listIndex, todoId: todo.id }));
  };

  return (
    <div className="overflow-hidden pt-3 w-56 px-2 bg-[#242731] text-[#808191]  rounded-xl h-28 my-2">
      <div className="flex justify-between">
        <h3 className="text-lg px-2 bg-[#242731] w-36 font-semibold overflow-hidden">
          {todo.title}
        </h3>

        <div className="flex">
          <button className="cursor-pointer" onClick={handleEdit}>
            <img className="w-5 h-5 m-1" alt="edit icon" src={Edit} />
          </button>
          <button className="cursor-pointer" onClick={handleDelete}>
            <img className="w-5 h-5 m-1" alt="delete icon" src={Delete} />
          </button>
        </div>

      </div>
      <p className="bg-[#242731] mt-2 px-2 w-44 pb-2 overflow-hidden line-clamp-2">{todo.description}</p>
    </div>
  );
};

export default TodoCard;
