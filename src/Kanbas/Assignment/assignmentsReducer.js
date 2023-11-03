import { createSlice } from "@reduxjs/toolkit";
import db from "../Database";


const initialState = {
  assignments: db.assignments,
  assignment: { "title": "Propulsion Assignment", 
  "description": "Multiple Modules | Not available", 
  "points": "100", "dueDate": "2023-12-31T23:59:59Z", 
  "availableFrom": "2023-11-31T23:59:59Z", 
  "availableUntil": "2024-01-01T23:59:59Z" },
};


const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.assignments,
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});


export const { addAssignment, deleteAssignment,
    updateAssignment, setAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;