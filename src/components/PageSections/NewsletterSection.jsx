export default function NewsletterSection() {
    return (
        <div className="newsletter-section">
            <div className="container">
                <div className="row newsletter-inner gray-bg align-items-center">
                    <div className="col-xl-7 col-lg-7">
                        <div className="section-title">
                            <div className="heading-animation">
                                <h2>Stay Up-to-date <br/> with Archipix <span><i
                                    className="las la-arrow-right"></i></span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="newsletter-content">
                            <p>Sign up for our newsletter to stay in the know about our latest projects, design insight
                                and industry news. </p>
                            <div className="subscribed-form">
                                <form>
                                    <input type="text" placeholder="Type your Email"/>
                                    <input className="bordered-btn" type="submit" value="Sign Up"/>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}