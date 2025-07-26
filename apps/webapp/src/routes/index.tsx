import { Card, Card2, GlassButton } from '@other-world/ui';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <div className="App">
      <Card title={'Title'} content={'conetcjghskjhsj'} />

      {/* <Card2>
        <h2>Todo:</h2>
        <p>My list</p>
      </Card2> */}
      <br />

      <GlassButton>Add todo</GlassButton>

      <header className="App-header">TODOS</header>
    </div>
  );
}
