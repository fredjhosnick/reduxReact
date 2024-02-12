import { configureStore } from "@reduxjs/toolkit";
import { departmentsSlice, mySlice } from "./mySlice";
export default configureStore({
  reducer: {
    myEmployees: mySlice.reducer,
    mydepartments: departmentsSlice.reducer,
  },
});
