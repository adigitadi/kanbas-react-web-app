import './Popup.css';
import { useParams } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai';
import React, { useEffect } from 'react';
import {
  addModule,
  setModule, setModules
} from "./modulesReducer";
import { useSelector, useDispatch } from "react-redux";
import { findModulesForCourse, createModule } from "./client";

function Popup ({ isOpen, togglePopup}) {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId, dispatch]);
  
  const module = useSelector((state) => state.modulesReducer.module);
  if (!isOpen) {
    return null;
  }

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  
  return (
    <div className="modal-overlay">
      <div className='popup'>
          <div className='popup_inner'>
          <button onClick={() => {togglePopup();}} style={{position: 'relative', right: -180, top: -10, backgroundColor: 'white', border: 'none', borderRadius: '50%', height: 30, width: 30, display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 0px 15px rgba(0,0,0,0.1)', cursor: 'pointer'}}>
            <AiOutlineClose color='black' size='20px'/>
          </button>
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <p>Course Name</p>
            <input value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        /><br/>
        <p>Course Description</p>
        <textarea value={module.description}
           onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        /><br/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <button class="btn btn-danger" onClick={() => {handleAddModule();
      togglePopup();}}>
           Add
        </button></div>
          </div>
        </div></div>
    </div>
  );
};

export default Popup;
