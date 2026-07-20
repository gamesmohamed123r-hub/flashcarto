function Navbar(){
    return(
        <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html">
                    <img src="img/102.png" style={{width: '200px'}} alt="logo"/>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="product.html">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about.html">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#secondsection">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fas fa-shopping-cart"></i> Cart
                            </a>
                        </li>              
                    </ul>
                    
                    <a className="btn btn-outline-warning btn-signup" href="signup.html">
                        SIGN-UP
                    </a>
                </div>
            </div>
          </nav>
        </header>     
        </div>
    )
}
export default Navbar;