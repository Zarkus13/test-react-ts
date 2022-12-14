import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchActivity } from '../../activitiesReducer';

const DisplayActivity: React.FC = () => {
  const dispatch = useAppDispatch();
  const { activities, fetchingActivity } = useAppSelector((state) => state.activities);

  useEffect(() => {
    dispatch(fetchActivity());
  }, []);

  return (
    <div>
      <div>
        <button onClick={() => dispatch(fetchActivity())}>
          Fetch new activity
        </button>
      </div>

      {fetchingActivity && <em>Loading ...</em>}

      {activities.map((activity) =>
        <p><b>{activity}</b></p>
      )}
    </div>
  );
};

export default DisplayActivity;