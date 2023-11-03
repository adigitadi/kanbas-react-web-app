import styles from './index.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaFilePen } from 'react-icons/fa6';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import AddPopup from './AddCoursePopup';
import EditPopup from './UpdateCoursePopup';

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }) {
    const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const [isOpen1, setIsOpen1] = useState(false);
  const togglePopup1 = () => {
    setIsOpen1(!isOpen1);
  }

  return (
      <div className="wd-flex-grow-1 main-content">
        <h1>Dashboard</h1>
        <hr />

        <div className="container" style={{ paddingLeft: '30px', marginLeft: '30px',display: 'inline' }}>
        <div style={{display:'flex', justifyContent: 'space-between'}}>
          <h2>Published Courses ({`${courses.length}`})</h2>
            <button class="btn btn-danger" onClick={() => {togglePopup();}}>
            <i class="fa fa-plus" style={{ marginRight: '3px' }}></i>Course
            </button> 
          </div>

          <hr />
          <div
            className={`d-flex flex-row flex-wrap justify-content-around ${styles.cardContainer}`}
          >
            {courses.map((course) => (
              <Card style={{ width: '270px', marginBottom: '40px' }} key={course._id}>
                <Card.Img variant="top" src={require('../../images/starship.jpg')} />
                <Card.Body>
                  <Card.Text
                    style={{
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      fontWeight: 'bold',
                    }}
                  >
                    <Link to={`/Kanbas/Courses/${course._id}`}>
                    {course.name}
                    </Link>
                  </Card.Text>
                  <Card.Text>{course.description}</Card.Text>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Button onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                      togglePopup1();
                      }} style={{ background: 'white', border: 'white' }}>
                    <FaFilePen
                      style={{ color: 'grey', fontSize: '20px' }}
                    ></FaFilePen>
                  </Button>
                  <Button onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }} style={{ background: 'white', border: 'white' }}>
                    <FaTrash
                      style={{ color: 'grey', fontSize: '20px' }}
                    ></FaTrash>
                  </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
          <AddPopup isOpen={isOpen} togglePopup={togglePopup}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}/>
       <EditPopup isOpen1={isOpen1} togglePopup1={togglePopup1}
              course={course}
              setCourse={setCourse}
              updateCourse={updateCourse}/>   
        </div>
      </div>

  );
}
export default Dashboard;