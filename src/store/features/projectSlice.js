import { createSlice } from "@reduxjs/toolkit";
import projectData from "../../data/ProjectData";

const initialState = {
  allProjects: projectData,
  filteredProjects: projectData.filter(
    (project) => project.ref.indexOf("fullStack") !== -1
  ),
  tabValue: "fullStack",
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    filterProjects: (state, action) => {
      state.tabValue = action.payload;

      if (action.payload === "all") {
        state.filteredProjects = state.allProjects;
      } else {
        const filterData = state.allProjects.filter(
          (item) => item.ref.indexOf(action.payload) !== -1
        );
        state.filteredProjects = filterData;
      }
    },
  },
});

export const { filterProjects } = projectsSlice.actions;
export default projectsSlice.reducer;
