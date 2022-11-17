import { Link } from "react-router-dom";
import { trabajos } from "../data/trabajos"

export const ListadoTrabajos = ({limite}) => {
  return (
      <section className='works'>
        {
          trabajos.slice(0,limite).map(trabajo => {
            return(
                <article key={trabajo.id} className='work-item'>
                  <div className="mask">
                    <img src={"/img/" + trabajo.id + '.png'} className="work-item"/>
                  </div>
                  <span>{trabajo.caregorias}</span>
                  <h2><Link to={"/proyecto/" + trabajo.id}>{trabajo.nombre}</Link></h2>
                  <h3>{trabajo.tecnologias}</h3>
                </article>
            );
          })
        }
      </section>
  )
}
