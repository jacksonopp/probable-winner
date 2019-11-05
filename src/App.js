import React from 'react';
import logo from './logo.svg';
import './App.css';
import StudentButton from './components/StudentButton';

import "./style/style.css";

function App() {
  return (
    <div className="App">
      <div className="student-button-div">
        <StudentButton />
      </div>
    </div>
  );
}

export default App;
