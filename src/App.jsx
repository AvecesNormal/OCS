import { Navigate, Route, Routes } from 'react-router-dom';
import Layaut from './components/layaut';
import NavBar from './components/navbar';
import Inicio from './pages/inicio';
import Login from './pages/login';
import Registro from './pages/registro';
import Productos from './pages/productos';
import Footer from './components/footer';

function App() {

  return (
    <>
      <div className="bg-secondary min-h-screen">
        <NavBar></NavBar>
        <Layaut>
          <Routes>
            <Route path='/' element={<Inicio></Inicio>} />
            <Route path='/login' element={<Login></Login>} />
            <Route path='/registro' element={<Registro></Registro>} />
            <Route path='/inicio' element={<Inicio></Inicio>} />
            <Route path='/productos' element={<Productos></Productos>} />
            <Route path='*' element={<Navigate to="/"></Navigate>}></Route>
          </Routes>
        </Layaut>  
        <Footer></Footer>
      </div>
    </>
  )
}

export default App;