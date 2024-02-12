import { createSlice } from "@reduxjs/toolkit";

export const mySlice = createSlice({
  name: "myEmployees",
  initialState: {
    employees: [],
  },

  reducers: {
    addValue: (state, action) => {
      state.employees = [...state.employees, action.payload];
    },
    changeValue: (state, action) => {
      const { index, newContinent } = action.payload;
      state.employees[index].department = newContinent;
    },
    deleteValue: (state, action) => {
      const { name, lastname, phone } = action.payload;
      state.employees = state.employees.filter(
        (value) =>
          value.name.first !== name &&
          value.name.last !== lastname &&
          value.cell !== phone
      );
    },
  },
});
export const departmentsSlice = createSlice({
  name: " mydepartments",
  initialState: {
    departments: [
      "Africa(Seal)",
      "America(Organization)",
      "America(Comertial)",
      "Asia(Buy)",
      "Europe(Diler)",
      "Europe(Marketing)",
      "Oceania(Marketing)",
    ],
  },

  reducers: {},
});

export const { addValue, changeValue, deleteValue } = mySlice.actions;
