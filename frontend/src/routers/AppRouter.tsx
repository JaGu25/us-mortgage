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
import Form from '../pages/main/form'
import LastStep from '../pages/main/laststep'


const AppRouter = (): any => {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path='/' component={Home} />
        <PublicRoute exact path='/form/:type' component={Form} />
        <PublicRoute exact path='/login' component={Login} />
        <PublicRoute exact path='/endform' component={LastStep} />
        <PrivateRoute exact path="/admin"
                        component={Dashboard} />
        <Redirect to="/"></Redirect>
        </Switch>
    </Router>
  )
}

export default AppRouter
