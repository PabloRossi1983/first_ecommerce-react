import "./Styles/Serch.css"

const Serch = ()=> {
  return(
    <nav className="navbar">
      <form className="container-serch">
        <input className="form-control input-sz" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-primary btn-sz" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
    </nav>
  )
}

export default Serch;