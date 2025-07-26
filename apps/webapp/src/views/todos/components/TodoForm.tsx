import { useTodos } from '@/app/providers/todoProvider';
import { GlassButton, GlassInput } from '@other-world/ui';
import React, { useCallback, useState } from 'react';
import './todo.css';

export const TodoForm = React.memo(() => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const { dispatch } = useTodos();

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!text.trim()) return;
      dispatch({ type: 'ADD_TODO', payload: { text, date } });
      setText('');
      setDate('');
    },
    [text, date, dispatch]
  );

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <GlassInput
        type="text"
        name="todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <GlassInput
        type="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <GlassButton type="submit">Add Todo</GlassButton>
    </form>
  );
});
