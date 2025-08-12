import contactBg from "@/assets/img/contact-bg.jpg";

export default function ContactSection() {
    return (
        <div className="contact-section section-padding pt-0">
            <div className="container">
                <div className="col-xl-12 col-lg-12">
                    <div className="section-title mt-20">
                        <h1>Contact Us <span><i className="las la-arrow-right"></i></span></h1>
                    </div>
                </div>
                <div className="row justify-content-center mt-60">
                    <div className="col-xl-12">
                        <img src={contactBg} alt=""/>
                    </div>
                </div>
                <div className="row mt-60">
                    <div className="col-xl-5 col-lg-5">
                        <div className="contact-text">
                            <p>Have a question about our services or want to get started on you design project? We are
                                here to help! Fill out the contact form below and one of our team members will get back
                                to you within 24 hours. Alternatively, you can reach out to us via phone or email using
                                the contact information provided below. We can't wait to hear from you!</p>
                        </div>
                    </div>
                    <div className="offset-xl-1 col-xl-6 offset-lg-1 col-lg-6">
                        <div className="subimit-form-wrap">
                            <div className="section-title">
                                <h2>Submit Form <span><i className="las la-arrow-right"></i></span></h2>
                            </div>
                            <form action="#">
                                <input type="text" placeholder="Your Name"/>
                                <input type="email" placeholder="Email"/>
                                <input type="tel" placeholder="Phone Number"/>
                                <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
                                <input type="submit" value="Submit"/>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="contact-info-wrap">
                    <div className="row mt-60">
                        <div className="col-xl-6">
                            <div className="google-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3690.404245521138!2d91.80989606467384!3d22.338360085303748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdewanhat%20near%20Chattogram!5e0!3m2!1sen!2sbd!4v1677069314806!5m2!1sen!2sbd"
                                    width="600" height="600" style={{ border: 0}} allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="contact-info">
                                <div className="section-title">
                                    <h2>Contact Info <span><i className="las la-arrow-right"></i></span></h2>
                                </div>
                                <div className="contact-info-inner">
                                    <div className="single-contact-info">
                                        <p>Email</p>
                                        <h4>info@archipix.com</h4>
                                    </div>
                                    <div className="single-contact-info">
                                        <p>Phone</p>
                                        <h4>(123) 456-7890</h4>
                                    </div>
                                    <div className="single-contact-info">
                                        <p>Address</p>
                                        <h4>123, Main Street, Suite 456, California, USA</h4>
                                    </div>
                                    <div className="social-area">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="#"><i className="fab fa-skype"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}