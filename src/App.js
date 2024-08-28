import './App.css';
import { Icon } from '@iconify/react';

function App() {
  return (
    <div className="App">
      <header className="text-3xl flex items-center justify-center gap-2">
        <Icon icon="mdi-home" />
        <h1 className='text-teal-800 text-3xl'>Hello there</h1>
      </header>
    </div>
  );
}

export default App;
