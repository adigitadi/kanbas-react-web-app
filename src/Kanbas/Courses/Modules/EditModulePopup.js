import React from 'react';
import './Popup.css';
import { AiOutlineClose } from 'react-icons/ai';
import {
  updateModule,
  setModule,
} from "./modulesReducer";
import { useSelector, useDispatch } from "react-redux";

function Popup ({ isOpen, togglePopup}) {
  const dispatch = useDispatch();
  const module = useSelector((state) => state.modulesReducer.module);
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal-overlay">
      <div className="popup">
        <div className="popup-content">
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
        /> <br/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button style={{color: 'white', backgroundColor: 'red', width: 100}} onClick={() => {dispatch(updateModule(module));togglePopup();}}>
            Update
        </button></div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
