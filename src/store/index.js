import { combineSlices } from '@reduxjs/toolkit';
import projectsReducer from './features/projectSlice';
import switchReducer from './features/switchSlice';
import expertiseReducer from './features/expertiseSlice';

export const rootReducer = combineSlices(
  { projects: projectsReducer },
  { switch: switchReducer },
  { expertise: expertiseReducer }
);
