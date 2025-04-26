import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveTodo } from "../utils/todoSlice";

const EditBar = () => {
  const dispatch = useDispatch();
  const selectedTodo = useSelector(store => store.todo.selectedTodo)

    const[title, setTitle]= useState("")
    const[description,setDescription] = useState("")

    useEffect(()=> {
        if(selectedTodo){
            setTitle(selectedTodo.title)
            setDescription(selectedTodo.description)
        }
    },[selectedTodo])

    const handleSave = () =>{
        if (selectedTodo){
          dispatch(saveTodo({
            listIndex: selectedTodo.listIndex,
            id: selectedTodo.id,
            newTitle: title,
            newDescription: description,
          }))
          setDescription("Todo Description")
          setTitle("Title")
        }
    }


  return (
    <div className=" px-4 pt-4 min-h-[calc(100vh-110px)]  border-l-2 border-[#80819158] flex flex-col">
      <h3 className="mb-2">Edit Todo</h3>
      <input
        className="rounded-md p-2 text-xl text-[#A6A6A6] w-full bg-[#242731]  font-semibold"
        type="text"
        value={selectedTodo ? title : "Title"}
        onChange={(e)=> setTitle(e.target.value)}
        disabled= {!selectedTodo}
      />
      <textarea
        className="bg-[#242731] resize-none text-[#808191] rounded-md my-2 p-3 "
        value={selectedTodo ? description : "Todo Description"}
        onChange={(e)=> setDescription(e.target.value)}
        disabled={!selectedTodo}
      />
      <button className="bg-[#3772FF] p-1 rounded-md" onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditBar;
