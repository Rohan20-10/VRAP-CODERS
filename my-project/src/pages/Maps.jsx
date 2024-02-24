import React from "react";
import Menu from "../components/Menu";
import { useState } from "react";

// const []
export const Maps = () => {
  return (
    <div className="maps">
        {/* <h1 className="text-white">Maps</h1> */}
        <div className="flex bg-white w-screen h-screen">
          <div className="bg-red-500">
            <h1 className="text-black">Maps</h1>
          </div>
          <div className="text-black bg-yellow-400">
            Map will be here
          </div>
        </div>

        <input placeholder="Search Maps" />
        {/* <button onClick={}>⌕</button> */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <button> <span class="material-symbols-outlined p-0">
directions
</span> </button>
        {/* <img src="https://cdn-icons-png.flaticon.com/512/61/61021.png" alt="Nothing"/> */}
        
        
        <Menu/>
    
    </div>
  );
};
