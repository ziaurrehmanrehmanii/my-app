
import MainContext from "../Context/MainContext";
import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";


export default function Main() {
  const [formData, setFormData] = useState({ userName: '', password: '' });
  const [todoList, setTodoList] = useState([]);
  const { state, setState } = useContext(MainContext);
  

  const handleSubmit = () => {
      setState([...state, formData]);
    };
    
  

  return (
    <>
      <input
        type="text"
        name=""
        className="border border-gray-300 rounded-md p-2 mb-2"
        onChange={(e) => {
          setFormData({ ...formData, userName: e.target.value });
        }}
          />
          


      <input
        type="text"
        name=""
        className="border border-gray-300 rounded-md p-2 mb-2"
        onChange={(e) => {
          setFormData({ ...formData,   password: e.target.value });
        }}
          />
          


      <button
        type="button"
        className="border border-cyan-400 bg-yellow-950 text-white rounded-md p-2"
        onClick={handleSubmit}
      >
        ADD ToDo
          </button>
          
      <button
        type="button"
        className="border border-cyan-400 bg-yellow-950 text-white rounded-md p-2"
        
      >
        <Link to="/name">Go to Name</Link>
          </button>



      
    </>
  );
}