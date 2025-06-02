import UserContextProvider from './Context/UserContextProvider'
import './App.css'
import Login from './Component/Login'
import Profile from './Component/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <h1>UseContext with chai aur code</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
