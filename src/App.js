import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { transactions } from './resources/transactions';
import RewardTable from './components/RewardTable'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Welcome to The React Reward Points Application
        </p>
        <RewardTable transactions={transactions} />
      </header>
    </div>
  );
}

export default App;
