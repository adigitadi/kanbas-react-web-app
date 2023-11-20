import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import CoursesHome from "./CoursesHome";
import Assignments from "../Assignment";
import AssignmentEditor from "../AssignmentEditor";
import Grades from "../Grades";
import "./index.css"

const API_BASE = process.env.REACT_APP_API_BASE;

function Courses() {
  const { courseId } = useParams();
  const URL = `${API_BASE}/api/courses`;
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId]);

  return (
    <div>
      <h2>{course.name}</h2>
      <hr/>
      <div class="course-flex">
        <CourseNavigation />
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<CoursesHome/>} />
                <Route path="Modules" element={<Modules/>} />
                <Route path="Piazza" element={<h1>Piazza</h1>} />
                <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
                <Route path="Assignments" element={<Assignments/>} />
                <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
                <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                <Route path="Grades" element={<Grades />} />
                <Route path="People" element={<h1>People</h1>} />
                <Route path="Panopto Video" element={<h1>Panopto Video</h1>} />
                <Route path="Discussions" element={<h1>Discussions</h1>} />
                <Route path="Announcements" element={<h1>Announcements</h1>} />
                <Route path="Pages" element={<h1>Pages</h1>} />
                <Route path="Files" element={<h1>Files</h1>} />
                <Route path="Rubrics" element={<h1>Rubrics</h1>} />
                <Route path="Outcomes" element={<h1>Outcomes</h1>} />
                <Route path="Collaborations" element={<h1>Collaborations</h1>} />
                <Route path="Syllabus" element={<h1>Syllabus</h1>} />
                <Route path="Settings" element={<h1>Settings</h1>} />
            </Routes>
            </div>
       </div>
    </div>
  );
}
export default Courses;