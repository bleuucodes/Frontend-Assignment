import React, {  useState } from "react";
import Add from "../assets/add.png";
import Tick from "../assets/tick.png";
import { useDispatch } from "react-redux";
import { addTodo } from "../utils/todoSlice";

const AddTodoCard = ({ listIndex }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isEditable, setIsEditable] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (isEditable) {
      if (title.trim() === "" && description.trim() === "") {
        alert("Please enter a title or todo description!");
        return;
      }
      dispatch(addTodo({listIndex, todo : {title,description}}))
      setTitle("");
      setDescription("");
      setIsEditable(false);
    } else {
      setIsEditable(true);
    }
  };

  return (
    <div className="pt-3 px-2 bg-[#242731] text-[#808191] w-56 rounded-xl  my-2 ">

      <div className="flex justify-between ">
        <input
          className="text-lg px-2 bg-[#242731] w-36 font-semibold"
          type="text"
          value={title}
          placeholder="Add Todo"
          onChange={(e) => setTitle(e.target.value)}
          disabled={!isEditable}
        />
        <button className="cursor-pointer " onClick={handleClick}>
          <img
            src={isEditable ? Tick : Add}
            alt="add/tick button"
            className="w-6 h-6"
          />
        </button>
      </div>

      <textarea
        className="bg-[#242731] resize-none mt-2 px-2 w-52"
        placeholder="Add Todo Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        disabled={!isEditable}
      />
    </div>
  );
};

export default AddTodoCard;
