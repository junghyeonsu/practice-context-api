import React from 'react';
import ChildContextAPI from 'components/ChildContextAPI';
import ChildContextAPITodo from 'components/ChildContextAPITodo';

const Parent = () => {
  return (
    <div>
      {/* <ChildContextAPI /> */}
      <ChildContextAPITodo />
    </div>
  );
};

export default Parent;
