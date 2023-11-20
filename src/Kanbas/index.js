import KanbasNavigation from './KanbasNavigation';
import axios from "axios";
import Dashboard from './Dashboard';
import { Routes, Route, Navigate } from 'react-router-dom';
import Profile from './Account/Profile';
import Calendar from './Calendar';
import Commons from './Commons';
import Help from './Help';
import History from './History';
import Inbox from './Inbox';
import Studio from './Studio';
import Courses from './Courses';
import CoursesHome from './Courses/CoursesHome';
import CoursesModules from './Courses/Modules';
import CoursesAssignments from './Assignment';
import CourseAssignmentEditor from './AssignmentEditor';
import React, { useEffect, useState } from 'react';
import store from "./store";
import { Provider } from "react-redux";
const API_BASE = process.env.REACT_APP_API_BASE;
function Kanbas() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const URL = `${API_BASE}/api/courses`;
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
  };

  const deleteCourse = async (course) => {
     await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(courses.filter(
      (c) => c._id !== course._id));
  };

  const updateCourse = async (course) => {
     await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };


  return (
    <Provider store={store}>
    <div className="d-flex">
      <KanbasNavigation />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<Profile />} />
          <Route path="Dashboard" element={<Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>} />
          <Route path="Courses/:courseId/*" element={ <Courses courses={courses} />} />
          <Route path="Calendar" element={<Calendar />} />
          <Route path="Commons" element={<Commons />} />
          <Route path="Courses/" element={<CoursesHome />} />
          <Route path="Courses/Modules" element={<CoursesModules />} />
          <Route path="Courses/Assignments" element={<CoursesAssignments />} />
          <Route
            path="Courses/Assignments/AssignmentEditor"
            element={<CourseAssignmentEditor />}
          />
          <Route path="Help" element={<Help />} />
          <Route path="History" element={<History />} />
          <Route path="Inbox" element={<Inbox />} />
          <Route path="Studio" element={<Studio />} />
        </Routes>
      </div>
    </div>
    </Provider>
  );
}
export default Kanbas;