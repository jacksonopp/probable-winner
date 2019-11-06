import React from 'react';
import logo from './logo.svg';
import './App.css';

import "./style/style.css";
import StudentButton from './components/StudentButton';
import Reset from './components/Reset';

function App() {
  return (
    <div className="App">
      <div className="student-button-div">
        <StudentButton className="student" />
      </div>
      <div className="reset-button-div">
        <Reset />
      </div>
    </div>
  );
}

export default App;
