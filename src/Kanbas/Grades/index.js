import db from "../Database";
import { useParams } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import styles from '../Courses/Modules/index.css';
import '../Courses/Modules/index.css'
import 'font-awesome/css/font-awesome.min.css';

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

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
            // eslint-disable-next-line
            <a href="#" style={{ color: '#b52828' }}>
            {courseId}
            </a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
          Modules
          </li>
        </ol>
      </nav>
    <div className="wd-flex-grow-1" style={{ marginLeft: '30px', marginRight: '30px' }}>
      <div className="wd-flex-row-container">
        <div className="wd-flex-grow-1"></div>
        <div className="d-flex float-end main-content-control">
          <div className="flex-grow-1"></div>
          <button className="btn" style={{ background: '#eeeeee', marginRight: '5px' }}>
            <i className="fa fa-file-import" style={{ marginRight: '3px' }}></i>Import
          </button>
          <div className="dropdown">
            <button className="btn" type="button" data-bs-toggle="dropdown" style={{ background: '#eeeeee', marginRight: '3px' }}>
              <i className="fa fa-file-export" style={{ marginRight: '3px' }}></i>
              Export
            </button>
            {/* Add dropdown content here if needed */}
          </div>
          <button className="btn" style={{ background: '#eeeeee', height: '38px' }}>
            <i className="fa-solid fa-gear"></i>
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <label className="form-label">Student Names</label>
          <input placeholder="Search Students" type="text" className="form-control" />
        </div>
        <div className="col">
          <label className="form-label">Assignment Names</label>
          <input placeholder="Search Assignments" type="text" className="form-control" />
        </div>
      </div>
      <br />

      <button className="btn" style={{ background: '#eeeeee' }}>
        <i className="fa fa-filter" style={{ marginRight: '5px' }}></i>Apply Filters
      </button>
      <hr />

      <div className="table-responsive">
        <table className="table table-striped" style={{ border: '1px solid black' }}>
          <thead>
          <tr>
  <th>Student Name</th>
  {assignments.map((assignment) => (
    <th key={assignment._id}>
      {assignment.title} <br /> Out of 100
    </th>
  ))}
</tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr key={enrollment._id}>
                  <td style={{ color: '#b52828' }}>{user.firstName} {user.lastName}</td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) => grade.student === enrollment.user && grade.assignment === assignment._id
                    );
                    return (
                      <td key={assignment._id}>
                        {grade?.grade || <input style={{ width: '50px' }} value="" />}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div></div>
  );
}

export default Grades;

