
import { Route, Routes } from 'react-router';
import './App.css';
import Main from './LayOut/Main'
import Home from './Components/Home'
import About from './Components/About'
import Contacts from './Components/Contacts';
import Login from './Pages/Login';
import Register from './Pages/Register';



function App() {


  return (
    <>
      
      <Routes>
    
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>

      <Route path='/' element={<Main/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contacts/>}></Route>

      </Route>

   

    </Routes>

   
     
      
    </>
  )
}

export default App
