import React, { Component } from 'react'
import './bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import LDprofie from './components/LDprofile'
import Register from './components/Register'
import Landlord from './components/Landlord'
import ResetPassword from './components/ResetPassword'
import ResetPasswordConfirm from './components/ResetPasswordConfirm'
import axios from 'axios'
import Navbar from './components/Navbar'
import Page1 from './components/page1'
<<<<<<< HEAD
import Vish from './components/Vish'
import Contact from './components/Contact'
import Interior from './components/Interior'
import Profile from './components/Profile'
import Roomies from './components/Roomies'
import Roommates from './components/roommates'
import Roomiereg from './components/Roomiereg'
=======
import Posts from './components/Posts'
import Contact from './components/Contact'
import Interior from './components/Interior'
import Profile from './components/profile'
import Roomies from './components/Roomies'
import Roommates from './components/roommates'
import roomiereg from './components/roomiereg'
>>>>>>> 8c73e9ea2180e86e2265cc96d29d9a75d733e18a
class App extends Component {
  state = {}
  componentDidMount = () => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    }

    axios
      .get('http://localhost:5000/' + localStorage.getItem('id'), config)
      .then(
        (res) => {
          this.setUser(res.data)
        },
        (err) => {
          console.log(err)
        }
      )
  }

  setUser = (user) => {
    this.setState({
      user: user,
    })
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar user={this.state.user} setUser={this.setUser} />

          <Switch>
            <Route
              exact
              path='/'
              component={() => <Home user={this.state.user} />}
            />
            <Route
              exact
              path='/login'
              component={() => <Login setUser={this.setUser} />}
            />
            <Route exact path='/register' component={Register} />
<<<<<<< HEAD
            <Route exact path='/posts' component={Vish} />
=======
            <Route exact path='/posts' component={Posts} />
>>>>>>> 8c73e9ea2180e86e2265cc96d29d9a75d733e18a
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/password-reset/' component={ResetPassword} />
            <Route
<<<<<<< HEAD
             
              path='/changepassword/:'
=======
              exact
              path='/accounts/password-reset/:uidb64/:token/'
>>>>>>> 8c73e9ea2180e86e2265cc96d29d9a75d733e18a
              component={ResetPasswordConfirm}
            />
            <Route
              exact
              path='/landlord/'
              component={() => <Landlord user={this.state.user} />}
            />
            <Route
              exact
              path='/ldprofile/'
              component={() => <LDprofie user={this.state.user} />}
            />
            <Route exact path='/roommates/' component={Roommates}></Route>
            <Route exact path='/roommates/:id' component={Roomies} />
<<<<<<< HEAD
            <Route exact path='/roomiereg' 
            component={() => <Roomiereg user={this.state.user}/>}
             />
=======
            <Route exact path='/search/:keyword' component={Roommates} />
            <Route exact path='/roomiereg' component={roomiereg} />
>>>>>>> 8c73e9ea2180e86e2265cc96d29d9a75d733e18a
            <Route
              exact
              path='/interior/'
              component={() => <Interior user={this.state.user} />}
            />
            <Route
              exact
              path='/page1'
              component={() => <Page1 user={this.state.user} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
