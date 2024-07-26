import { createSlice } from '@reduxjs/toolkit';
import { skillsData } from '../../data/Skills';

const techCategory = [
  { title: 'Frontend', ref: 'frontend' },
  { title: 'Backend', ref: 'backend' },
  { title: 'Code_management', ref: 'managing' },
  { title: 'Design', ref: 'design' },
  { title: 'CMS', ref: 'cms' },
];

const filteredData = skillsData.filter((item, i) => {
  return item.end === 'frontend';
});

const initialState = {
  allSkills: skillsData,
  filteredSkills: filteredData,
  label: 'Frontend',
  techCategory,
};

export const expertiseSlice = createSlice({
  name: 'expertise',
  initialState,
  reducers: {
    filterSkills(state, action) {
      const payload = action.payload;
      state.label = payload;
      switch (payload) {
        case payload:
          const filtered = state.allSkills.filter(
            (skill) => skill.end === payload
          );
          state.filteredSkills = filtered;
          break;
        default:
          break;
      }
    },
  },
});

export const { filterSkills } = expertiseSlice.actions;
export default expertiseSlice.reducer;
