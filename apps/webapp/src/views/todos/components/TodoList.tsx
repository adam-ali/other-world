import { useTodos } from '@/app/providers/todoProvider';
import React, { useMemo } from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = React.memo(() => {
  const { state } = useTodos();

  const filteredTodos = useMemo(() => {
    if (state.filter === 'all') {
      return state.todos;
    }
    return state.todos.filter((todo) => todo.status === state.filter);
  }, [state.todos, state.filter]);

  if (filteredTodos.length === 0) {
    return (
      <p className="text-center text-gray-400">
        No todos here. Great job, or add a new one!
      </p>
    );
  }

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
});
