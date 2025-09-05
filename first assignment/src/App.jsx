
import './App.css'
import Navbar from './components/navbar.jsx'
import { Route,Routes } from 'react-router-dom'
import Signup from './pages/signup.jsx'
import Login from './pages/login.jsx'
import Fetchdata from './components/fetchdata.jsx'
function App() {
  

  return (
   <div  className='bg'>
     
     <Navbar/>
     <Routes>
      <Route path='/' element={<Fetchdata/>}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>
   </div>
  )
}

export default App
