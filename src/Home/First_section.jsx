import { Link } from "react-router-dom";

function First_section(){
    return(
        <div>
         <section className="firstsection">
           <div className="container">
            <div className="firstmaincontent">
                <div className="carousel-wrapper">
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="img/isolated-blank-white-skincare-product-set-no-label-or-logo-surrounded-by-natural-items-marketing-mockup-generative-ai-photo.jpg" className="d-block w-100" alt="Product 1"></img>
                            </div>
                            <div className="carousel-item">
                                <img src="img/images (1).jfif" className="d-block w-100" alt="Product 2"></img>
                            </div>
                            <div className="carousel-item">
                                <img src="img/images (2).jfif" className="d-block w-100" alt="Product 3"></img>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>

                <div className="firstmaintext">
                    <h1>Welcome to <span className="highlight">Flashcarto</span></h1>
                    <p className="firstsubtitle">Discover Amazing Products at Lightning-Fast Prices</p>
                    <p className="firstdescription">
                        Experience the fastest online shopping experience with our curated collection of premium products. Shop smart, save more, and enjoy free shipping on all orders!
                    </p>
                    <Link className="btn-shop-now" to="/product">
                        <i className="fas fa-bolt"></i> Start Shopping
                    </Link>
                </div>
            </div>
           </div>
         </section>
        </div>
    )
}
export default First_section;