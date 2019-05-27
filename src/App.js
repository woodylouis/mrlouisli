// React includes
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// includes App
//import Todo from './components/Todo';
import Home from './containers/Home';

class App extends React.Component {
  render() {
    return (
     <BrowserRouter>
       <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/todo" component={Todo} /> */}
       </Switch>
     </BrowserRouter>
    );
  }
}

export default App;
