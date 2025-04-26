import React from "react";
import TodoList from "./TodoList";
import EditBar from "./EditBar";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "../utils/todoSlice";
import topIcon from "../assets/topIcon.png";
import Add from "../assets/add.png";

const TodoContent = () => {
  const dispatch = useDispatch();
  const lists = useSelector((store) => store.todo.lists);

  const handleAddList = () => {
    const listName = prompt("Enter list name");
    if (listName && listName.trim() !== "") {
      dispatch(addList(listName));
    }
  };

  return (
    <div className="flex flex-col flex-1 min-h-screen">
      {/* TodoContent header */}
      <div className="flex justify-between items-center border-b-2 border-[#80819158]">
        <h2 className="text-lg p-4">Section</h2>

        <div className="text-xs rounded-lg px-2 m-2 bg-[#191B20] flex justify-evenly items-center">
          <img className="w-4 h-3" src={topIcon} alt="icon" />
          <p className="mx-2">0.2</p>
          <button className="bg-[#A3E3FF] text-[#3772FF] rounded-lg px-2 py-1">
            Tier
          </button>
        </div>
      </div>

      <div className="flex flex-1 gap-4 overflow-hidden">
        {/* TodoContent Lists */}
        <div className="flex  gap-4 p-4 flex-1 min-w-[940px]">
          {/* List Names */}
          {lists.map((list, index) => (
            <TodoList key={index} list={list} index={index} />
          ))}

          {/* Add List Names Handler */}
          <div className="flex items-center justify-between h-[52px] px-3 mr-4 rounded-xl cursor-pointer bg-[#242731] min-w-56">
            <p>Add Todo-List</p>
            <button onClick={handleAddList}>
              <img className="w-5 h-5 m-1" alt="add icon" src={Add} />
            </button>
          </div>
        </div>

        {/* Edit Section */}
        <div className="flex min-w-[220px]">
          <EditBar />
        </div>
      </div>
    </div>
  );
};

export default TodoContent;