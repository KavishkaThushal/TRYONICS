import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Add from './pages/Add/Add'
import Auth from './pages/Auth/Auth'

function App() {


  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/add" element={<Add />} />
    //     <Route path="/details/:id" element={<Add />} />
    //   </Routes>
      
    // </BrowserRouter>
    <>
    <Auth/>
    </>
  )
}

export default App

