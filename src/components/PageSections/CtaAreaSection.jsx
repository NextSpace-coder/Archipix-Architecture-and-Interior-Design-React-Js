import ctaBg from "@/assets/img/cta-bg.jpg";
import { Link } from 'react-router-dom';

export default function CtaAreaSection() {
    return (
        <section className="cta-img-area img-scale">
            <div className="cta-inner text-center">
                <div className="cta-img-wrap">
                    <img id="grow" src={ctaBg} alt="cta-img" data-speed="0.2" data-lag="0"/>
                </div>
                <div className="section-title">
                    <div className="heading-animation">
                        <h2 className="text-white">Let's start your new <br/> dream project</h2>
                    </div>
                    <Link to="/contact" className="theme-btn white-btn mt-30">Contact Us</Link>
                </div>
            </div>
        </section>
    )
}