// context 생성
import { createContext, Dispatch, useReducer, useContext } from 'react';

// Todo 타입 생성
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

// TodoState는 배열로 된 Todo 이다.
type TodoState = Todo[];

// Todo의 State를 관리하는 context를 생성, context는 전역적으로 데이터를 관리하는 용도
const TodoStateContext = createContext<TodoState | undefined>(undefined);

// Action 타입 생성
type Action =
  | { type: 'CREATE'; text: string }
  | { type: 'TOGGLE'; id: number }
  | { type: 'DELETE'; id: number };

// Action을 type 값들로 가지는, Dispatch를 생성
type TodoDispatch = Dispatch<Action>;

// TodoDispatch를 변경하는 Context를 생성한다. 이것은 action을 관리하는 context
const TodoDispatchContext = createContext<TodoDispatch | undefined>(undefined);

// action에 따라 state를 관리하는 reducer 작성
function todoReducer(state: TodoState, action: Action): TodoState {
  switch (action.type) {
    case 'CREATE':
      const nextId = Math.max(...state.map((todo) => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.text,
        done: false,
      });

    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo,
      );

    case 'DELETE':
      return state.filter((todo) => todo.id !== action.id);

    default:
      throw new Error('Unhandled action');
  }
}

// provider를 두 개의 context를 묶어서 그냥 보내버림
export function TodoContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // state , action = (reducer, initial state)
  const [todo, dispatch] = useReducer(todoReducer, [
    {
      id: 1,
      text: 'Context API 배우기',
      done: false,
    },
    {
      id: 2,
      text: 'TypeScript 배우기',
      done: false,
    },
    {
      id: 3,
      text: 'TypeScript 와 Context API 함께 사용하기',
      done: false,
    },
  ]);

  return (
    <TodoDispatchContext.Provider value={dispatch}>
      <TodoStateContext.Provider value={todo}>
        {children}
      </TodoStateContext.Provider>
    </TodoDispatchContext.Provider>
  );
}

// 커스텀 hooks임, useContext로 부를 필요 없이 그냥 import해서 쓰면됨
// 예외처리까지 완벽
export function useTodoState() {
  const state = useContext(TodoStateContext);
  if (!state) throw new Error('TodoStateContext not found!');
  return state;
}

// 커스텀 hooks임, useContext로 부를 필요 없이 그냥 import해서 쓰면됨
// 예외처리까지 완벽
export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error('TodoDispatchContext not found!');
  return dispatch;
}
