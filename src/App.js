import React from 'react';
import AddColorFormContainer from './components/AddColorForm/AddColorFormContainer';
import ColorListContainer from './components/ColorList/ColorListContainer';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <AddColorFormContainer />
      <ColorListContainer />
    </div>
  );
};

export default App;
