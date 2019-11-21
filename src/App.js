import React from 'react';
import './App.css';
import Header from './Components/Header';
import CustomTable from './Components/CustomTable';
function App() {
  
  return (
    <div>
      <Header />
      <div style={{padding:'2em'}}>
      <CustomTable />
      </div>
      
    </div>
  );
}

export default App;
