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
import Commercial from '../pages/admin/dashboard/Commercial'
import Residential from '../pages/admin/dashboard/Residential'
import LastStepFinal from '../pages/main/laststepfinal'


const AppRouter = (): any => {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path='/' component={Home} />
        <PublicRoute exact path='/form/:type' component={Form} />
        <PublicRoute exact path='/login' component={Login} />
        <PublicRoute exact path='/endform' component={LastStep} />
        <PublicRoute exact path='/endform02' component={LastStepFinal} />
        <PrivateRoute exact path="/admin" component={Dashboard} />
        <PrivateRoute exact path="/admin/residential" component={Residential} />
        <PrivateRoute exact path="/admin/commercial" component={Commercial} />
        <Redirect to="/"></Redirect>
        </Switch>
    </Router>
  )
}

export default AppRouter
