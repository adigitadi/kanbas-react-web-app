import KanbasNavigation from './KanbasNavigation';
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
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
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