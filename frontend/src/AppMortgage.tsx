import UserProvider from './store/auth/authContext'
import AppRouter from './routers/AppRouter'
import './assets/styles/output.css'
import FormProvider from './store/form/formContext'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import 'rc-slider/assets/index.css';

const App: React.FC = () => {
  return (
    <UserProvider>
      <FormProvider>
        <AppRouter />
      </FormProvider>
    </UserProvider>
  )
}

export default App
