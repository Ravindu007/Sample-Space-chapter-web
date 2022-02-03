const Navbar = () => {
  return ( 

      <nav className="navbar navbar-expand-sm navbar-dark">
        <a href="" className="navbar-brand">SEDS Sabra</a>
        <button className="navbar-toggler" data-toggle="collapse" data-target= "#menu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="menu">
          <ul className="navbar-nav">
            <li className="nav-item"><a href="" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="" className="nav-link">About</a></li>
            <li className="nav-item"><a href="" className="nav-link">Events</a></li>
            <li className="nav-item"><a href="" className="nav-link">Winners</a></li>
            <li className="nav-item"><a href="" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </nav>
   );
}
 
export default Navbar;