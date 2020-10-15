import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Average from './components/Average';
import StudentsList from './components/StudentsList';
import { applicationStore } from './data/appStore';

function App() {
  return (
    <Provider store={applicationStore}>
      <div className="App">
        <StudentsList />
        <Average />
      </div>
    </Provider>
  );
}

export default App;
