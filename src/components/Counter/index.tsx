import React, { useState } from 'react';
import { CounterButton, CounterWrapper, DisplayCount } from './styles';
import { useAppDispatch, useAppSelector } from '../../store';
import { decrement, increment, incrementByAmount, resetCounter } from '../../counterReducer';
import { useTranslation } from 'react-i18next';

const Counter: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { counterValue } = useAppSelector((state) => state.counter);

  const [incAmount, setIncAmount] = useState(10);

  return (
    <CounterWrapper>
      <DisplayCount>{t('counter.count')} : {counterValue}</DisplayCount>

      <CounterButton onClick={() => dispatch(increment())}>
        {t('counter.increment')}
      </CounterButton>

      <CounterButton onClick={() => dispatch(decrement())}>
        {t('counter.decrement')}
      </CounterButton><br/><br/>

      <input
        type="number"
        value={incAmount}
        onChange={(e) => setIncAmount(Number(e.target.value))}
      />
      <CounterButton onClick={() => dispatch(incrementByAmount(incAmount))}>
        {t('counter.increment-by', { nb: incAmount })}
      </CounterButton> <br/><br/>

      <CounterButton onClick={() => dispatch(resetCounter())}>
        {t('counter.reset')}
      </CounterButton>
    </CounterWrapper>
  );
};

export default Counter;