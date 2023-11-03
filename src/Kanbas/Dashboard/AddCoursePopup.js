import React from 'react';
import '../Courses/Modules/Popup.css';
import { AiOutlineClose } from 'react-icons/ai';

function AddPopup ({ isOpen, togglePopup, course, setCourse, addNewCourse}) {

  if (!isOpen) {
    return null;
  }
  
  return (
    <div className="modal-overlay">
      <div className='popup'>
          <div className='popup_inner'>
          <button onClick={() => {togglePopup();}} style={{position: 'relative', right: -200, top: -10, backgroundColor: 'white', border: 'none', borderRadius: '50%', height: 30, width: 30, display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 0px 15px rgba(0,0,0,0.1)', cursor: 'pointer'}}>
  <AiOutlineClose color='black' size='20px'/>
</button>
          <p>Course Name</p>
          <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <br/><p>Course Number</p>
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <br/><p>Start Date</p>
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <br/><p>End Date</p>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
        <br/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <button class="btn btn-danger" onClick={() => {addNewCourse();togglePopup();}}>
           Add
        </button></div>
          </div>
        </div>
    </div>
  );
};

export default AddPopup;
