import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Forms/Login'
import LoginForm from './components/Forms/LoginForm'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
    <Route path='/login' component={() => (
      <Login>
        <LoginForm />
      </Login>
    )} />
    </Switch>
)