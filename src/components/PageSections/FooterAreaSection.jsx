import { Link } from 'react-router-dom';

export default function FooterAreaSection() {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="footer-up">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Link o="/" className="logo">Archipix.</Link>
                            <p>Design your Dream House <br/> maxime dolor voluptatibus natus
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5>Office</h5>
                            <p>Corporate Office- <br/>
                                175 24th Street, DW-1 3567
                                London, UK 265
                            </p>
                            <div className="company-email">
                                <a href="#">info@archipix.com</a>
                            </div>
                            <div className="phone-number">
                                <p>+18-4675826</p>
                            </div>

                        </div>
                        <div className="col-lg-2 offset-lg-1 col-md-6 com-sm-12">
                            <h5>Links</h5>
                            <ul>
                                <li>
                                    <Link to="/about">About</Link>
                                    <Link to="/services">Services</Link>
                                    <Link to="/projects">Project</Link>
                                    <Link to="/price">Pricing</Link>
                                    <Link to="/faq"> FAQ</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <h5>Get in Touch</h5>
                            <ul>
                                <li>
                                    <div className="social-area">
                                        <a href="#"><i className="lab la-facebook-f"></i>Facebook</a>
                                        <a href="#"><i className="lab la-instagram"></i>Instagram</a>
                                        <a href="#"><i className="lab la-linkedin-in"></i>linkedin</a>
                                        <a href="#"><i className="la la-skype"></i>Skype</a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}