import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import Home from '../pages/main/home'
import Login from '../pages/admin/auth/login'
import Dashboard from '../pages/admin/dashboard/dashboard'
import form from '../pages/main/form'


const AppRouter = (): any => {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path='/' component={Home} />
        <PublicRoute exact path='/form' component={form} />
        <PublicRoute exact path='/login' component={Login} />
        <PrivateRoute exact path="/admin"
                        component={Dashboard} />
        <Redirect to="/"></Redirect>
        </Switch>
    </Router>
  )
}

export default AppRouter
