import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";
import assignmentsReducer from "../Assignment/assignmentsReducer";


const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer
  }
});


export default store;