import { Routes, Route, BrowserRouter, NavLink, Navigate } from 'react-router-dom';
import { Contacto } from '../components/Contacto';
import { Curriculum } from '../components/Curriculum';
import { Inicio } from '../components/Inicio';
import { Footer } from '../components/layout/Footer';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Portafolio } from '../components/Portafolio';
import { Proyecto } from '../components/Proyecto';
import { Servicios } from '../components/Servicios';

export const MisRutas = () => {
  return (
    <div>
        <BrowserRouter>
            {/** HEADER Y NAVEGACIÓN */}
            <HeaderNav/>
            {/** CONTENIDO CENTRAL */}
            <section className='content'>
              <Routes>
                  <Route path='/' element={<Navigate to="/inicio"/>}/>{/**Esto es para que se marque en naranja cuando vas a la raiz */}
                  <Route path='/inicio' element={<Inicio/>}/>
                  <Route path='/portafolio' element={<Portafolio/>}/>
                  <Route path='/curriculum' element={<Curriculum/>}/>
                  <Route path='/servicios' element={<Servicios/>}/>
                  <Route path='/contacto' element={<Contacto/>}/>
                  <Route path='/proyecto/:id' element={<Proyecto/>}/>
                  <Route path='*' element={
                    <div className='page'>
                      <h1 className='heading'>Error 404</h1>
                    </div>
                  }/>
              </Routes>
            </section>
           
            {/** FOOTER */}
            <Footer/>

        </BrowserRouter>
    </div>
  )
}
