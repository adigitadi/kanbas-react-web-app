import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const URL = `${API_BASE}/a5/assignment`;

  const fetchAssignment = async () => {
    const response = await axios.get(`${URL}`);
    setAssignment(response.data);
  };

  const updateTitle = async () => {
    const response = await axios
      .get(`${URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  const updateScore = async (newScore) => {
    const response = await axios.get(`${API_BASE}/a5/assignment/score/${newScore}`);
    setAssignment(response.data);
  };

  const updateCompleted = async (newCompleted) => {
    const response = await axios.get(`${API_BASE}/a5/assignment/completed/${newCompleted.toString()}`);
    setAssignment(response.data);
  };
  

  

  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a href={`${API_BASE}/a5/assignment`}
        className="btn btn-primary me-2">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a
        href={`${API_BASE}/a5/assignment/title`}
        className="btn btn-primary me-2">
        Get Title
      </a>
      <h4>Modifying Properties</h4>

      <h3>Modifying Properties</h3>
      <input onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title}
        className="form-control mb-2" type="text" />
      <button onClick={updateTitle}
              className="w-100 btn btn-primary mb-2">
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment}
              className="w-100 btn btn-danger mb-2">
        Fetch Assignment
      </button>

      <br/><br/>

      <h5>Update Title</h5>
      <a
        href={`${URL}/title/${assignment.title}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Title
      </a>
      <input
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        value={assignment.title}
        className="form-control mb-2 w-75"
        type="text"
      />
      <h5>Update Score</h5>
<input
  type="number"
  className="form-control mb-2 w-75"
  onChange={(e) => setAssignment({ ...assignment, score: Number(e.target.value) })}
  value={assignment.score}
/>
<button
  className="btn btn-primary"
  onClick={() => updateScore(assignment.score)}
>
  Update Score
</button>

<h5>Update Completed</h5>
<input
  type="checkbox"
  className="mb-2 w-75"
  onChange={(e) => {
    const newCompleted = e.target.checked;
    setAssignment((prevState) => ({ ...prevState, completed: newCompleted }));
    updateCompleted(newCompleted);
  }}
  checked={assignment.completed}
/>


    </div>
  );
}

export default WorkingWithObjects;