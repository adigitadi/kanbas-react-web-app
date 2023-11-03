import React, { useState }  from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaBars } from 'react-icons/fa';
import styles from '../Courses/Modules/index.css';
import '../Courses/Modules/index.css'
import 'font-awesome/css/font-awesome.min.css';
import { FaFilePen } from 'react-icons/fa6';
import { FaTrash } from 'react-icons/fa';
import {
  deleteAssignment,
  setAssignment  
} from "./assignmentsReducer";
import Popup from './AssignmentAddPopup';

function Assignments() {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (

    <div>
      <nav className={`d-none d-md-block ${styles.wd_breadcrumb}`}>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <FaBars
              style={{
                color: '#b52828',
                marginRight: '10px',
                marginLeft: '20px',
              }}
            ></FaBars>
            <a href="#/Kanbas/Dashboard" onClick={(e) => e.preventDefault()} style={{ color: '#b52828' }}>
            {courseId}
            </a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
          Modules
          </li>
        </ol>
      </nav>

    <div className="wd-flex-grow-1" style={{marginLeft: '30px', marginRight: '30px'}}>
  <div className="wd-flex-row-container">
    <div className="search wd-flex-grow-1">
      <input type="text" className="form-control w-25" placeholder="Search for Assignment" />
    </div>
    <div className="d-flex float-end main-content-control">
      <div className="flex-grow-1"></div>
      <button className="btn" style={{background: '#eeeeee'}}>
        <i className="fa fa-plus"></i>Group
      </button>
      <button className="btn btn-danger" onClick={togglePopup}>
        <i className="fa fa-plus"></i>Assignment
      </button>
      <button className="btn" style={{background: '#eeeeee', height: '38px'}}>
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </button>
    </div>
  </div>

  <hr />
  <ul className="wd-flex-grow-1 list-group module-list">
    <li className="list-group-item list-group-item-secondary">
      <i className="fa fa-grip-vertical" style={{marginRight: '5px'}}></i>
      <span><strong>Assignments</strong></span>
      <div className="float-end">
        <button className="btn rounded-pill" style={{background: '#eeeeee', marginRight: '20px'}}>
          40% of Total
        </button>
        <i className="fa-solid fa-plus" style={{marginRight: '20px'}}></i>
        <i className="fa fa-ellipsis-v"></i>
      </div>
    </li>
    {courseAssignments.map((assignment) => (
      <ul key={assignment._id} className="list-group" style={{borderRadius: '0'}}>
        <li className="list-group-item">
          <i className="fa fa-grip-vertical" style={{marginRight: '20px'}}></i>
          <i className="fa fa-book"></i>
          <h6 style={{display: 'inline'}}>
            <strong>{assignment.title}</strong>
          </h6>
          <div className="float-end">
            <i className="fa-solid fa-circle-check"></i>
            <i className="fa fa-ellipsis-v"></i>
          </div>
          {/* Replace with actual details */}
          <div style={{marginLeft: '70px', color: '#686464', width: '600px'}}>
            <p style={{fontSize: '15px', marginBottom: '1px'}}>{assignment.description} | <strong>Due</strong> {new Date(assignment.dueDate).toISOString().split('T')[0]} | {assignment.points} points</p>
          </div>
          <div style={{ paddingLeft: '12px',display: 'flex', justifyContent: 'space-between' }}>
          <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{color: 'black'}}>
              <button style={{ background: 'white', border: 'white' }}
               onClick={(e) => {
                dispatch(setAssignment(assignment));}}>
              <FaFilePen
                      style={{ color: 'grey', fontSize: '20px' }}
                    ></FaFilePen>
              </button></Link>
              <button style={{ background: 'white', border: 'white' }}
              onClick={() => {
              if (window.confirm('Are you sure you want to remove the assignment?')) {
                dispatch(deleteAssignment(assignment._id))
                }}}>
    <FaTrash
        style={{ color: 'grey', fontSize: '20px' }}
    ></FaTrash>
</button>

              </div>
        </li>
      </ul>
    ))}
  </ul>
</div>
<Popup isOpen={isOpen} togglePopup={togglePopup} assignment={assignment} />
</div> 
  );
}
export default Assignments;