import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import TodoContent from "./components/TodoContent";

const App = () => {

    return (
      <div className="bg-black text-white h-screen font-poppins flex flex-col">
        <Header />
        <div className="flex flex-1 pt-8 overflow-hidden">
          <Sidebar className="w-64 flex-shrink-0" /> 
          <TodoContent  /> 
        </div>
      </div>
    );
};

export default App;
