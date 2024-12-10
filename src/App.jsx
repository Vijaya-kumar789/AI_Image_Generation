
import './App.css'
import Home from './Component/Home'
import Create from './Component/Create'
import NavBar from './Component/NavBar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
   
    <BrowserRouter>
     <Routes element ={<NavBar/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/create' element={<Create/> } />
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
