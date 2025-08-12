import headlineImg from "@/assets/img/headline-img.jpg";
import HomepageSlides from "@/components/HomepageSlider";

export default function HeroAreaSection() {
    return (
        <div id="home-2" className="hero-area">
            <div className="container">
                <div className="row align-items-center justify-content-center hero-area-inner">
                    <div
                        className="col-xl-10 col-lg-10 col-md-10 text-center wow fadeInUp animated"
                        data-wow-delay="200ms"
                    >
                        <div className="hero-area-content">
                            <div className="section-title mb-0">
                                <h1>
                                    Transform{" "}
                                    <span>
                                        <img src={headlineImg} alt="" style={{ height: 'auto'}}/>
                                    </span>{" "}
                                    Spaces <br/> into Works of Art
                                </h1>
                                <div className="p-animation">
                                    <p>
                                        Our team of expert designers works closely with clients to
                                        create unique, functional and beautiful spaces <br/> that are
                                        tailored to their specific needs and preferences.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HomepageSlides />
        </div>
    )
}