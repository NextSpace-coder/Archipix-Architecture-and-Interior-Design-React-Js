import featureImage from "@/assets/img/about/about-feature-img.jpg";

export default function HeroAboutPageSection() {
    return (
        <div id="about_page" className="hero-area">
            <div className="container">
                <div className="row hero-area-inner">
                    <div className="col-xl-9 col-lg-9">
                        <div className="hero-area-content">
                            <div className="section-title">
                                <h1>Learn About Our <i>/</i> <br/></h1>
                                <h1 className="pl-150">Vision and Values</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 d-none d-lg-block text-lg-end">
                        <h4>Our History</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="about-feature-img">
                        <img src={featureImage} alt=""/>
                    </div>
                </div>
                <div className="row mt-30">
                    <p>Archipix was founded in 1995 in California, USA. The company was established by Louis Skidmore
                        and Nathaniel Owings, and later joined by John O. Merrill.</p>
                    <p>The company has designed the John Hancock Center, One World Trade Center and Burj Khalifa, which
                        is currently the tallest building in the world. Throughout its history, Archipix has been
                        recognized for its innovative designs and commitment to sustainability.</p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}