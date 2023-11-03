import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import styles from '../Courses/Modules/index.css';
import '../Courses/Modules/index.css'
import 'font-awesome/css/font-awesome.min.css';
import { useSelector, useDispatch } from "react-redux";
import {
  updateAssignment,
  setAssignment  
} from "../Assignment/assignmentsReducer";

function AssignmentEditor() {
  const dispatch = useDispatch();
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);

  const { courseId } = useParams();
  const navigate = useNavigate();
  
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
          <li class="breadcrumb-item active">
          Assignments
          </li>
          <li class="breadcrumb-item active" aria-current="page">
          {assignment.title}
          </li>
        </ol>
      </nav>

      <div className="form-group">
        <label for="name">Assignment Name</label>
        <input value={assignment.title} 
        onChange={(e) =>
          dispatch(setAssignment({ ...assignment, title: e.target.value }))
        }
        id="name" name="name" className="form-control mb-2" />
      </div>

      <div className="form-group">
        <label for="description">Assignment Description</label>
        <textarea value={assignment.description} 
        onChange={(e) =>
          dispatch(setAssignment({ ...assignment, description: e.target.value }))
        }
        id="description" name="description" className="form-control mb-2" />
      </div>

      <div className="form-group">
        <label for="points">Points</label>
        <input value={assignment.points} 
        onChange={(e) =>
          dispatch(setAssignment({ ...assignment, points: e.target.value }))
        }
        id="points" name="points" className="form-control mb-2" />
      </div>

      <div className="form-group">
        <label for="due">Due</label>
        <input type="date" 
        onChange={(e) =>
          dispatch(setAssignment({ ...assignment, dueDate: e.target.value }))
        }
        value={new Date(assignment.dueDate).toISOString().split('T')[0]}  id="due" name="due" className="form-control mb-2" />
      </div>

      <div className="form-group">
        <label for="availableFrom">Available From</label>
        <input type="date" 
        onChange={(e) =>
          dispatch(setAssignment({ ...assignment, availableFrom: e.target.value }))
        }
        value={new Date(assignment.availableFrom).toISOString().split('T')[0]}  id="availableFrom" name="availableFrom" className="form-control mb-2" />
      </div>

      <div className="form-group">
        <label for="until">Until</label>
        <input type="date" 
        onChange={(e) =>
          dispatch(setAssignment({ ...assignment, availableUntil: e.target.value }))
        }
        value={new Date(assignment.availableUntil).toISOString().split('T')[0]} id="until" name="until" className="form-control mb-2" />
      </div>

      <div className="form-group">
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger">
          Cancel
        </Link>
        <button onClick={() => {dispatch(updateAssignment(assignment));navigate(`/Kanbas/Courses/${courseId}/Assignments`);}} className="btn btn-success me-2">
          Save
        </button>
      </div>
    </div>
  );
}

export default AssignmentEditor;
