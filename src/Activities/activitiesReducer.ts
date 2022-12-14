import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchActivityAPI } from './api';

interface State {
  activities: string[],
  fetchingActivity: boolean
}

const initialState: State = ({
  activities: [],
  fetchingActivity: false
});

export const addActivityToState = (state: State, action: PayloadAction<string>) => ({
  ...state,
  activities: state.activities.concat([action.payload]),
  fetchingActivity: false
});

export const fetchActivity = createAsyncThunk(
  'tasks/fetchActivity',
  fetchActivityAPI
);

const activitiesSlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {
    addActivity: addActivityToState
  },
  extraReducers: (builder) => {
    builder.addCase(fetchActivity.pending, (state) => ({
      ...state,
      fetchingActivity: true
    }));

    builder.addCase(fetchActivity.fulfilled, addActivityToState);
  }
});

export const { addActivity } = activitiesSlice.actions;

export default activitiesSlice.reducer;