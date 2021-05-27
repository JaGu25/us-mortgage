import UserProvider from './store/auth/authContext'
import AppRouter from './routers/AppRouter'
import './assets/styles/output.css'
import './assets/styles/index.css'

const App: React.FC = () => {
  return (
    <UserProvider>
      <AppRouter/>
    </UserProvider>
  )
}

export default App
