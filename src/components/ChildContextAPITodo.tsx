import React, { useState } from 'react';
import { useTodoDispatch, useTodoState } from 'contexts/TodoContext';
import TodoItem from 'components/TodoItem';

function ChildContextAPITodo() {
  const [text, setText] = useState('');
  const todoDispatch = useTodoDispatch();
  const todos = useTodoState();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onCreate = () => {
    todoDispatch({
      type: 'CREATE',
      text: text,
    });
    setText('');
  };

  return (
    <div>
      <input
        onChange={onChange}
        value={text}
        type="text"
        placeholder="todo를 작성하세요!"
      />
      <button onClick={onCreate}>생성</button>
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </div>
  );
}

export default ChildContextAPITodo;
