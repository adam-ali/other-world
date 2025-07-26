import { useTodos, type FilterStatus } from '@/app/providers/todoProvider';
import { GlassButton, GlassButton2 } from '@other-world/ui';
import React, { useCallback } from 'react';

export const TodoFilter = React.memo(() => {
  const { state, dispatch } = useTodos();

  const setFilter = useCallback(
    (filter: FilterStatus) => {
      dispatch({ type: 'SET_FILTER', payload: filter });
    },
    [dispatch]
  );

  const getButtonClass = (filter: FilterStatus) =>
    `px-4 py-2 rounded-lg transition-colors ${
      state.filter === filter ? 'bg-blue-600 text-white' : 'bg-gray-700 hover:bg-gray-600'
    }`;

  return (
    <div className="flex justify-center gap-4 mb-6">
      <GlassButton onClick={() => setFilter('all')} className={getButtonClass('all')}>
        All
      </GlassButton>
      <GlassButton onClick={() => setFilter('todo')} className={getButtonClass('todo')}>
        Todo
      </GlassButton>
      <GlassButton onClick={() => setFilter('done')} className={getButtonClass('done')}>
        Done
      </GlassButton>
    </div>
  );
});
