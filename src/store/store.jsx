import { configureStore } from "@reduxjs/toolkit";
import ProjectSlice from "./reducer/ProjectSlice";
export const store = configureStore({
  reducer: {
    project: ProjectSlice,
  },
});
