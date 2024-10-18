import UserContextProvider from './Context/UserContextProvider';
import './App.css'
import Profile from './components/profile';
import Login from './components/login';

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Mohd wali</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
