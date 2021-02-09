import React from 'react';
import { useSampleState, useSampleDispatch } from 'contexts/SampleContext';

const ChildContextAPI = () => {
  const state = useSampleState();
  const dispatch = useSampleDispatch();

  const onClickIsGood = (): void => {
    dispatch({
      type: 'TOGGLE_GOOD',
    });
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({
      type: 'SET_TEXT',
      text: e.target.value,
    });
  };

  const onClickColor = (): void => {
    dispatch({
      type: 'SET_COLOR',
      color: 'orange',
    });
  };

  const onClickCount = (): void => {
    dispatch({
      type: 'SET_COUNT',
      count: 5,
    });
  };

  return (
    <div>
      <div>
        색깔 : {state.color}
        <button onClick={onClickColor}>변경</button>
      </div>
      <div>
        카운트 : {state.count}
        <button onClick={onClickCount}>변경</button>
      </div>
      <div>
        <input type="text" onChange={onChangeInput} />
        <br />
        텍스트 : {state.text}
      </div>
      <div>
        {state.isGood ? <p>굿!</p> : <p>낫 굿...</p>}
        <button onClick={onClickIsGood}>!굿</button>
      </div>
    </div>
  );
};

export default ChildContextAPI;
