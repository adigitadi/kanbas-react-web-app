import { Link, useLocation } from "react-router-dom";
import {BiUserCircle} from 'react-icons/bi';
import {RiDashboard3Fill} from 'react-icons/ri';
import { FaUser, FaBook, FaInbox, FaClock } from 'react-icons/fa';
import { FaArrowRightFromBracket,FaCalendarDays,FaCircleQuestion,FaGauge,FaYoutube} from 'react-icons/fa6';
import styles from './index.css';


function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar","Inbox","History","Studio","Commons","Help"];
  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon-user"/>,
    Dashboard:<RiDashboard3Fill className="wd-icon"/>,
    Courses:<FaBook className="wd-icon"/>,
    Calendar:<FaCalendarDays className="wd-icon"/>,
    Inbox:<FaInbox className="wd-icon"/>,
    History:<FaClock className="wd-icon"/>,
    Studio:<FaYoutube className="wd-icon"/>,
    Commons:<FaArrowRightFromBracket className="wd-icon"/>,
    Help:<FaCircleQuestion className="wd-icon"/>

  }
  const { pathname } = useLocation();
  return (
    <div style={{backgroundColor:"black"}}>
      <div className="wd_kanbas_navigation wd-col-flex">
        <div className="wd_logo_container">
          <a hhref="#" onClick={(e) => e.preventDefault()}>
            <img
              src={require('../../images/northeastern.png')}
              className="wd_logo"
              alt="Logo"
            />
          </a>
        </div>
        <div className="list-group wd-navigation-item">
          {links.map((link, index) => (
            <Link
              key={index}
              to={`/Kanbas/${link}`}
              className={`list-group-item ${pathname.includes(link) && "active"}`}
              style={{backgroundColor:"black",border:"none"}}>
              <div>{linkToIconMap[link]}</div>
              <div className="wd-list">{link}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    
  );
}
export default KanbasNavigation;