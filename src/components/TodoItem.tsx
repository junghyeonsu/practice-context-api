import { useTodoDispatch, Todo } from 'contexts/TodoContext';

type Props = {
  todo: Todo;
};

function TodoItem({ todo }: Props) {
  const TodoDispatch = useTodoDispatch();

  const onToggle = () => {
    TodoDispatch({
      type: 'TOGGLE',
      id: todo.id,
    });
  };

  const onDelete = () => {
    TodoDispatch({
      type: 'DELETE',
      id: todo.id,
    });
  };

  return todo.done ? (
    <div style={{ color: 'red' }} onClick={onToggle}>
      {todo.id} : {todo.text} (O) <button onClick={onDelete}>삭제</button>
    </div>
  ) : (
    <div onClick={onToggle}>
      {todo.id} : {todo.text} (X) <button onClick={onDelete}>삭제</button>
    </div>
  );
}

export default TodoItem;
