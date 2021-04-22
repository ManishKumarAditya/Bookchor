import React from 'react';
const Navbar =(props)=> {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-ligh">
        <div className="container-fluid form-inline">

          <a href="#" className="navbar-brand">{props.logo}</a>
        <div className="row">
        <form action="" className="form-inline">
            <input type="text" className="form-control" size="70" placeholder="Search by book"/>
            <input type="submit" className="btn btn-danger rounded-pill" value="Search"/>
        </form>
        </div>
        <ul className="navbar-nav">
            <li className="nav-item"><a href="" className="nav-link">LOGIN</a></li>
            <li className="nav-item"><a href="" className="nav-link">Create An Account</a></li>
            <li className="nav-item"><a href="" className="nav-link">Contact us</a></li>
            <li className="nav-item"><a href="" className="btn btn-dark rounded-pill">About</a></li>
        </ul>
        </div>
      </nav>
    )
}
export default Navbar;