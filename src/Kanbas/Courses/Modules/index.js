import ModuleList from "./ModuleList";
import { FaBars } from 'react-icons/fa';
import styles from '../index.css';
import { useParams } from "react-router-dom";
import '../index.css'
import 'font-awesome/css/font-awesome.min.css';

function Modules() {
  const { courseId } = useParams();
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
          <li class="breadcrumb-item active" aria-current="page">
          Modules
          </li>
        </ol>
      </nav>
      <ModuleList />
    </div>
  );
}
export default Modules;