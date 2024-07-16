import './contact.css';
function Contact(){
    return(
       <>
       <div style={{paddingTop:30}}>
        <section className="location">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.3712136549743!2d80.36026727375481!3d28.67854028199313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1c74a436f18b7%3A0x1b44f40441a5d9ff!2sWisdom%20Academy!5e0!3m2!1sen!2sin!4v1704186767050!5m2!1sen!2sin" width="600" height="450" style={{border:0, allowfullscreen:"", loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
    </section>

    <section className="contact-us">
        <div className="row">
            <div className="contact-col">
                <div>
                    <i className="fa fa-home"></i>
                    <span>
                        <h5>Playground Road,House no 456</h5>
                        <p>Belauri-04,kanchanpur,Nepal</p>
                    </span>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <span>
                        <h5>+ 91 8990867890</h5>
                        <p>Sunday to Friday, 10 AM to 5 PM</p>
                    </span>
                </div>

                <div>
                    <i className="fa fa-envelope-o"></i>
                    <span>
                        <h5>wisdom@5.gmail.com</h5>
                        <p>Email us your query</p>
                    </span>
                </div>
            </div>

            <div className="contact-col">
                <form>
                    <input type = "text" placeholder = "Enter your name" required/>
                    <input type = "email" placeholder = "Enter email address" required/>
                    <input type = "text" placeholder = "Enter your subject" required/>
                    <textarea rows = "8" placeholder = "Message" required></textarea>
                    <button type = "submit" className = "hero-btn red-btn">Send Message</button>

                </form>
            </div>
        </div>
    </section>
    </div>
    </>

    )
}
export default Contact;