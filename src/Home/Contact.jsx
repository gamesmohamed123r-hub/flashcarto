function Contact(){
    return(
        <div>
         <footer className="secondsection" id="secondsection">
           <div className="container">
          <div className="contact-content wow animate__bounceIn">
              <h2 className="section-title">Get in Touch</h2>
              <p className="contact-description">
                  Have questions? We're here to help! Chat with us on WhatsApp for instant support.
              </p>
              
              <div className="contact-box">
                  <i className="fa-brands fa-whatsapp"></i>
                  <h3>Contact Us on WhatsApp</h3>
                  <p>Click below to chat with our team</p>
                  <a href="https://wa.me/201147733982?text=Hello%20Flashcarto" 
                     target="_blank" 
                     className="btn-whatsapp">
                     Chat on WhatsApp
                  </a>
              </div>
          </div>
           </div>
         </footer>                        
        </div>
    )
}
export default Contact;