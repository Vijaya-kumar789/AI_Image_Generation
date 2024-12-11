
import './App.css'
import Home from './Component/Home'
import Create from './Component/Create'
import NavBar from './Component/NavBar'
import { Routes,Route } from 'react-router-dom'

function App() {
  
  return (
    <>
   
     <Routes element ={<NavBar/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/create' element={<Create/> } />
    </Routes>
    
     
    </>
  )
}

export default App
