import React from 'react';
import { useSampleState, useSampleDispatch } from 'contexts/SampleContext';

const Child = () => {
  const state = useSampleState();
  const dispatch = useSampleDispatch();

  const onClickIsGood = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    dispatch({
      type: 'TOGGLE_GOOD',
    });
  };

  return (
    <div>
      <div>색깔 : {state.color}</div>
      <div>카운트 : {state.count}</div>
      <div>텍스트 : {state.text}</div>
      <div>{state.isGood ? <p>굿!</p> : <p>낫 굿...</p>}</div>
      <button onClick={onClickIsGood}>!굿</button>
    </div>
  );
};

export default Child;
