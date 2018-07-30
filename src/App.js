import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { auth } from './firebase-config'
import Header from './componet/Header'
import Service from './componet/Service'
import Portfolio from './componet/Portfolio'
import Footer from './componet/Footer'
import Contact from './componet/Contact';
import Admin from './componet/Admin/Admin';
import Login from './componet/Admin/Login';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header authUser={this.state.authUser} />
          
          <Route path='/' exact component= { Portfolio } />
          <Route path='/service' component= { Service } />
          <Route path='/portfolio' component= { Portfolio } />
          <Route path='/contact' component= { Contact } />
          <Route path='/admin' component= { Admin } />
          <Route path='/login' component= { Login } />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
