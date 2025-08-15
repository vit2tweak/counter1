import React, { useState, useEffect } from 'react';
  import './App.css';
  
  function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Simulate API call
      setTimeout(() => {
        setData([
          { id: 1, title: 'Welcome to counter1' },
          { id: 2, title: 'Built with React and modern web technologies' }
        ]);
        setLoading(false);
      }, 1000);
    }, []);
  
    return (
      <div className="app">
        <header className="app-header">
          <h1>counter1</h1>
          <p>Create a counter app with increment and decrement buttons</p>
        </header>
        <main className="app-main">
          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            <div className="content">
              {data.map(item => (
                <div key={item.id} className="card">
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    );
  }
  
  export default App;