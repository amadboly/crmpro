//import './App.css';
import 'antd/dist/antd.css';
import React from 'react';
import CustomeLayout from './containers/Layout';
import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routs';


class App extends React.Component{
  render(){
    return (
      <div>
        <Router>
        <CustomeLayout>
          <BaseRouter/>
        </CustomeLayout>
        </Router>
      </div>
    );

  }
}

export default App;

