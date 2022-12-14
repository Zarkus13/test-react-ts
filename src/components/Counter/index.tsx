import React, { useState } from 'react';
import { CounterButton, CounterWrapper, DisplayCount } from './styles';
import { useAppDispatch, useAppSelector } from '../../store';
import { decrement, increment, incrementByAmount, resetCounter } from '../../counterReducer';

const Counter: React.FC = () => {
  const { counterValue } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  const [incAmount, setIncAmount] = useState(10);

  return (
    <CounterWrapper>
      <DisplayCount>Count : {counterValue}</DisplayCount>

      <CounterButton onClick={() => dispatch(increment())}>
        Increment
      </CounterButton>

      <CounterButton onClick={() => dispatch(decrement())}>
        Decrement
      </CounterButton><br/><br/>

      <input
        type="number"
        value={incAmount}
        onChange={(e) => setIncAmount(Number(e.target.value))}
      />
      <CounterButton onClick={() => dispatch(incrementByAmount(incAmount))}>
        Increment by amount
      </CounterButton> <br/><br/>

      <CounterButton onClick={() => dispatch(resetCounter())}>
        Reset counter
      </CounterButton>
    </CounterWrapper>
  );
};

export default Counter;