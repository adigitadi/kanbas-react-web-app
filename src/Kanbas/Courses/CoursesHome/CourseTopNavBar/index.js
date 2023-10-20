import { FaBars } from 'react-icons/fa';
import styles from '../../../../index.css';
import { useParams } from "react-router-dom";
import '../../Modules/index.css'
import 'font-awesome/css/font-awesome.min.css';


const CourseTopNavBar = () => {
  const { courseId } = useParams();
  return (
    <div className="navigation-bar" style={{ marginTop: '20px' }}>
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
            <a href="#" onClick={(e) => e.preventDefault()} style={{ color: '#b52828' }}>
            {courseId}
            </a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
          Home
          </li>
        </ol>
      </nav>
      <hr style={{ marginLeft: '20px', marginRight: '20px' }} />
    </div>
  );
};

export default CourseTopNavBar;
