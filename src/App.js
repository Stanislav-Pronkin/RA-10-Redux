import './App.css';
import React from 'react';
import ServiceAdd from './Components/ServiceAdd';
import ServiceList from './Components/ServiceList';

function App() {
  return (
    <div className="App">
      <ServiceAdd />
      <ServiceList />
    </div>
  );
}

export default App;
