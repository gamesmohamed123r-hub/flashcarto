import React from 'react'
import { Link } from 'react-router-dom'

function Details() {
  return (
    <div>
        {/* ABOUT HERO SECTION  */}
     <section className="about-hero">
        <div className="container">
            <div className="about-hero-content">
                <h1>About <span className="highlight">Flashcarto</span></h1>
                <p>.............................................Your Ultimate Online Shopping Destination for Premium Products at Lightning-Fast Prices.........................</p>
            </div>
        </div>
     </section>

     {/* OUR STORY SECTION  */}
     <section className="about-story">
        <div className="container">
            <div className="story-content">
                <div className="story-text">
                    <h2>Our Story</h2>
                    <p>
                        Flashcarto was founded in 2026 with a simple yet powerful vision: to revolutionize the e-commerce 
                        experience by combining exceptional products with lightning-fast service. What started as a small 
                        startup in a garage has grown into one of the most trusted online retailers serving thousands of 
                        satisfied customers across the globe.
                    </p>
                    <p>
                        Our journey began when our founders realized that traditional e-commerce platforms were lacking 
                        in speed, reliability, and customer satisfaction. We decided to create something different – a 
                        platform where quality products meet exceptional service, where every customer feels valued, and 
                        where shopping becomes an enjoyable experience rather than a chore.
                    </p>
                    <p>
                        Over the years, we've continuously evolved and improved our services, listening to customer feedback 
                        and implementing innovative solutions. Today, Flashcarto stands as a beacon of trust and reliability 
                        in the e-commerce industry, known for our commitment to excellence and customer-centric approach.
                    </p>
                </div>
                <div className="story-image">
                    <div className="placeholder-image">
                        <i className="fas fa-store"></i>
                    </div>
                </div>
            </div>
        </div>
     </section>

    {/*MISSION & VALUES SECTION */}
     <section className="mission-values">
        <div className="container">
            <h2 className="section-title">Our Mission & Values</h2>
            
            <div className="values-grid">
                 {/* Mission  */}
                <div className="value-card">
                    <div className="value-icon">
                        <i className="fas fa-bullseye"></i>
                    </div>
                    <h3>Our Mission</h3>
                    <p>
                        To empower customers worldwide by providing access to premium products at unbeatable prices, 
                        with a commitment to exceptional service, fast delivery, and complete customer satisfaction. 
                        We believe that shopping online should be fast, easy, and enjoyable for everyone.
                    </p>
                </div>

                 {/* Quality  */}
                <div className="value-card">
                    <div className="value-icon quality">
                        <i className="fas fa-star"></i>
                    </div>
                    <h3>Quality First</h3>
                    <p>
                        We are committed to offering only the highest quality products. Each item in our catalog is 
                        carefully selected and rigorously tested to ensure it meets our strict standards. We work only 
                        with trusted suppliers and manufacturers to guarantee authenticity and durability.
                    </p>
                </div>

                 {/* Customer Care  */}
                <div className="value-card">
                    <div className="value-icon care">
                        <i className="fas fa-heart"></i>
                    </div>
                    <h3>Customer Care</h3>
                    <p>
                        Your satisfaction is our priority. Our dedicated customer support team is available 24/7 to 
                        assist you with any questions or concerns. We believe in building long-term relationships with 
                        our customers based on trust, transparency, and genuine care.
                    </p>
                </div>

                 {/* Innovation  */}
                <div className="value-card" data-wow-delay="0.4s">
                    <div className="value-icon innovation">
                        <i className="fas fa-lightbulb"></i>
                    </div>
                    <h3>Innovation</h3>
                    <p>
                        We continuously invest in technology and innovation to improve our platform and services. From 
                        AI-powered recommendations to advanced logistics tracking, we leverage cutting-edge technology 
                        to enhance your shopping experience.
                    </p>
                </div>

                 {/* Speed  */}
                <div className="value-card " data-wow-delay="0.5s">
                    <div className="value-icon speed">
                        <i className="fas fa-bolt"></i>
                    </div>
                    <h3>Lightning Speed</h3>
                    <p>
                        We understand that your time is valuable. That's why we've optimized every aspect of our operation 
                        to ensure the fastest possible service. From quick checkout to rapid shipping, we make sure your 
                        orders arrive when you need them.
                    </p>
                </div>

                 {/* Sustainability  */}
                <div className="value-card " data-wow-delay="0.6s">
                    <div className="value-icon sustainability">
                        <i className="fas fa-leaf"></i>
                    </div>
                    <h3>Sustainability</h3>
                    <p>
                        We are committed to environmental responsibility. Our packaging is eco-friendly, our supply chain 
                        is optimized to reduce carbon footprint, and we partner with organizations dedicated to environmental 
                        conservation. Every purchase contributes to a greener future.
                    </p>
                </div>
            </div>
        </div>
     </section>

    {/* STATISTICS SECTION */}
     <section className="statistics">
        <div className="container">
            <h2 className="section-title">By The Numbers</h2>
            
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>50K+</h3>
                    <p>Happy Customers</p>
                </div>
                <div className="stat-card">
                    <h3>100K+</h3>
                    <p>Products Available</p>
                </div>
                <div className="stat-card" >
                    <h3>98%</h3>
                    <p>Customer Satisfaction</p>
                </div>
                <div className="stat-card" data-wow-delay="0.4s">
                    <h3>7/24</h3>
                    <p>Customer Support</p>
                </div>
            </div>
        </div>
     </section>

    {/* CALL TO ACTION */}
     <section className="cta-section">
        <div className="container">
            <div className="cta-content wow animate__bounceIn">
                <h2>Ready to Experience the Flash Difference?</h2>
                <p>Join thousands of satisfied customers and start your amazing shopping journey today!</p>
                <Link to="/product" className="btn-cta">
                    <i className="fas fa-arrow-right"></i> Start Shopping Now
                </Link>
            </div>
        </div>
     </section>

    </div>
  )
}

export default Details
