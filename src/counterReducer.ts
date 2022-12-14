import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  counterValue: number
}

const initialState: State = {
  counterValue: Number(localStorage.getItem('counter')) || 0
};

const updateCounter = (count: number): State => {
  localStorage.setItem('counter', count.toString());

  return ({
    counterValue: count
  });
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state) =>
      updateCounter(state.counterValue + 1),
    decrement: (state) =>
      updateCounter(state.counterValue - 1),
    incrementByAmount: (state, action: PayloadAction<number>) =>
      updateCounter(state.counterValue + action.payload),
    decrementByAmount: (state, action: PayloadAction<number>) =>
      updateCounter(state.counterValue - action.payload),
    resetCounter: () => updateCounter(0)
  }
});

export const { increment, decrement, incrementByAmount, decrementByAmount, resetCounter } = counterSlice.actions;

export default counterSlice.reducer;