import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
} from 'react';

export type TodoStatus = 'todo' | 'done';
export type FilterStatus = 'all' | TodoStatus;

export interface Todo {
  id: string;
  status: TodoStatus;
  text: string;
  date?: string;
}

interface AppState {
  todos: Todo[];
  filter: FilterStatus;
}

// --- Reducer Actions ---
type Action =
  | { type: 'ADD_TODO'; payload: { text: string; date?: string } }
  | { type: 'TOGGLE_TODO_STATUS'; payload: { id: string } }
  | { type: 'DELETE_TODO'; payload: { id: string } }
  | { type: 'SET_FILTER'; payload: FilterStatus }
  | { type: 'SET_STATE'; payload: AppState }; // For initializing from localStorage

// --- Context ---
interface TodoContextType {
  state: AppState;
  dispatch: Dispatch<Action>;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const todoReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        text: action.payload.text,
        date: action.payload.date,
        status: 'todo',
      };
      return { ...state, todos: [...state.todos, newTodo] };

    case 'TOGGLE_TODO_STATUS':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, status: todo.status === 'todo' ? 'done' : 'todo' }
            : todo
        ),
      };

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    case 'SET_FILTER':
      return { ...state, filter: action.payload };

    case 'SET_STATE':
      return action.payload;

    default:
      return state;
  }
};

/**
 * A custom hook that wraps useReducer and syncs its state with localStorage.
 * @param reducer The reducer function.
 * @param initialState The initial state.
 * @param storageKey The key to use for localStorage.
 * @returns A [state, dispatch] pair like useReducer.
 */
const usePersistentReducer = (
  reducer: React.Reducer<AppState, Action>,
  initialState: AppState,
  storageKey: string
): [AppState, Dispatch<Action>] => {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => {
    try {
      const storedValue = window.localStorage.getItem(storageKey);
      return storedValue ? JSON.parse(storedValue) : init;
    } catch (error) {
      console.error(`Error reading from localStorage key “${storageKey}”:`, error);
      return init;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(state));
    } catch (error) {
      console.error(`Error writing to localStorage key “${storageKey}”:`, error);
    }
  }, [state, storageKey]);

  return [state, dispatch];
};

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const initialState: AppState = { todos: [], filter: 'all' };
  const [state, dispatch] = usePersistentReducer(
    todoReducer,
    initialState,
    'misbah-todo-app'
  );

  return (
    <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>
  );
};

export const useTodos = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
};
