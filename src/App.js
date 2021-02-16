import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import Login from './components/pages/Login/Login';
import Footer from './components/pages/Footer/Footer';
import Dashboard from './components/pages/Dashboard/Dashboard';
import CheckingDetails from './components/pages/Checking/CheckingDetails';
import SavingDetails from './components/pages/Saving/SavingDetails';
import CDDetails from './components/pages/CD/CDDetails';
import IRADetails from './components/pages/IRA/IRADetails';
import TransferM from "./components/pages/TransferM/TransferM";
import Profile from "./components/pages/Profile/Profile";
import Logout from "./components/pages/Logout/Logout";
import store from './redux/store'
import CreateAccount from "./components/pages/CreateAccount/CreateAccount";


function App() {

  return (
    <Provider store={store}>
      <Router >
          <Navbar />
            <Switch>
              <Route path='/' exact component={ Home }/>
              <Route path='/services' component={ Services }/>
              <Route path='/products' component={ Products }/>
              <Route path='/login' component={ Login }/>
              <Route path='/dashboard' component={ Dashboard } />
              <Route path='/checking' component={ CheckingDetails }/>
              <Route path='/savings' component={ SavingDetails }/>
              <Route path='/cdaccount' component={ CDDetails }/>
              <Route path='/ira' component={ IRADetails }/>
              <Route path='/transfermoney' component={ TransferM }/>
              <Route path='/profile' component={ Profile }/>
              <Route path='/logout' component={ Logout }/>
              <Route path='/createaccount' component={ CreateAccount }/>
            </Switch>
            <Footer />
      </Router>
    </Provider>
    

  );
}

export default App;
