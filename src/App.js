import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setData(['Item 1', 'Item 2', 'Item 3']);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter1</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}

export default App;