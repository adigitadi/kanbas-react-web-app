import 'font-awesome/css/font-awesome.min.css';
import '../../Modules/index.css'
import ModuleList from "../../Modules/ModuleList";

const CourseHomeContent = () => {
  return (
    <div
      class="wd-flex-grow-1"
      style={{ marginLeft: '30px', marginBottom: '20px' }}
    >
      <div class="d-flex float-end main-content-control">
        <button class="btn" style={{ background: '#eeeeee' }}>
          Collapse All
        </button>
        <button class="btn" style={{ background: '#eeeeee' }}>
          View Progress
        </button>
        <div class="dropdown">
          <button
            class="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{ background: '#eeeeee' }}
          >
            <i class="fa-regular fa-circle-check"></i>Publish All
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>
              Publish All
            </a>
            <a class="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>
              Publish all items and modules
            </a>
            <a class="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>
              UnPublish
            </a>
          </div>
        </div>

        <button class="btn btn-danger">
          <i class="fa fa-plus" style={{ marginRight: '3px' }}></i>Module
        </button>
        <button class="btn" style={{ background: '#eeeeee', height: '38px' }}>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>
      </div>
      <br />
      <hr />
      <ModuleList />
    </div>
  );
};

export default CourseHomeContent;
