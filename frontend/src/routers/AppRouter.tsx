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
import Form2 from '../pages/main/form2'
import Form3 from '../pages/main/form3'
import Form4 from '../pages/main/form4'


const AppRouter = (): any => {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path='/' component={Home} />
        <PublicRoute exact path='/form' component={Form} />
        <PublicRoute exact path='/form2' component={Form2} />
        <PublicRoute exact path='/form3' component={Form3} />
        <PublicRoute exact path='/form4' component={Form4} />
        <PublicRoute exact path='/login' component={Login} />
        <PrivateRoute exact path="/admin"
                        component={Dashboard} />
        <Redirect to="/"></Redirect>
        </Switch>
    </Router>
  )
}

export default AppRouter
