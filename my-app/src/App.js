import React from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard'; 
import { useCountRules }from './components/useCountRules';
import './App.css';

function App() {
  const { stats, ...buttons } = useCountRules();

  return(
    <div>
    <Display stats={stats} />
    <Dashboard buttonFunctions={buttons} />
    </div>
  )
}

export default App;