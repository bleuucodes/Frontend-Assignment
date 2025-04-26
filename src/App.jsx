import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import TodoContent from "./components/TodoContent";

const App = () => {
  return (
    <div className="bg-black  text-white h-screen font-poppins ">
      <Header />

      <div className="flex pt-8 overflow-x-auto h-full">
        <div className="flex min-w-max">
          <Sidebar />
          <TodoContent />
        </div>
      </div>
    </div>
  );
};

export default App;
