import React from 'react';
import './App.css';
import Main from './Main';
import SelectOne from './SelectOne';
import SelectMore from './SelectMore';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {

  render() {

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/selectOne" component={SelectOne}></Route>
          <Route exact path="/selectMore" component={SelectMore}></Route>
        </Switch>
      </div>

    );
  }
}

export default App;
