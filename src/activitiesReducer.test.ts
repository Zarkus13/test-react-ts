import { addActivityToState } from './activitiesReducer';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  activities: [],
  fetchingActivity: false
};

const FakePayloadAction = <T>(type: string, payload: T): PayloadAction<T> => ({
  type,
  payload
});

test('should increment counter', () => {
  const newState =
    addActivityToState(
      initialState,
      FakePayloadAction('increment', 'test activity')
    );

  expect(newState).toEqual(({
    fetchingActivity: false,
    activites: ['test activity']
  }));
});