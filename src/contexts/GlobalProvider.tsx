import { SampleContextProvider } from 'contexts/SampleContext';
import { TodoContextProvider } from 'contexts/TodoContext';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

function GlobalProvider({ children }: Props) {
  return (
    <SampleContextProvider>
      <TodoContextProvider>{children}</TodoContextProvider>
    </SampleContextProvider>
  );
}

export default GlobalProvider;
