import React, { useState } from 'react';
import TestChildComponent from 'TestChildComponent';

function TestComponent() {
  // count state와 count setter를 정의해준다!
  const [count, setCount] = useState(0);

  // UP 버튼 클릭했을 때의 함수
  const onClickUpCount = () => {
    setCount(count + 1);
  };

  // DOWN 버튼 클릭했을 때의 함수
  const onClickDownCount = () => {
    setCount(count - 1);
  };

  // TestComponent가 보여줄 View 부분 (rendering 부분)
  return (
    <div>
      {/* 우리가 선언한 count state를 표시해준다.  */}
      {count}

      <TestChildComponent count={count}>
        <p>요기는 children 이름으로 전달될거야!</p>
      </TestChildComponent>

      {/* UP 버튼과 DOWN 버튼을 생성해서 onClick 함수를 전달해준다. */}
      <button onClick={onClickUpCount}>UP</button>
      <button onClick={onClickDownCount}>DOWN</button>
    </div>
  );
}

export default TestComponent;
