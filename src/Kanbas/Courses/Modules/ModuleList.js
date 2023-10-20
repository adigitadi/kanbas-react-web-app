import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import './index.css';
import 'font-awesome/css/font-awesome.min.css';


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
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
            <i class="fa fa-grip-vertical" style={{ marginRight: '5px' }}></i>
             <h3>{module.name}</h3>
             <p>{module.description}</p>
             <div class="float-end">
              <i class="fa-solid fa-circle-check"></i>
              <i class="fa fa-ellipsis-v"></i>
            </div>
           </li>
      ))
      }
    </ul></ul>
  );
}
export default ModuleList;