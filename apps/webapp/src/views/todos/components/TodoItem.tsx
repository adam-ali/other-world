import { useTodos, type Todo } from '@/app/providers/todoProvider';
import React, { useCallback } from 'react';

interface TodoItemProps {
  todo: Todo;
}
export const TodoItem = React.memo(({ todo }: TodoItemProps) => {
  const { dispatch } = useTodos();

  const handleToggle = useCallback(() => {
    dispatch({ type: 'TOGGLE_TODO_STATUS', payload: { id: todo.id } });
  }, [dispatch, todo.id]);

  const handleDelete = useCallback(() => {
    dispatch({ type: 'DELETE_TODO', payload: { id: todo.id } });
  }, [dispatch, todo.id]);

  return (
    <li className="flex items-center p-4 bg-gray-800 rounded-lg mb-3 transition-all duration-300 hover:bg-gray-700">
      <input
        type="checkbox"
        checked={todo.status === 'done'}
        onChange={handleToggle}
        className="w-6 h-6 mr-4 rounded-full text-green-500 bg-gray-700 border-gray-600 focus:ring-green-500"
      />
      <div className="flex-grow">
        <span
          className={`text-lg ${todo.status === 'done' ? 'line-through text-gray-500' : ''}`}
        >
          {todo.text}
        </span>
        {todo.date && (
          <span className="block text-sm text-gray-400 mt-1">
            Due: {new Date(todo.date).toLocaleDateString()}
          </span>
        )}
      </div>
      <button
        onClick={handleDelete}
        className="ml-4 px-3 py-1 text-red-400 hover:bg-red-900 rounded-lg transition-colors"
      >
        Delete
      </button>
    </li>
  );
});
