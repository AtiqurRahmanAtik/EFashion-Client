
import { Route, Routes } from 'react-router';
import './App.css';
import Main from './LayOut/Main'
import Home from './Components/Home'
import About from './Components/About'
import Contacts from './Components/Contacts';


function App() {


  return (
    <>
      
      <Routes>

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
