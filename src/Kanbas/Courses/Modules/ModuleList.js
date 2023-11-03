import { useParams } from "react-router-dom";
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from 'react';
import Popup from './EditModulePopup';
import { FaFilePen } from 'react-icons/fa6';
import { FaTrash } from 'react-icons/fa';
import {
  deleteModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <ul class="list-group module-list">
        <li class="list-group-item list-group-item-secondary">
          <i class="fa fa-grip-vertical" style={{ marginRight: '5px' }}></i>
          <strong>Assignments</strong>
          <div class="float-end">
            <i class="fa-solid fa-circle-check"></i>
            <i class="fa fa-ellipsis-v"></i>
          </div>
        </li>
    <ul className="list-group">
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">
            
      <Popup isOpen={isOpen} togglePopup={togglePopup} module={module}/>

            
            <i class="fa fa-grip-vertical" style={{ marginRight: '5px' }}></i>
            <div class="float-end">
              <i class="fa-solid fa-circle-check"></i>
              <i class="fa fa-ellipsis-v"></i>
              </div>
             <h3>{module.name}</h3>
             <p>{module.description}</p>
             
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button style={{ background: 'white', border: 'white' }}
               onClick={() => {
                dispatch(setModule(module));
                togglePopup();}}>
              <FaFilePen
                      style={{ color: 'grey', fontSize: '20px' }}
                    ></FaFilePen>
              </button>
              <button style={{ background: 'white', border: 'white' }}
               onClick={() => dispatch(deleteModule(module._id))}>
              <FaTrash
                      style={{ color: 'grey', fontSize: '20px' }}
                    ></FaTrash>
            </button></div>

           
           </li>
      ))
      }
    </ul></ul>
  );
}
export default ModuleList;