import { Outlet, Link } from 'react-router-dom';
import { useEffect } from 'react'
import WOW from 'wow.js';
import Preloader from '@/components/Preloader.jsx';
import MouseCursor from "@/components/MouseCursor.jsx";
import Header from "@/components/Header";
import SearchDropdown from "@/components/SearchDropdown";
import OffCanvas from "@/components/OffCanvas";
import FooterBottomAreaSection from "@/components/PageSections/FooterBottomAreaSection";
import FooterAreaSection from "@/components/PageSections/FooterAreaSection";
import {AppWrapper} from "@/context/index.jsx";
import BackToTop from "@/components/BackToTop";

function App() {
  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <>
    {/*preloader*/}
    <Preloader/>

    {/*Mouse Cursor*/}
    <MouseCursor/>

    <div id="smooth-wrapper">
            <AppWrapper>
                <Header/>
                <div id="smooth-content">
                    <div>
                        <Outlet/>
                    </div>

                    {/*Footer Area*/}
                    <FooterAreaSection/>

                    {/*Footer Bottom Area*/}
                    <FooterBottomAreaSection/>
                </div>
            </AppWrapper>
        </div>

        {/*Search Dropdown Area*/}
        <SearchDropdown/>

        {/*Off-canvas Area*/}
        <OffCanvas/>
        <div className="offcanvas-overlay"></div>

        {/*back to top start*/}
        <BackToTop />
        {/*back to top end*/}

        {/*Script*/}
  
    </>
  )
}

export default App
