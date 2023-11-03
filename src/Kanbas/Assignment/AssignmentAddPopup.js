import React from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { useParams } from "react-router-dom";
import '../Courses/Modules/index.css'
import 'font-awesome/css/font-awesome.min.css';
import { useSelector, useDispatch } from "react-redux";
import {
  setAssignment,  
  addAssignment
} from "../Assignment/assignmentsReducer";

function AssignmentAddPopup({ isOpen, togglePopup }) {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="popup">
        <div className="popup-content">
          <button onClick={togglePopup} style={{position: 'relative', right: -180, top: -10, backgroundColor: 'white', border: 'none', borderRadius: '50%', height: 30, width: 30, display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 0px 15px rgba(0,0,0,0.1)', cursor: 'pointer'}}>
            <AiOutlineClose color='black' size='20px'/>
          </button>
          <div>
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
                <button className="btn btn-secondary" onClick={() => togglePopup()}>Cancel</button>
              <button onClick={() => {dispatch(addAssignment({...assignment, course: courseId }));togglePopup();}} className="btn btn-danger">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentAddPopup;
