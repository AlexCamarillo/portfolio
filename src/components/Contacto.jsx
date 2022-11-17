
export const Contacto = () => {
  return (
    <div className="page">
      <h1 className="heading">Contact</h1>

      <form className="contact" action="mailto:alex7camarillo@gmail.com">
        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="Last Name"/>
        <input type="email" placeholder="Email"/>
        <textarea placeholder="Message"></textarea>
        <input type="submit" value="Send"/>
      </form>
    </div>
  )
}
