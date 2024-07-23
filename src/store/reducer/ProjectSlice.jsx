import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      title: "arkar",
      content: "blah blah",
    },
    {
      id: 2,
      title: "koko",
      content: "blah blah",
    },
    {
      id: 3,
      title: "thura",
      content: "blah blah",
    },
  ],
};
export const ProjectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    add: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const { add } = ProjectSlice.actions;

export default ProjectSlice.reducer;
