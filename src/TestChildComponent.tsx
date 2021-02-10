import React from 'react';

// 이거는 typescript 문법이니까 무시
interface Props {
  count: number;
  children: React.ReactNode;
}

function TestChildComponent({ count, children }: Props) {
  return (
    <div>
      {children}
      {count > 5 ? <div>5가 넘었다!</div> : <div>5를 못넘었어...</div>}
    </div>
  );
}

export default TestChildComponent;
