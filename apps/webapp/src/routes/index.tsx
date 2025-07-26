import { TodoFilter } from '@/views/todos/components/TodoFilter';
import { TodoForm } from '@/views/todos/components/TodoForm';
import { TodoList } from '@/views/todos/components/TodoList';
import { Card, Card2, GlassButton } from '@other-world/ui';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <div className="App">
      <Card title={'Title'}>
        <div>
          <TodoForm />
          <TodoFilter />
          <TodoList />
        </div>
      </Card>

      {/* <Card2>
        <h2>Todo:</h2>
        <p>My list</p>
      </Card2> */}
      <br />

      <GlassButton>Add </GlassButton>
    </div>
  );
}
