import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Add from './pages/Add/Add'
import Auth from './pages/Auth/Auth'
import Navbar from './component/Navbar/Navbar'

function App() {


  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/details/:id" element={<Add />} />
      </Routes>
      
    </BrowserRouter>
    
  )
}

export default App

