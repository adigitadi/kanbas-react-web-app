import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

export const fetchCourses = async () => {
  const response = await axios.get(`${API_BASE}/api/courses`);
  return response.data;
};

export const fetchCourse = async (id) => {
  const response = await axios.get(`${API_BASE}/api/courses/${id}`);
  return response.data;
};

export const deleteCourse = async (id) => {
  const response = await axios.delete(
    `${API_BASE}/api/courses/${id}`
  );
  return response.data;
};

export const updateCourse = async (course) => {
  const response = await axios.put(
    `${API_BASE}/api/courses/${course._id}`,
    course
  );
  return response.data;
};

export const addCourse = async (course) => {
  const response = await axios.post(
    `${API_BASE}/api/courses`,
    course
  );
  return response.data;
};