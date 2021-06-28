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
import FreeQuoteResidential from '../pages/admin/dashboard/FreeQuoteResidential'
import FreeQuoteBusiness from '../pages/admin/dashboard/FreeQuoteBusiness'
import LastStepFinal from '../pages/main/laststepfinal'
import LoanBusiness from '../pages/admin/dashboard/LoanBusiness'


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
        <PrivateRoute exact path="/admin/free_quote_business" component={FreeQuoteBusiness} />
        <PrivateRoute exact path="/admin/free_quote_residential" component={FreeQuoteResidential} />
        <PrivateRoute exact path="/admin/loan_business" component={LoanBusiness} />
        <Redirect to="/"></Redirect>
        </Switch>
    </Router>
  )
}

export default AppRouter
