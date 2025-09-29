import React from 'react';
import Counter from './components/Counter';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
        <p>A simple counter application built with React and TypeScript</p>
      </header>
      <main className="App-main">
        <Counter />
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Counter1 App</p>
      </footer>
    </div>
  );
};

export default App;