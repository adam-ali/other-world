import { Card } from '@other-world/ui';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <div className="App">
      <Card title={'Title'} content={'conetcjghskjhsj'} />
      <header className="App-header">TODOS</header>
    </div>
  );
}
