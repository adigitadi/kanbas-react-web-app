import { Link, useParams, useLocation } from 'react-router-dom';
import './index.css';

const CourseNavigation = () => {
  const links = ['Home', 'Modules', 'Piazza','Zoom Meetings','Assignments','Quizzes','Grades','People',
  'Panopto Video','Discussions','Announcements','Pages','Files','Rubrics','Outcomes',
  'Collaborations','Syllabus','Settings'];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  
  return (
    <div className="course-navigation">
        <div className="list-group" style={{ width: 150 }}>
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/Courses/${courseId}/${link}`}
            style={{color:"red",border:"none"}}
            className={`list-group-item ${pathname.includes(link) && "active"}`}>
            {link}
          </Link>
        ))}
      </div>
    </div>
    );
  }  

export default CourseNavigation;
