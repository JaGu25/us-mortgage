import UserProvider from './store/auth/authContext'
import AppRouter from './routers/AppRouter'
import './assets/styles/output.css'
import FormProvider from './store/form/formContext'

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
