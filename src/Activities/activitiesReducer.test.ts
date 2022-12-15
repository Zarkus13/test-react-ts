import { addActivityToState } from './activitiesReducer';
import { FakePayloadAction } from '../utils/tests';

const initialState = {
  activities: [],
  fetchingActivity: false
};

test('should add activity to state', () => {
  const newState =
    addActivityToState(
      initialState,
      FakePayloadAction('addActivity', 'test activity')
    );

  expect(newState).toEqual(({
    fetchingActivity: false,
    activities: ['test activity']
  }));
});