import React from 'react';
import 'App.css';
import Parent from 'components/Parent';
import { SampleProvider } from 'contexts/SampleContext';

// 애들 가르치려고 만든거임!
// import TestComponent from 'TestComponent';

function App() {
  return (
    // Provider로 state나 action을 제공한다는 느낌
    <SampleProvider>
      <div className="App">
        <header className="App-header">
          <h1>Counter 예제</h1>
          <Parent />
        </header>
      </div>
    </SampleProvider>
  );
}

export default App;
