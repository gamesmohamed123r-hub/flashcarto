import { Link } from "react-router-dom";
import { useCart } from 'react-use-cart';

function Navbar(){
    const{totalItems}=useCart();
    return(
        <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="/img/102.png" style={{width: '200px'}} alt="logo"/>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#secondsection">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">
                                <i className="fas fa-shopping-cart"></i> Cart {totalItems}
                            </Link>
                        </li>              
                    </ul>
                    
                    <Link className="btn btn-outline-warning btn-signup" to="/signup">
                        SIGN-UP
                    </Link>
                </div>
            </div>
          </nav>
        </header>     
        </div>
    )
}
export default Navbar;