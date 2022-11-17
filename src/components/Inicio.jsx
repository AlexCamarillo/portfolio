import { Link } from "react-router-dom"
import { ListadoTrabajos } from "./ListadoTrabajos"

export const Inicio = () => {
  return (
    <div className="home">
      
      <h1 className="main_title">
        I develop web applications with the most used frameworks with a well organized architecture to provide efficient solutions to problems. 
      </h1>
      <h2 className="title">
        Ready to work
        <Link to="/contacto">Contact</Link>
      </h2>

      <section className="last-works">
        <h2 className="heading">Some of my projects</h2>
        <p>I hope you enjoy them</p>
        <div className="works">
          <ListadoTrabajos limite = {3}/>
        </div>
      </section>

    </div>
  )
}
