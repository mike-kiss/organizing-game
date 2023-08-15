import './App.css';
import "./Print.css"

import { Header } from './components/Header/Header';
import { CardsList } from './components/CardsList/CardsList';
import { ContextWrapper } from './contexts';

function App() {

  return (
    <main className="App light-mode">
      <ContextWrapper>
        <Header />
        <CardsList />
      </ContextWrapper>
    </main>
  );
}

export default App;
