// React includes
import React from 'react';
import './App.css';

// Local includes
import Home from './containers/Home';
// import Background from '../src/components/Background/background';
// import Header from '../components/Header/header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
