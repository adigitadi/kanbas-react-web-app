import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../Database";
import { FaBars } from 'react-icons/fa';
import styles from '../Courses/Modules/index.css';
import '../Courses/Modules/index.css'
import 'font-awesome/css/font-awesome.min.css';


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
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
            <a href="#/Kanbas/Dashboard" style={{ color: '#b52828' }}>
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
      <button className="btn btn-danger">
        <i className="fa fa-plus"></i>Module
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
            <strong><Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{color: 'black'}}>{assignment.title}</Link></strong>
          </h6>
          <div className="float-end">
            <i className="fa-solid fa-circle-check"></i>
            <i className="fa fa-ellipsis-v"></i>
          </div>
          {/* Replace with actual details */}
          <div style={{marginLeft: '70px', color: '#686464', width: '600px'}}>
            <p style={{fontSize: '15px', marginBottom: '1px'}}>Multiple Modules | Not available</p>
          </div>
        </li>
      </ul>
    ))}
  </ul>
</div></div>




    
  );
}
export default Assignments;