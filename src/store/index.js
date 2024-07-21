import { combineSlices } from '@reduxjs/toolkit';
import projectsReducer from './features/projectSlice';
import switchReducer from './features/switchSlice';

export const rootReducer = combineSlices(
  { projects: projectsReducer },
  { switch: switchReducer }
);
